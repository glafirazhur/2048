export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomArrayItem = (array) => array[Math.floor(Math.random() * array.length)];
