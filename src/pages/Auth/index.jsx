import React from 'react'
import { AuthInput } from '../../components/Input/AuthInput'
import dnaSVG from "../../assets/dna.svg"
import facebookSvg from '../../assets/facebook.svg'
import twitterSvg from '../../assets/twitter.svg'
import './index.scss'
export function AuthPage() {
  return (
    <main className='auth-page'>

      <div>
        <div className="left">
          <div className="brand">
            <div className="name"> TrendPixel </div>
            <img src="" alt="logo" />
          </div>
          <h2 className="title"> Hey There ! </h2>
          <p className="desc"> Welcome Back </p>
          <p className="desc-2"> You are just one step away to your feed </p>


          <button> Don't have an account </button>

          <img className='dna-img' src={dnaSVG} alt="" />

        </div>
        <div className="right">
          <h3 className="title"> SIGN IN </h3>
          <form action="">
            <AuthInput placeholder="Email" />
            <AuthInput placeholder="Password" />
          </form>
          <div className="extra">
            <div className="keep-me">
              <input type="checkbox" name="" id="" />
              <p className="text"> Keep me logged in </p>
            </div>
            <button> Forgot Password ? </button>
          </div>

          <p className="social-media-text"> Or use social media to sign in  </p>

          <div className="social-media-icons">
            <img src={facebookSvg} alt="" />
            <img src={twitterSvg} alt="" />

          </div>

        </div>
      </div>

    </main>
  )
}
