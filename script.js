$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Foxy", weight:50, happiness:50};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info.happiness += 5;
      // Increase pet weight
      pet_info.weight += 5;
      // .hide() to hide the initial message, .fadeIn() to fade the message in
      $(".message").text("Yum!").hide().fadeIn();
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info.happiness += 5;
      // Decrease pet weight
      pet_info.weight -= 5;
      // .hide() to hide the initial message, .fadeIn() to fade the message in
      $(".message").text("That was fun!").hide().fadeIn();
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info.happiness -= 5;
      // Decrease pet weight
      pet_info.weight -= 5;
      // .hide() to hide the initial message, .fadeIn() to fade the message in
      $(".message").text("I'm tired now, I need to sleep!").hide().fadeIn();
      checkAndUpdatePetInfoInHtml();
    }

    function clickedSleepButton() {
      // Increase pet happiness
      pet_info.happiness += 5;
      // Decrease pet weight
      pet_info.weight -= 2;
      // .hide() to hide the initial message, .fadeIn() to fade the message in
      $(".message").text("I feel much better!").hide().fadeIn();
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if(pet_info.weight < 0){
        pet_info.weight = 0;
      }
      if(pet_info.happiness < 0){
        pet_info.happiness = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      // .attr() to change the attribute of an element/image source of depending on pets happiness
      if(pet_info.happiness < 20){
        if ($(".pet-image").attr("src") !== "images/foxyMad.jpg") {
          $(".pet-image").attr("src", "images/foxyMad.jpg");
          showOverlayMessage("I'M PISSED");

          //add sound
          let sound = $("#angry-sound")[0];
          sound.currentTime = 0;
          sound.play();

          //stop it after 3 seconds
          setTimeout(function () {
            sound.pause();
          }, 3000);
        }
      }else{
        $(".pet-image").attr("src", "images/foxyNormal.jpg");
      }
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }

    function showOverlayMessage(text) {
      $(".overlay-message")
        .hide() //visibility
        .text(text) //sets the message to display
        .fadeIn(300) //fades in 0.3s
        .delay(1000) //delays the fade out 1s
        .fadeOut(1000); //fades out 1s
    }
  