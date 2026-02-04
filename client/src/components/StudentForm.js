import React, { useState } from "react";
import axios from "axios";

const StudentForm = ({ fetchStudents }) => {
  const [student, setStudent] = useState({
    name: "",
    age: "",
    department: "",
    email: ""
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:5000/students/add", student);

    setStudent({
      name: "",
      age: "",
      department: "",
      email: ""
    });

    fetchStudents();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input name="name" placeholder="Name" value={student.name} onChange={handleChange} />
      <input name="age" placeholder="Age" value={student.age} onChange={handleChange} />
      <input name="department" placeholder="Department" value={student.department} onChange={handleChange} />
      <input name="email" placeholder="Email" value={student.email} onChange={handleChange} />
      
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
