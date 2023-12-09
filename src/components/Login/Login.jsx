import "./login.scss"


export default function Login() {

    return (
        <div className="login">
            <div className="header">
                <div className="wrapper">
                    <img className="logo" src="data:image/png;base64,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" alt="" />

                </div>
            </div>

            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>
                        New to Netflix? <b>Sign up now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>

            </div>
        </div>
    )
}
