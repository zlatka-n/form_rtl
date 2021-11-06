import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => console.log(data);

  const enableButton = isDirty && isValid;

  return (
    <div className="w-screen flex justify-center mt-40">
      <div className="flex flex-col w-11/12 md:w-1/5 bg-gray-200 pt-20 pb-20 pr-10 pl-10">
        <h1 className="mb-5">Welcome</h1>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label className="mb-5" id="username">
            Username:
          </label>
          <input
            className="mb-5 focus:outline-none"
            {...register("userName", {
              required: true,
              maxLength: 20,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          {errors?.userName?.type === "required" && (
            <p className="text-red-500">This field is required</p>
          )}
          {errors?.userName?.type === "maxLength" && (
            <p className="text-red-500">username cannot exceed 20 characters</p>
          )}
          <label className="mb-5">Password:</label>
          <input
            className="mb-5 focus:outline-none "
            {...register("password", {
              required: true,
            })}
          />
          {errors?.userName?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            className={`${enableButton ? "bg-green-400" : "bg-green-100"}`}
            disabled={!isDirty || !isValid}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
