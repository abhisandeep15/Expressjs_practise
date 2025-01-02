const express=require('express')
const router=express.Router()

//Middleware
const auth=function(req,res,next){
    console.log('iam inside the auth')
    //dummy user
    req.user={userId:1 ,role:'student'}

    if (req.user){
        //if a valid user is there in req, then procced to next middleware
        next()
}else{
    //if not valid user
    res.json({
        sucess:fasle,
        message:'please enter correct not a valid user.'
    })
}

}

const isStudent=function(req,res,next){
    console.log('iam inside the isStudent')

    if(req.user.role==='student'){
        next()
    }else{
        res.json({
            sucess:fasle,
            message:'only student can access this route'
            })
    }
}

const isAdmin=function(req,res,next){
    console.log('iam inside the isAdmin')

    if(req.user.role==='admin'){
        next();
    }else{
        res.json({
            sucess:fasle,
            message:'only admin can access this route'
            })
    }
}


//routes

router.get('/student',auth,isStudent,(req,res)=>{
    console.log('iam inside the student Route page')
    res.send('student is specific page')
})

router.get('/admin',auth,isAdmin,(req,res)=>{
    console.log('Iam inside the admin Route page')
    res.send('admin is specific page')
})

module.exports=router


//mongodb it is a nosql database
/*

here  mongodb is stored in the documnet format ,or json format.

for sql,mysql it is stored in the format of rows and columns.

why it famous?it is very easy for intergration, scalability,flexibility.

//mongodb compass:it is tool for graphical interface[gui]
*/

//what 





















