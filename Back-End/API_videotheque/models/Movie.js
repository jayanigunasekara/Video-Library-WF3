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
      "videoUrl" : "video1.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "Soul",
      "realisateur" : "Pete Docter",
      "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem",
      "dureeTotale" : 117,
      "duration_viewed":100,
      "imageUrl" : "soul.jpg",
      "videoUrl" : "Soul.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "Shrek",
      "realisateur" : " Andrew Adamson, Vicky Jenson",
      "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem",
      "dureeTotale" : 188,
      "duration_viewed":100,
      "imageUrl" : "shrek-Image.jpg",
      "videoUrl" : "Shrek.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "Inside Out",
      "realisateur" : "Pete Docter, Ronnie Del Carmen",
      "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem",
      "dureeTotale" : 100,
      "duration_viewed":100,
      "imageUrl" : "Inside-out.png",
      "videoUrl" : "Inside Out.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "The Incredibles",
      "realisateur" : "Brad Bird",
      "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem",
      "dureeTotale" : 94,
      "duration_viewed":100,
      "imageUrl" : "Incredibles.jpg",
      "videoUrl" : "Incredibles.mp4"
    },
    {
        "_id" : uuidv4(),
      "titre" : "The Lion King",
      "realisateur" : "Jon Favreau",
      "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem",
      "dureeTotale" : 129,
      "duration_viewed":100,
      "imageUrl" : "Lion King.jpg",
      "videoUrl" : "The Lion King.mp4"
 
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




