const Post = require("../models/Post")

module.exports = {

 createNewPost: async(req, res)=>{
     try {

        const { title, category, desc } = req.body

        if(!title || !category, !desc) {
           res.status(200).render("createPost", {
                title: "UserTracka: Create Post",
                layout: "./layouts/layout",
                title, category, desc
              });
        }

        await Post.create({title, category, desc, author: req.user.username})

         res.redirect("/dashboard")
        
     } catch (error) {
        console.log(error)
     }
 },


  singlePost: async(req, res) =>{

      try {

         const singlePost = await Post.findOne({slug: req.params.slug})

          res.status(200).render("singlePost", {
            title: "UserTracka: SinglePost Title",
            layout: "./layouts/layout",
            singlePost,
          });
        
      } catch (error) {
        console.log(error)
      }
  },

  createPost: async(req, res) =>{

      try {

          res.status(200).render("createPost", {
            title: "UserTracka: Create Post",
            layout: "./layouts/layout",
          });
        
      } catch (error) {
        console.log(error)
      }
  }
};