const getStudents="SELECT * FROM students";
const getStudentsByID="SELECT * FROM students where id =$1";
const checkEmailExists ="SELECT * FROM students s WHERE s.email=$1";
const addStudents="INSERT INTO students (name,email,age,dob) VALUES ($1,$2,$3,$4)";
const removeStudent="DELETE FROM students where id=$1";
const updateStudent="UPDATE students set name=$1 where id=$2"

module.exports={
    getStudents,
    getStudentsByID,
    checkEmailExists,
    addStudents,
    removeStudent,
    updateStudent,
};