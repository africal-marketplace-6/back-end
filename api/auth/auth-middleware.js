const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
    if(token){
       jwt.verify(token,process.env.JWT_SECRET || 'bla', (err, decodedToken)=>{
           if(err){
            res.status(401).json({ message:'Bad token'})
           }else{
               req.user_id = decodedToken;
               next()
           }
       })
    }else{
      res.status(401).json({ access: 'denied' });
    }
  
};