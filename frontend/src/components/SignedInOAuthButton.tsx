import { useSignIn } from '@clerk/react'
import { Button } from './ui/button';

const SignedInOAuthButton = () => {
    const{ signIn, fetchStatus} = useSignIn();
    if (fetchStatus == 'fetching') {
        return null;
    }
    const signInWithGoogle = () => {
        signIn.sso({
            strategy: 'oauth_google',
            redirectUrl: '/auth-callback', // Where to send the user once signed in
            redirectCallbackUrl: '/sso-callback', // URL hosting <AuthenticateWithRedirectCallback />
        });
    };
    
  return (
    <Button onClick={signInWithGoogle} variant={'secondary'} className="w-full text-white" border-zinc-200 h-11 > 
    Continue with Google
    </Button>
  )
}

export default SignedInOAuthButton
