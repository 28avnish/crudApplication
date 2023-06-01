const express = require("express");
const router = express.Router();
const users = require("../models/userSchema");
// router.get("/",(req,res)=>{
//     console.log('conne ct');
// }
// )

//register user

router.post("/register", async (req, res) => {
  // console.log(req.body)
  const { name, email, age, mobile, work, add, desc } = req.body;

  if (!name || !email || !age || !mobile || !work || !add || !desc) {
    res.status(422).send("Please Fill The Data");
  }

  try {
    const preuser = await users.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(422).json("This user is already present");
    } else {
      const adduser = new users({ name, email, age, mobile, work, add, desc });

      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

//get userdata

router.get("/getdata", async(req, res) => {
  try {
    const userdata = await users.find();
    res.status(201).json(userdata);
    console.log(userdata);
  } catch (error) {
    res.status(422).json(error);  
  }
});

router.get("/getdata/:id", async(req,res)=>{
  try{
    console.log(req.params  )
  const {id}= req.params;
  const userindividual = await users.findById({_id:id});
  console.log(userindividual)
  res.status(201).json(userindividual)
}
  catch(error){
    res.status(422).json(error)

  }
})

module.exports = router;
