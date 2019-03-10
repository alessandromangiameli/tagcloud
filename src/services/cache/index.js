import DB from '../db';

const cacheId = 'cPxvPxNWBsXudQB2GAPe';

const cache = DB.collection('cache');

export const update = ({ data, done }) => {
  const doc = cache
    .doc(cacheId)
    .set({
      body: JSON.stringify(data),
    })
    .then(done);
};

export const get = ({ done }) => {
  const doc = cache
    .doc(cacheId)
    .get()
    .then((doc) => {
      done({ data: JSON.parse(doc.data().body) });
    });
};
