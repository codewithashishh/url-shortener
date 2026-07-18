const url = require("../models/model")
function randomUrl(){
  const char ="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
   let random = "";
   for(let i=0; i<6; i++){
     let index = Math.floor(Math.random()*char.length)
     
      random =random +  char[index]; 
   }
   return random;
}

async function takeUrls(req, res){
  if (!req.body.originalUrl) {

   return res.status(400).send("Bad Request")
}
 const shortId = randomUrl();

await url.create({
    originalUrl: req.body.originalUrl,
    shortId,
    createdBy: req.session.userId,
});


const allUrls = await url.find({
    createdBy: req.session.userId,
});

 return res.render("home", {
        urls: allUrls,
    });
}

async function getUrlById(req, res){
  const entry = await url.findOne({
  shortId: req.params.shortId,
});

if(entry== null){
  return res.status(404).send("not found")
}

   entry.noOfTimesClicked += 1;
await entry.save();
return res.redirect(entry.originalUrl) }



module.exports = {
  takeUrls,
  getUrlById
};