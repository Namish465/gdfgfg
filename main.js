
Status = "";
objects = "";
function preload()
{
    
}

function setup()
{
   canvas = createCanvas(480 , 380);
   canvas.center();
    
   video = createCapture(VIDEO);
   video.hide();
}

function draw()
{

 image(video , 0 , 0 ,480 ,380);

 for ( i = 0; i < objects ; i++)
 {
  confidence = floor(objects[i].confidence * 100);
    label = objects[i].label;     
    fill("#f50213");
    noFill();
    text(label + "" + confidence + "%" , objects[i].x + 15 , objects[i].y + 15);
    stroke( "#f50213");
    rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);

    if(objects[i].label == user_input)
    {
      video.stop()
      document.getElementById("status").innerHTML = "object mentioned found!";

      var SpeechRecognition  = window.webkitSpeechRecognisation;
       
      objects[i].label.transcript ;

    }
 }
}

function start()
{

    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
  user_input = document.getElementById("input").value 
  objectDetector.detect(gotResult);
}

function modelLoaded()
{

console.log("model is loaded");    
Status = "true" ;
}

function gotResult( error , results )
{
  if(error)
  {
    console.log(error);
  }
   
  console.log(results);
  objects = results;
}