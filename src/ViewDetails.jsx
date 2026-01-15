import React, { useEffect, useState } from "react";

const ViewDetails = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("studentDetails");
    if (data) {
      setStudent(JSON.parse(data));
    }
  }, []);

  if (!student) {
    return <h3 className="text-center">No Student Data Found</h3>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center bg-info-subtle p-2">Student Details</h2>

      <table className="table table-bordered mt-3">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{student.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{student.email}</td>
          </tr>
          <tr>
            <th>Phone No</th>
            <td>{student.phoneNo}</td>
          </tr>
          <tr>
            <th>Course</th>
            <td>{student.course}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{student.gender}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ViewDetails;
