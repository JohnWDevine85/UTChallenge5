// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)
var { DateTime } = require('luxon')
var dt = DateTime.local()
console.log(DateTime.local())
console.log(DateTime.now().toISO())

const schedulerArray = [9, 10, 11, 12, 1, 2, 3, 4, 5]

function createScheduleDisplay (item, i) {
  let getCont = document.getElementById('container')
  // let newP = document.createElement('p')
  let newContent = document.createElement('p').innerHTML += i + ':' + item
  getCont.append(newContent)
}

schedulerArray.forEach(createScheduleDisplay)

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

let div = document.createElement('div')
let p = document.createElement('p')

function getId (id) {
  return document.getElementById(id)
}
function getClass (cls) {
  return document.getElementsByClassName(cls)
}

// getClass(container).append('New Calendar Item', p)

function myFunction () {
  document.getElementById("container").innerHTML = "Hello World";
}
