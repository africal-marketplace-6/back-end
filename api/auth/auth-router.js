const router = require('express').Router()
const Users = require('./auth-model')
const bcrypt = require('bcryptjs');
const db = require('../../data/db-config')
const jwt = require('jsonwebtoken')


router.post("/register", (req, res, next) => {
bcrypt.hash(req.body.password, 8)
.then (hashedPassword=> {
return db('users').insert({
     username: req.body.username,
     password: hashedPassword,
     email:req.body.email
  })
  .returning(["username",  "email"])
  .then(users => {
     res.json(users[0])
  })
  .catch(err => next(err))
  })
})


//   router.post('/login', (req, res, next) => {
//     db('users')
//     .where({email: req.body.email})
//         .first()
//         .then(user => {
//            if(!user){
//               res.status(401).json({
//                  error: "No user by that email"
//               })
//            }else{
//               return bcrypt
//               .compare(req.body.password, user.password)
//               .then(isAuthenticated => {
//                  if(!isAuthenticated){
//                     res.status(401).json({
//                        error: "Unauthorized Access!"
//                     })
//                  }else{
//                   return jwt.sign(user, SECRET, (error, token) => {
//                     res.status(200).json({ message: `Welcome ${user.username}!`, token })
//                  })
//                 }
//               })
//            }
//         })
   
//   });

router.post('/login', (req, res) => {
   let { email, password } = req.body;
 
     Users.findBy({ email })
         .first()
         .then(user => {
             if (user && bcrypt.compareSync(password, user.password)) {
                 const token = generateToken(user)
                 const user_id = user.user_id
                 res.status(200).json({ message: `Welcome ${user.username}!`, token, user_id});
             } else {
                 res.status(401).json({ message: "Invalid Credentials" });
             }
         })
         .catch(error => {
             res.status(500).json(error);
         });
 });
 

  function generateToken(user){
   const payload = {
       username: user.username,
       user_id: user.user_id
   }
   const options ={
       expiresIn: '1d'
   }
   return jwt.sign(payload, process.env.JWT_SECRET || 'bla', options)
 }


module.exports = router;