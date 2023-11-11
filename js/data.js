//id, число — идентификатор опубликованной фотографии. Это число от 1 до 25
//url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
//description, строка — описание фотографии. Описание придумайте самостоятельно.
//likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200
//comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
//{
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }

// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:
import { createRandomIdFromRangeGenerator } from './utils.js';

const NAMES = [
  'Елизавета',
  'Маруся',
  'Евграф',
  'Родион',
  'Микеле',
  'Николай Носков',
  'Цезарь'
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Мой ужин на закате',
  'Люблю гулять по полю утром!',
  'Не придумала описание, просто фото',
  'Вау! Вы такого точно не видели!',
  'Грегор Замза проснулся у себя в комнате.',
  'Ну и денек!'
];

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


export {createPhoto};
