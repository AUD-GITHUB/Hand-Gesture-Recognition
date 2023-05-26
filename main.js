Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90,
    dest_width: 350,
	dest_height: 300,
	crop_width: 150,
	crop_height: 150
}
);

camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML =
            '<img id= "resultImg" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Bes2gY9b-/model.json', ModelLoaded);

function ModelLoaded() {
    console.log('Model is Loaded');
}

function check() {
    img = document.getElementById("resultImg");
    classifier.classify(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        prediction = results[0].label;
        if (results[0].label == 'Victory') {
            document.getElementById("update_gesture").innerHTML = "&#9996";
            speech = 'What a ' + prediction;
        }
        if (results[0].label == 'Amazing') {
            document.getElementById("update_gesture").innerHTML = "&#128076;";
            speech = 'Looks ' + prediction;
        }
        if (results[0].label == 'Best') {
            document.getElementById("update_gesture").innerHTML = "&#128077;";
            speech = 'Its the ' + prediction;
        }
        if (results[0].label == 'Wave Hand') {
            document.getElementById("update_gesture").innerHTML = "&#128400;";
            speech = 'Greetings';
        }
        speak();
        function speak() {
            var synth = window.speechSynthesis;
            var main_speech = new SpeechSynthesisUtterance(speech);
            synth.speak(main_speech);
        }
    }
}
