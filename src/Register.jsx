import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Registered Successfully");
    console.log(user);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center bg-success-subtle p-2">Register</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          required
          onChange={handleChange}
        />

        <label className="mt-2">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          required
          onChange={handleChange}
        />

        <label className="mt-2">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          required
          onChange={handleChange}
        />

        <label className="mt-2">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          required
          onChange={handleChange}
        />

        <button type="submit" className="btn btn-success mt-3">
          Register
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Register;
