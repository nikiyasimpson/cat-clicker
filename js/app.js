
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
const noCats = 6;

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

//Cat 3 Information 
let cat3 = catsList[2];
cat3.pictureSource += 'cat3.jpg';
cat3.catName = "Lucy";

//Cat 4 Information 
let cat4 = catsList[3];
cat4.pictureSource += 'cat4.jpg';
cat4.catName = "Muso";

//Cat 5 Information 
let cat5 = catsList[4];
cat5.pictureSource += 'cat5.jpg';
cat5.catName = "Panther";

//Cat 6 Information 
let cat6 = catsList[5];
cat6.pictureSource += 'cat6.jpg';
cat6.catName = "Prinky";




//Display cats on the app and assign event listener
for(var i =0; i < catsList.length; i++){
    let cat = catsList[i];
    let catItem = 'cat'+[i+1];
    let catListItem = 'cat-elem'+[i+1];
    let catCounter = 'catCounter'+[i+1];
    let count = 'count'+[i+1];
    $('#list-of-cats').append("<li id='"+catListItem+"'>"+cat.catName+"</li>");
    $('#cat-game').append("<div id='"+catItem+"' class='cat-area hidden'><h3 id='"+catCounter+"'></h3></div>"); 
    $('#'+catItem).prepend("<h2 id='"+catItem+"Header'>"+cat.catName+"</h2>");
    $('#'+catItem).append("<img id='"+catItem+"Pic' src='"+ cat.pictureSource +"' class='cat-image'>");
    $('#'+catCounter).append("<span id='"+count+"' class='count'> Counter "+ cat.clicks+"</span>");

    let catPicture = $('#'+catItem+"Pic");
    catPicture.click(increaseCounter);

    let catMenuItem = $('#'+catListItem);
    catMenuItem.click(showKitten);

    function showKitten(){
        $('#'+catItem).toggleClass('hidden');
    }

    function increaseCounter() {
    //increment counter and display on page and console
    cat.clicks++;
    $('#'+count).text('Count: '+cat.clicks);
    };
};

