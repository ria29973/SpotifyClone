import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/react";
import { axiosInstance } from "@/lib/axios";
import { Loader } from "lucide-react";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { getToken, isLoaded } = useAuth();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    const id = axiosInstance.interceptors.request.use(async (config) => {
      const token = await getToken();
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    setReady(true);
    return () => axiosInstance.interceptors.request.eject(id);
  }, [getToken, isLoaded]);

  if (!ready) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <Loader className="size-8 text-emerald-500 animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthProvider;