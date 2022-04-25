Webcam.set ({
    width: 300,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});

//----------------------------------------------//

Webcam.attach('#webcam');

//----------------------------------------------//

function clickImg() {
Webcam.snap( function(data_uri) {
 document.getElementById('output').innerHTML = 
  '<img src="'+data_uri+' " id="captured_img"/>';
} );
}

//----------------------------------------------//

console.log("Ml 5 version - ",ml5.version);

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/Uy7O78vYc/model.json",modelLoaded);

function modelLoaded() {
    console.log("Model has loaded");
}

//----------------------------------------------//
function IdentifyObj() {
    img = document.getElementById("captured_img");
    classifier.classify(img , getresult);
}

//----------------------------------------------//
function getresult(error,results) {
    if(error) 
{
    console.error(error);
}
else {
    console.log("results :",results);
    document.getElementById("object").innerHTML = results[0].label ;
    document.getElementById("accuracy").innerHTML = (results[0].confidence.toFixed(2))* 100 + "%" ;
}
}
