$(function() {
    var m = new google.maps.Map(document.getElementById('map'), {
		center:new google.maps.LatLng(42.350171,-71.084461),
		zoom:13,
		mapTypeId:'roadmap'
	});
	var mainLayer = new google.maps.FusionTablesLayer({
		map:m,
		query:{
			select:'geometry',
			from:'1lvBDxWXszO6XIa2TZZV5nt3gDnBtyVglFCTB2rU'
		}
	});
});