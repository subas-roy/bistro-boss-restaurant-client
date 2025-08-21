import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
const Login = () => {
  // State to control whether the Login button is disabled
  const [disabled, setDisabled] = useState(true);

  // Get the signIn function from AuthContext
  const { signIn } = useContext(AuthContext);

  // Ref to access the captcha input field
  const captchaRef = useRef(null);

  // Load the captcha engine when the component mounts
  useEffect(() => {
    loadCaptchaEnginge(6)
  }, []) // Only run once on mount

  // Handle form submission for login
  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // Call the signIn function with email and password
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
  }

  // Validate the captcha input
  const handleValidateCaptcha = (e) => {
    e.preventDefault();
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false) // Enable Login button if captcha is correct
    }
    else {
      setDisabled(true) // Keep Login button disabled if captcha is incorrect
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card lg:w1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              < LoadCanvasTemplate />
              <input type="text" ref={captchaRef} name="captcha" className="input" placeholder="type the captcha above" />
              <button onClick={handleValidateCaptcha} className="btn btn-neutral btn-xs btn-outline">Validate</button>
              <button disabled={disabled} className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p className='text-center'><small>New Here? <Link to={"/signup"}>Create an account</Link></small></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;