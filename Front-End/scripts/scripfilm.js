let videoLib = [];



//fetch data from the API
fetch("http://localhost:3000/api/movies")
   
.then(function(response)  {
    console.log(response);
    return response.json(); //retourne la reponse de la requête sous le format JSON
})
.then(function(data) {
    console.log("Jayani");
    data.map(e =>{

        videoLib.push({
            id: e._id,
            name :e.titre,
            director: e.realisateur,
            image: e.imageUrl,
            duration: e.dureeTotale,
            duration_viewed : e.duration_viewed,
            description : e.description,
            filePath : e.videoUrl

        });

        




        
        
    });
    
    function templateElement(element_name, text, parent) {
        const template = document.createElement(element_name);
        template.textContent = text;
        parent.appendChild(template);
        return template;
    }
    
    

    
    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        return  + rhours + " hour(s) and " + rminutes + " minute(s).";
    }

    //get the sections
    const section1= document.querySelector('#section1');
    const section2 = document.querySelector('#section2');
    const section3 = document.querySelector('#section3')

    const section4= document.querySelector('#section4');
    const section5 = document.querySelector('#section5');
    const section6 = document.querySelector('#section6');

    let x = 0;
    let buttonId = 0;

    videoLib.map((film )=>{ 
        
        
        let percentageOfViewed =  (film.duration_viewed / film.duration)*100;
        let remainingTime = 100 - Math.round(percentageOfViewed *10)/10;
        console.log(remainingTime);
      
     

       

    
        // Create the different div s relavant to each section
        
        let div;
        if(x === 0){
            div = templateElement('div', " ", section1 );
        }
        else if(x === 1){
            div = templateElement('div', " ", section2 );
        }
        else if(x === 2){
            div = templateElement('div', " ", section3 );
        }
        else if(x === 3){
            div = templateElement('div', " ", section4 );
        }
        else if(x === 4){
            div = templateElement('div', " ", section5 );
        }
        else if(x === 5){
            div = templateElement('div', " ", section6 );
        }
        
        //create the inner elements of the div
        const img = templateElement('img', '', div);
        img.setAttribute('src',film.image);
        // document.querySelector('img').style.justifyContent = 'center';
        
        const h4 = templateElement('h4',film.name, div);
        const pDirector =  templateElement('p',"By " + film.director, div );
        const pDescription = templateElement('p', film.description, div);
        const pTime = templateElement('p',timeConvert(film.duration),div);
        const pTimeRemaining = templateElement('p', "Time remaining : " + remainingTime + "%", div);
      
        
        if(remainingTime ===0){
            const button = templateElement('button', "Already Watched    ", div);
            const iconViewed = templateElement('i', "", button);
            iconViewed.setAttribute('class', 'bi bi-check2');
            button.setAttribute("id","id"+buttonId );
            button.setAttribute('type','button');
            button.setAttribute('class', 'myBtn');
            
    
        }else{
            
    
            const button = templateElement('button', "Continue Watching      ", div);
            const iconNotViewed = templateElement('i', "", button);
            iconNotViewed.setAttribute('class', 'bi bi-eye');
            
            button.setAttribute("id","id"+buttonId );
            button.setAttribute('type','button');
            button.setAttribute('class', 'myBtn');
    
            document.querySelector("#id"+buttonId).addEventListener('click', function(e){
                e.preventDefault();
                console.log("#id"+buttonId);
                window.location.href ="indexFilm2.html?id="+film.id+":Error";
                localStorage.setItem("movieId",film.id);
            });
    
    
    
    
        }
        div.setAttribute("id", "section");

     
        
    
    
        x++;
  
        buttonId++;
    
    
     
    
        
    
      
    
        
    
       
    });

}
)
.catch(e => console.log(e));





/* class Film{
    constructor(id, name, director,image, duration, durationViewed, description = "", filePath = ""){
        this.id =  id;
        this.name = name;
        this.director = director;
        this.image = image;
        this.duration = duration;
        this.durationViewed = durationViewed;
        this.description = description;
        this.filePath = filePath;
    }

    addVideo(){
        videoLib.push({
            id: this.id,
            name : this.name,
            director: this.director,
            image: this.image,
            duration: this.duration,
            duration_viewed : this.durationViewed,
            description : this.description,
            filePath : this.filePath
    
        })
    }


}

const film1  = new Film(001,"Asterix and Obelix", "Guillaume Canet","../assests/images/Asterix.jpg", 112, 30,"The Chinese princess Fu Yi arrives at the Gallic village to ask Asterix and Obelix for help after Prince Deng Qin's coup overthrows the Empress.","../assests/videos/video1.mp4");
const film2  = new Film(002,"Shrek", "Andrew Adamson & Vicky Jenson","../assests/images/shrek-Image.jpg", 123, 30,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem","../assests/videos/Shrek.mp4");
const film3  = new Film(003, "Soul", "Pete Docter","../assests/images/soul.jpg", 132, 12,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem","../assests/videos/Soul.mp4");
const film4  = new Film(004, "The Lion King", "Roger Allers and Rob Minkoff","../assests/images/Lion King.jpg", 100, 05,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem", "../assests/videos/The Lion King.mp4");
const film5  = new Film(005, "Inside Out", "Pete Docter","../assests/images/Inside-out.png", 112, 112,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem", "../assests/videos/Inside Out.mp4");
const film6  = new Film(006, "Incredibles 2", "Brad Bird","../assests/images/Incredibles2.jpg", 122, 10,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cum explicabo hic recusandae ipsum voluptatem", "../assests/videos/Incredibles .mp4");
film1.addVideo();
film2.addVideo();
film3.addVideo();
film4.addVideo();
film5.addVideo();
film6.addVideo(); */

//console.log(videoLib);
//console.log(film1);



//select the container 
/* const container = document.querySelector('.container');
const section1= document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3')

const section4= document.querySelector('#section4');
const section5 = document.querySelector('#section5');
const section6 = document.querySelector('#section6')

let x = 0;

let buttonId = 0;
 */







// localStorage.videoLib=JSON.stringify(videoLib);
//localStorage.setItem("videoLib", JSON.stringify(videoLib));
//localStorage.setItem("pushIntoArray", pushIntoArray + ""); 


// templateElement("h4","Total Viewing Time  : " + totalViewingTime , document.body );

