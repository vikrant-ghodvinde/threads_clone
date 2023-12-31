import { useState } from "react";
import { Avatar } from "@files-ui/react";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import axios from "axios";

const RegisterView = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    userImage: "",
    password: "",
  });
  const formData = new FormData();
  formData.append("firstName", values.firstName);
  formData.append("lastName", values.lastName);
  formData.append("userName", values.userName);
  formData.append("email", values.email);
  formData.append("phone", values.phone);
  formData.append("userImage", values.userImage);
  formData.append("password", values.password);

  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/user/create", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="relative w-full max-w-screen-xl min-h-screen mx-auto flex items-center justify-center">
      <div className="relative w-full max-w-lg bg-dark rounded-lg p-5">
        <div className="text-center mb-11">
          <h2 className="text-2xl font-semibold mb-1">New Here ?</h2>
          <p className="text-sm text-gray-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
            possimus distinctio molestiae fuga pariatur sit.
          </p>
        </div>
        <form className="grid grid-cols-2 gap-6" onSubmit={handleRegister}>
          <div className="relative col-span-2">
            <Avatar
              className="relative w-full min-w-24 max-w-24 h-full min-h-24 max-h-24 mx-auto rounded-full border border-gray-600 flex items-center justify-center overflow-hidden"
              onChange={(image) => setValues({ ...values, userImage: image })}
              src={values.userImage}
              changeLabel={null}
              alt="Avatar2"
              emptyLabel={<FeatherIcon icon="edit" />}
            ></Avatar>
          </div>
          <div className="relative col-span-2 md:col-span-1">
            <input
              type="text"
              value={values.firstName}
              placeholder="john"
              className="w-full h-11 px-4 bg-transparent border border-gray-600 outline-none rounded-md placeholder:text-gray-600"
              onChange={(e) =>
                setValues({ ...values, firstName: e.target.value })
              }
              required
            />
          </div>
          <div className="relative col-span-2 md:col-span-1">
            <input
              type="text"
              value={values.lastName}
              placeholder="doe"
              className="w-full h-11 px-4 bg-transparent border border-gray-600 outline-none rounded-md placeholder:text-gray-600"
              onChange={(e) =>
                setValues({ ...values, lastName: e.target.value })
              }
              required
            />
          </div>
          <div className="relative col-span-2 md:col-span-1">
            <input
              type="text"
              value={values.userName}
              placeholder="john123"
              className="w-full h-11 px-4 bg-transparent border border-gray-600 outline-none rounded-md placeholder:text-gray-600"
              onChange={(e) =>
                setValues({ ...values, userName: e.target.value })
              }
              required
            />
          </div>
          <div className="relative col-span-2 md:col-span-1">
            <input
              type="email"
              value={values.email}
              placeholder="john@gamil.com"
              className="w-full h-11 px-4 bg-transparent border border-gray-600 outline-none rounded-md placeholder:text-gray-600"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              required
            />
          </div>
          <div className="relative col-span-2 md:col-span-1">
            <input
              type="number"
              value={values.phone}
              placeholder="0123456789"
              autoComplete="false"
              className="w-full h-11 px-4 bg-transparent border border-gray-600 outline-none rounded-md placeholder:text-gray-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              required
            />
          </div>
          <div className="relative col-span-2 md:col-span-1">
            <input
              type="password"
              value={values.password}
              placeholder="******"
              autoComplete="false"
              className="w-full h-11 px-4 bg-transparent border border-gray-600 outline-none rounded-md placeholder:text-gray-600"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              required
            />
          </div>
          <div className="relative text-center col-span-2">
            <button
              type="submit"
              className="relative py-2 px-8 font-semibold rounded-badge bg-white text-black disabled:cursor-not-allowed disabled:bg-black disabled:text-white transition-all duration-300"
              disabled={
                !values.firstName ||
                !values.lastName ||
                !values.userName ||
                !values.email ||
                !values.password
              }
            >
              Create Account
            </button>
          </div>
          <div className="relative text-center col-span-2">
            <p className="text-gray-400 text-sm">
              Already have an account?{" "}
              <Link to="/" className="text-white hover:text-gray-400">
                Login here.
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
