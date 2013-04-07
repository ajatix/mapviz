var JSONObject;

function colorState(name, color) {
  var x = document.getElementById(name);
	var x1 = x.getElementsByTagName('path');
	for (var i=0; i<x1.length; i++) {
		x2 = x1[i]; 
		x2.style.fill = color;
	}
}	

var scramble_on = 0;
var click_flag = 0;
var update_list_control = 1;
var clicked_state;

function header_show (state, value) {
	x1 = document.getElementById ('state_name');
	x2 = document.getElementById ('value_name');
	
	x1.textContent = state;
	x2.textContent = value;
}

function get_value (name) {
	if (update_list_control == 1) var val = document.getElementById('myList').selectedIndex;
	else var val = document.getElementById('2ndList').selectedIndex;
	//console.log(val);
	var value;
	for (var i=0; i<JSONObject.data.length; i++) {
		var state = JSONObject.data[i][0];
		if (state == name) {
			var num = JSONObject.data[i][val+1];
			if ((num == 'NA') || (num == "nan")) { value = '';}
			else { value = num; }
		}
	}
	return value;
}	

function highlightOn(name) {
	if (scramble_on) {
		header_show (name, get_value(name));
		return;
	}
	header_show (name, '');
	var x = document.getElementById(name);
	var x1 = x.getElementsByTagName('path');
	for (var i=0; i<x1.length; i++) {
		x2 = x1[i]; 
		x2.style.fill = 'rgba(176, 182, 26, 0.5)';
		x2.style.transition = 'fill 0.2s';
	}
}		
	
function highlightOff(name) {
	if (scramble_on) {
		header_show ('','');
		return;
	}
	header_show ('','');
	var x = document.getElementById(name);
	var x1 = x.getElementsByTagName('path');
	for (var i=0; i<x1.length; i++) {
		x2 = x1[i]; 
		x2.style.fill = '#FFFFD0';
	}
}	

function highlightStay(name) {
	if (click_flag) {
		if (update_list_control == 1) {
			colorAllStates(0, 1);
		}
		else {
			temp = shpd;
			shpd = shpd2;
			colorAllStates(0, 1);
			shpd = temp;
		}
		click_flag = 0;
		header_show('','');
	}
	else {
		var val = getValue(name);
		if (val == '') return;
		colorAllStates(val, val);
		click_flag = 1;
		clicked_name = name;
		var value = get_value(name);
		header_show(name, value);
	}
}

function colorAllStates(thres1, thres2) {
	var y = document.getElementById('districts_borders');
	var y1 = y.getElementsByTagName('g');
	for (var i=0; i<y1.length; i++) {
		y2 = y1[i];
		var name = y2.id;
		if (!name) continue;
		var val = getValue(name);
		if ((val == '') || (val < thres1) || (val > thres2)) var color = 'rgba(176, 176, 176, 0.1)';
		else var color = 'rgba(176, 182, 26, 1)';
		y2.style.fillOpacity = val + 0.3;
		y2.style.transition = 'fill 1s';
		colorState(name, color);
		
		scramble_on = 1;
	}
}		

function getValue(name) {
	for (var i=0; i<shpd.length; i++) {
		var num = JSONObject.data[i][0];
		if (num == name) { return shpd[i];}
	}
	return 0;
}

function get_random_color(val) {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 4; i++ ) {
		color += letters[Math.round(Math.random() * 15)];
	}
	color += Math.round(val*255).toString(16);
	return color;
}

function resetBothStates() {
	x = document.getElementById('myList');
	y = document.getElementById('2ndList');
	
	for (var i=0; i<x.options.length;i) {
		x.options.remove(i);
	}
	for (var i=0; i<y.options.length; i) {
		y.options.remove(i);
	}
}

function toggleBothStates() {
	if (click_flag) { //Single map display
		x1 = document.getElementById(clicked_name);
		var val;
		if (update_list_control == 1) { //Left bar is active
			x = document.getElementById('myList');
			x.style.background = 'white';
			y = document.getElementById('2ndList');
			y.style.background = 'orange';
			temp = shpd;
			shpd = shpd2;
			val = getValue(clicked_name);
			x1.style.fillOpacity = val + 0.3;
			shpd = temp;
			update_list_control = 2;
		}
		else {
			x = document.getElementById('myList');
			x.style.background = 'orange';
			y = document.getElementById('2ndList');
			y.style.background = 'white';
			val = getValue(clicked_name);
			x1.style.fillOpacity = val + 0.3;
			update_list_control = 1;
		}
		var value = get_value(clicked_name);
		header_show(clicked_name, value);
	}
	else {
		if (update_list_control == 1) { //Left bar is active
			x = document.getElementById('myList');
			x.style.background = 'white';
			y = document.getElementById('2ndList');
			y.style.background = 'orange';
			temp = shpd;
			shpd = shpd2;
			colorAllStates(0,1);
			shpd = temp;
			update_list_control = 2;
		}
		else {
			x = document.getElementById('myList');
			x.style.background = 'orange';
			y = document.getElementById('2ndList');
			y.style.background = 'white';
			colorAllStates(0,1);
			update_list_control = 1;
		}
	}
}

var shpd;
var shpd2;
var temp;

function performSelection(id) {
	if (id == "2ndList") {
		temp = shpd;
	}
	var val = document.getElementById(id).selectedIndex;
	//console.log(val);
	shpd = new Array();
	for (var i=0; i<JSONObject.data.length; i++) {
		var num = JSONObject.data[i][val+1];
		if ((num == 'NA') || (num == "nan")) { shpd[i] = '';}
		else { shpd[i] = num; }
	}

	//console.log(shpd);

	var min = Math.min.apply(null, shpd);
	var max = Math.max.apply(null, shpd);

	//console.log (min, max);

	//Normalize
	for (var i=0; i<shpd.length; i++) {
		shpd[i] = (shpd[i] - min)/max;
	}
	
	colorAllStates(0, 1);
	
	if (id == "2ndList") {
		shpd2 = shpd;
		shpd = temp;
		update_list_control = 2;
		x = document.getElementById('myList');
		x.style.background = 'white';
		y = document.getElementById('2ndList');
		y.style.background = 'orange';
	}
	else {
		update_list_control = 1;
		x = document.getElementById('myList');
		x.style.background = 'orange';
		y = document.getElementById('2ndList');
		y.style.background = 'white';		
	}
	

	//console.log(shpd);

	//console.log(JSONObject.data.length);
}

function getOptions(id, name) {
	//console.log('load');
	var select = document.getElementById(id);
	
	if (name == "power_data") JSONObject = JSONObject1;
	else if (name =="factories") JSONObject = JSONObject2;
	else if (name =="private_public") JSONObject = JSONObject3;
	
	for (var i=1; i<JSONObject.fields.length; i++) {
		var text = JSONObject.fields[i];
		select.options[select.options.length] = new Option(text, i);
	}	
	performSelection(id);
}

//Inserting the bar graph codes from here
/*function plotBars() {

	var w = 2000;
	var h = 2500;
	
	var dataset = [
		[18,90],
		[110,119]
	];
	
	//var svg = d3.select("#svg_img").append("svg").attr("width",w).attr("height",h);

	//svg.selectAll("circle").data(dataset).enter().append("circle").attr("cx", function(d) {return d[0];}).attr("cy", function(d) {return d[1];}).attr("r",15);

}*/
