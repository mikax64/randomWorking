var workers = [];


//on click
$(".answer__0").click(function () {
  
  //If nobody is selected, don't do anything
  if ($(".characters__checkbox:checked").length > 0) {

    //Clear Array
    var workers = [];

    //Push all worker in Array 
    $("input:checked").each(function () {
      workers.push($(this).val());
    });

    //Choose a random one
    var winner = workers[Math.floor(Math.random() * workers.length)];

    //Add answer in the DOM
    //  var winnerMessage = winner,
    //    winnerWrapper = document.getElementById("answerWrapper");

    //If we click many time on the button, remove old content
    //  if (winnerWrapper.firstChild) {
    //    winnerWrapper.removeChild(winnerWrapper.firstChild);
    //  };


    //Display the winner
    console.log(winner);

    
    //Start Mario Animation
    var marioAnimation = '<figure><img src="/assets/dist/img/marioSpriteOpti.svg" alt=""></figure>',
      marioWrapper = document.getElementById("marioWrapper");

    marioWrapper.insertAdjacentHTML("beforeend", marioAnimation);
    
    //Mario is moving
    
      //Remove old class
      $("#marioWrapper").removeClass();
      
      //Add moving class
      $("#marioWrapper").addClass("mario is-moving");
    
      //Mario is jumping
      window.setTimeout(function(){
        //Add moving class
        $("#marioWrapper").addClass("is-jumping");
      }, 2000);
    
      //Mario is moving away
      window.setTimeout(function(){
        //Add moving class
        $("#marioWrapper").addClass("is-movingAway");
      }, 3000);

    
    //Box bouncing
     window.setTimeout(function(){
        //Add moving class
        $(".answer__svg").addClass("is-bouncing");
      }, 2150);
    
    
    //Waiting Mario
    window.setTimeout(function(){
      
      //Remove old class
      $("#answerWrapper").removeClass();
      
      //Add Winner class
      $("#answerWrapper").addClass("answer__wrapper is-" + winner);
      
      //Clone item for potential animation replay
      //$("#answerWrapper").replaceWith($("#answerWrapper").clone(true));
      
    }, 3625);

    
    
  };
});



//Can't clic if nobody is selected
var checker = $(".characters__checkbox"),
  sendbtn = $(".answer__0");

checker.click(function () {
  sendbtn.toggleClass("is-disabled", !checker.is(":checked"));
});