import { Routes, Route } from "react-router-dom"; 
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth/AuthCallbackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/react";
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/chat/ChatPage";
import AlbumPage from "./pages/album/AlbumPage";


function App() {

  return (
    <>
     <Routes> 
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback 
          signUpForceRedirectUrl={"/auth-callback"}/>} 
        />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/chat" element={<ChatPage/>} />
           <Route path="/album/:albumId" element={<AlbumPage/>} />
        </Route>

     </Routes>
    </>
  )
}

export default App
