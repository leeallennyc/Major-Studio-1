# Parsons Data Visualization MS 
## Major-Studio-1-fall-2020

### Project 2 - Qualitative

---
### Summary:
For this qualitative visualization project we are looking at the [Smithsonian's archive](https://www.si.edu/openaccess) and [API](http://edan.si.edu/openaccess/apidocs/) through [Open Access Collections](https://collections.si.edu/search/).

* The purpose of the project is to qualitatively represent data using information from the Smithsonian.
---
### Sketches:
---
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/master/Project02/sketches/Eyes_of_The_Smithsonian_sketch02.jpg" width=75% height=75%>

<img src="https://github.com/leeallennyc/Major-Studio-1/blob/master/Project02/sketches/Patents_sketch02.jpg" width=75% height=75%>

<img src="https://github.com/leeallennyc/Major-Studio-1/blob/master/Project02/sketches/Phyllis_Diller_sketch02.jpg" width=75% height=75%>

---
### Second Round Sketch:
---
* After feedback from the previous week, I decided to move forward with "THE EYES OF THE SMITHSONIAN" idea, and continued sketching. Below is the idea that I've been developing. The idea is to be able to search different collections at the Smithsonian through the eyes of the artwork. Color is a way of clustering, and the idea is to be able to click on a type of eye color using the concentric/ringed circle on the upper left as a way of filtering. This would be used in combination with a traditional type search feature on the upper right. When an eye is clicked it brings up the artwork and some of the metadata about object on the left, with a larger eye image outlined by the eye color next to the object.   

<img src="https://github.com/leeallennyc/Major-Studio-1/blob/master/Project02/sketches/Major_Studio_Project2_sketch.png" width=75% height=75%>

* First, I decided to look at the National Portrait Gallery for images of Native Americans and used the search terms below to prepare the JSON file:

```js
const searchBaseURL = "https://api.si.edu/openaccess/api/v1.0/search";
// our search term
const search =  `native american AND unit_code:"NPG" AND online_media_type:"Images" `;
// url we'll use to make our call
const url = `${searchBaseURL}?api_key=${API_KEY}&q=${search}`
```
* This returned approximately 200 object, and I worked through many of them manually to find the images and portraits with color and a distinct aesthetic to cluster the grouping. I chose to return the images from the thumbnail view and screen sizes view only, as my code continuously failed at returned in the largest TIFF sized images.  

Sample of our JSON return:

```js
[
 {
    "objectID": "edanmdm-npg_NPG.99.167.40",
    "title": "A-na-cam-e-gish-ca",
    "artist": "Unidentified Artist",
    "date": "1830s",
    "screenjpg": "https://ids.si.edu/ids/download?id=NPG-NPG_99_167_40Anacamegishca-000002_screen",
    "thumbnailjpg": "https://ids.si.edu/ids/download?id=NPG-NPG_99_167_40Anacamegishca-000002_thumb",
    "identifier": "NPG.99.167.40",
    "filename": "NPG-NPG_99_167_40Anacamegishca-000002.jpg"
  },
  {
    "objectID": "edanmdm-npg_NPG.99.167.41",
    "title": "Wa-bish-kee-pe-nas - The White Pigeon",
    "artist": "Unidentified Artist",
    "date": "1830s",
    "screenjpg": "https://ids.si.edu/ids/download?id=NPG-NPG_99_167_41Wabishkeepenas-000001_screen",
    "thumbnailjpg": "https://ids.si.edu/ids/download?id=NPG-NPG_99_167_41Wabishkeepenas-000001_thumb",
    "identifier": "NPG.99.167.41",
    "filename": "NPG-NPG_99_167_41Wabishkeepenas-000001.jpg"
  },
  {
    "objectID": "edanmdm-npg_NPG.99.167.44",
    "title": "Lap-pa-win-soe",
    "artist": "J. T. Bowen Lithography Company, active 1834 - 1844?",
    "date": "1830s",
    "screenjpg": "https://ids.si.edu/ids/download?id=NPG-NPG_99_167_44Lappawinsoe-000001_screen",
    "thumbnailjpg": "https://ids.si.edu/ids/download?id=NPG-NPG_99_167_44Lappawinsoe-000001_thumb",
    "identifier": "NPG.99.167.44",
    "filename": "NPG-NPG_99_167_44Lappawinsoe-000001.jpg"
  },
  {
    "objectID": "edanmdm-npg_NPG.99.167.45",
    "title": "Tish-co-han",
    "artist": "J. T. Bowen Lithography Company, active 1834 - 1844?",
    "date": "1830s",
    "screenjpg": "https://ids.si.edu/ids/download?id=NPG-NPG_99_167_45Tishcohan-000001_screen",
    "thumbnailjpg": "https://ids.si.edu/ids/download?id=NPG-NPG_99_167_45Tishcohan-000001_thumb",
    "identifier": "NPG.99.167.45",
    "filename": "NPG-NPG_99_167_45Tishcohan-000001.jpg"
  }
]
```
### Additional Coding:

* I had set up an additional branch called `gh-pages` which currently has all the downloaded images and titles on a single page.

Code Sketch to get all the images on a single page:
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/master/Project02/sketches/GH_Pages_Image_Uploads.png" width=75% height=75%>

More work to come around using facial recognition and [RunwayML](https://runwayml.com/)
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/Project02/facial_recognition/runway_ml.png" width=75% height=75%>
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/Project02/facial_recognition/fr_1.png" width=75% height=75%>
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project02/process_documentation/native_american_collections.png" width=75% height=75%>

### Moving Away from Face Recognition and Machine Learning:
* I moved away from the machine learning tasks in Runway ML and began to dive deeper into other collections at the Smithsonian. Using the node scripts from [week 6](https://github.com/leeallennyc/Major-Studio-1/tree/gh-pages/week6/lab06_images/node_image_download) - I created approximately 11 variations to target specific collections across the entire Smithsonian ecosystem. I stored these all in JSON files, and manually created a [folder](https://github.com/leeallennyc/Major-Studio-1/tree/gh-pages/week6/lab06_images/node_image_download/downloads_screen_all) and Custom JSON [file](https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project02/data_eyes.json). 

### Cropping images and creating a new Design Flow:
* After curating across hundreds of images, and dealing with the numerous API issues of missing images or returning the wrong sized image, I began the cropping process to find the "eyes" in these images. I chose to work on 50 images and hand-cropped these: [Here](https://github.com/leeallennyc/Major-Studio-1/tree/gh-pages/docs/Project02/images_cropped). 

### Uploading the images using D3 and the custom JSON file:
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project02/process_documentation/collections_page.png" width=75% height=75%>

* Here, I used D3 and the custom JSON file to load all the images and text using the following code:

```js

// load JSON using d3.json
d3.json('./data_eyes.json')
  .then( json => {
      displayImages(json);
      displayfullImages(json);
  }); 

function displayImages(json){
    let app = d3.select('#app').text('');

    // date ascending
    let data = json.sort( (a,b) => (a.date > b.date) ? 1 : -1 );

    // define "cards" for each item
    let card = app.selectAll('div.smithsonian-card')
                .data(data)
                .join('div')
                .attr('class', 'smithsonian-card');

    // create a div with a class of "image"
    // and populate it with an <img/> tag
    // that contains our filepath
    card.append('div')
        .attr('class', 'image')
        .append('img')
        .attr('src', d => {
            // all our images are in the "images"
            // folder which we will need to 
            // add to our filename first
            return './images_cropped/' + d.filename
        });

    // create a paragraph that will
    // hold the object date
    card.append('p')
        .attr('class', 'object-date')
        .text(d=>d.date);
        
    // create a heading tag
    // that will be the object title
    card.append('h2')
    .attr('class', 'title')
    .text(d=>d.title);
}

function displayfullImages(json){
    // select a <div> with an id of "div.full_image_container"
    // this is where we want all of our
    // images to be added
    let svg = d3.selectAll('div.full_image_container').text('');

    // define "cards" for each item
    let imageContainer = svg.selectAll('div.full_image_container')
                .data(data)
                .join('div')
                .attr('class', 'full_image_container');

    // create a div with a class of "image"
    // and populate it with an <img/> tag
    // that contains our filepath
    svg.append('div')
        .attr('class', 'image')
        .append('img')
        .attr('src', d => {
            // all our images are in the "images"
            // folder which we will need to 
            // add to our filename first
            return './images_screensized/' + d.filename
        });

    // create a paragraph that will
    // hold the object date
    svg.append('p')
        .attr('class', 'object-date')
        .text(d=>d.date);
        
    // create a heading tag
    // that will be the object title
    svg.append('h2')
    .attr('class', 'title')
    .text(d=>d.title);
}
```
### Step back and Redesigning the Flow to prepare for a custom design layout:
* After uploading the images, I then decided to redesign the flow to better understand how one would navigate through the images. I began working in illustrator, and after several attempts came up with the following sketch:

<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project02/process_documentation/image%20board_setup.png" width=75% height=75%>

* The current flow uses allows for ~17 of the 50 cropped eye images to be explored, using Adobe XD to connect the flows:
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project02/process_documentation/Connecting_the_dots.png" width=75% height=75%>

* A sketch of a macro level timeline is also here, which will allow the viewer to explore across various collections and time: 
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project02/process_documentation/timeline_sample_across_collections.png" width=75% height=75%>

Lastly, my goal is to create a custom layout using CSS grid, D3.js, and possibly Scrollama.js. Current iteration of the prototype can be found at this link: [Here](https://xd.adobe.com/view/3d235312-357d-45a6-b08f-6d6a5864ec04-6870/?fullscreen). 













