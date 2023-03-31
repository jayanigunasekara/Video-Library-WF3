const { v4: uuidv4 } = require('uuid');

const movies = [
    {
      "_id" : uuidv4(), 
      "titre" : "Asterix and Obelix",
      "realisateur" : "Guillaume Canet",
      "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem",
      "dureeTotale" : 112,
      "duration_viewed":100,
      "imageUrl" : "Asterix.jpg",
      "videoUrl" : "Incredibles.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "Alien",
      "realisateur" : "Ridley Scott",
      "description" : "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
      "dureeTotale" : 117,
      "duration_viewed":100,
      "imageUrl" : "alien.jpg",
      "videoUrl" : "The Lion King.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "Magnolia",
      "realisateur" : "Paul Thomas Anderson",
      "description" : "An epic mosaic of interrelated characters in search of love, forgiveness and meaning in the San Fernando Valley.",
      "dureeTotale" : 188,
      "duration_viewed":100,
      "imageUrl" : "magnolia.jpg",
      "videoUrl" : "Soul.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "Donnie Darko",
      "realisateur" : "Richard Kelly",
      "description" : "After narrowly escaping a bizarre accident, a troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
      "dureeTotale" : 113,
      "duration_viewed":100,
      "imageUrl" : "donnie_darko.jpg",
      "videoUrl" : "Shrek.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "Dobermann",
      "realisateur" : "Jan Kounen",
      "description" : "Dobermann is the world's most ruthless bank robber and with his gang rob bank after bank, now in Paris. What can the police do but to let the mad, morally bankrupt police commissioner loose on him?",
      "dureeTotale" : 94,
      "duration_viewed":100,
      "imageUrl" : "dobermann.jpg",
      "videoUrl" : "Inside Out.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "Starship Troopers",
      "realisateur" : "Paul Verhoeven",
      "description" : "Humans in a fascist, militaristic future wage war with giant alien bugs.",
      "dureeTotale" : 129,
      "duration_viewed":100,
      "imageUrl" : "starship_troopers.jpg",
      "videoUrl" : "video1.mp4"
    //   "bgUrl" : "starship_troopers.jpg"
    }
];

exports.find = () => {
  return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(movies))));
}

exports.findById = (id) => {
  return new Promise((resolve, reject) =>
    resolve(JSON.parse(JSON.stringify(movies)).find(movie =>
      movie._id == id)
    )
  );
}




