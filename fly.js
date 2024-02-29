AFRAME.registerComponent("fly",{
    init:function(){
        var gameStateValue = this.el.getAttribute("game")
        if (gameStateValue=="play"){
            this.flyPlane()
        }
    },
    isVelocityActive: function(){
        console.log("Vel. Active")
    },

    flyPlane:function(){
        var multiply =10

        window.addEventListener("keydown", function(e){
            var cameraRig = document.querySelector("#camera-rig")
            var cameraRotation = cameraRig.getAttribute("rotation")
            var cameraPosition = cameraRig.getAttribute("position")
            var cameraMoveControl = cameraRig.getAttribute("movement-controls")

            console.log(cameraMoveControl.speed)
            cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
            console.log(cameraMoveControl.speed)

            var cameraDirection = new THREE.Vector3();
            cameraRig.object3D.getWorldDirection(cameraDirection);

            if (e.code == "ArrowRight") {
                cameraRotation.y -= 5
                cameraRig.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 })                
                cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})

            }

            if (e.code == "ArrowLeft") {
                cameraRotation.y += 5
                cameraRig.setAttribute("rotation", { x: 0, y: cameraRotation.y, z: 0 })             
                cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})

            }

            //Speed Up/Accelerate on Up Arrow Keyup
            if (e.code == "ArrowUp") {
                multiply += 0.5

                if (multiply <= 100 && cameraPosition.z > -500) {                  
                    cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
                    
                }

            }

            if (e.code == "ArrowDown"){
                multiply -= 0.5          
                cameraRig.setAttribute("movement-controls", {"speed": cameraMoveControl.speed + 0.005})
                if (cameraMoveControl.speed<=10){
                    var plane = querySelector("#planeModel")
                    plane.setAttribute("dynamic-body",{
                        mass:5
                    })
                    gameStateValue= "GameOver"

                }
                    
                
            }
        })
    }
   
})