const { BlogPost, Category, User } = require('../database/models');

// const createPost = async ({ title, content, categoryIds, userId }) => {
//   const categoryExists = await Category.findOne({ where: { id: categoryIds } });
  
//   if (!categoryExists) {
//  throw errorMsg(HTTP_BAD_REQUEST_STATUS, {
//     message: '"categoryIds" not found',
//   }); 
// }
//   const newPost = await BlogPost.create({ title, content, categoryIds, userId });
//   console.log(newPost);

//   return newPost;

//   // { ESSA É A SAÍDA ESPERADA!!!
//   //   "id": 3,
//   //   "title": "Latest updates, August 1st",
//   //   "content": "The whole text for the blog post goes here in this key",
//   //   "userId": 1,
//   //   "updated": "2022-05-18T18:00:01.196Z",
//   //   "published": "2022-05-18T18:00:01.196Z"
//   // }
// };

const getPosts = async () => {
    const allPosts = await BlogPost
    .findAll({
      include: 
      [{ model: User, as: 'user', attributes: { exclude: 'password' } },
       { model: Category, as: 'categories', through: { attributes: [] } },    
      ],
    });

    return allPosts;
};
module.exports = {
  // createPost,
  getPosts,
};