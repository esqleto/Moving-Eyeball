

function colorSwitch(color){
    console.log(color);
    let eye = {
        eyeball: document.getElementById("eyeball"),
        pupilOut: document.getElementById("pupil-out"), pupilIn: document.getElementById("pupil-in"),
        reflection: document.getElementById("reflection")};
    switch(color){
        case 0:
            eye.eyeball.style.borderColor = "#cdcdcd"; 
            eye.pupilOut.style.backgroundColor = "black";
            eye.pupilIn.style.borderColor = "#0b0b0b";
            eye.reflection.style.borderColor = "#cdcdcd";
            break;
        case 1:
            eye.eyeball.style.borderColor = "#d1c8c1";
            eye.pupilOut.style.backgroundColor = "#0e0803";
            eye.pupilIn.style.borderColor = "#1c0f07";
            eye.reflection.style.borderColor = "#c6ae9e";
            break;
        case 2:
            eye.eyeball.style.borderColor = "#C8E8AD";
            eye.pupilOut.style.backgroundColor = "#1e300f";
            eye.pupilIn.style.borderColor = "#284212";
            eye.reflection.style.borderColor = "#C8E8AD";
            break;
        case 3:
           eye.eyeball.style.borderColor = "#C7D6FF";
           eye.pupilOut.style.backgroundColor = "#2a5b75";
           eye.pupilIn.style.borderColor = "#326e8f";
           eye.reflection.style.borderColor = "#C7D6FF";
           break;
        case 4:
            eye.eyeball.style.borderColor = "#E9D8DE";
            eye.pupilOut.style.backgroundColor = "#a74d6d";
            eye.pupilIn.style.borderColor = "#b95d7e";
            eye.reflection.style.borderColor = "#E9D8DE";
            break;

    }

}