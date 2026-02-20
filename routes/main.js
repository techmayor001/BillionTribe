const express = require("express"); 
const router = express.Router();



// STATIC PAGES STARTS HERE
router.get('/', (req,res)=>{
    res.render("index")
})

router.get('/about-us', (req,res)=>{
    res.render("about")
})

router.get('/transaction', (req,res)=>{
    res.render("transaction")
})

router.get('/service', (req,res)=>{
    res.render("static/service")
});



module.exports = router;