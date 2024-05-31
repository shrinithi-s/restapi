const getStudents="SELECT * FROM students";
const getStudentsByID="SELECT * FROM students where id =$1";


module.exports={
    getStudents,
    getStudentsByID
};