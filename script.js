

function colorSwitch(color){
    console.log(color);
    let eye = {
        eyeball: document.getElementById("eyeball"),
        pupilOut: document.getElementById("pupil-out"), pupilIn: document.getElementById("pupil-in"),
        reflection: document.getElementById("reflection")};
    switch(color){
        case 0:
            eye.eyeball.style.borderColor = "#c8e8e8"; //fix this shit
        case 1:
            eye.eyeball.style.borderColor = "#c8e8e8";
        case 2:
            eye.eyeball.style.borderColor = "#C8E8AD";
        case 3:
           // eye.eyeball.style.borderColor = "#C7D6FF";
        case 4:

    }

}