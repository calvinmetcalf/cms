$(function() {
var m = new L.Map('map');
var t = new L.TileLayer("http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {subdomains:["otile1","otile2","otile3","otile4"],attribution:"Tiles from Mapquest, Tile data from Open Street Map"});
m.addLayer(t).setView(new L.LatLng(42.350171,-71.084461), 13);
var g= new L.GeoJSON();
g.on("featureparse", function (e) {
    if (e.properties && e.properties.name){
        e.layer.bindPopup(e.properties.name);
    };
      if (e.properties && e.properties.color && e.layer.setStyle){
        // The setStyle method isn't available for Points. More on that below ...
        e.layer.setStyle({weight:0,
            fillColor:e.properties.color,
            fillOpacity:.7});
    }
});
m.addLayer(g);
g.addGeoJSON({ 
    "type": "FeatureCollection",
    "features": [
        {
    		"type": "Feature",
            "geometry": {
                "type": "Polygon",
				"coordinates": [
                    [
                        [-71.069794,42.357361],
                        [-71.070236,42.358791],
                        [-71.070137,42.360252],
                        [-71.070183,42.36121],
                        [-71.07045,42.361591],
                        [-71.070549,42.361881],
                        [-71.070549,42.362259],
                        [-71.070358,42.362682],
                        [-71.070091,42.363167],
                        [-71.069695,42.363865],
                        [-71.069344,42.36467],
                        [-71.069031,42.365227],
                        [-71.068436,42.365803],
                        [-71.067719,42.366222],
                        [-71.067429,42.366512],
                        [-71.067444,42.366814],
                        [-71.072624,42.369507],
                        [-71.073013,42.369568],
                        [-71.073341,42.369476],
                        [-71.077873,42.364792],
                        [-71.079277,42.363308],
                        [-71.080124,42.362419],
                        [-71.080841,42.361656],
                        [-71.082642,42.361134],
                        [-71.091675,42.358139],
                        [-71.09626,42.356525],
                        [-71.102547,42.354385],
                        [-71.104477,42.353992],
                        [-71.106903,42.353867],
                        [-71.108696,42.354073],
                        [-71.111153,42.355244],
                        [-71.113747,42.356651],
                        [-71.114502,42.357685],
                        [-71.11512,42.359615],
                        [-71.115486,42.362083],
        		[-71.115692,42.364323],
        		[-71.115845,42.364906],
        		[-71.118271,42.364815],
        				[-71.118408,42.364208],
        				[-71.118301,42.362995],
        				[-71.117905,42.360657],
        				[-71.117798,42.359837],
        				[-71.117859,42.359138],
        				[-71.116959,42.356342],
        				[-71.116196,42.355087],
        				[-71.114647,42.354099],
        				[-71.112747,42.353416],
        				[-71.110809,42.352917],
        				[-71.11113,42.350845],
        				[-71.108948,42.350468],
        				[-71.108948,42.350464],
        				[-71.10865,42.350327],
        				[-71.108192,42.350155],
        				[-71.107674,42.349987],
        				[-71.10704,42.349815],
        				[-71.106476,42.349697],
        				[-71.102028,42.34885],
        				[-71.10202,42.34885],
        				[-71.101311,42.348709],
        				[-71.100937,42.348656],
        				[-71.100647,42.348614],
        				[-71.100441,42.348595],
        				[-71.100433,42.348595],
        				[-71.10022,42.348572],
        				[-71.099998,42.348568],
        				[-71.099686,42.34856],
        				[-71.099503,42.348564],
        				[-71.095726,42.348591],
        				[-71.095718,42.348591],
        				[-71.09314,42.348598],
        				[-71.090836,42.348606],
        				[-71.090828,42.348606],
        				[-71.090195,42.348606],
        				[-71.090134,42.348602],
        				[-71.089684,42.348579],
        				[-71.089645,42.348576],
        				[-71.089325,42.348549],
        				[-71.08931,42.348545],
        				[-71.089272,42.348541],
        				[-71.088921,42.348495],
        				[-71.088898,42.348492],
        				[-71.088394,42.348415],
        				[-71.088097,42.348385],
        				[-71.087914,42.348373],
        				[-71.087753,42.348366],
        				[-71.087456,42.348362],
        				[-71.087158,42.348358],
        				[-71.086784,42.348366],
        				[-71.08004,42.348488],
        				[-71.078735,42.348518],
        				[-71.078568,42.348522],
        				[-71.076065,42.348598],
        				[-71.07605,42.348598],
        				[-71.073776,42.348644],
        				[-71.073769,42.348644],
        				[-71.073753,42.348644],
        				[-71.071609,42.348637],
        				[-71.071274,42.34864],
        				[-71.071266,42.34864],
        				[-71.069923,42.348644],
        				[-71.069916,42.348644],
        				[-71.069893,42.348644],
        				[-71.069221,42.348629],
        				[-71.069199,42.348629],
        				[-71.068871,42.348618],
        				[-71.068848,42.348614],
        				[-71.06884,42.348614],
        				[-71.068619,42.348602],
        				[-71.068542,42.348595],
        				[-71.068497,42.348591],
        				[-71.068245,42.348564],
        				[-71.068184,42.348557],
        				[-71.068176,42.348557],
        				[-71.067825,42.348503],
        				[-71.067245,42.348438],
        				[-71.06723,42.348434],
        				[-71.066628,42.348358],
        				[-71.066597,42.348354],
        				[-71.065971,42.348263],
        				[-71.065926,42.348251],
        				[-71.06562,42.348194],
        				[-71.065559,42.348183],
        				[-71.065514,42.348175],
        				[-71.065468,42.348164],
        				[-71.065292,42.348122],
        				[-71.065285,42.348122],
        				[-71.064293,42.34787],
        				[-71.064194,42.347851],
        				[-71.064186,42.347851],
        				[-71.064171,42.347847],
        				[-71.064072,42.347824],
        				[-71.064026,42.347813],
        				[-71.064018,42.347813],
        				[-71.063202,42.347656],
        				[-71.062866,42.347488],
        				[-71.062592,42.347263],
        				[-71.062485,42.346954],
        				[-71.062492,42.346607],
        				[-71.062599,42.346317],
        				[-71.062798,42.346115],
        				[-71.063049,42.346004],
        				[-71.063087,42.346012],
        				[-71.06311,42.34602],
        				[-71.063629,42.346134],
        				[-71.063652,42.346142],
        				[-71.064499,42.346348],
        				[-71.06469,42.346397],
        				[-71.064919,42.346451],
        				[-71.064926,42.346451],
        				[-71.065857,42.346684],
        				[-71.066063,42.346718],
        				[-71.066101,42.346725],
        				[-71.066116,42.346729],
        				[-71.06646,42.346802],
        				[-71.067177,42.346897],
        				[-71.067703,42.34697],
        				[-71.068298,42.347038],
        				[-71.068893,42.347111],
        				[-71.069191,42.34713],
        				[-71.069847,42.347149],
        				[-71.073044,42.347157],
        				[-71.073662,42.347149],
        				[-71.076096,42.347076],
        				[-71.076103,42.347076],
        				[-71.078384,42.347015],
        				[-71.078392,42.347015],
        				[-71.078857,42.347008],
        				[-71.079758,42.346992],
        				[-71.079765,42.346992],
        				[-71.085526,42.346893],
        				[-71.08725,42.346863],
        				[-71.087265,42.346863],
        				[-71.087708,42.346863],
        				[-71.087715,42.346863],
        				[-71.087776,42.346863],
        				[-71.087784,42.346863],
        				[-71.087975,42.346874],
        				[-71.08815,42.346882],
        				[-71.088158,42.346882],
        				[-71.088211,42.346886],
        				[-71.088577,42.34692],
        				[-71.088593,42.34692],
        				[-71.088631,42.346928],
        				[-71.089081,42.346989],
        				[-71.089584,42.347054],
        				[-71.089806,42.347073],
        				[-71.09008,42.347088],
        				[-71.090851,42.347084],
        				[-71.094116,42.347073],
        				[-71.095795,42.347061],
        				[-71.095802,42.347061],
        				[-71.098236,42.347065],
        				[-71.099464,42.347038],
        				[-71.099495,42.347038],
        				[-71.09951,42.347038],
        				[-71.099785,42.347046],
        				[-71.100159,42.34705],
        				[-71.100212,42.34705],
        				[-71.100494,42.347065],
        				[-71.100525,42.347069],
        				[-71.100792,42.347088],
        				[-71.100822,42.347092],
        				[-71.100838,42.347092],
        				[-71.10112,42.347126],
        				[-71.101166,42.34713],
        				[-71.101166,42.347134],
        				[-71.101402,42.347168],
        				[-71.101425,42.347172],
        				[-71.102661,42.347389],
        				[-71.102676,42.347393],
        				[-71.106964,42.348209],
        				[-71.107162,42.348244],
        				[-71.107201,42.348248],
        				[-71.107552,42.34832],
        				[-71.107559,42.34832],
        				[-71.107613,42.348331],
        				[-71.108116,42.348461],
        				[-71.108154,42.348473],
        				[-71.108765,42.348652],
        				[-71.10878,42.348656],
        				[-71.108833,42.348675],
        				[-71.108849,42.348682],
        				[-71.10939,42.348888],
        				[-71.109421,42.348904],
        				[-71.109436,42.348911],
        				[-71.109779,42.349068],
        				[-71.110123,42.349216],
        				[-71.110161,42.349232],
        				[-71.110397,42.34935],
        				[-71.110413,42.349354],
        				[-71.110428,42.349361],
        				[-71.110977,42.349651],
        				[-71.110985,42.349651],
        				[-71.111099,42.349716],
        				[-71.11113,42.349731],
        				[-71.112144,42.350311],
        				[-71.112358,42.35043],
        				[-71.112625,42.350578],
        				[-71.112831,42.350677],
        				[-71.113083,42.350784],
        				[-71.113792,42.351048],
        				[-71.114226,42.351231],
        				[-71.131592,42.353394],
        				[-71.132225,42.353336],
        				[-71.132584,42.353069],
        				[-71.132202,42.351624],
        				[-71.131004,42.349556],
        				[-71.129585,42.347191],
        				[-71.128647,42.346024],
        				[-71.127045,42.344788],
        				[-71.124268,42.343349],
        				[-71.122795,42.342548],
        				[-71.121948,42.341747],
        				[-71.121368,42.341213],
        				[-71.118912,42.340706],
        				[-71.112274,42.340248],
        				[-71.110527,42.340084],
        				[-71.110626,42.339218],
        				[-71.110786,42.33831],
        				[-71.111,42.337421],
        				[-71.110733,42.336716],
        				[-71.110184,42.335918],
        				[-71.1092,42.336712],
        				[-71.104645,42.333874],
        				[-71.102562,42.33316],
        				[-71.100571,42.33247],
        				[-71.098396,42.331848],
        				[-71.096252,42.331474],
        				[-71.094261,42.331173],
        				[-71.093338,42.331921],
        				[-71.092506,42.332508],
        				[-71.088074,42.334862],
        				[-71.087303,42.335041],
        				[-71.08638,42.3349],
        				[-71.085373,42.334644],
        				[-71.084145,42.334209],
        				[-71.082954,42.333569],
        				[-71.081551,42.332809],
        				[-71.078522,42.33139],
        				[-71.077293,42.33102],
        				[-71.076225,42.330765],
        				[-71.075485,42.330719],
        				[-71.073524,42.331074],
        				[-71.072449,42.331352],
        				[-71.071312,42.331749],
        				[-71.070686,42.332253],
        				[-71.070053,42.333115],
        				[-71.068657,42.334141],
        				[-71.066544,42.334534],
        				[-71.063675,42.33469],
        				[-71.063805,42.335121],
        				[-71.063805,42.336018],
        				[-71.063477,42.33725],
        				[-71.062706,42.339108],
        				[-71.061852,42.341438],
        				[-71.061234,42.34293],
        				[-71.060577,42.344311],
        				[-71.060028,42.34481],
        				[-71.05938,42.345249],
        				[-71.059036,42.345451],
        				[-71.058685,42.345558],
        				[-71.057816,42.345707],
        				[-71.056938,42.345898],
        				[-71.055801,42.346172],
        				[-71.054367,42.346577],
        				[-71.051834,42.347195],
        				[-71.050026,42.347446],
        				[-71.04863,42.347462],
        				[-71.046936,42.3475],
        				[-71.045624,42.34782],
        				[-71.043793,42.347618],
        				[-71.042015,42.347134],
        				[-71.040039,42.346542],
        				[-71.038673,42.346344],
        				[-71.03698,42.346554],
        				[-71.036255,42.346703],
        				[-71.036453,42.347176],
        				[-71.0382,42.346989],
        				[-71.039597,42.347168],
        				[-71.041344,42.347736],
        				[-71.043144,42.348434],
        				[-71.043457,42.348869],
        				[-71.043312,42.349388],
        				[-71.042603,42.350464],
        				[-71.044197,42.351395],
        				[-71.045464,42.352013],
        				[-71.047905,42.353119],
        				[-71.051041,42.354828],
        				[-71.052048,42.355423],
                        [-71.052948,42.354904],
                        [-71.054024,42.354397],
                        [-71.056358,42.353195],
                        [-71.057533,42.352814],
                        [-71.058662,42.352859],
                        [-71.061531,42.352905],
                        [-71.064087,42.352715],
                        [-71.065971,42.352856],
                        [-71.06691,42.352959],
                        [-71.067314,42.353226],
                        [-71.069794,42.357361]
                    ]
                ]
			},
			"properties":{
				"name": "Regional Study Area",
				"color":"#f00"
			}
		},
     	{	
     		"type": "Feature",
      		"geometry": {
     			"type": "Polygon",
     			"coordinates": [
      				[
						[-71.114245,42.351239],
        				[-71.113792,42.351048],
        				[-71.113083,42.350784],
        				[-71.112831,42.350677],
        				[-71.112625,42.350578],
        				[-71.112358,42.35043],
        				[-71.112144,42.350311],
        				[-71.11113,42.349731],
        				[-71.111099,42.349716],
        				[-71.110985,42.349651],
        				[-71.110977,42.349651],
        				[-71.110428,42.349361],
        				[-71.110413,42.349354],
        				[-71.110397,42.34935],
        				[-71.110161,42.349232],
        				[-71.110123,42.349216],
        				[-71.109779,42.349068],
        				[-71.109436,42.348911],
        				[-71.109421,42.348904],
        				[-71.10939,42.348888],
        				[-71.108849,42.348682],
        				[-71.108833,42.348675],
        				[-71.10878,42.348656],
        				[-71.108765,42.348652],
        				[-71.108154,42.348473],
        				[-71.108116,42.348461],
        				[-71.107613,42.348331],
        				[-71.107559,42.34832],
        				[-71.107552,42.34832],
        				[-71.107201,42.348248],
        				[-71.107162,42.348244],
        				[-71.106964,42.348209],
        				[-71.102676,42.347393],
        				[-71.102661,42.347389],
        				[-71.101425,42.347172],
        				[-71.101402,42.347168],
        				[-71.101166,42.347134],
        				[-71.101166,42.34713],
        				[-71.10112,42.347126],
        				[-71.100838,42.347092],
        				[-71.100822,42.347092],
        				[-71.100792,42.347088],
        				[-71.100525,42.347069],
        				[-71.100494,42.347065],
        				[-71.100212,42.34705],
        				[-71.100159,42.34705],
        				[-71.099785,42.347046],
        				[-71.09951,42.347038],
        				[-71.099495,42.347038],
        				[-71.099464,42.347038],
        				[-71.098236,42.347065],
        				[-71.095802,42.347061],
        				[-71.095795,42.347061],
        				[-71.094116,42.347073],
        				[-71.090851,42.347084],
        				[-71.09008,42.347088],
        				[-71.089806,42.347073],
        				[-71.089584,42.347054],
        				[-71.089081,42.346989],
        				[-71.088631,42.346928],
        				[-71.088593,42.34692],
        				[-71.088577,42.34692],
        				[-71.088211,42.346886],
        				[-71.088158,42.346882],
        				[-71.08815,42.346882],
        				[-71.087975,42.346874],
        				[-71.087784,42.346863],
        				[-71.087776,42.346863],
        				[-71.087715,42.346863],
        				[-71.087708,42.346863],
        				[-71.087265,42.346863],
        				[-71.08725,42.346863],
        				[-71.085526,42.346893],
        				[-71.079765,42.346992],
        				[-71.079758,42.346992],
        				[-71.078857,42.347008],
        				[-71.078392,42.347015],
        				[-71.078384,42.347015],
        				[-71.076103,42.347076],
        				[-71.076096,42.347076],
        				[-71.073662,42.347149],
        				[-71.073044,42.347157],
        				[-71.069847,42.347149],
        				[-71.069191,42.34713],
        				[-71.068893,42.347111],
        				[-71.068298,42.347038],
        				[-71.067703,42.34697],
        				[-71.067177,42.346897],
        				[-71.06646,42.346802],
        				[-71.066116,42.346729],
        				[-71.066101,42.346725],
        				[-71.066063,42.346718],
        				[-71.065857,42.346684],
        				[-71.064926,42.346451],
        				[-71.064919,42.346451],
        				[-71.06469,42.346397],
        				[-71.064499,42.346348],
        				[-71.063652,42.346142],
        				[-71.063629,42.346134],
        				[-71.06311,42.34602],
        				[-71.063087,42.346012],
        				[-71.063049,42.346004],
        				[-71.062798,42.346115],
        				[-71.062599,42.346317],
        				[-71.062492,42.346607],
        				[-71.062485,42.346954],
        				[-71.062592,42.347263],
        				[-71.062866,42.347488],
        				[-71.063202,42.347656],
        				[-71.064018,42.347813],
        				[-71.064026,42.347813],
        				[-71.064072,42.347824],
        				[-71.064171,42.347847],
        				[-71.064186,42.347851],
        				[-71.064194,42.347851],
        				[-71.064293,42.34787],
        				[-71.065285,42.348122],
        				[-71.065292,42.348122],
        				[-71.065468,42.348164],
        				[-71.065514,42.348175],
        				[-71.065559,42.348183],
        				[-71.06562,42.348194],
        				[-71.065926,42.348251],
        				[-71.065971,42.348263],
        				[-71.066597,42.348354],
        				[-71.066628,42.348358],
        				[-71.06723,42.348434],
        				[-71.067245,42.348438],
        				[-71.067825,42.348503],
        				[-71.068176,42.348557],
        				[-71.068184,42.348557],
        				[-71.068245,42.348564],
        				[-71.068497,42.348591],
        				[-71.068542,42.348595],
        				[-71.068619,42.348602],
        				[-71.06884,42.348614],
        				[-71.068848,42.348614],
        				[-71.068871,42.348618],
        				[-71.069199,42.348629],
        				[-71.069221,42.348629],
        				[-71.069893,42.348644],
        				[-71.069916,42.348644],
        				[-71.069923,42.348644],
        				[-71.071266,42.34864],
        				[-71.071274,42.34864],
        				[-71.071609,42.348637],
        				[-71.073753,42.348644],
        				[-71.073769,42.348644],
        				[-71.073776,42.348644],
        				[-71.07605,42.348598],
        				[-71.076065,42.348598],
        				[-71.078568,42.348522],
        				[-71.078735,42.348518],
        				[-71.08004,42.348488],
        				[-71.086784,42.348366],
        				[-71.087158,42.348358],
        				[-71.087456,42.348362],
        				[-71.087753,42.348366],
        				[-71.087914,42.348373],
        				[-71.088097,42.348385],
        				[-71.088394,42.348415],
        				[-71.088898,42.348492],
        				[-71.088921,42.348495],
        				[-71.089272,42.348541],
        				[-71.08931,42.348545],
        				[-71.089325,42.348549],
        				[-71.089645,42.348576],
        				[-71.089684,42.348579],
        				[-71.090134,42.348602],
        				[-71.090195,42.348606],
        				[-71.090828,42.348606],
        				[-71.090836,42.348606],
        				[-71.09314,42.348598],
        				[-71.095718,42.348591],
        				[-71.095726,42.348591],
        				[-71.099503,42.348564],
        				[-71.099686,42.34856],
        				[-71.099998,42.348568],
        				[-71.10022,42.348572],
        				[-71.100433,42.348595],
        				[-71.100441,42.348595],
        				[-71.100647,42.348614],
        				[-71.100937,42.348656],
        				[-71.101311,42.348709],
        				[-71.10202,42.34885],
        				[-71.102028,42.34885],
        				[-71.106476,42.349697],
        				[-71.10704,42.349815],
        				[-71.107674,42.349987],
        				[-71.108192,42.350155],
        				[-71.10865,42.350327],
        				[-71.108948,42.350464],
        				[-71.108948,42.350468],
        				[-71.11113,42.350845],
        				[-71.114245,42.351239]
					]
     			]
    		},
    		"properties":{
    			"name": "Core  Study Area",
    			"color":"#0f0"
    		},

    	}
	]
});
    

});
