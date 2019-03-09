import DB from '../db';

const posts = DB.collection('posts');

const STATUSES = {
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

export const getAll = (done) => {
  posts.get().then(({ docs }) => {
    done({
      data: docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      })),
    });
  });
};
