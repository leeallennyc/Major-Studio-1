// "d3" is globally available
// because we have the d3 code
// in our index.html file


// load JSON using d3.json
d3.json('./data_eyes.json')
  .then( json => {
      // execute our 
      // display images function
      displayImages(json);
      displayfullImages(json);
  }); 


// this function creates all
// of our DOM elements
function displayImages(json){
    // select a <div> with an id of "app"
    // this is where we want all of our
    // images to be added
    let app = d3.select('#app').text('');

    // take our JSON and sort it
    // date descending
    // let data = json.sort( (a,b) => (b.date > a.date) ? 1 : -1 );
    // // date ascending
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

    // take our JSON and sort it
    // date descending
    // let data = json.sort( (a,b) => (b.date > a.date) ? 1 : -1 );
    // // date ascending
    // let data = json.sort( (a,b) => (a.date > b.date) ? 1 : -1 );

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