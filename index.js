var intro = document.getElementById("intro");

var typewriter_intro = new Typewriter(intro, {
  loop: true,
  cursor: "_",
});

typewriter_intro
  .typeString("Developer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Designer")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Student")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Creator")
  .pauseFor(1000)
  .deleteAll()
  .start();



var blog = document.getElementById("blog_intro");

var typewriter_blog = new Typewriter(blog, {
  cursor: "_",
});

typewriter_blog
  .typeString("Welcome to my blog!")
  .start();

/* CDOWN */
// Set the date we're counting down to
var countDownDate = new Date("Jun 21, 2023 14:50:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="cdown"
  document.getElementById("cdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cdown").innerHTML = "EXPIRED";
  }
}, 1000);


AOS.init()