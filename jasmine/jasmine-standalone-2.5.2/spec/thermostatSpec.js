"use strict";

describe ("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 deg", function(){
    expect(thermostat.temp()).toEqual(20);
  });

  it("has an up button for increasing temperature", function(){
    var initial_temp = thermostat.temp();
    thermostat.increase_temp();
    expect(thermostat.temp()).toEqual(initial_temp + 1);
  });

});
