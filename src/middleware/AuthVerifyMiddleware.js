const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{

    let Token = req.headers['token-key']

    jwt.verify(Token,"SecretKey123456", function(err,decoded){
        if(err){
            res.status(401).json({status:"UnAuthorised"})
        }else{

            // get user name from decoded token & add req headers
            let username = decoded['data']['UserName']
            req.headers.username = username

            next();
        }
    })

}