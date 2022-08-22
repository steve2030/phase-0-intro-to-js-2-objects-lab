// Write your solution in this file!
const employee = {
    name: 'Sam',
    streetAddress: 'New York'
  }


  // used spread operator to clone employee object
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value,
    };
  };

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
  }

  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {
      ...employee
    }
    delete newEmployee[key];
    return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
