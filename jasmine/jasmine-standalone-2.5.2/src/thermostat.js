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

Thermostat.prototype.decrease_temp = function () {
  if (this.temperature === 10) throw "Thermostat has reached minimum temperature";
  this.temperature -= 1;
};
