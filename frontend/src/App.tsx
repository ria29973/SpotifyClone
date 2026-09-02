import { Button } from "@/components/ui/button"
import { Show, SignInButton, SignUpButton, UserButton } from '@clerk/react'

function App() {
  

  return (
    <>
     <header>
        <Show when="signed-out">
          <SignInButton mode = "modal">
             <Button> Sign In </Button>
            </SignInButton>

          
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
    </>
  )
}

export default App
