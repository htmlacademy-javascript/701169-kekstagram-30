import {names} from './data.js';
import { comments } from './data.js';
import { descriptions } from './data.js';
import { createRandomIdFromRangeGenerator } from './utils.js';

const createPhoto = () => {

  const randomId = createRandomIdFromRangeGenerator(1,26);
  const randomUrl = createRandomIdFromRangeGenerator(1,25);
  const randomAvatar = createRandomIdFromRangeGenerator(1,25);
  const randomDescription = createRandomIdFromRangeGenerator(0, descriptions.length - 1);
  const randomLike = createRandomIdFromRangeGenerator(15, 200);
  const randomComment = createRandomIdFromRangeGenerator(0, comments.length - 1);
  const randomName = createRandomIdFromRangeGenerator(0, names.length - 1);

  return {
    id: (randomId()),
    url: `photos/${[(randomUrl())]}.jpg`,
    description: descriptions[(randomDescription)()],
    likes: (randomLike()),
    message: {
      id: (randomId()),
      avatar:`img/avatar-${[(randomAvatar)()]}.svg`,
      comment:comments[(randomComment)()],
      name:names[(randomName())]
    },
  };
};

const newPhotos = Array.from({length: 25}, createPhoto);

// eslint-disable-next-line no-console


export {newPhotos};
