import DB from '../db';

const posts = DB.collection('posts');

export const STATUSES = {
  NEW: 'new',
  PUBLISHED: 'published',
  REJECTED: 'rejected',
};

export const makePost = ({ body, status }) => {
  return {
    body,
    status: status ? status : STATUSES.NEW,
    createdAt: new Date(),
  };
};

export const add = ({ body, status }, onSuccess) => {
  posts
    .add(makePost({ body, status }))
    .then(onSuccess)
    .catch((error) => {
      console.log(error);
    });
};

const getPosts = ({ posts, done, limit }) => {
  posts
    .limit(limit ? limit : 10 * 10 * 10)
    .get()
    .then(({ docs }) => {
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

export const getByStatus = ({ status, ...rest }) => {
  getPosts({
    posts: posts.where('status', '==', status),
    ...rest,
  });
};

export const wordCount = (posts) => {
  const lookupTable = {};
  const toExclude = [
    'di',
    'a',
    'da',
    'in',
    'con',
    'su',
    'per',
    'tra',
    'fra',
    'il',
    'lo',
    'la',
    'le',
    'un',
    'una',
    'uno',
    'a',
    'è',
    'o',
    'gli',
    'non',
    'amore',
    "l'amore",
    'sui',
    'al',
    'che',
    'l’amore',
    'si',
    'i',
    'fa',
    'ti',
    'ha',
    'l’ha',
    'alle',
    'nel',
    'sia',
  ];
  posts.forEach(({ body }) => {
    body
      .split(/[ '\-\(\)\*":;\[\]|{},.!?]+/)
      .filter((word) => word.length > 1 && !toExclude.includes(word))
      .forEach((word) => {
        word = word.toLowerCase();
        lookupTable[word] = lookupTable[word] + 1 || 1;
      });
  });
  return Object.keys(lookupTable)
    .map((key) => {
      return {
        word: key,
        count: lookupTable[key],
      };
    })
    .sort((a, b) => {
      return b.count - a.count;
    });
};
