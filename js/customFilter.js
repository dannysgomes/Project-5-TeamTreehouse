/*
Concept

Compare the search input value on "keyup" against an array of captions. When there is a match, it sets the display to inline block 
and when it is not, it sets the display to none.  

pseudo code

1-get value from search input on keystrike, i.d 'keyup'
2-get all the captions from the anchors
3-loop over captions and compare search input value against caption using 'search' (search is a method on a string).
3a-if its not a match, set display of element to 'none'
3b-if its a match, set display of element to 'inline-block'
*/

// #1
// Get all anchors
const anchors = document.body.getElementsByTagName("a");

// #2
// Get the 'search' input using getElementById
const searchInput = document.getElementById("search");

// #3
// Add event listener so that on every key stroke it executes the function
searchInput.addEventListener("keyup", (e) => {
  // loop over all anchors
  for (var i = 0; i < anchors.length; i++) {
    // for each anchor, get caption using dataset and target caption
    const caption = anchors[i].dataset.caption;
    // If isMatch is -1, it's not a match
    // If not a match, set display to none
    const isMatch = caption.search(e.target.value);
    if (isMatch === -1) {
      anchors[i].style.display = "none";
    } else {
      // If isMatch, set display to unset
      anchors[i].style.display = "inline-block";
    }
  }
});