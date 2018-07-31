
//Model
//class Cat {
 //   constructor() {
  //      this.pictureSource = 'images/';
  //      this.catName;
  //      this.clicks = 0;
  //  }
//}

var model = {
        noCats: 6,
		currentCat: null,
		catsList: []
	};
//Create a Cat class


//Store List of Cats in a Cat Array
//let catsList  = [];

//Number of Cats you want to play with


//Add cats to array
for (var i = 0; i < model.noCats; i++) {

    var cat = {};

    cat.pictureSource = 'images/';
    cat.catName = '';
    cat.clicks = 0;

    model.catsList.push(cat);
   
 }

//Specify cat information
 //Cat 1 Information 
let cat1 = model.catsList[0];
cat1.pictureSource += 'cat.jpg';
cat1.catName = "Missy";


//Cat 2 Information 
let cat2 = model.catsList[1];
cat2.pictureSource += 'cat2.jpg';
cat2.catName = "Mister";


//Cat 3 Information 
let cat3 = model.catsList[2];
cat3.pictureSource += 'cat3.jpg';
cat3.catName = "Lucy";

//Cat 4 Information 
let cat4 = model.catsList[3];
cat4.pictureSource += 'cat4.jpg';
cat4.catName = "Muso";


//Cat 5 Information 
let cat5 = model.catsList[4];
cat5.pictureSource += 'cat5.jpg';
cat5.catName = "Panther";


//Cat 6 Information 
let cat6 = model.catsList[5];
cat6.pictureSource += 'cat6.jpg';
cat6.catName = "Prinky";

var octopus = {
    init: function() {
        model.currentCat = model.catsList[0];

        catListView.init();
        catView.init();
    },

    getCurrentCat: function(){
        return model.currentCat;
    },

    getCats: function(){
        return model.catsList;
    },

    setCurrentCat: function(cat){
        model.currentCat = cat;
    },

    increaseCounter: function() {
    //increment counter and display on page and console
    model.currentCat.clicks++;
    //$('#'+count).text('Count: '+cat.clicks);
    catView.render();
    }
}





var catView = {
    init: function() {

        this.catElem = $('#cat-game');
        this.catNameElem = $('#cat-name');
        this.catImageElem = $('#cat-img');
        this.countElem = $('#cat-count');

        this.catImageElem.click(function(){
            octopus.increaseCounter();
        });

        this.render();


    },

    render: function(){

        var currentCat = octopus.getCurrentCat();
        this.countElem.text("Count: " + currentCat.clicks);
        this.catNameElem.text(currentCat.catName);
        this.catImageElem.attr("src",currentCat.pictureSource);
        //this.catImageElem.src(currentCat.pictureSource);

    }
};


var catListView = {
    init: function() {
        this.catListElem = $('#list-of-cats');
        this.render();
    },

    render: function() {

        var cats = octopus.getCats();
        this.catListElem.innerHTML = '';

        for(var i =0; i < cats.length; i++){

            var cat = cats[i];
            var elem = document.createElement('li');


        
            elem.textContent = cat.catName;

            elem.addEventListener('click',
                (function(cat)
                {
                    return function() 
                    {
                        octopus.setCurrentCat(cat);
                        catView.render();
                    };

                }(cat))
            );

            this.catListElem.append(elem);

        };



    }
};

octopus.init();