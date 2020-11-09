const jwt = require("jsonwebtoken");
require(`dotenv`).config();

//this middleware will on continue on if the token is inside the local storage

function authorization(req,res,next){
    const jwtToken = req.header("token");
    console.log(jwtToken);
  // Check if not token
  if (!jwtToken) {
    return res.status(403).json("authorization denied");
  }

  // Verify token
  try {
    //it is going to give us the user id (user:{id: user.id})
    const verify =jwt.verify(jwtToken, process.env.jwtSecret);
    console.log(">>>>>>>>>>>>>>>>>>@@@@",verify);
    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json("Token is not valid" );
  }
}

module.exports=authorization;