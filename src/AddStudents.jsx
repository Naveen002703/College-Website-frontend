
import React, { useState } from "react";
import { toast , ToastContainer } from "react-toastify";

const AddStudents = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNo: "",
    course: "",
    gender: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Student Added Successfully")
    console.log(details);
  };

  return (
    <div>
      <h1 className="text-center bg-danger-subtle">Add Student Details</h1>

      <form className="form" onSubmit={handleSubmit} action="">
        <fieldset className="form-container">
          <label htmlFor="">Name </label>
          <input
            type="text"
            name="name"
            required
            onChange={(e) => handleChange(e)}
            placeholder="Enter Name"
          />{" "}
          <br />
          <br />
          <label htmlFor="">Email </label>
          <input
            type="email"
            name="email"
            required
             onChange={(e) => handleChange(e)}
            placeholder="Enter email"
          />{" "}
          <br />
          <br />
          <label htmlFor="">Phone No </label>
          <input
            type="tel"
            name="phoneNo"
            pattern="[6-9]{1}[0-9]{9}"
            required
             onChange={(e) => handleChange(e)}
            placeholder="Enter number"
          />{" "}
          <br />
          <br />
          <label htmlFor="">Course </label>
          <select name="course"  onChange={(e) => handleChange(e)} id="">
            <option value="">Choose Course</option>
            <option value="CSE">CSE</option>
            <option value="AIML">AIML</option>
            <option value="AIDS">AIDS</option>
            <option value="Cyber security">Cyber Security </option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Mechanical"> Mechanical</option>
            <option value="Civil">Civil</option>
            <option value="Electrical "></option>
          </select>{" "}
          <br />
          <br />
          <label htmlFor="">Gender </label>
          <input type="radio" name="gender"  onChange={(e) => handleChange(e)} value="Male" />
          Male
          <input type="radio" name="gender"  onChange={(e) => handleChange(e)} value="Female" />
          Female
          <br />
          <br />
          <div className="row">
            <button type="submit" className="btn btn-primary my-3">
              Submit{" "}
            </button>
            <button type="reset" onClick={()=>{
              toast.warn("Form Reset Warning")
            }} className="btn btn-warning">
              Reset{" "}
            </button>
          </div>
        </fieldset>
      </form>

      <ToastContainer/>
    </div>
  );
};

export default AddStudents;
