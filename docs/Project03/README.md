# Parsons Data Visualization MS 
## Major-Studio-1-fall-2020

### Project 3 - Interactive

---
### Summary:
For this interactive visualization project we are looking at the [Smithsonian's archive](https://www.si.edu/openaccess) and [API](http://edan.si.edu/openaccess/apidocs/) through [Open Access Collections](https://collections.si.edu/search/).

* The purpose of this project is to build on [Project 1](https://github.com/leeallennyc/Major-Studio-1/tree/gh-pages/docs/Project01) and [Project 2](https://github.com/leeallennyc/Major-Studio-1/tree/gh-pages/docs/Project02), and create an interactive visualization based on data from the Smithsonian API. 
---
### Evolution of Process:
---
* Project 1 -- Quantitative Inspirational Work
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project01/Representing_Eye_Color.png" width=75% height=75%>

* Project 2 -- Qualitative Mockup and Prototype - [Link here](https://xd.adobe.com/view/3d235312-357d-45a6-b08f-6d6a5864ec04-6870/?fullscreen)
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project02/process_documentation/Connecting_the_dots.png" width=75% height=75%>

* Project 3 -- Interactivity / Storytelling [Link Here](https://leeallennyc.github.io/Major-Studio-1/Final/)
<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project03/process_documentation/EOS_Title.png" width=75% height=75%>

---
Process work:
* After integrating feedback from the protype in Project 2, I changed the timeline to better accommodate vertical scrolling and the flow. Using scrollama.js and D3.js for convenience of manipulating the DOM elements, I manually created ~50 images from across 9 Museums.

<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project03/process_documentation/MS_vert_timeline.png" width=75% height=75%>

* And the manual design of each of the 50 samples:

<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project03/process_documentation/Manual_Design_flow.png" width=75% height=75%>

---
Code:

* Here, I decided to use [Scrollama.js](https://github.com/russellgoldenberg/scrollama#scrollamajs) and [D3.js](https://d3js.org/) for convenience. The `index.js` [file](https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Final/index.html) is currently monolithic and needs to be refactored.  

* Each step in the transition of images is created in the following way and links to the Smithsonian Archive for each image when clicked.
```js
<article>
          <!-- Cropped Eye #1 -->
          <div class="step" data-scrollama-index="0">
            <a target= "_blank" href="https://www.si.edu/object/pseudosquilla-sp:nmnhinvertebratezoology_14917695?edan_q=nmnhinvertebratezoology_14917695&destination=/search/all&searchResults=1&id=nmnhinvertebratezoology_14917695">
              <img src="cropped_images/croppedAsset_2018.png" width ="50%">
            </a>
          </div>
          
          <!-- Cropped Eye #2 -->
          <div class="step" data-scrollama-index="1">
            <a target= "_blank" href="https://www.si.edu/object/unipeltata:nmnhinvertebratezoology_13284696?edan_q=nmnhinvertebratezoology_13284696&destination=/search/all&searchResults=1&id=nmnhinvertebratezoology_13284696">
              <img src="cropped_images/croppedAsset_2017.png" width ="50%">
            </a>
          </div>
```
---
Future work:

* I would like to incorporate a color representation and interactive timeline for future iterations.

<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project03/process_documentation/Next_steps_1.png" width=75% height=75%>

<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project03/process_documentation/Next_steps_2.png" width=75% height=75%>

<img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project03/process_documentation/Next_steps_3.png" width=75% height=75%>

* Also, the creation of the GAN, may enable me to produce a "eye detection" algorithm for recognizing "eyes" in future artwork. This still needs to be explored and is beyond the scope of the project.

 <img src="https://github.com/leeallennyc/Major-Studio-1/blob/gh-pages/docs/Project03/process_documentation/The_Eyes_of_the_Smithsonian_draft1.jpg" width=75% height=75%>













