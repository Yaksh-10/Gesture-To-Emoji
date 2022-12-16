//https://teachablemachine.withgoogle.com/models/B-N1VlJr2/

Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});

camera = document.getElementById('camera');
Webcam.attach('#camera')
function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML = '<img id="selfie_image" src="'+data_uri+'">'
    });
}

console.log('ml5version', ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/B-N1VlJr2/model.json", model_loaded)
function model_loaded(){
    console.log('model loaded')
}

function speak(){
    synth = window.speechSynthesis;
    speak_data1 = 'The first prediction is: ' + prdiction1
    speak_data2 = 'The second prediction is:' + prediction2
    utterThis = window.SpeechSynthesisUtterance(speak_data1 + speak_data2)
    synth.speak(utterThis);
}