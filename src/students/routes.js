const {Router}=require ("express");
const controller=require("./controller")

const router=Router();

// router.get("/",(req,res)=>{
//     res.send("using api route");
// });

router.get("/",controller.getStudents);
router.get("/:id",controller.getStudentsByID);
router.post("/",controller.addStudents)
router.delete("/:id",controller.removeStudentsByID)
router.put("/:id",controller.updateStudentsByID)

module.exports=router;