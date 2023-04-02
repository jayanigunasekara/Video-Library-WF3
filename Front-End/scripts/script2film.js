//use window location search
const urlParameter = new URLSearchParams(window.location.search);// id returns ?id=2e2dd90b-ae86-4a9b-bd22-3b261a6add8a:Error
const currentId = urlParameter.get('id').split(":")[0];//get the first element in the array separating by ':' . 



//Fetch data from the API  with url search parameter

fetch(`http://localhost:3000/api/movies/${currentId}`)
   
        .then(function(response)  {
            console.log(response);
            return response.json(); 
        })
        .then(function(data) {
            console.log("data._id   :",data._id);
            //check the film id with current id , if it matches the video's displayed
            if(data._id === currentId){
                    console.log("film id");
                    console.log(data.videoUrl);
                    document.querySelector('video').setAttribute('src',data.videoUrl);
                }

            }
            )
           


          

        
        .catch(e => console.log(e)); 
