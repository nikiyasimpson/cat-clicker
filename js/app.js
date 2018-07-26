
//Create a Cat class
class Cat {
    constructor() {
        this.pictureSource = 'images/';
        this.catName;
        this.clicks = 0;
    }

 

}

//Store List of Cats in a Cat Array
let catsList  = [];

//Number of Cats you want to play with
const noCats = 2;

//Add cats to array
for (var i = 0; i < noCats; i++) {
    catsList.push(new Cat());
   
 }

//Specify cat information
 //Cat 1 Information 
let cat1 = catsList[0];
cat1.pictureSource += 'cat.jpg';
cat1.catName = "Missy";

//Cat 2 Information 
let cat2 = catsList[1];
cat2.pictureSource += 'cat2.jpg';
cat2.catName = "Mister";



//Display cats on the app and assign event listener
for(var i =0; i < catsList.length; i++){
    let cat = catsList[i];
    let catItem = 'cat'+[i+1];
    let catCounter = 'catCounter'+[i+1];
    let count = 'count'+[i+1];
    $('main').append("<div id='"+catItem+"' class='cat-area'><h3 id='"+catCounter+"'></h3></div>"); 
    $('#'+catItem).prepend("<h2 id='"+catItem+"Header'>"+cat.catName+"</h2>");
    $('#'+catItem).append("<img id='"+catItem+"Pic' src='"+ cat.pictureSource +"' class='cat-image'>");
    $('#'+catCounter).append("<span id='"+count+"' class='count'> Counter "+ cat.clicks+"</span>");

    let catPicture = $('#'+catItem+"Pic");
    catPicture.click(increaseCounter);

    function increaseCounter() {
    //increment counter and display on page and console
    cat.clicks++;
    $('#'+count).text('Count: '+cat.clicks);
    };
};

