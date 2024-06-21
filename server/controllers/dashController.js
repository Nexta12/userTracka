const Post = require("../models/Post")
module.exports = {
  dashboardPage: async(req, res)=>{

     try {
      const userPosts = await Post.find({author: req.user.username})

       res.status(200).render("Dashboard", {
         title: "Passport: Dashboard",
         layout: "./layouts/layout",
         userPosts
       });

     } catch (error) {
      console.log(error)
     }

   
  }
};