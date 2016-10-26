"use strict";

function Thermostat(){
  this.temperature = 20;
};

Thermostat.prototype.temp = function () {
  return this.temperature;
};
Thermostat.prototype.increase_temp = function () {
  this.temperature += 1;
};
