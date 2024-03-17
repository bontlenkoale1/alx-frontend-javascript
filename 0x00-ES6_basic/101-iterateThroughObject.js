export default function iterateThroughObject(reportWithIterator) {
    let employeeNames = [];

    // Iterate through each department in the reportWithIterator object
    for (const department in reportWithIterator) {
        // Iterate through each employee in the department
        for (const employee of reportWithIterator[department]) {
            employeeNames.push(employee);
        }
    }

    // Join the employee names with '|'
    return employeeNames.join(' | ');
}
