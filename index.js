$(document).ready(()=>{	
    getJoke();
  $("#jokeButton").click(()=>{  	  
    getJoke();
  });
});


function getJoke(){
    $.get("https://sv443.net/jokeapi/v2/joke/Programming?type=single",                  
    function(data){         	
        $("#joke").text(data.joke);
    }
 );
}