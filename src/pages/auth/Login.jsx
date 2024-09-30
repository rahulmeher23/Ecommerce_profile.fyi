import React from 'react'

const Login = () => {
  return (
    <>
        <div>
            <h1>Create Your Account</h1>

            <form action="">
                <div>
                    <label htmlFor="" for="name"></label>
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" name="email" id="email" placeholder="Email"/>
                </div>
                <div>
                    <label htmlFor="contact"></label>
                    <input type="number" name="contact" id="contact" placeholder="Phone"/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </div>

                <button>
                    Create  Account
                </button>
            </form>
        </div>
    </>
  )
}

export default Login