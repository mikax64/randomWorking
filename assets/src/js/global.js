//Array
var workers = [];

//Animation delay
var marioIsMovingTime = 2000, marioIsJumpingTime = 250, marioIsWaitingTime = 750, marioIsMovingAwayTime = 1500;


//On box item click
$(".answer__0").click(function () {
  
  //If nobody is selected, don't do anything
  if ($(".characters__checkbox:checked").length > 0) {

    //Clear Array
    var workers = [];

    //Push all worker in Array 
    $("input:checked").each(function () {
      workers.push($(this).val());
    });

    //Choose a random one | Global var
    window.winner = workers[Math.floor(Math.random() * workers.length)];

    //Display the winner (for debug)
    console.log(winner);

    //Create Mario Animation
    var marioAnimation = '<figure><img src="/assets/dist/img/marioSpriteOpti.svg" alt=""></figure>',
      marioWrapper = document.getElementById("marioWrapper");

    marioWrapper.insertAdjacentHTML("beforeend", marioAnimation);
    
    //Launch Mario animation
    mario();
    
    //Launch Box item animation
    boxBouncing();
    
    //Launch winner animation
    winnerIs();
  };
});


function mario() {
  //Mario is moving
  //Add moving class
  $("#marioWrapper").addClass("is-moving");

  //Mario is jumping
  window.setTimeout(function () {
    //Add moving class
    $("#marioWrapper").addClass("is-jumping");
  }, marioIsMovingTime);

  //Mario is moving away
  window.setTimeout(function () {
    //Add moving class
    $("#marioWrapper").addClass("is-movingAway");
  }, marioIsMovingTime + marioIsJumpingTime + marioIsWaitingTime);
}

function boxBouncing() {
  //Box bouncing
  window.setTimeout(function () {
    //Add bouncing class
    $(".answer__svg").addClass("is-bouncing");
  }, marioIsMovingTime + marioIsJumpingTime / 2);
}

function winnerIs() {
  //Waiting Mario
  window.setTimeout(function () {
    //Add Winner class
    $("#answerWrapper").addClass("is-" + winner);
  }, marioIsMovingTime + marioIsJumpingTime + marioIsWaitingTime + 625);
}


//Can't clic if nobody is selected
var checker = $(".characters__checkbox"),
  sendbtn = $(".answer__0");

checker.click(function () {
  sendbtn.toggleClass("is-disabled", !checker.is(":checked"));
});