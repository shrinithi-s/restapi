//business logic
const pool=require("../../db");
const queries=require("./queries");

const getStudents=(req,res)=>{
    pool.query(queries.getStudents,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const getStudentsByID=(req,res)=>{
    
    const id=parseInt(req.params.id) //get the user params

    pool.query(queries.getStudentsByID,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addStudents=(req,res)=>{
    const { name,email,age,dob }=req.body

    //check if email exist
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length){
            res.send("Email already exist")
        }

    //add students to db
    pool.query(queries.addStudents,[name,email,age,dob],(error,results)=>{
        if(error) throw error;
        res.status(201).send("Student created Successfully")

    });
})

}

module.exports={
    getStudents,
    getStudentsByID,
    addStudents,
};