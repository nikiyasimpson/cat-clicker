

class Cat {
    constructor() {
        this.pictureSource = 'images/';
        this.catName;
        this.clicks = 0;
    }

    increaseCounter() {
	//increment counter and display on page and console
 	this.clicks++;
    //counterArea.find('.count').text(this.clicks);
	};

}

//Cat 1 Information 
let cat1 = new Cat();
cat1.pictureSource += 'cat.jpg';
cat1.catName = "Missy";
$('#cat1').prepend($('<h2>',{id:'cat1Header'}));
$('#cat1Header').text(cat1.catName);
$('#cat1').append($('<img>',{id:'cat1Pic',src:cat1.pictureSource,class:'cat-image'}));
$('#catCounter1').append($('<span>',{id:'count1', class:'count'}));
let count1 = $('#count1');
count1.text('Counter: '+ cat1.clicks);
$('#cat1Pic').click(function() {
	cat1.increaseCounter();
	count1.text('Counter: '+ cat1.clicks);
});

//Cat 2 Information 
let cat2 = new Cat();
cat2.pictureSource += 'cat2.jpg';
cat2.catName = "Mister";
$('#cat2').prepend($('<h2>',{id:'cat2Header'}));
$('#cat2Header').text(cat2.catName);
$('#cat2').append($('<img>',{id:'cat2Pic',src:cat2.pictureSource,class:'cat-image'}));
$('#catCounter2').append($('<span>',{id:'count2', class:'count'}));
let count2 = $('#count2');
count2.text('Counter: '+ cat2.clicks);

$('#cat2Pic').click(function() {
	cat2.increaseCounter();
	count2.text('Counter: '+ cat2.clicks);
});
