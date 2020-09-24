/*
  Exercise 6
  DOM manipulation with vanilla JS
*/

// Task
// What does DOM stand for?
// Document Object Model

// Task
// Open the file index.html in AWS Cloud9. Click "Preview" > "Preview File index.html". (Note that you can open it in a new window). What do you see?
// Small pink rectangluar shape on the far level side of the screen.

// Task
// Delete the div with the class rectangle from index.html and refresh the preview.

// var divElement = document.querySelector(".rectangle");
// divElement.remove(divElement);

// Task
// What does the following code do?

// Stores the selection of the viz class element in a variable called viz
const viz = document.body.querySelector(".viz");

// Logs the value of viz and it's children
console.log(viz, viz.children);

// Creates a function called addChildToViz which creates a new rectangle
// with a new random height, and appends the new rectangle to the Viz class.
const addChildToViz = () => {
  const newChild = document.createElement("div");
  newChild.className = "rectangle";
  newChild.style.height = Math.random() * 100 + "px";
  viz.appendChild(newChild);
};

// Everytime the screen is clicked it another rectangle is produced.
viz.addEventListener("click", addChildToViz);

// Task
// Where can you see the results of the console.log below? How is it different from in previous exercises?
// The console.log(data) below returns the JSON object to the console. 


// The following code was adapted from this tutorial: 
// https://attacomsian.com/blog/using-javascript-fetch-api-to-get-and-post-data


// Create node helper function
const createNode = (elem) => {
  return document.createElement(elem);
}

// Append node helper function
const appendNode = (parent, elem) => {
  parent.appendChild(elem);
}

// Select unordered list tag with id "data" and store in "ul" variable
const ul = document.querySelector('#data');


// Gets JSON data from iris_json file, and pulls out class, height, width and appends li to #data element
function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      data.map((data) => {
        //  create the elements
        let li = createNode ('li'),
        span = createNode ('span');
        span.innerText = `${data.class} | ${data.petallength} | ${data.petalwidth} | ${data.sepallength} | ${data.sepalwidth}`;
        // append all elements
        appendNode(li, span);
        appendNode(ul, li);
      });
      console.table(data);
    });
}
drawIrisData();

// Task
// Modify the code above to visualize the Iris dataset in the preview of index.html.
// Feel free to add additional CSS properties in index.html, or using JavaScript, as you see fit.
