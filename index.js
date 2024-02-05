const input = document.querySelector(".block");
const icon = document.querySelector(".toggleClass");

icon.addEventListener("click", () => {
    console.log(input);
    input.classList.toggle("active")
})


const exampleText = ['We have got your business all covered!|'];
const exampleTyping = new AutoTyping('.auto-wrting', exampleText, {
  typeSpeed: 50,
  deleteSpeed: 50,
  waitBeforeDelete: 2000,
  waitBetweenWords: 500,
});
exampleTyping.start()


// slick 
$('.clients-slider').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: false // Adds the dots on the bottom
  });