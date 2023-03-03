 // styling the menu bar
        let menuSlide ;
        menuSlide = document.getElementById('menuContainer')
let StoreMenuSlide = document.getElementById('menuContainer')
      //  Menu bar should roll out
        function menu(){
         menuSlide.style.transform = 'translate(-0px)'
}
        // menu bar should roll in
        function menuSlideBack(){
         StoreMenuSlide.style.transform = 'translate(210px)'
}

        // You need to work on JavaScript Transition effect for this page
        // onclick img dropup

       
        let dropUp = document.getElementById('ic'),
         dropUpOne = document.getElementById('ic-one'),
        dropUpTwo = document.getElementById('ic-two'),
         dropUpThree = document.getElementById('ic-three')
         dropUpFour = document.getElementById('ic-four'),
         dropUpFive = document.getElementById('ic-five'),
         dropUpSix = document.getElementById('ic-six'),
         dropUpSeven = document.getElementById('ic-seven'),
         dropUpEight = document.getElementById('ic-eight'),
        //  transition styling
           shrink = document.getElementById('mon'),
           shrinkOne = document.getElementById('monOne'),
       shrinkTwo = document.getElementById('monTwo'),
        shrinkTwo = document.getElementById('monTwo'),
        shrinkThree = document.getElementById('monThree'),
        shrinkFour = document.getElementById('monFour'),
        shrinkFive= document.getElementById('monFive'),
        shrinkSix = document.getElementById('monSix'),
        shrinkSeven = document.getElementById('monSeven'),
        shrinkEight = document.getElementById('monEight'),
        // onclick img dropdown
         dropdown = document.getElementById('ico-one'),
        // Onclick dropdown
         moneyFunc = document.getElementById('money'),
        moneyFuncOne = document.getElementById('moneyOne'),
           moneyFuncTwo = document.getElementById('moneyTwo'),
        moneyFuncThree = document.getElementById('moneyThree'),
           moneyFuncFour = document.getElementById('moneyFour'),
        moneyFuncFive = document.getElementById('moneyFive'),
           moneyFuncSix = document.getElementById('moneySix'),
        moneyFuncSeven = document.getElementById('moneySeven'),
           moneyFuncEight = document.getElementById('moneyEight'),
        Hover = document.getElementById("demo");

function myFunction() {
   Hover.style.display = "block";
}

function makeMoney(){
   // makeMoney
  moneyFunc.style.display = 'block';
  shrink.style.height  = '265px';
dropUp.src = 'assets/dropup.png';
// makeMoneyOne functions
 moneyFuncOne.style.display = 'none';
 shrinkOne.style.height = '85px';
 dropUpOne.src = 'assets/duckduck_dropdown-removebg-preview.png';
 // makeMoneyTwo functions
 shrinkTwo.style.height = '85px';
moneyFuncTwo.style.display = 'none';
dropUpTwo.src = 'assets/duckduck_dropdown-removebg-preview.png';
  // makeMoneyThree functions
   shrinkThree.style.height = '85px';
 moneyFuncThree.style.display = 'none';
 dropUpThree.src = 'assets/duckduck_dropdown-removebg-preview.png';
 // makeMoneyFour functions
 moneyFuncFour.style.display = 'none';
  shrinkFour.style.height = '85px'
 dropUpFour.src = 'assets/duckduck_dropdown-removebg-preview.png';
 // makeMoneyFive functions
  shrinkThree.style.height  = '85px';
   shrinkFive.style.height = '85px'
 moneyFuncFive.style.display = 'none';
 dropUpFive.src = 'assets/duckduck_dropdown-removebg-preview.png';
 // makeMoneySix functions
  shrinkSix.style.height = '85px';
 moneyFuncSix.style.display = 'none';
 dropUpSix.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySeven functions
 shrinkSeven.style.height = '85px';
 moneyFuncSeven.style.display = 'none';
   dropUpSeven.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyEight functions
 shrinkEight.style.height = '85px';
 moneyFuncEight.style.display = 'none';
dropUpEight.src = 'assets/duckduck_dropdown-removebg-preview.png';
}
function makeMoneyOne(){
   
  // makeMoney
  shrink.style.height = '85px';
  shrink.style.transition = 'height 85px';
  moneyFunc.style.display = 'none';
  dropUp.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyOne functions
  shrinkOne.style.height = '200px';
 moneyFuncOne.style.display = 'block';
 dropUpOne.src = 'assets/dropup.png';
 // makeMoneyTwo functions
 moneyFuncTwo.style.display = 'none';
 shrinkTwo.style.height = '85px';
dropUpTwo.src = 'assets/duckduck_dropdown-removebg-preview.png';
 // makeMoneyThree functions
 moneyFuncThree.style.display = 'none';
  shrinkThree.style.height = '85px';
 dropUpThree.src = 'assets/duckduck_dropdown-removebg-preview.png';
 // makeMoneyFour functions
 moneyFuncFour.style.display = 'none';
  shrinkFour.style.height = '85px';
 dropUpFour.src = 'assets/duckduck_dropdown-removebg-preview.png';
  // makeMoneyFive functions
  shrinkFive.style.height = '85px';
 moneyFuncFive.style.display = 'none';
 dropUpFive.src = 'assets/duckduck_dropdown-removebg-preview.png';
  // makeMoneySix functions
 moneyFuncSix.style.display = 'none';
  shrinkSix.style.height = '85px';
 dropUpSix.src = 'assets/duckduck_dropdown-removebg-preview.png';
  // makeMoneySeven functions
   shrinkSeven.style.height = '85px';
 moneyFuncSeven.style.display = 'none';
 dropUpSeven.src = 'assets/duckduck_dropdown-removebg-preview.png';
  // makeMoneyEight functions
   shrinkEight.style.height = '85px';
 moneyFuncEight.style.display = 'none';
dropUpEight.src = 'assets/duckduck_dropdown-removebg-preview.png';
}

function makeMoneyTwo(){
// makeMoney
moneyFunc.style.display = 'none';
  shrink.style.height = '85px';
  dropUp.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyOne functions
shrinkOne.style.height = '85px';
 moneyFuncOne.style.display = 'none';
  dropUpOne.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyTwo functions
shrinkTwo.style.height = '295px';
moneyFuncTwo.style.display = 'block';
dropUpTwo.src = 'assets/dropup.png';
// makeMoneyThree functions
shrinkThree.style.height = '85px';
 moneyFuncThree.style.display = 'none';
 dropUpThree.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFour functions
 moneyFuncFour.style.display = 'none';
  shrinkFour.style.height = '85px'
 dropUpFour.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFive functions
 shrinkFive.style.height = '85px'
 moneyFuncFive.style.display = 'none';
 dropUpFive.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySix functions
 moneyFuncSix.style.display = 'none';
 shrinkSix.style.height = '85px';
dropUpSix.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySeven functions
 shrinkSeven.style.height = '85px';
 moneyFuncSeven.style.display = 'none';
 dropUpSeven.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyEight functions
 shrinkEight.style.height = '85px';
   moneyFuncEight.style.display = 'none';
dropUpEight.src = 'assets/duckduck_dropdown-removebg-preview.png';
}

function makeMoneyThree(){
// makeMoney
moneyFunc.style.display = 'none';
shrink.style.height = '85px';
dropUp.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyOne
moneyFuncOne.style.display = 'none';
shrinkOne.style.height = '85px';
dropUpOne.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyTwo
moneyFuncTwo.style.display = 'none';
shrinkTwo.style.height = '85px';
dropUpTwo.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyThree
moneyFuncThree.style.display = 'block';
dropUpThree.src = 'assets/dropup.png';
shrinkThree.style.height = '235px';
// makeMoneyFour
shrinkFour.style.height = '85px';
moneyFuncFour.style.display = 'none';
dropUpFour.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFive
shrinkFive.style.height = '85px';
moneyFuncFive.style.display = 'none';
dropUpFive.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySix
 shrinkSix.style.height = '85px';
 moneyFuncSix.style.display = 'none';
 dropUpSix.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySeven
 shrinkSeven.style.height = '85px';
 moneyFuncSeven.style.display = 'none';
 dropUpSeven.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyEight
 shrinkEight.style.height = '85px';
 moneyFuncEight.style.display = 'none';
dropUpEight.src = 'assets/duckduck_dropdown-removebg-preview.png';
}

function makeMoneyFour(){
  //makeMoney
   shrink.style.height = '85px';
moneyFunc.style.display = 'none';
 dropUp.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyOne
 shrinkOne.style.height = '85px';
moneyFuncOne.style.display = 'none';
dropUpOne.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyTwo
moneyFuncTwo.style.display = 'none';
 shrinkTwo.style.height = '85px'
dropUpTwo.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyThree
 moneyFuncThree.style.display = 'none';
 shrinkThree.style.height = '85px'
 dropUpThree.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFour
  moneyFuncFour.style.display = 'block';
  shrinkFour.style.height = '460px'
  dropUpFour.src = 'assets/dropup.png';
// makeMoneyFive
 moneyFuncFive.style.display = 'none';
 shrinkFive.style.height = '85px'
 dropUpFive.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySix
moneyFuncSix.style.display = 'none';
 shrinkSix.style.height = '85px'
dropUpSix.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySeven
 shrinkSeven.style.height = '85px';
 moneyFuncSeven.style.display = 'none';
 dropUpSeven.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyEight
 shrinkEight.style.height = '85px';
 moneyFuncEight.style.display = 'none';
 dropUpEight.src = 'assets/duckduck_dropdown-removebg-preview.png';
}

function makeMoneyFive(){
  // makeMoney
moneyFunc.style.display = 'none';
shrink.style.height = '85px'
 dropUp.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyOne
moneyFuncOne.style.display = 'none';
shrinkOne.style.height = '85px';
dropUpOne.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyTwo
 moneyFuncTwo.style.display = 'none';
 shrinkTwo.style.height = '85px';
dropUpTwo.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyThree
 shrinkThree.style.height = '85px';
moneyFuncThree.style.display = 'none';
dropUpThree.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFour
shrinkFour.style.height = '85px';
moneyFuncFour.style.display = 'none';
dropUpFour.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFive
moneyFuncFive.style.display = 'block';
dropUpFive.src = 'assets/dropup.png';
shrinkFive.style.height = '240px'
// makeMoneySix
shrinkSix.style.height = '85px'
 moneyFuncSix.style.display = 'none';
 dropUpSix.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySeven
shrinkSeven.style.height = '85px'
moneyFuncSeven.style.display = 'none';
dropUpSeven.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyEight
shrinkEight.style.height = '85px'
  moneyFuncEight.style.display = 'none';
dropUpEight.src = 'assets/duckduck_dropdown-removebg-preview.png';
}




function makeMoneySix(){
  // makeMoney (Top container functions onclick of the sixth button)
   shrink.style.height = '85px';
  moneyFunc.style.display = 'none';
  dropUp.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyOne  (First container functions onclick of the sixth button)
moneyFuncOne.style.display = 'none';
shrinkOne.style.height = '85px'
dropUpOne.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyTwo  (Second container functions onclick of the sixth button)
shrinkTwo.style.height = '85px'
moneyFuncTwo.style.display = 'none';
dropUpTwo.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyThree (Third container functions onclick of the sixth button)
shrinkThree.style.height = '85px'
moneyFuncThree.style.display = 'none';
dropUpThree.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFour (Fourth container functions onclick of the sixth button)
 moneyFuncFour.style.display = 'none';
 shrinkFour.style.height = '85px'
 dropUpFour.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFive (Fifth container functions onclick of the sixth button)
shrinkFive.style.height = '85px'
moneyFuncFive.style.display = 'none';
dropUpFive.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySix (Sixth container functions onclick of the sixth button)
moneyFuncSix.style.display = 'block';
shrinkSix.style.height = '260px'
dropUpSix.src = 'assets/dropup.png';
// makeMoneySeven (Seventh container functions onclick of the sixth button)
shrinkSeven.style.height = '85px'
 moneyFuncSeven.style.display = 'none';
 dropUpSeven.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyEight (Eight container functions onclick of the sixth button)
shrinkEight.style.height = '85px'
  moneyFuncEight.style.display = 'none';
  dropUpEight.src = 'assets/duckduck_dropdown-removebg-preview.png';
}



function makeMoneySeven(){
  // makeMoney
   shrink.style.height = '85px';
  moneyFunc.style.display = 'none';
  dropUp.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyOne
moneyFuncOne.style.display = 'none';
dropUpOne.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyTwo
 shrinkTwo.style.height = '85px';
moneyFuncTwo.style.display = 'none';
dropUpTwo.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyThree
 moneyFuncThree.style.display = 'none';
 dropUpThree.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFour
moneyFuncFour.style.display = 'none';
dropUpFour.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFive
shrinkFive.style.height = '85px'
 moneyFuncFive.style.display = 'none';
 dropUpFive.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySix
shrinkSix.style.height = '85px'
moneyFuncSix.style.display = 'none';
dropUpSix.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySeven
  moneyFuncSeven.style.display = 'block';
  dropUpSeven.src = 'assets/dropup.png';
  shrinkSeven.style.height ='195px'
// makeMoneyEight
shrinkEight.style.height = '85px'
moneyFuncEight.style.display = 'none';
dropUpEight.src = 'assets/duckduck_dropdown-removebg-preview.png';
}

function makeMoneyEight(){
  // makeMoney
   shrink.style.height = '85px';
moneyFunc.style.display = 'none';
dropUp.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyOne
 shrinkOne.style.height = '85px';
moneyFuncOne.style.display = 'none';
dropUpOne.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyTwo
 shrinkTwo.style.height = '85px';
moneyFuncTwo.style.display = 'none';
dropUpTwo.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyThree
 shrinkThree.style.height = '85px';
 moneyFuncThree.style.display = 'none';
 dropUpThree.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFour
 shrinkThree.style.height = '85px';
moneyFuncFour.style.display = 'none';
dropUpFour.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyFive
 shrinkFive.style.height = '85px';
shrinkFive.style.height = '85px'
moneyFuncFive.style.display = 'none';
dropUpFive.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySix
shrinkSix.style.height = '85px'
moneyFuncSix.style.display = 'none';
dropUpSix.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneySeven
moneyFuncSeven.style.display = 'none';
shrinkSeven.style.height = '85px'
 dropUpSeven.src = 'assets/duckduck_dropdown-removebg-preview.png';
// makeMoneyEight
  moneyFuncEight.style.display = 'block';
dropUpEight.src = 'assets/dropup.png';
shrinkEight.style.height =' 250px'
shrinkEight.style.transition ='height 0.4s'
}