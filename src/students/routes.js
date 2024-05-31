const {Router}=require ("express");
const controller=require("./controller")

const router=Router();

// router.get("/",(req,res)=>{
//     res.send("using api route");
// });

router.get("/",controller.getStudents);
router.get("/:id",controller.getStudentsByID);


module.exports=router;