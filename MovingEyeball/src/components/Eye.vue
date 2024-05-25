<script>
export default{
  data() {
    return {
      buttonColors: ["black","#1c0f07","#284212","#326e8f","#b95d7e"],
      
      eyeColor: {
        eyeball: ["#cdcdcd", "#d1c8c1", "#C8E8AD", "#C7D6FF", "#E9D8DE"],
        pupilOut: ["black", "#0e0803", "#1e300f", "#2a5b75", "#a74d6d"], pupilIn: ["#0b0b0b", "#1c0f07", "#284212", "#326e8f", "#b95d7e"],
        reflection: ["#cdcdcd", "#c6ae9e", "#C8E8AD", "#C7D6FF", "#E9D8DE"]},
        
        eyeColorCurrent: {
          eyeball: "#cdcdcd",
          pupilOut: "black", pupilIn: "#0b0b0b",
          reflection: "#cdcdcd"},
      }
    },
    methods: {
    ChangeColor(option){
      this.eyeColorCurrent.eyeball = this.eyeColor.eyeball[option]
      this.eyeColorCurrent.pupilOut = this.eyeColor.pupilOut[option]
      this.eyeColorCurrent.pupilIn = this.eyeColor.pupilIn[option]
      this.eyeColorCurrent.reflection = this.eyeColor.reflection[option]
    },
  }
  }
</script>

<template>
    <section class="eye-color-section">
      <ul v-for="(color, index) in buttonColors" :key="index">
        <button :style="{'background-color': color}" class="color-btn" @click="ChangeColor(index)"></button>
      </ul>
    </section>

    <div class="obj-1" :style="{'border-color': eyeColorCurrent.eyeball}">
        <section class="pupil" >
            <div class="obj-3" id="reflection" :style="{'border-color': eyeColorCurrent.reflection}" ></div>
        <div class="obj-2" id="pupil-out" :style="{'background-color': eyeColorCurrent.pupilOut}">
            <div class="obj-4" id="pupil-in" :style="{'border-color': eyeColorCurrent.pupilIn}"></div>
        </div>
        </section>
    </div>

</template>

<style scoped>
.eye-color-section{
    position: static;
    margin: 10px;
    background-color: rgb(207, 207, 207);
    border: 3px solid white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 110px;
    width: 1000px;
    border-radius: 50px;
}
.color-btn{
    height: 100px;
    width: 100px;
    border: none;
    border-radius: 100%;
    transition: all 0.3s;
}
.color-btn:hover{
    transform: scale(105%);
    opacity: 90%;
}
.color-btn:active{
    transform: scale(100%);
    opacity: 100%;
}


.obj-1 {
    position: static;
    z-index: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    background-color: whitesmoke;
    border: 15px solid #cdcdcd;
    border-radius:50%;
    height: 500px;
    width: 500px;
}
.obj-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    background-color: rgb(0, 0, 0);
    border: 5px solid #fff6f7 ;
    border-radius:50%;
    height: 250px;
    width: 250px;
}
.obj-3 {
    z-index: 1;
    position: absolute;
    
    margin: 30px;
    background-color: white;
    border: 5px solid #cdcdcd;
    border-radius:50%;
    height: 80px;
    width: 80px;

    animation: reflection 1.5s infinite forwards;
    animation-play-state: running;
}
.obj-4 {
    position: absolute;
    margin: 5px;
    background-color: rgb(0, 0, 0);
    border: 30px solid #0b0b0b;   
    border-radius:50%;
    height: 125px;
    width: 125px;

    animation: inner-eye-move 1.5s infinite forwards;
    animation-play-state: running;
}

.pupil{
    animation: eye-move 1.5s infinite forwards;
    animation-play-state: running;

}
@keyframes eye-move{
    25%{
        transform: translateX(20%);
    }
    50%{
        transform: translateX(10%);
    }
    75%{
        transform: translateX(-20%);
    }
    100%{
        transform: translateX(-10%);
    }

}
@keyframes inner-eye-move{
    25%{
        transform: translateX(30%);
    }
    50%{
        transform: translateX(20%);
    }
    75%{
        transform: translateX(-30%);
    }
    100%{
        transform: translateX(-20%);
    }

}
@keyframes reflection{
    25%{
        transform: translateX(160pX);
    }
    50%{
        transform: translateX(150px);
    }
    75%{
        transform: translateX(-30%);
    }
    100%{
        transform: translateX(-20%);
    }

}

</style>
