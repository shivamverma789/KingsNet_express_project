var express = require("express")
var router =express.Router()


router.get("/",(req,res)=>{
    // console.log(req.oidc.isAuthenticated() );
    res.render("index",{title:"Express demo ",
        isAuthenticated:req.oidc.isAuthenticated(),
        user:req.oidc.user,
        })  
})
router.get("/about",(req,res)=>{
    console.log(req.oidc.isAuthenticated() );
    res.render("about",{
        isAuthenticated:req.oidc.isAuthenticated(),
        user:req.oidc.user
    })
    
    
})
router.get("/about1",(req,res)=>{
    console.log(req.oidc.isAuthenticated() );
    res.render("about1",{
        isAuthenticated:req.oidc.isAuthenticated(),
        user:req.oidc.user
    })
    
    
})

router.get("/profile",(req,res)=>{
    console.log(req.oidc.isAuthenticated() );
    res.render("profile",{
        isAuthenticated:req.oidc.isAuthenticated(),
        user:req.oidc.user
    })
    console.log(req.oidc.user)
    
})

module.exports=router;