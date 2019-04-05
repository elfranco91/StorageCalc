//// JavaScript Document
//
//// clock function
//(function () {
//	'use strict';
//	document.addEventListener('DOMContentLoaded', function () {
//		var c = document.getElementById('current-time');
//
//
//
//		setInterval(updateTime, 1000);
//
//		function updateTime() {
//			var d = new Date();
//			var sep = ':';
//			if (d.getSeconds() % 2 === 1) sep = ' ';
//
//			c.innerHTML = d.getHours() + sep + d.getMinutes();
//		}
//	});
//
//
//})();

//function for greying out the estimate button if nothing is selected
var state = document.getElementById('s-state');
var state2 = document.getElementById('s-state2');
var state3 = document.getElementById('s-state3');
var state4 = document.getElementById('s-state4');
(function() {
"use strict";

	



document.addEventListener('DOMContentLoaded', function() {
document.getElementById('cart-hplus').addEventListener('submit', estimateTotal);

	
	
	var btnEstimate = document.getElementById('btn-estimate');
	
	btnEstimate.disabled = true;
	
	state.addEventListener('change', function() {
	
		if (state.value === '') {
			btnEstimate.disabled = true;
		} else {
			btnEstimate.disabled = false;
		}
	
	});
});

//	function for disk calc

	
	function estimateTotal(event) {
		event.preventDefault();

			if (state.value === '' && state2.value ==='') {
		alert('Please select disk type.');
		
		state.focus();
	}
		//pull the value from the s-state index and call it diskState
		var diskState = state.value;
		//pull the value from the ele1 index and call it diskCount
		var diskCount = document.getElementById("ele1").value;
		var totalDisk = 0;

		//do the calculations
		if (diskState === 'WI') {
			totalDisk = diskCount * 250;
		} else if (diskState === 'RI') {
			totalDisk = diskCount * 200;
		} else if (diskState === '15k') {
			totalDisk = diskCount * 175;
		} else if (diskState === '10K') {
			totalDisk = diskCount * 125;
		} else {
			totalDisk = diskCount * 80;

		}


		// name string for output to disktype

		var diskType = "Total IOPS =  "

		//if its ssd change the string

		if (diskState === "WI" || diskState === "RI") {
			diskType = 'ThroughPut = ';
		}

		//concatenate string
       
		var estimate = diskType + totalDisk;
		document.getElementById('txt-estimate').value = estimate;
	}
	
})();





		// convert calc
(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('cart-hplus').addEventListener('submit', estimateTotal2);

	
	
	var btnEstimate2 = document.getElementById('btn-estimate2');
	
	btnEstimate2.disabled = true;
	
	state2.addEventListener('change', function() {
	
		if (state2.value === '') {
			btnEstimate2.disabled = true;
		} else {
			btnEstimate2.disabled = false;
		}
	
	});
});

		
	function estimateTotal2(event) {
		event.preventDefault();
				if (state2.value === '' && state.value === '') {
		alert('Please select conversion type.');
		
		state2.focus();
	}
	

		var convertState = state2.value;
		//pull the value from the ele1 index and call it convertCount
		var convertCount = document.getElementById("ele2").value;
		var convertTotal = 0;

		//do the calculations
		if (convertState === 'KM') {
			convertTotal = convertCount / 8000;
		} else if (convertState === 'MG') {
			convertTotal = convertCount / 1024;
		} else {
			return;

		}


		// name string for output to 

		var convertType = ""

		//if its ssd change the string

		if (convertState  === "KM" ) {
			convertType = 'Total MB/s = ';
		} else {
			convertType = 'Total GB/s = '
		}

		//concatenate string
		// Grab the total
      var estimate2 = convertType  + convertTotal; 
		document.getElementById('txt-estimate2').value = estimate2;	
	}


})();
  
//raid calc
(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('cart-hplus').addEventListener('submit', estimateTotal3);

	
	
	var btnEstimate3 = document.getElementById('btn-estimate3');
	
	btnEstimate3.disabled = true;
	
	state3.addEventListener('change', function() {
	
		if (state3.value === '') {
			btnEstimate3.disabled = true;
		} else {
			btnEstimate3.disabled = false;
		}
	
	});
});

		
	function estimateTotal3(event) {
		event.preventDefault();
				if (state3.value === '' && state.value === '' && state2.value ==='') {
		alert('Please select raid type');
		
		state3.focus();
	} 

		var raidState = state3.value;
		//pull the value from the ele1 index and call it convertCount
		var raidCount = document.getElementById("ele3").value;
		var raidTotal = 0;

		//do the calculations
		if (raidState === 'R10') {
			raidTotal = raidCount * 0.50;
		} else if (raidState === 'R10DM') {
			raidTotal = raidCount * 0.33;
		} else if (raidState === 'R5-5') {
			raidTotal = raidCount * 0.20;
		} else if (raidState === 'R5-9') {
			raidTotal = raidCount * 0.11;
		} else if (raidState === 'R6-6') {
			raidTotal = raidCount  * 0.66;
		} else if (raidState === 'R6-10') {
			raidTotal = raidCount * 0.80;
		} else {
			return;

		}


		// name string for output to disktype

		var raidType = ""

		//if its ssd change the string

		if (raidState  === "TB" ) {
			raidType = 'Useable Space = ';
		} else {
			raidType = 'Useable Space = '
		}

		//concatenate string
		// Grab the total
      var estimate3 = raidType  + raidTotal; 
	document.getElementById('txt-estimate3').value = estimate3;	
	}


})();

//card calc
(function() {
"use strict";

document.addEventListener('DOMContentLoaded', function() {
document.getElementById('cart-hplus').addEventListener('submit', estimateTotal4);

	
	
	var btnEstimate4 = document.getElementById('btn-estimate4');
	
	btnEstimate4.disabled = true;
	
	state4.addEventListener('change', function() {
	
		if (state4.value === '') {
			btnEstimate4.disabled = true;
		} else {
			btnEstimate4.disabled = false;
		}
	
	});
});

		
	function estimateTotal4(event) {
		event.preventDefault();
				if (state4.value === '' && state3.value === '' && state.value === '' && state2.value ==='') {
		alert('Please select card type');
		
		state4.focus();
	} 

		var cardState = state4.value;
		//pull the value from the ele1 index and call it convertCount
		var portCount = document.getElementById("ele4").value;
		var cardTotal = 0;

		//do the calculations
		if (cardState === 'IS-16') {
			cardTotal = portCount * 1.6 ;
		} else if (cardState === 'R10DM') {
			cardTotal = portCount / 3;
		} else if (cardState === 'R6') {
			cardTotal = portCount - portCount * 0.;
		} else if (cardState === 'R5-9') {
			cardTotal = portCount - portCount * 0.11;
		} else {
			return;

		}


		// name string for output to disktype

		var cardType = "Card Throughput "

		//if its ssd change the string

	

		//concatenate string
		// Grab the total
     var estimate4 = cardType  + cardTotal; 
	document.getElementById('txt-estimate4').value = estimate4;	
		
	}


})();


