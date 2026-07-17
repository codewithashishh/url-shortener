
//Has this user already successfully logged in?

function checkAuthentication(req, res, next) {

    if(!req.session.userId){
      return res.redirect("/user/login")
    }
  
    next();
}

module.exports = { checkAuthentication };