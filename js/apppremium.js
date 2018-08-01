
//Model

var model = {
        noCats: 6,
		currentCat: null,
		catsList: []
	};

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


//Octopus

var octopus = {
    init: function() {
        model.currentCat = model.catsList[0];

        catListView.init();
        catView.init();
    },

    //Get the current cat information
    getCurrentCat: function(){
        return model.currentCat;
    },


    //Get all the cats in our list
    getCats: function(){
        return model.catsList;
    },

    //Set the current cat in focus
    setCurrentCat: function(cat){
        model.currentCat = cat;
    },

    increaseCounter: function() {
    //increment counter and display on page and console
    model.currentCat.clicks++;
    //$('#'+count).text('Count: '+cat.clicks);
    catView.render();
    },

    //Update cat information
    updateCatInfo: function(name,src,clicks){
        model.currentCat.catName = name;
        model.currentCat.pictureSource = src;
        model.currentCat.clicks = clicks;
       
    }
}

//Views

var catView = {
    init: function() {

        this.catElem = $('#cat-game');
        this.catNameElem = $('#cat-name');
        this.catImageElem = $('#cat-img');
        this.countElem = $('#cat-count');
        this.adminButton = $('#adminbutton');
        this.cancelButton = $('#cancelbutton');

        this.catNameText = $('#catNameText');
        this.catImgSrc = $('#catImgSrc');
        this.catClicksTxt = $('#catClicksTxt');
        this.saveButton = $('#savebutton');
        

        this.catImageElem.click(function(){
            octopus.increaseCounter();
        });

        this.saveButton.click(function(){
            var name = $('#catNameText').val();
            var imgsrc = $('#catImgSrc').val();
            var clicks = $('#catClicksTxt').val();
            var noclicks = parseInt(clicks);
            octopus.updateCatInfo(name,imgsrc,noclicks);

        });

        this.adminButton.click(function(){
            $('#cat-form-area').toggleClass('hidden');
        });

        this.cancelButton.click(function(){
            $('#cat-form-area').toggleClass('hidden');
        });

        this.render();
    },

    render: function(){

        var currentCat = octopus.getCurrentCat();
        this.countElem.text("Count: " + currentCat.clicks);
        this.catNameElem.text(currentCat.catName);
        this.catImageElem.attr("src",currentCat.pictureSource);
        
        this.catNameText.val(currentCat.catName);
        this.catImgSrc.val(currentCat.pictureSource); 
        this.catClicksTxt.val(currentCat.clicks); 

    }
};


var catListView = {
    init: function() {
        this.catListElem = $('#list-of-cats');
        this.catNameText = $('#catNameText');
        this.catImgSrc = $('#catImgSrc');
        this.catClicksTxt = $('#catClicksTxt');
        
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