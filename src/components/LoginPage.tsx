import React from 'react'
import {autentication } from "../firebase"
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth"


export const LoginPage = () => {
    const autenticationgoggle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(autentication,provider).then((res) => {
        console.log(res)
    }).catch((eror)=>{
        console.log("error")
    })
    }
  return (
    <div>LoginPage
        <button onClick={autenticationgoggle}>sign in google</button>
    </div>
  )
}

