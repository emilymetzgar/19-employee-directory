import React, {useEffect, useState} from 'react';
import '../App';
import * as ReactBootStrap from "react-bootstrap";
import SearchEmployees from './Search.js';
const axios = require('axios');

const Table = () => {
const [employees, chooseEmployees] = useState([])
const [employeesSearch, chooseEmployeesSearch] = useState([])
const [searchemployees, setSearch] = useState("")
  const getEmployees = () =>{
    axios.get('https://randomuser.me/api/?results=10')

    .then(function (response) {
      chooseEmployees ( response.data.results )
      chooseEmployeesSearch ( response.data.results )
    })
    .catch(function (error) {
    })
    .then(function () {
    });
  }

const showEmployee = (employee, index) => {
  return(
    <tr key={index}>
      <td><img src={employee.picture.medium} alt=""/></td>
      <td>{`${employee.name.first} ${employee.name.last}`}</td>
      <td>{`${employee.phone}`}</td>
      <td>{`${employee.email}`}</td>
      <td>{`${employee.location.city}, ${employee.location.state}`}</td>
    </tr>
  )
}

const handleInputChange=(event) => {
    const value=event.target.value
    if (value.length > 0) {
      const filterEmployees = employees.filter((employee,i)=>{
        return employee.name.last.toLowerCase().includes(value.toLowerCase())
        })
        chooseEmployeesSearch(filterEmployees)
    }
    else {
      chooseEmployeesSearch(employees)
    }
    setSearch(event.target.value)
  }
  
  const handleClick = (event) => {
    chooseEmployeesSearch(
    employees.sort((a, b) => {return (a.name.last > b.name.last) ? 1 : 0}))
  }
  
  useEffect(() => {
    if (!employees) {
      return;
    }
  getEmployees()
  },[]) 
    return (
     
  <div className="App">
  <SearchEmployees value={searchemployees} handleInputChange={handleInputChange}/>;
        <ReactBootStrap.Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>Employee Pic</th>
        <th onClick={handleClick}>Employee Name</th>
        <th>Phone Number</th>
        <th>Email</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {employeesSearch.map(showEmployee)}
    </tbody>
  </ReactBootStrap.Table>
      </div>
     );
}
export default Table;