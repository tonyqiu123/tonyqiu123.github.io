function IsInView (ele) {
  return (ele.getBoundingClientRect().top <= window.innerHeight-150)
}

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
};

