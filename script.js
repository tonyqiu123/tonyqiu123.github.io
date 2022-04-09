// css root
const r = document.querySelector(':root')

// IsInView effect
function IsInView (ele) {
  return (ele.getBoundingClientRect().top <= window.innerHeight-250)
}

// Character effect
function characterEffect (h1span) {
  h1span.forEach((letter, index) => {
    setTimeout(() => {
      letter.style.transform = "unset";
      if (index > 7) 
          letter.style.color = "var(--signatureGreen)"
    }, (index+5)*35);
})}

// NAVBAR
var nav = document.getElementById("nav-bar")
var prevScrollpos = window.pageYOffset

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset
  if (prevScrollpos > currentScrollPos) {
    nav.style.transform = "unset"
  } else {
    nav.style.transform = "translateY(-80px)"
  }
  prevScrollpos = currentScrollPos
}

