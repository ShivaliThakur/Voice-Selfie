var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition;

function start(){
    document.getElementById("textbox").innerHTML= " ";
    recognition.start();
}

recognition.onresult= function run(event){
console.log(event);
var Content= event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML=Content;
if (Content == "take my selfie"){
    speak();
}
else{
    replyBack();
}
}

function speak(){
    var synth= window.speechSynthesis;
    speak_data= "Taking Your Selfie In 5 Seconds.";
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function(){
        take_selfie();
        save();

    }, 5000);
}

camera= document.getElementById("camera");
Webcam.set({
    image_format: "png",
    png_quality: 100


});

function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img src="'+ data_uri +'" id= "selfie_image" >';

    })
}

function save(){
    link = document.getElementById("link");
    image= document.getElementById("selfie_image").src;
    link.href= image;
    link.click();
}

function replyBack(){
    synth= window.speechSynthesis;
    speak_data= "click on start if you want to take a selfie and say take my selfie";
    var utter_this= new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
}