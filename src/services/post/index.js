import DB from '../db';

const posts = DB.collection('posts');

export const add = ({ body }, onSuccess) => {
  posts
    .add({ body })
    .then(onSuccess)
    .catch((error) => {
      console.log(error);
    });
};

export const getAll = (done) => {
  posts.get().then(({ docs }) => {
    done({ data: docs.map((doc) => doc.data()) });
  });
};
