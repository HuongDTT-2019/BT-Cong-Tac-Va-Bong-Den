function SwitchButton() {
    this.status = false;
    this.switchOn = function () {
        this.status = true;
    };
    this.switchOff = function () {
        this.status = false;
    };
    this.getStatus=function () {
      return this.status;
    };
    this.connectToLamp = function (electricLamp) {
        electricLamp.status=this.status;
    }

}

function ElectricLamp() {
    this.status = false;
    this.getStatus = function () {
        return this.status;
    };
    this.setStatus = function (swicthbuttom) {
        this.status=swicthbuttom.status;
    };
    this.light = function () {
        if (this.status === true) {
            console.log("Light is on");
        } else {
            console.log("Light is off");
        }
    }
}

let switch_button = new SwitchButton();
let electric_lamp = new ElectricLamp();

function turnOnTheLamp(){
    switch_button.switchOn();
    console.log(switch_button.getStatus());
    switch_button.connectToLamp(electric_lamp);
    electric_lamp.setStatus(electric_lamp);
    electric_lamp.getStatus();
    electric_lamp.light();
}
function turnOffTheLight(){
    switch_button.switchOff();
    console.log(switch_button.getStatus());
    switch_button.connectToLamp(electric_lamp);
    electric_lamp.setStatus(electric_lamp);
    electric_lamp.getStatus();
    electric_lamp.light();
}
for (let i=0;i<5;i++){
    turnOnTheLamp();
    turnOffTheLight();
}
