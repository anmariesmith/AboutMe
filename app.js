
// Background
var particles = Particles.init({
	selector: '.background',
  color: ['#FFFFFF', '#76BDCC', '#CDA2AB'],
  connectParticles: true
});

//Creating button values in an array //
const navButtons= ["About Me", "Portfolio", "Contact"];

//Function to append HTML to the page//
const makeNavs = function () {
    $(".nav-cust").html("");
    console.log("I'm here");
    for(let i=0; i<navButtons.length; i++){
        var navButton = navButtons[i] 
        let buttonHTML = $(`<button class="btn-custom col-sm-12 col-md-3 mt-3 ml-2 mr-2 rounded">${navButton}</button>`);
        buttonHTML.on("click", showNav);
        $(".nav-cust").append(buttonHTML);
    }
}

//Thia ia how the nav sections are added to the page dynamically//
const showNav= function() {
  const buttonVal = $(this).text(); //this gets the text from the button that was just clicked
  if (buttonVal === "About Me"){
    $("#port").addClass('hide');
  $("#aboutMe").removeClass('hide');
  $('#contact').addClass('hide');
  } else if (buttonVal === "Portfolio"){
    $("#aboutMe").addClass('hide');
    $("#port").removeClass('hide');
    $('#contact').addClass('hide');
  } else if (buttonVal === "Contact"){
    $("#aboutMe").addClass('hide');
    $("#port").addClass('hide');
    $('#contact').removeClass('hide');

  }
  
};

//This tells the web page once my headshot is click to display the buttons/
$('.img-custom1').on("click", makeNavs);

