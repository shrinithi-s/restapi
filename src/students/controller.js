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
    //console.log(req.params)
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
       // console.log(results)
        if(results.rows.length){
            res.send("Email already exist")
        }

    //add students to db
    pool.query(queries.addStudents,[name,email,age,dob],(error,results)=>{
        if(error) throw error;
        res.status(201).send("Student created Successfully")

    });
})

};

const removeStudentsByID=(req,res)=>{
    //console.log(req.params)
    const id=parseInt(req.params.id) //get the user params

    //check if the id already exist or not
    pool.query(queries.getStudentsByID,[id],(error,results)=>{ 
        const noStudent=!results.rows.length
        if(noStudent){
            res.send("No student with that id exist")
        }
    
    //if exist delete
    pool.query(queries.removeStudent,[id],(error,results)=>{
        if(error) throw error;
        res.status(201).send("Student deleted from database")
    })

    
    });
};

module.exports={
    getStudents,
    getStudentsByID,
    addStudents,
    removeStudentsByID
};