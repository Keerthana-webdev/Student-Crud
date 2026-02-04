import React from "react";
import axios from "axios";

const StudentList = ({ students, fetchStudents }) => {
  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:5000/students/delete/${id}`);
    fetchStudents();
  };

  return (
    <div>
      <h2>Student List</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.department}</td>
              <td>{s.email}</td>
              <td>
                <button onClick={() => deleteStudent(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
