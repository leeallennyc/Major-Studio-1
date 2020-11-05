let img;


function setup() {
  createCanvas(2500,1100);
  img = loadImage('https://github.com/leeallennyc/Major-Studio-1/blob/master/Project01/Representing_Eye_Color.png'); // Load the image
}

function draw() {
  // Displays the image at its actual size at point (0,0)
  // image(img, 0, 0);
  // Displays the image at point (0, height/2) at half size
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}







// var data;

// function preload() {
//     // load data from Museaum JSON file
//     data = loadJSON('./data/data.json');
// }

// // Constants
// const Y_AXIS = 1;
// const X_AXIS = 2;
// let w1 = 75;
// let h1 = 100;
// let w2 = 500;
// let h2 = 200;
// let xpos1 = 600;
// let ypos1 = 3800;
// let xpos2 = 0;
// let ypos2 = 3800;
// let offsetHorz = 80;
// let offsetVert = -210;
// let colorValues = ["R", "G", "B"];
// let colorMin = 0;
// let colorMax = 255;

// let c1a, c1b, c1c, c2a, c2b, c3, c4a, c4b, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16;
// let martinScales = ["c1a", "c1b", "c1c", "c2a", "c2b", "c3", "c4a", "c4b", "c5", "c6", "c7", "c8","c9","c10","c11","c12","c13","c14","c15","c16"];
// let emptyArray = [];
// let pupilCount = [{
//     c1aCount: "0",
//     c1bCount: "0",
//     c1cCount: "0",
//     c2aCount: "0",
//     c2bCount: "0",
//     c3Count: "9",
//     c4aCount: "0",
//     c4bCount: "1",
//     c5Count: "2",
//     c6Count: "6",
//     c7Count: "3",
//     c8Count: "3",
//     c9Count: "0",
//     c10Count: "0",
//     c11Count: "0",
//     c12Count: "0",
//     c13Count: "0",
//     c14Count: "0",
//     c15Count: "0",
//     c16Count: "1"
// }];

// function setup() {
//     createCanvas(4000, 4000);
//     background("floralwhite");


//   background(255);
//   noLoop();


// // Define Martin-Schultz eye color scale values as hex
// c1a = color("#617fa3"), // Light blue hex
// c1b = color("#5b8598"), // Light blue 2 hex
// c1c = color("#567f99"), // Medium blue hex
// c2a = color("#507e8d"), // Darker blue hex
// c2b = color("#47697d"), // Darker blue 2 hex
// c3 = color("#586165"), // Blue-Gray hex
// c4a = color("#727374"), // Gray hex
// c4b = color("#5c6761"), // Gray hex
// c5 = color("#586669"), // Gray-Blue with Brown spots hex
// c6 = color("#5e695e"), // Gray-Green with Brown spots hex
// c7 = color("#646349"), // Green hex
// c8 = color("#5f5a46"), // Green with Brown spots hex
// c9 = color("#655b3d"), // Light Brown/ Hazel1 hex
// c10 = color("#5f5739"), // Light Brown/ Hazel2 hex
// c11 = color("#585035"), // Light Brown/ Hazel3 hex
// c12 = color("#504630"), // Medium Brown1 hex
// c13 = color("#4d472e"), // Medium Brown2 hex
// c14 = color("#413827"), // Dark Brown1 hex
// c15 = color("#272521"), // Dark Brown2 hex
// c16 = color("#0d0c05") // Dark Brown/Black hex

//     noLoop();
// }

// function draw() {
//   // Mapping width to percentage
//   // let widthMap = map()

//     // for(let i = 0; i < martinScales.length; i++){
//     //     sumXpos = function (xpos, offset) {
//     //         let value = xpos + (offset*[i])
//     //         return value;
//     //     }
//     //     // emptyArray.push(i);
//     //     console.log(emptyArray);
//     // }
//     // console.log(sumXpos(50, 2));
//     // console.log(emptyArray);

// // console.log(data[0].pupils[0]); 

//  // Foreground color 

// //   Foreground Horizontal Gradients
//     setGradientH(xpos1, ypos1, w1, h1, c1a, c1b, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 1), ypos1, w1, h1, c1b, c1c, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 2), ypos1, w1, h1, c1c, c2a, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 3), ypos1, w1, h1, c2a, c2b, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 4), ypos1, w1, h1, c2b, c3, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 5), ypos1, w1, h1, c3, c4a, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 6), ypos1, w1, h1, c4a, c4b, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 7), ypos1, w1, h1, c4b, c5, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 8), ypos1, w1, h1, c5, c6, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 9), ypos1, w1, h1, c6, c7, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 10), ypos1, w1, h1, c7, c8, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 11), ypos1, w1, h1, c8, c9, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 12), ypos1, w1, h1, c9, c10, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 13), ypos1, w1, h1, c10, c11, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 14), ypos1, w1, h1, c11, c12, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 15), ypos1, w1, h1, c12, c13, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 16), ypos1, w1, h1, c13, c14, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 17), ypos1, w1, h1, c14, c15, X_AXIS);
//     setGradientH(xpos1 + (offsetHorz * 18), ypos1, w1, h1, c15, c16, X_AXIS);
//     // setGradientH(xpos1, 100, 2900, h, c1a, c16, X_AXIS);


// // let coswave = [];

// //     for (let i = 0; i < width; i++) {
// //         let amount = map(i, 0, width, 0, PI);
// //         coswave[i] = abs(cos(amount));
// //     } 

// // // Draw Array 
// //     let y1 = 0;
// //     let y2 = height / 25;
// //     y1 = y2;
// //     y2 = y1 + y1;
// //     for (let i = 0; i < width; i +=20) {
// //       stroke((coswave[i] * 255) / 4);
// //     line(i, y1, i, y2);
// //     }
    
//   // Foreground Vertical Gradients
//   setGradientV(xpos2, ypos2, w2, h2, c1b, c1a, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 1), w2, h2, c1c, c1b, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 2), w2, h2, c2a, c1c, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 3), w2, h2, c2b, c2a, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 4), w2, h2, c3, c2b, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 5), w2, h2, c4a, c3, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 6), w2, h2, c4b, c4a, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 7), w2, h2, c5, c4b, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 8), w2, h2, c6, c5, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 9), w2, h2, c7, c6, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 10), w2, h2, c8, c7, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 11), w2, h2, c9, c8, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 12), w2, h2, c10, c9, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 13), w2, h2, c11, c10, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 14), w2, h2, c12, c11, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 15), w2, h2, c13, c12, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 16), w2, h2, c14, c13, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 17), w2, h2, c15, c14, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 18), w2, h2, c16, c15, Y_AXIS);
//   setGradientV(xpos2, ypos2 + (offsetVert * 19), w2, h2, c16, c16, Y_AXIS);


// // Horizontal gradient
// function setGradientH(xpos1, ypos1, w1, h1, c1a, c1b, axis) {
//     noFill();
//     if (axis === X_AXIS) {
//     // Left to right gradient
//     for (let i = xpos1; i <= xpos1 + w1; i++) {
//         let inter = map(i, xpos1, xpos1 + w1, 0, 1);
//         let grad1h= lerpColor(c1a, c1b, inter);
//         let grad2h= lerpColor(c1b, c1c, inter);
//         let grad3h= lerpColor(c1c, c2a, inter);
//         let grad4h= lerpColor(c2a, c2b, inter);
//         let grad5h= lerpColor(c2b, c3, inter);
//         let grad6h= lerpColor(c3, c4a, inter);
//         let grad7h= lerpColor(c4a, c4b, inter);
//         let grad8h= lerpColor(c4b, c5, inter);
//         let grad9h= lerpColor(c5, c6, inter);
//         let grad10h = lerpColor(c6, c7, inter);
//         let grad11h = lerpColor(c7, c8, inter);
//         let grad12h = lerpColor(c8, c9, inter);
//         let grad13h = lerpColor(c9, c10, inter);
//         let grad14h = lerpColor(c10, c11, inter);
//         let grad15h = lerpColor(c11, c12, inter);
//         let grad16h = lerpColor(c12, c13, inter);
//         let grad17h = lerpColor(c13, c14, inter);
//         let grad18h = lerpColor(c14, c15, inter);
//         let grad19h = lerpColor(c15, c16, inter); 

//         stroke(
//             grad1h,
//             grad2h, 
//             grad3h, 
//             grad4h, 
//             grad5h,        
//             grad6h,
//             grad7h,
//             grad8h,
//             grad9h,
//             grad10h,
//             grad11h, 
//             grad12h, 
//             grad13h, 
//             grad14h, 
//             grad15h,
//             grad16h,
//             grad17h, 
//             grad18h,
//             grad19h
//             );
//         line(i, ypos1, i, ypos1 + h1);
//         }
//     }
// }


// // Vertical Gradient
// function setGradientV(xpos2, ypos2, w2, h2, c1a, c1b, axis) {
//     noFill();
//     if (axis === Y_AXIS) {
//     // Up and down
//     for (let j = ypos2; j <= ypos2 + h2; j++) {
//         let inter = map(j, ypos2, ypos2 + h2, 0, 1);
//         let grad1v = lerpColor(c1a, c1b, inter);
//         let grad2v = lerpColor(c1b, c1c, inter);
//         let grad3v = lerpColor(c1c, c2a, inter);
//         let grad4v = lerpColor(c2a, c2b, inter);
//         let grad5v = lerpColor(c2b, c3, inter);
//         let grad6v = lerpColor(c3, c4a, inter);
//         let grad7v = lerpColor(c4a, c4b, inter);
//         let grad8v = lerpColor(c4b, c5, inter);
//         let grad9v = lerpColor(c5, c6, inter);
//         let grad10v = lerpColor(c6, c7, inter);
//         let grad11v = lerpColor(c7, c8, inter);
//         let grad12v = lerpColor(c8, c9, inter);
//         let grad13v = lerpColor(c9, c10, inter);
//         let grad14v = lerpColor(c10, c11, inter);
//         let grad15v = lerpColor(c11, c12, inter);
//         let grad16v = lerpColor(c12, c13, inter);
//         let grad17v = lerpColor(c13, c14, inter);
//         let grad18v = lerpColor(c14, c15, inter);
//         let grad19v = lerpColor(c15, c16, inter); 

//         stroke(
//             grad1v,
//             grad2v, 
//             grad3v, 
//             grad4v, 
//             grad5v,        
//             grad6v,
//             grad7v,
//             grad8v,
//             grad9v,
//             grad10v,
//             grad11v, 
//             grad12v, 
//             grad13v, 
//             grad14v, 
//             grad15v,
//             grad16v,
//             grad17v, 
//             grad18v,
//             grad19v
//             );
//         line(xpos2, j, xpos2 + w2, j);
//         }
//     }
// }

// }