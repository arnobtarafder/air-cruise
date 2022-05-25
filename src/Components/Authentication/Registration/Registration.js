import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faKey,
  faEnvelope,
  faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import auth from "../../../firebase.init";
import Loading from "../../General/Loading/Loading";
import useToken from "../../../Hooks/useToken";

const Registration = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const [token] = useToken(user || gUser);
  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-red-500">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (token) {
    navigate("/", { replace: true });
    toast.success("Welcome to Jerin's Parlour!");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
  };
  return (
    <div className="flex h-screen justify-center items-center px-4 lg:px-12 my-24" style={{
      background: `url("https://www.airbus.com/sites/g/files/jlcbta136/files/styles/airbus_1440x1440/public/2022-04/screen_France_StMichel_PNeo3_20211115.jpg?itok=k6Fba1jG")`,
      backgroundSize: "100%",
    }}>
      <div className="card w-full max-w-md bg-base-100">
        <img src="{logo}" alt="" className="w-48 flex mx-auto" />
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold mb-4">
            <span className="mr-2">Register</span>
            <FontAwesomeIcon icon={faClipboardList} />
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text font-light">
                  <FontAwesomeIcon className="mr-2" icon={faFileSignature} />
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-sm"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text font-light">
                  <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-sm"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-sm">
              <label className="label">
                <span className="label-text font-light">
                  <FontAwesomeIcon className="mr-2" icon={faKey} />
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-sm"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>

            {signInError}
            <input
              className="btn w-full max-w-sm text-white btn-primary"
              type="submit"
              value="Sign Up"
            />
          </form>
          <p className="text-center font-semibold">
            <small>
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </small>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline border-primary flex items-center content-center rounded-full hover:btn-primary"
          >
            <FcGoogle className="text-2xl mr-2"></FcGoogle>Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;