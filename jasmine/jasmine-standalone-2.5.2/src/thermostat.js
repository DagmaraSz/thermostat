"use strict";

function Thermostat(){
  this.temperature = 20;
  this.savingMode = true;
};

// readers
Thermostat.prototype.temp = function () {
  return this.temperature;
};
Thermostat.prototype.isPowerSaving = function () {
  return this.savingMode;
};

//functions
Thermostat.prototype.increaseTemp = function () {
  this.maxTemp();
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemp = function () {
  this.minimumTemp();
  this.temperature -= 1;
};

Thermostat.prototype.changePowerSaving = function() {
  this.isPowerSaving ? (this.savingMode = false) : (this.savingMode = true);
};

Thermostat.prototype.minimumTemp = function () {
  if (this.temp() === 10) throw "Thermostat has reached minimum temperature";
};

Thermostat.prototype.maxTemp = function () {
  if (this.isPowerSaving() && this.temp() === 25) throw "Thermostat has reached maximum temperature (power saving on)";
  if (this.isPowerSaving() === false && this.temp() === 32) throw "Thermostat has reached maximum temperature (power saving off)";
};
