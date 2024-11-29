import React, { useState, useEffect } from "react";

const API_URL = "https://localhost:7255/api/Students"; // Adjust the URL to match your API

const EmployeeManager = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({ id: 0, name: "", age: 0, grade: "" });

  // Fetch all employees
  const fetchEmployees = async () => {
    try
    {
        const response = await fetch(API_URL);
        const data = await response.json();
        setEmployees(data);
        alert("Data Fetched Sucessfully")
    }
    catch(error)
    {
alert("Sorry Data failed")
    }
   
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Create or Update employee
  const saveEmployee = async () => {
    try{
    const method = formData.id === 0 ? "POST" : "PUT";
    const url = formData.id === 0 ? API_URL : `${API_URL}/${formData.id}`;
    await fetch(url, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setFormData({ id: 0, name: "", age: 0, grade: "" });
    fetchEmployees();
    alert("Data Saved sucessfully")
}
catch(error)
{
    alert("Sorry Data failed while saving")
}
  };

  // Delete employee
  const deleteEmployee = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    fetchEmployees();
  };

  // Populate form for editing
  const editEmployee = (employee) => {
    setFormData(employee);
  };

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <h1>Employees</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="grade"
          placeholder="Grade"
          value={formData.grade}
          onChange={handleInputChange}
        />
        <button onClick={saveEmployee}>
          {formData.id === 0 ? "Add" : "Update"}
        </button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.age}</td>
              <td>{employee.grade}</td>
              <td>
                <button onClick={() => editEmployee(employee)}>Edit</button>
                <button onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManager;
