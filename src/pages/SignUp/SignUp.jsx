import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data)

  return (
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
              })} name="password" className="input" placeholder="Password" />
              {errors.password && <p className="text-red-600">{errors.password.message}</p>}

              <button className="btn btn-neutral mt-4">Sign up</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;