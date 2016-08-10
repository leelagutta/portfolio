
var currentIndex = 0,
  items = $('.persona-content div'),
  noOfItems = items.length;

function cycleItems() {
  var item = $('.persona-content div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

$('.next').click(function() {
  // clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > noOfItems - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  // clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = noOfItems - 1;
  }
  cycleItems();
});
