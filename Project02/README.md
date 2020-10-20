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
* After feedback from the previous week, I decided to move forward with "THE EYES OF THE SMITHSONIAN" idea, and continued sketching. Below is the idea that I've been developing. 

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

More work to come.




