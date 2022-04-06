function startClassification()
{
    navigator.mediaDevices.gotUserMedia({audio:true});
    classifier = ml5.soundClassifier('',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);                        
}