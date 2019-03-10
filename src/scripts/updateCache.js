import { update } from '../services/cache';
import { getByStatus, STATUSES, wordCount } from '../services/post';

const updateCache = () => {
  getByStatus({
    //limit: 10,
    status: STATUSES.PUBLISHED,
    done: ({ data }) => {
      update({
        done: () => {
          console.log('update cache');
        },
        data: wordCount(data),
      });
    },
  });
};

export default updateCache;
