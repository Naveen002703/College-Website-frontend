import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("contactData", JSON.stringify(contact));
    toast.success("Message Sent Successfully");
    console.log(contact);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center bg-primary-subtle p-2">Contact Us</h2>

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

        <label className="mt-2">Message</label>
        <textarea
          name="message"
          className="form-control"
          rows="4"
          required
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="btn btn-primary mt-3">
          Send
        </button>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Contact;
