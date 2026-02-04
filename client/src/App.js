import React, { useEffect, useState } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/students");
    setStudents(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
  <div className="container">
    <h1>Student Management System</h1>
    <StudentForm fetchStudents={fetchStudents} />
    <StudentList students={students} fetchStudents={fetchStudents} />
  </div>
);

}

export default App;
