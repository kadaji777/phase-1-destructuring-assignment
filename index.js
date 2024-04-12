const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
// String: uses destructuring to declare five animal sounds
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');

// String: uses destructuring to declare the four traditional animal names
const [bessie, dolly, sheep, pig, chicken] = farmAnimals.split(' ');

// String: uses destructuring to declare the three traditional animal colors
const [blackAndWhite, black, pink] = colors.slice(0, 3);

// Array: uses destructuring to declare the seven traditional rainbow color variables using the color names
const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, i, v] = colors;

const [, , , , , indg] = colors;

// Objects
const { muppetName, color, song, job, partner } = muppet;

const { nestedName, nestedColor, nestedJob, nestedPartner } = nestedMuppet;

const { song2, song4 } = nestedMuppet.album.theMuppetMovie;

console.log(cowSound, horseSound, sheepSound, pigSound, chickenSound);
console.log(bessie, dolly, babe, little);
console.log(blackAndWhite, black, pink);
console.log(red, orange, yellow, green, blue, indigo, violet);
console.log(r, o, y, g, b, i, v);
console.log(indg);
console.log(muppetName, color, song, job, partner);
console.log(nestedName, nestedColor, nestedJob, nestedPartner);
console.log(song2, song4);
