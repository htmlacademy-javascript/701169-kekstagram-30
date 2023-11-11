import {NAMES} from './data.js';
import { COMMENTS } from './data.js';
import { DESCRIPTIONS } from './data.js';
import { createRandomIdFromRangeGenerator } from './utils.js';

const createPhoto = () => {

  const randomId = createRandomIdFromRangeGenerator(1,26);
  const randomUrl = createRandomIdFromRangeGenerator(1,25);
  const randomAvatar = createRandomIdFromRangeGenerator(1,25);
  const randomDescription = createRandomIdFromRangeGenerator(0, DESCRIPTIONS.length - 1);
  const randomLike = createRandomIdFromRangeGenerator(15, 200);
  const randomComment = createRandomIdFromRangeGenerator(0, COMMENTS.length - 1);
  const randomName = createRandomIdFromRangeGenerator(0, NAMES.length - 1);

  return {
    id: (randomId()),
    url: `photos/${[(randomUrl())]}.jpg`,
    description: DESCRIPTIONS[(randomDescription)()],
    likes: (randomLike()),
    message: {
      id: (randomId()),
      avatar:`img/avatar-${[(randomAvatar)()]}.svg`,
      comment:COMMENTS[(randomComment)()],
      name:NAMES[(randomName())]
    },
  };
};

const newPhotos = Array.from({length: 25}, createPhoto);

// eslint-disable-next-line no-console


export {newPhotos};
