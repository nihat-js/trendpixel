import React from 'react'
import { AuthInput } from '../../components/Input/AuthInput'
import dnaSVG from "../../assets/dna.svg"
import facebookSvg from '../../assets/facebook.svg'
import twitterSvg from '../../assets/twitter.svg'
import './index.scss'



export function AuthPage() {
  return (
    <main className='auth-page min-h-screen  bg-blue-800  flex justify-center items-center ' >
      <div style={{ width: '800px' }} className='flex  shadow-md     ' >
        <div className="w-1/2 bg-indigo-500 text-white px-6 py-4  "  >
          <div className="brand">
            <h2 className="name text-xl font-normal"> TrendPixel </h2>
            {/* <img src="" alt="logo" /> */}
          </div>
          <div className='group flex flex-col items-center '>
            <h2 className="title text-3xl font-bold text-center mt-10 mb-10" > Hey There ! </h2>
            <p className="desc "> Welcome Back </p>
            <p className="desc-2 "> You are just one step away to your feed </p>

            <button className='mt-10  text-slate-200'> Don't have an account? </button>
            <button className="mt-4 bg-transparent hover:bg-purple-500 text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded"> Sign Up </button>
            <img className='dna-img mt-10' src={dnaSVG} alt="" />

          </div>


        </div>
        <div className="right w-1/2 bg-white px-6 py-4">
          <h3 className="title font-bold text-2xl text-blue-500 mb-10"> SIGN IN </h3>
          <form action="">
            <AuthInput placeholder="Email" />
            <AuthInput placeholder="Password" />
          </form>
          <div className="extra flex justify-between mt-7">
            <div className="keep-me flex gap-2">
              <input type="checkbox" name="" id="" />
              <p className="text text-gray-700 text-sm"> Keep me logged in </p>
            </div>
            <button className='text-orange-500 text-sm font-bold'> Forgot Password ? </button>
          </div>

          <p className="social-media-text mt-10"> Or use social media to sign in  </p>

          <div className="social-media-icons mt-10 flex justify-center gap-8">
            <img src={facebookSvg} alt="" width={"24px"} />
            <img src={twitterSvg} alt="" width={"24px"} />

          </div>

        </div>
      </div>

    </main>
  )
}
