var m,mainLayer;
$(function() {
    m = new google.maps.Map(document.getElementById('map'), {
		center:new google.maps.LatLng(42.350171,-71.084461),
		zoom:13,
		mapTypeId:'roadmap'
	});
	mainLayer = new google.maps.KmlLayer('http://calvinmetcalf.github.com/cms/BostonRamp.kml');
    mainLayer.setMap(m);
});