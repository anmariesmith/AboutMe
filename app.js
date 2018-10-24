
// Background
var particles = Particles.init({
	selector: '.background',
  color: ['#FFFFFF', '#76BDCC', '#CDA2AB'],
  connectParticles: true
});

const navButtons= ["About Me", "Portfolio", "Contact"];

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

const showNav= function() {
  const buttonVal = $(this).text(); //this gets the text from the button that was just clicked
  console.log(buttonVal); //this logs it to console so you can see
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


$('.img-custom1').on("click", makeNavs);

