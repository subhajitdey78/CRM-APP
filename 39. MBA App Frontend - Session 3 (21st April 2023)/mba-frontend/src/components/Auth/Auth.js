import Reaxt, { useState } from 'react'

const Login = () => {
    const [showSignup, setShowSignup] = useState(false)

    const signupFn = (e) => {
        console.log(e)
    }

    const loginFn = (e) => {
        console.logh(e)
    }

    return (
        <div id='loginPage'>

            {/* Login Content */}
        <div id='loginContent' className='bg-primary d-flex justify-content-center align-items-center vh-100'>
            <div className='card m-5 p-5'>
                <div className='row m-2'>
                    <h4 className='text-center'>{showSignup ? 'Sign up' : 'Login'}</h4>
                    <form onSubmit={showSignup ? signupFn: loginFn}>
                        <div>UserId</div>
                        <input>password</input>
                        {showSignup && <>
                        <div>Username</div>
                        <div>Email</div>
                        <div>UserType</div>
                        </>}
                        <div>Submit</div>
                        <div>Toggle between Login/Signup</div>
                        <div>Message</div>
                    </form>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div style={{
            position: "fixed",
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "white"
        }}>
            <footer className='page-footer'>
                <div className='text-center py-3'>© 200 Copyright:
                <a href='https://relevel.com'>Relevel byUnacademy</a>
                </div>
            </footer>
        </div>
        <div>Footer</div>
        </div>
    )
}

export default Login