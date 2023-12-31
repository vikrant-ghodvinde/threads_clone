import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setLogin } from "@/States/reducers/authReducer";

const LoginView = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);
    axios
      .post("http://localhost:5000/user/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res) {
          dispatch(
            setLogin({
              user: res.data.user,
              token: res.data.token,
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="relative w-full max-w-screen-xl min-h-screen mx-auto flex items-center justify-center">
      <div className="relative w-full max-w-lg bg-dark rounded-lg p-5">
        <div className="text-center mb-11">
          <h2 className="text-2xl font-semibold mb-1">Welcome Back!</h2>
          <p className="text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            possimus distinctio molestiae fuga pariatur sit.
          </p>
        </div>
        <form className="grid  gap-6" onSubmit={handleLogin}>
          <div className="relative">
            <input
              type="text"
              value={values.email}
              placeholder="Username or Email"
              className="w-full h-11 px-4 bg-transparent border border-gray-600 outline-none rounded-md placeholder:text-gray-600"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
          <div className="relative">
            <input
              type="password"
              value={values.password}
              placeholder="Password"
              autoComplete="false"
              className="w-full h-11 px-4 bg-transparent border border-gray-600 outline-none rounded-md placeholder:text-gray-600"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />
          </div>
          <div className="relative text-center">
            <button
              type="submit"
              className="relative py-2 px-8 font-semibold rounded-badge bg-white text-black disabled:cursor-not-allowed disabled:bg-black disabled:text-white transition-all duration-300"
              disabled={!values.email || !values.password}
            >
              Login
            </button>
          </div>
          <div className="relative text-center">
            <p className="text-gray-400 text-sm">
              Don&apos;t have a account?{" "}
              <Link to="/create" className="text-white hover:text-gray-400">
                Create here.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginView;
