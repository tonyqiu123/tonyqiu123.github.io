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


// OBJECT LITERALS 1
// const firstname = "tony"
// const lastname = "qiu"

// const person = {
//   firstname,
//   lastname
// }

// function createPerson(firstname,lastname, age) {
//   let fullname = firstname + " " + lastname
//   return {
//     firstname,
//     lastname,
//     fullname,
//     isSenior: age > 60 ? true : false
//   }
// }

// const p = createPerson("TONY", "qiu", 61)
// console.log(p.isSenior)


// DESTRUCTURING ARRAYS
// const tony = ["age", "height", "gender", "weight"]
// let height = tony[tony.indexOf("height")]
// console.log(height)

// let [,height,,] = tony

// console.log(height)
// console.log(tony.indexOf("height"))


// DESTRUCTURING OBJECTS
// const tony = {
//   height: 177,
//   age: 17,
//   weight: 180,
//   gender: "male"
// } 

// const {height, age, weight, gender } = tony

  // CLASS BODY AND METHODS
//   class tony {
//     constructor(age,height,gender){
//       this.age = age,
//       this.height = height,
//       this.gender = gender
//       console.log(age)
//     }
//     get area() {
//       return this.isSenior()
//     }
//     isSenior() {
//       console.log(this.age > 60 ? true : false)
//     }
//   }

//   let p = new tony(17, 177, "male")

// p.isSenior()


// CLASS INHERITANCE
// class Student {
//   constructor(grade){
//     console.log(grade + " student constructor")
//   }
//   studentID(){
//     return 334058930
//   }
// }

// class UniversityStudent extends Student {
//   constructor(grade) {
//     super(grade)
//     console.log(grade + " university studnt constructor")
//   }
//   studentID() {
//     return super.studentID()
//   }
// }

// let tony = new UniversityStudent("1a")
// console.log(tony.studentID())


// EXPORTS / IMPORTS
// import longjia from './test.js'

// console.log(longjia.age)

// JS ARRAY METHODS
const items = [
  { name: 'bike', price: 100},
  { name: 'bikee', price: 1300},
  { name: 'bdsike', price: 1020},
  { name: 'bidke', price: 1100},
  { name: 'bisfke', price: 1030},
  { name: 'bidske', price: 1200},
  { name: 'bcxike', price: 1100},
  { name: 'biksde', price: 100}
]

const total = items.reduce((currentTotal, item) => {
  return currentTotal + item.price
}, 0)

console.log(total)