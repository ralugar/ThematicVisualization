
	var compareFunction = function() {
		
		var style_circle = 
						new ol.style.Style({
						image: new ol.style.Circle({
							radius: 0,
							fill: new ol.style.Fill({color: 'red'})
						})             
		});
		
		olMap3.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids3') {
					layer.setStyle(style_circle);
				}
				
		});	
			
		
		clearQuery();
		
		var legend11 = document.getElementById('canvas_container11');
		var legend12 = document.getElementById('canvas_container12');
		var legend13 = document.getElementById('canvas_container13');
		while (legend11.firstChild) { legend11.removeChild(legend11.firstChild); }
		while (legend12.firstChild) { legend12.removeChild(legend12.firstChild); }
		while (legend13.firstChild) { legend13.removeChild(legend13.firstChild); }
		
		var legend21 = document.getElementById('canvas_container21');
		var legend22 = document.getElementById('canvas_container22');
		var legend23 = document.getElementById('canvas_container23');
		while (legend21.firstChild) { legend21.removeChild(legend21.firstChild); }
		while (legend22.firstChild) { legend22.removeChild(legend22.firstChild); }
		while (legend23.firstChild) { legend23.removeChild(legend23.firstChild); }
		
		var legend31 = document.getElementById('canvas_container31');
		var legend32 = document.getElementById('canvas_container32');
		var legend33 = document.getElementById('canvas_container33');
		while (legend31.firstChild) { legend31.removeChild(legend31.firstChild); }
		while (legend32.firstChild) { legend32.removeChild(legend32.firstChild); }
		while (legend33.firstChild) { legend33.removeChild(legend33.firstChild); }
		
		var legend41 = document.getElementById('canvas_container41');
		var legend42 = document.getElementById('canvas_container42');
		var legend43 = document.getElementById('canvas_container43');
		while (legend41.firstChild) { legend41.removeChild(legend41.firstChild); }
		while (legend42.firstChild) { legend42.removeChild(legend42.firstChild); }
		while (legend43.firstChild) { legend43.removeChild(legend43.firstChild); }
		
		var legend51 = document.getElementById('canvas_container51');
		var legend52 = document.getElementById('canvas_container52');
		var legend53 = document.getElementById('canvas_container53');
		while (legend51.firstChild) { legend51.removeChild(legend51.firstChild); }
		while (legend52.firstChild) { legend52.removeChild(legend52.firstChild); }
		while (legend53.firstChild) { legend53.removeChild(legend53.firstChild); }
		
		var legend61 = document.getElementById('canvas_container61');
		var legend62 = document.getElementById('canvas_container62');
		var legend63 = document.getElementById('canvas_container63');
		while (legend61.firstChild) { legend61.removeChild(legend61.firstChild); }
		while (legend62.firstChild) { legend62.removeChild(legend62.firstChild); }
		while (legend63.firstChild) { legend63.removeChild(legend63.firstChild); }
		
		document.getElementById('text1').innerHTML = '';
		document.getElementById('text2').innerHTML = '';
		document.getElementById('text3').innerHTML = '';
		document.getElementById('text4').innerHTML = '';
		document.getElementById('text5').innerHTML = '';
		document.getElementById('text6').innerHTML = '';
		
		rad2[0].checked = false;
		rad2[1].checked = false;
		rad2[2].checked = false;
		
		rad4[0].checked = false;
		rad4[1].checked = false;
		rad4[2].checked = false;
		
		rad.checked = false;
		
		functionScholarchips2();
		
		
        var current_index = document.getElementById('olMap').style.zIndex;
		console.log(current_index);
		if (current_index == 0 ) {
			window.info_vara2 = '';
			window.info_vara
			document.getElementById('olMap').style.zIndex = -1;
			document.getElementById('olMap2').style.zIndex = 0;
			document.getElementById('olMap3').style.zIndex = 0;
			document.getElementById('overviewMap2').style.zIndex = 0;
			document.getElementById('overviewMap3').style.zIndex = 0;
			document.getElementById('variables').style.display = 'none';
			document.getElementById('variableScholarships').style.display = 'none';
			document.getElementById('variables2').style.display = 'block';
			document.getElementById('variableScholarships2').display = 'block';
			document.getElementById('queries').style.display = 'none';
			document.getElementById('buttonCompare').innerHTML = 'Return';
			
			document.getElementById('text5').innerHTML = 'Scholarships (milions of euros)';
			
			document.getElementById('canvas_container51').appendChild(legend_scholarships3);
			var text = document.createElement('p');	text.innerHTML = '0.1'; text.style.textAlign = 'center';
			document.getElementById('canvas_container51').appendChild(text);
			document.getElementById('canvas_container52').appendChild(legend_scholarships2);
			var text = document.createElement('p');	text.innerHTML = '1'; text.style.textAlign = 'center';
			document.getElementById('canvas_container52').appendChild(text);
			document.getElementById('canvas_container53').appendChild(legend_scholarships);
			var text = document.createElement('p');	text.innerHTML = '10'; text.style.textAlign = 'center';
			document.getElementById('canvas_container53').appendChild(text);
			
		}
		
		else {
			document.getElementById('olMap').style.zIndex = 0;
			document.getElementById('olMap2').style.zIndex = -1;
			document.getElementById('olMap3').style.zIndex = -1;
			document.getElementById('overviewMap2').style.zIndex = -1;
			document.getElementById('overviewMap3').style.zIndex = -1;
			document.getElementById('variables').style.display = 'block';;
			document.getElementById('variableScholarships').style.display = 'block';
			document.getElementById('variables2').style.display = 'none';
			document.getElementById('variableScholarships2').display = 'none';
			document.getElementById('queries').style.display = 'block';
			document.getElementById('buttonCompare').innerHTML = 'Compare variables';
	
		}
		
		if (document.getElementById('olMap').style.zIndex == 0) {
		if (window.info_var == 'scholarships') {
			functionScholarchips();
					olMap.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids') {
					layer.setStyle(style_circle);
				}
				
		});	
		} 
		
		else {
			window.info_var = '';
			loop();
					olMap.getLayers().forEach(function(layer) {
				if (layer.get('name') == 'centroids') {
					layer.setStyle(style_circle);
				}
				
		});	
		}
	  }

	  else {
		  if (window.info_vars2 == 'scholarships') {
			functionScholarchips2();
		  }
		  
		  if (window.info_vara2 != '') {
			loop2();
		  }
	  }
      };

	  
document.getElementById('myRange2').value = 40;
document.getElementById('myRange22').value = 1880;
document.getElementById('myRange3').value = 5.4;
document.getElementById('myRange32').value = 440.3;
document.getElementById('myRange4').value = 0;
document.getElementById('myRange42').value = 28.17;
document.getElementById('myRange5').value = 6;
document.getElementById('myRange52').value = 247;
