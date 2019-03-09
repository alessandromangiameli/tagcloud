import DB from '../db';

const posts = DB.collection('posts');

export const STATUSES = {
  NEW: 'new',
  PUBLISHED: 'published',
  REJECTED: 'rejected',
};

export const makePost = ({ body }) => {
  return {
    body,
    status: STATUSES.NEW,
    createdAt: new Date(),
  };
};

export const add = ({ body }, onSuccess) => {
  posts
    .add(makePost({ body }))
    .then(onSuccess)
    .catch((error) => {
      console.log(error);
    });
};

const getPosts = ({ posts, done }) => {
  posts.get().then(({ docs }) => {
    done({
      data: docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })),
    });
  });
};

export const getAll = (done) => {
  getPosts({ posts, done });
};

export const getByStatus = ({ status, done }) => {
  getPosts({
    posts: posts.where('status', '==', status),
    done,
  });
};
