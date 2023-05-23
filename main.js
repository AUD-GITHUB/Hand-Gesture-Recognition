Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
}
);

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap( function(data_uri) {
        document.getElementById("result").innerHTML = 
         '<img src="'+data_uri+'"/>';
    } );
    Completed 
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Bes2gY9b-/model.json', ModelLoaded);

function ModelLoaded() {
    console.log('Model is Loaded');
}
