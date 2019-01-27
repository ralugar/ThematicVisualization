  var myProjectionName = 'EPSG:LAEA'; 
    //proj4.defs(myProjectionName, "+proj=utm +zone=30 +ellps=GRS80 +units=m +no_defs");
	proj4.defs("EPSG:LAEA","+proj=laea +lat_0=40 +lon_0=-4 +x_0=500000 +y_0=500000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs");
	var myProjection = ol.proj.get(myProjectionName);
	
	 var OSM = new ol.layer.Tile({ source: new ol.source.OSM(), visible:true, 
    baseLayer: true, displayInLayerSwitcher: true,  });
	
	    window.app = {};
    var app = window.app;
    //CENTRAR//
    app.centrar = function(opt_options) {
      var options = opt_options || {};
      var button = document.createElement('button');
      button.className = 'centrar';
      var this_ = this;
      var centrar = function() {
        var center = [500000, 500000];
        olMap.getView().setCenter(center);
        olMap.getView().setZoom(6.7);
      };
      button.addEventListener('click', centrar, false);
      button.addEventListener('touchstart', centrar, false);
      var element = document.createElement('div');
      element.className = 'centrar ol-unselectable ol-control';
      element.appendChild(button);
      ol.control.Control.call(this, {element: element,target: options.target });
    };
    ol.inherits(app.centrar, ol.control.Control);

	// --- Se define el MAPA ---
	var viewOlmap = new ol.View({
        projection: myProjection,
        center: [500000, 500000],
        zoom: 6.6,
		maxZoom : 6.6,
		minZoom : 6.6,
		extent : [100000,25000,900000,900000]
    });
	
	var viewOlmap23 = new ol.View({
        projection: myProjection,
        center: [500000, 500000],
        zoom: 6.4,
		maxZoom :6.4,
		minZoom : 6.4,
		extent : [100000,25000,900000,900000]
    });
	
	var viewOlOverviewmap = new ol.View({
      projection: myProjection,
      center: [-650000, -740000],
      zoom: 6.6,
    });
	
  var overviewMap = new ol.Map({
    layers: [],
	controls: [],
    view: new ol.View({
      projection: myProjection,
      center: [-650000, -740000],
      zoom: 6.6,
    }),
  target: document.getElementById('overviewMap'),
  });
  
  overviewMap.getInteractions().forEach(function(interaction) {
		overviewMap.removeInteraction(interaction);
	},this);
  
  var olMap = new ol.Map({
    layers: [],
	controls: [],
    view: viewOlmap,
    target: document.getElementById('olMap'),
    });
	
	olMap.getInteractions().forEach(function(interaction) {
		olMap.removeInteraction(interaction);
	},this);
	
	
	// COMPARE (2 MAPS)
	var overviewMap2 = new ol.Map({
    layers: [],
	controls: [],
    view: new ol.View({
      projection: myProjection,
      center: [-650000, -740000],
      zoom: 6.4,
    }),
  target: document.getElementById('overviewMap2'),
  });
  
  overviewMap2.getInteractions().forEach(function(interaction) {
		overviewMap2.removeInteraction(interaction);
	},this);
  
  var olMap2 = new ol.Map({
    layers: [],
	controls: [],
    view: viewOlmap23,
    target: document.getElementById('olMap2'),
    });
	
	olMap2.getInteractions().forEach(function(interaction) {
		olMap2.removeInteraction(interaction);
	},this);
	
	var overviewMap3 = new ol.Map({
    layers: [],
	controls: [],
    view: new ol.View({
      projection: myProjection,
      center: [-650000, -740000],
      zoom: 6.4,
    }),
  target: document.getElementById('overviewMap3'),
  });
  
  overviewMap3.getInteractions().forEach(function(interaction) {
		overviewMap3.removeInteraction(interaction);
	},this);
  
  var olMap3 = new ol.Map({
    layers: [],
    view: viewOlmap23,
	controls: [],
    target: document.getElementById('olMap3'),
    });
	
	olMap3.getInteractions().forEach(function(interaction) {
		olMap3.removeInteraction(interaction);
	},this);
	//

	  var styleFunctionCCAA = function(feature) {
        return stylesCCAA[feature.getProperties()['Codigo']];
      };
	  
	  //VECTOR BASEMAP
	   var vectorSource = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(basemap)
      });
	  
	  // AFRICA MAP
	  var vectorSourceAfrica = new ol.source.Vector({
            features: (new ol.format.GeoJSON()).readFeatures(Africa)
      });
	  
	  // Vector layer for centroids
      var vectorSourceCentroids = new ol.source.Vector({                                                                          
            features: (new ol.format.GeoJSON()).readFeatures(centroids)
      });
	 

	// STYLE PORTUGAL, FRANCE, ANDORRA
	var textStyleP = new ol.style.Text(
		{ text: 'Portugal', scale: 1, 
		fill: new ol.style.Fill(
			{ color: '#000000'}), 
		font : '14px Arial',
		offsetX : 0, 
		offsetY : 0 });
		
	var textStyleF = new ol.style.Text(
		{ text: 'France', scale: 1, 
		fill: new ol.style.Fill(
			{ color: '#000000'}), 
		font : '14px Arial',
		offsetX : -50, 
		offsetY : -100 });
		
	var styleP = new ol.style.Style(
		{stroke: new ol.style.Stroke(
			{color: '#282828',width: 0.75}),
		fill: new ol.style.Fill({color: '#e7e7e9'}), 
		text: textStyleP  });
		
	var styleF = new ol.style.Style(
		{stroke: new ol.style.Stroke(
			{color: '#282828',width: 0.75}),
		fill: new ol.style.Fill({color: '#e7e7e9'}) });
		
	var styleA = new ol.style.Style(
		{stroke: new ol.style.Stroke(
			{color: '#282828',width: 0.75}),
		fill: new ol.style.Fill(
			{color: '#e7e7e9'}), 
		text: textStyleF });

	  // STYLE BASE
	  /*var style1 = new ol.style.Style(
		{stroke: new ol.style.Stroke({
			color: '#aba39a',width: 1}),
			fill: new ol.style.Fill({
				color: '#e7e7e9'}) 
		});*/
	  
	  
	  // STYLE BASE
	  var style1 = new ol.style.Style({ 
          stroke: new ol.style.Stroke({
            color: 'black',
            width: 0.5
          }),
          fill: new ol.style.Fill({
            //color: '#fef7cb'
			color: '#f4dd9f'
          })
        });
		
		var styleBase = {
		  '01': style1,
		  '02': style1,
		  '03':  style1,
		  '04':  style1,
		  '05':  style1,
		  '06':  style1,
		  '07':  style1,
		  '08':  style1,
		  '09':  style1,
		  '10':  style1,
		  '11':  style1,
		  '12':  style1,
		  '13':  style1,
		  '14':  style1,
		  '15':  style1,
		  '16':  style1,
		  '17': style1,
		  'A' : styleA,
		  'F': styleF,
		  'P': styleP
		};
		
	  var styleFunctionBase = function(feature) {
		return styleBase[feature.getProperties()['Codigo']];
	  };
		
      var vectorLayer = new ol.layer.Vector({
		name: 'capaBase',
        source: vectorSource,
        style: styleFunctionBase,
        crossOrigin: 'Anonymous',
        baseLayer: false, displayInLayerSwitcher: false,
      });
	  
	  var vectorLayerAfrica = new ol.layer.Vector({
        source: vectorSourceAfrica,
        style: styleF,
        crossOrigin: 'Anonymous',
        baseLayer: false, displayInLayerSwitcher: false,
      });
	  
	    var vectorLayerCentroids = new ol.layer.Vector({
        source: vectorSourceCentroids,
		name: 'centroids',
		style: new ol.style.Style ({
			text: new ol.style.Text({
			text: '',
			scale: 1.3,
			fill: new ol.style.Fill({
			  color: '#000000'
			}),
			stroke: new ol.style.Stroke({
			  color: '#FFFF99',
			  width: 3.5
			})
		  })
		  }),
        crossOrigin: 'Anonymous',
        baseLayer: false, displayInLayerSwitcher: false,
      });
	  
	  var vectorLayerCentroids2 = new ol.layer.Vector({
        source: vectorSourceCentroids,
		name: 'centroids2',
		style: new ol.style.Style ({
			text: new ol.style.Text({
			text: '',
			scale: 1.3,
			fill: new ol.style.Fill({
			  color: '#000000'
			}),
			stroke: new ol.style.Stroke({
			  color: '#FFFF99',
			  width: 3.5
			})
		  })
		  }),
        crossOrigin: 'Anonymous',
        baseLayer: false, displayInLayerSwitcher: false,
      });
	  
	  var vectorLayerCentroids3 = new ol.layer.Vector({
        source: vectorSourceCentroids,
		name: 'centroids3',
		style: new ol.style.Style ({
			text: new ol.style.Text({
			text: '',
			scale: 1.3,
			fill: new ol.style.Fill({
			  color: '#000000'
			}),
			stroke: new ol.style.Stroke({
			  color: '#FFFF99',
			  width: 3.5
			})
		  })
		  }),
        crossOrigin: 'Anonymous',
        baseLayer: false, displayInLayerSwitcher: false,
      });
	  
      olMap.addLayer(vectorLayer);
	  olMap.addLayer(vectorLayerAfrica);
	  olMap.addLayer(vectorLayerCentroids);
      overviewMap.addLayer(vectorLayer);
	  overviewMap.addLayer(vectorLayerCentroids);
	  
	  olMap2.addLayer(vectorLayer);
	  olMap2.addLayer(vectorLayerAfrica);
	  olMap2.addLayer(vectorLayerCentroids2);
      overviewMap2.addLayer(vectorLayer);
	  overviewMap2.addLayer(vectorLayerCentroids2);
	  
	  olMap3.addLayer(vectorLayer);
	  olMap3.addLayer(vectorLayerAfrica);
	  olMap3.addLayer(vectorLayerCentroids3);
      overviewMap3.addLayer(vectorLayer);
	  overviewMap3.addLayer(vectorLayerCentroids3);