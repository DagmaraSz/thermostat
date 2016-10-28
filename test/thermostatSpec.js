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
    var initialTemp = thermostat.temp();
    thermostat.increaseTemp();
    expect(thermostat.temp()).toEqual(initialTemp + 1);
  });

  it("can decrease temperature", function(){
    var initialTemp = thermostat.temp();
    thermostat.decreaseTemp();
    expect(thermostat.temp()).toEqual(initialTemp - 1);
  });

  it("has a minimum temperature of 10", function(){
    _(10).times(function(){ thermostat.decreaseTemp(); });
    expect(function(){thermostat.decreaseTemp();}).toThrow("Thermostat has reached minimum temperature");
  });

  it("can reset temperature to 20", function(){
    _(10).times(function(){ thermostat.decreaseTemp(); });
    thermostat.resetTemp();
    expect(thermostat.temp()).toEqual(20);
  });

  describe("power saving mode", function(){

    it("is on by default",function(){
      expect(thermostat.isPowerSaving()).toEqual(true);
    });

    it("has max temp. of 25 if mode is on", function(){
      _(5).times(function(){ thermostat.increaseTemp(); });
      expect(function(){thermostat.increaseTemp();}).toThrow("Thermostat has reached maximum temperature (power saving on)");
    });

    it("has max temp. of 32 if mode is off", function(){
      thermostat.changePowerSaving();
      _(12).times(function(){ thermostat.increaseTemp(); });
      expect(function(){thermostat.increaseTemp();}).toThrow("Thermostat has reached maximum temperature (power saving off)");
    });
 });

  describe("interface functions", function(){
    it("knows if temperature is under 18", function(){
      _(3).times(function(){ thermostat.decreaseTemp(); });
      expect(thermostat.isLow()).toEqual(true);
    });
    it("knows if temperature is between 18 and 25", function(){
      expect(thermostat.isMedium()).toEqual(true);
    });
    it("knows if temperature is over 25", function(){
      thermostat.changePowerSaving();
      _(6).times(function(){ thermostat.increaseTemp(); });
      expect(thermostat.isHigh()).toEqual(true);
    });

  });


});
