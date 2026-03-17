'use client'

import { signIn } from "next-auth/react"
import { Button } from "../ui/button"
import { BsGoogle } from "react-icons/bs"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"


const Social = () => {
  const onClick =  (provider: "google") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT })
  }
  return (
    <div className="flex w-full items-center  gap-x-2"> 
    <Button
      className="w-full rounded-full h-12 border-midnight/10 hover:bg-midnight/5 transition-all duration-300"
      size='lg'
      onClick={() => onClick("google")}
      variant='outline'
    >
      <BsGoogle className="h-5 w-5 text-midnight" />
      <span className="ml-2 text-sm font-light text-midnight">Continue with Google</span>
    </Button>
    </div>
  )
}

export default Social