import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <div className='home'>
        <h1>Home Page</h1>
        <p>Welcome to the Home Page</p>
      </div>

      <div className='links'>
        <Link to='/login'>Login</Link>
      </div>
      
      <button className=' sign_up'>Sign Up</button>
    </div>
  )
}

export default HomePage