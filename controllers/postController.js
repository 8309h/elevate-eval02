const Post =  require("../models/Post");

exports.createPost = async(req,res) => 
      {
            const post=  await Post.create({
                  ... req.body,
                  author : req.user._id
            });

            res.status(201).josn({
                  success : true,
                  post : post
            })
      }

exports.getPosts  =  async (req,res) => {
      const page =  Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const skip  =  (page-1) * limit;

      const filter = {};
      const posts =  await Post.find(filter).
      populate(
            "author",
            "username email"
      ).skip(skip).limit(limit);

      const total = await Post.countDocuments(filter);

      res.json(200).josn({
            page ,
            totalPage : Math.ceil(total/limit),
            total,
            posts
      })
}