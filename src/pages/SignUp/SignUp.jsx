import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
  }

  return (
    <>
      <title>Bistro Boss | Sign Up</title>
      <div className="max-w-screen-xl mx-auto hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <fieldset className="fieldset">

                <label className="label">Name</label>
                <input type="text" {...register("name", { required: true })} name="name" className="input" placeholder="Name" />
                {errors.name && <span className="text-red-600">Name is required</span>}

                <label className="label">Email</label>
                <input type="email" {...register("email", { required: true })} name="email" className="input" placeholder="Email" />
                {errors.email && <span className="text-red-600">Email is required</span>}

                <label className="label">Password</label>
                <input type="password" {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters long.",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password cannot exceed 20 characters.",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message: "Password must include at least one uppercase letter, one number, and one special character.",
                  },
                })} name="password" className="input" placeholder="Password" />
                {errors.password && <p className="text-red-600">{errors.password.message}</p>}

                <input className="btn btn-neutral mt-4" type="submit" value="Sign In" />
              </fieldset><p className='text-center'><small>Already have an account? <Link to={"/login"}>Login</Link></small></p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;