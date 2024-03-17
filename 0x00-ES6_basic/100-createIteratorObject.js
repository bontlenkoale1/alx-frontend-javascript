export default function createIteratorObject(report) {
    let currentDepartmentIndex = 0;
    let currentEmployeeIndex = 0;
    const departments = Object.keys(report);

    // Custom iterator implementation
    const iterator = {
        next() {
            // If
