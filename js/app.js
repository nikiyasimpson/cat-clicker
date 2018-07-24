let counter =0;

$('.cat-image').click(increaseCounter);

function increaseCounter() {
	//increment counter and display on page and console
  counter++;
  console.log(counter);
   $('#cat-counter').find('.count').text(counter);
};