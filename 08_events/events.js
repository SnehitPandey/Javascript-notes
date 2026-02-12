//all the events run sequetially executed invoked on any kind of activity.
// don't inject the onlick directly in html not a good practice

//attachEvent ()
// jQuery -on

// document.getElementById('pic5').onclick=function(){
//     alert('titan!!!')
// }

// document.getElementById('images').addEventListener('click', function(e){
//     console.log("clicked inside ul");
// },true);

// document.getElementById('pic5').addEventListener('click', function(e){
//     console.log("clicked pic");
//     e.stopPropagation(); // stops the bubbling
// },false);

// document.getElementById("github").addEventListener('click', function (e){
//     console.log("github clicked");
//     e.stopPropagation();
//     e.preventDefault();//stops default action
// },false);

//event propogation - goes from inside out meaning 1st inside event is activated then it moves outside this is called bubbling
//event bubbling

//false/default -> goes from inside out using propogation
//true/capturing mode -> triggers the event from outside to inside/ top to bottom

//type, timestamp, defaultPrevented, target, twoElement, srcElement, CurrentTarget,
//clientX, clientY, screenX, screenY
//altkey, ctrlket, shiftkey, keyCode

document.getElementById("ul").addEventListener(
  "click",
  function (e) {
    console.log(e.target.parentNode);
    console.log(e.target.tagName);

    if (e.target.tagName === "IMG") {
        console.log(e.target.id);
      let removeIt = e.target.parentNode
      removeIt.remove();
    }

    // removeIt.parentNode.removeChild(removeIt);
  },false);
