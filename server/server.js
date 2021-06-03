const express = require("express");
const cors = require("cors");
var bcrypt = require("bcryptjs");
const app = express();

const corsOptions={
    origin: "http://localhost:3000"
}
const db = require("./models");
const Role = db.role;
const Users = db.user;
db.sequelize.sync({force:true}).then(()=>{
    console.log("Drop and Resync DB");
    initial();
})

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.json({message: "Welcome to bezkoder application."})
})

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    
    console.log(`Server is running on Port ${PORT}`);
})


async function initial(){
    await Role.create({
        id:1,
        name:"user"
    });
    await Role.create({
        id:2,
        name:"moderator"
    })
    await Role.create({
        id:3,
        name:"admin"
    })
    
    await Users.create({
        username:'kim',
        birth:'19920304',
        email:'zkdlwu94@gmail.com',
        password:bcrypt.hashSync('ehddhks91@',8),
        createdAt:new Date() ,
        updatedAt:new Date(),
    })
    const courses = await Users.findOne({
        where:{email:'zkdlwu94@gmail.com'}
    })
    Users.sequelize.queryInterface.bulkInsert('user_roles',[{
      roleId:1,
      userId:courses.id,
      createdAt:new Date(),
      updatedAt:new Date(),
    }])
  
    
    
}