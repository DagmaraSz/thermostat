"use strict";

describe ("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 deg", function(){
    expect(thermostat.temp()).toEqual(20);
  });

  it("can increase temperature", function(){
    var initial_temp = thermostat.temp();
    thermostat.increase_temp();
    expect(thermostat.temp()).toEqual(initial_temp + 1);
  });

  it("can decrease temperature", function(){
    var initial_temp = thermostat.temp();
    thermostat.decrease_temp();
    expect(thermostat.temp()).toEqual(initial_temp - 1);
  });

  it("has a minimum temperature of 10", function(){
    _(10).times(function(){ thermostat.decrease_temp(); });
    expect(function(){thermostat.decrease_temp();}).toThrow("Thermostat has reached minimum temperature");
  });
});
