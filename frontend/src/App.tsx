import { Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/react";


function App() {

  return (
    <>
     <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback 
          signUpForceRedirectUrl={"/auth-callback"}/>} 
        />

     </Routes>
    </>
  )
}

export default App
