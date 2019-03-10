import { add, STATUSES } from '../services/post';

const batchPublish = (data) => {
  data.split(/\r?\n/).forEach((post) => {
    add({ body: post, status: STATUSES.PUBLISHED }, () => {
      console.log(`OK: ${post}`);
    });
  });
};

export default batchPublish;
