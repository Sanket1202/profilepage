/***********
 * 
 * create a new page and route for read and about me
 * change button css
 * handle the extra p tag inside card
 * look into responsiveness
 * look into image styles 
 * 
 * 
 */


//for read details
  
function handle(){
    window.alert("You want to go to Next Page?")
    window.location.href = "read.html";
  }

  function readDetails(){
    const myDetails = new Details(725,21,9480461033);//creating object for id,age,number
    const id = document.getElementById('id')
    const age = document.getElementById('age')
    const number = document.getElementById('num')
    id.innerText = myDetails.id
    age.innerText = myDetails.age
    number.innerText = myDetails.Num
  }
  
//creating class for Read
class Details{
    constructor(id,age,Num){
        this.id=id;
        this.age=age;
        this.Num=Num;
    }
    // detail(){
    //     window.alert("You want to go to Next Page?")
    // }
}


// for about me
function show(){
    window.alert("You want to see About Me?")
    window.location.href = "about.html";
  }

function showDetails(){
    const About_me = new About("I am an ambitious and outgoing person who seeks to gain more knowledge in the IT field. I enjoy working with others, so that we can all work towards a common goal.");
    const about_me = document.getElementById('show')
    about_me.innerText=About_me.about
}
// //creating class for About Me
class About{
    constructor(about){
        this.about=about;
    }
    // about_me(){
    //     window.alert("You want to see About Me?")
    // }
}   