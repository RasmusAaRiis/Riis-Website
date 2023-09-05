const photoCount = 9;
var currentPhoto = 1;

function NextImage(){
    if(currentPhoto >= photoCount) {
        currentPhoto = 1;
    } else {
        currentPhoto++;
    }

    var obj = document.getElementById("DisplayImage");
    obj.src = "Photos/" + currentPhoto + ".jpg"
}

function PreviousImage(){
    if(currentPhoto <= 1) {
        currentPhoto = photoCount;
    } else {
        currentPhoto--;
    }

    var obj = document.getElementById("DisplayImage");
    obj.src = "Photos/" + currentPhoto + ".jpg"
}