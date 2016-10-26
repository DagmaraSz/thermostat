$(function(){

	var rad2deg = 180/Math.PI;
	var deg = 0;
	var bars = $('#bars');

	for(var i=0;i<22;i++){

		deg = i*12;

		// Create the colorbars

		$('<div class="colorBar">').css({
			transform:'rotate('+deg+'deg)',
			top: -Math.sin(deg/rad2deg)*80+100,
			left: Math.cos((180 - deg)/rad2deg)*80+100,
		}).appendTo(bars);
	}

	var colorBars = bars.find('.colorBar');
	var numBars = 0, lastNum = -1;

  var oldRatio = 0.5;
  
	$('#control').knobKnob({
		snap : 20,
		value: 180,
		turn : function(ratio){
			numBars = Math.round(colorBars.length*ratio);
			// Update the dom only when the number of active bars
			// changes, instead of on every move
			if(numBars == lastNum){
				return false;
			}
			lastNum = numBars;
			colorBars.removeClass('active').slice(0, numBars).addClass('active');


      if (ratio-oldRatio < 0) {
        thermostat.decreaseTemp();
      } else {
        thermostat.increaseTemp();
      }
      changeTemp();
      oldRatio = ratio;
		}
	});

});
