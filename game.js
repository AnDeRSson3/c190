AFRAME.registerComponent("game",{
    schema:{
        gameState:{type:"string", default:"play"} //play + game over
    },
    init:function (){
        var duration = 300
        var timerEl= document.querySelector("#timer");
        this.startTimer(duration, timerEl);
    },

    startTimer:function (duration, timerEl){
        var fuel;

        setInterval(()=>{
            if (duration >= 0){
                this.data.gameState="play";
                fuel= parseInt(duration);

                timerEl.setAttribute("text",{
                    value: "Remain Fuel: "+ fuel
                });
                duration -= 1;

            }
            else {
                this.data.gameState="over"
                var cameraRig = document.querySelector("#camera-rig")
                cameraRig.setAttribute("velocity", {x:0, y:0, z:0})
                var over = document.querySelector("#over")
                over.setAttribute("visible", true)
                var planeSpeed = document.querySelector("#speed")
                planeSpeed.setAttribute("#text", {value:0})
            }
        }, 100)
    }
})