# Parsons Data Visualization MS 
## Major-Studio-1-fall-2020

### Project 1 - Quantitative

---
### Summary:
For this quantitative visualization project we are looking at the [Smithsonian's archive](https://www.si.edu/openaccess) and [API](http://edan.si.edu/openaccess/apidocs/) through [Open Access Collections](https://collections.si.edu/search/).

* The purpose of the project is to quantitatively represent data using information from the Smithsonian.
---
I've chosen a specific object from the Smithsonian's National Museum of American History called a [Color Guide](https://www.si.edu/object/color-guide-artificial-eye-prosthesis:nmah_1119630), which was used a tool for matching the color of the eye when making prosthetic eyes. 

My first goal was to create a custom JSON file to represent this object digitally. I created a nested JSON file and used a color picker in Photoshop to extract all the meaningful data from the colors used to re-create each pupil:

A sample of the metadata in the JSON file:

```
"pupils": [
            {
                "id": "pupil 01",
                "outerRadius": "#2d363f", 
                "color2": "#686e67", 
                "color3": "#afaa75",
                "color4": "#676150", 
                "innerRadius": "#5c5f55",
                "martinScaleKey": "c5",
                "martinScaleValue":"#59676a",
                "pupilR": "89",
                "pupilG": "103",
                "pupilB": "106"
            },
            { 
                "id": "pupil 02",
                "outerRadius": "#7d703b", 
                "color2": "#5d5f57", 
                "color3": "#373739",
                "innerRadius": "#2c3137",
                "martinScaleKey": "c6",
                "martinScaleValue": "#5f6a5f",
                "pupilR": "95",
                "pupilG": "106",
                "pupilB": "95"
            },
            {
                "id": "pupil 03",
                "outerRadius": "#63614b",
                "color2": "#3f464b", 
                "color3": "#60635e",
                "color4": "#433f36", 
                "innerRadius": "#4f504c",
                "martinScaleKey": "c3",
                "martinScaleValue": "#586165",
                "pupilR": "88",
                "pupilG": "97",
                "pupilB": "101"
            }
```

My goal is to better understand the numeric representation of these colored eyes as it relates to a standard tool in Physcial Anthropology called the [MartinSchultz scale](https://en.wikipedia.org/wiki/Martin%E2%80%93Schultz_scale). We will be looking at the quantitative color measurements for each pupil color and where on the spectrum the pupil colors collectively fall in relation to eye color in world population. 

* The original idea was to use a histogram to read the color measurments, but I've since adapted that to use a radial chart for each pupil. 
---
## Code:

Initial early sketch using P5.js.

```
var data;

function preload() {
    // load data from Museaum JSON file
    data = loadJSON('./data/data.json');
}

// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let w = 200;
let h = 1500;
let offset = 10;
let c1a, c1b, c1c, c2a, c2b, c3, c4a, c4b, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16;

function setup() {
    createCanvas(5000, 2000);
    background("floralwhite");

// Define Martin-Schultz eye color scale

c1a = color("#617fa3"), // Light blue
c1b = color("#5b8598"), // Light blue 2
c1c = color("#567f99"), // Medium blue
c2a = color("#507e8d"), // Darker blue
c2b = color("#47697d"), // Darker blue 2
c3 = color("#586165"), // Blue-Gray
c4a = color("#727374"), // Gray
c4b = color("#5c6761"), // Gray 
c5= color("#59676a"), // Gray-Blue with Brown spots
c6 = color("#5f6a5f"), // Gray-Green with Brown spots
c7 = color("#646349"), // Green
c8 = color("#5f5a46"), // Green with Brown spots
c9 = color("#655b3d"), // Light Brown/ Hazel1
c10 = color("#5f5739"), // Light Brown/ Hazel2
c11 = color("#585035"), // Light Brown/ Hazel3
c12 = color("#504630"), // Medium Brown1
c13= color("#4d472e"), // Medium Brown2
c14 = color("#413827"), // Dark Brown1
c15 = color("#272521"), // Dark Brown2
c16 = color("#0d0c05") // Dark Brown/Black

    noLoop();
}

function draw() {
  // Foreground
    setGradient(100, 200, w, h, c1a, c1b, X_AXIS);
    setGradient(300, 200, w, h, c1b, c1c, X_AXIS);
    setGradient(500, 200, w, h, c1c, c2a, X_AXIS);
    setGradient(700, 200, w, h, c2a, c2b, X_AXIS);
    setGradient(900, 200, w, h, c2b, c3, X_AXIS);
    setGradient(1100, 200, w, h, c3, c4a, X_AXIS);
    setGradient(1300, 200, w, h, c4a, c4b, X_AXIS);
    setGradient(1500, 200, w, h, c4b, c5, X_AXIS);
    setGradient(1700, 200, w, h, c5, c6, X_AXIS);
    setGradient(1900, 200, w, h, c6, c7, X_AXIS);
    setGradient(2100, 200, w, h, c7, c8, X_AXIS);
    setGradient(2300, 200, w, h, c8, c9, X_AXIS);
    setGradient(2500, 200, w, h, c9, c10, X_AXIS);
    setGradient(2700, 200, w, h, c10, c11, X_AXIS);
    setGradient(2900, 200, w, h, c11, c12, X_AXIS);
    setGradient(3100, 200, w, h, c12, c13, X_AXIS);
    setGradient(3300, 200, w, h, c13, c14, X_AXIS);
    setGradient(3500, 200, w, h, c14, c15, X_AXIS);
    setGradient(3700, 200, w, h, c15, c16, X_AXIS);
    // setGradient(100, 140, 1000, 50, c1, c6, X_AXIS);
}

function setGradient(x, y, w, h, c1a, c1b, axis) {
    noFill();

    if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let grad1 = lerpColor(c1a, c1b, inter);
        let grad2 = lerpColor(c1b, c1c, inter);
        let grad3 = lerpColor(c1c, c2a, inter);
        let grad4 = lerpColor(c2a, c2b, inter);
        let grad5 = lerpColor(c2b, c3, inter);
        let grad6 = lerpColor(c3, c4a, inter);
        let grad7 = lerpColor(c4a, c4b, inter);
        let grad8 = lerpColor(c4b, c5, inter);
        let grad9 = lerpColor(c5, c6, inter);
        let grad10 = lerpColor(c6, c7, inter);
        let grad11 = lerpColor(c7, c8, inter);
        let grad12 = lerpColor(c8, c9, inter);
        let grad13 = lerpColor(c9, c10, inter);
        let grad14 = lerpColor(c10, c11, inter);
        let grad15 = lerpColor(c11, c12, inter);
        let grad16 = lerpColor(c12, c13, inter);
        let grad17 = lerpColor(c13, c14, inter);
        let grad18 = lerpColor(c14, c15, inter);
        let grad19 = lerpColor(c15, c16, inter);  

        stroke(
            grad1,
            grad2, 
            grad3, 
            grad4, 
            grad5,        
            grad6,
            grad7,
            grad8,
            grad9,
            grad10,
            grad11, 
            grad12, 
            grad13, 
            grad14, 
            grad15,
            grad16,
            grad17, 
            grad18,
            grad19
            );
        line(i, y, i, y + h);
        }
    }
}
```
## Image of first sketch is here:

![](https://github.com/leeallennyc/Major-Studio-1/blob/master/Project01/sketches/ArtificialEye_Sketch.png "Artificial Eye")

## Continuation
* After considerable attention working on the lerpColor function in p5.js, I worked on getting the values to align with the world population percentages. Lots of iterations happened here, and the the idea of looking across multiple collections according to eye color emerged. I also changed a few things related in the design. Did away with the radial chart idea to indicate the color values of RGB, as it took up too much space and wasn't readable. More iterations will be necessary to get this to a presentable state in code. Currently the project is in Illustrator. 

* Presentation iteration is below:

## Final Presentation
![](https://github.com/leeallennyc/Major-Studio-1/blob/master/Project01/Representing_Eye_Color.png "Representing Eye Color")




