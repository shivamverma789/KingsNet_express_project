var express =require('express')
var indexRouter =require("./routes/index.js")
const { auth } = require('express-openid-connect');
require("dotenv").config()


const config = {
    authRequired: false,
    auth0Logout: true,
    secret: "ksakdjkdfkdjsfkjkkfei0rid3003f47esf64sg64sf5g48f7gr8g78er7g87r8e",
    baseURL: 'http://localhost:3000/',
    clientID: 'UqLPiiTcRZUCquCpxA8QYnLWmS4IAhZP',
    issuerBaseURL: 'https://dev-8ksool4ejsbzbny8.us.auth0.com'
  };

var app = express()
app.set ("views","views")
app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

//auth

app.use("/",indexRouter)


const PORT =process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log(`express is running on port:${PORT} `)
});