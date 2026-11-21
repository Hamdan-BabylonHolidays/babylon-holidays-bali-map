var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_trasnport_1 = new ol.format.GeoJSON();
var features_trasnport_1 = format_trasnport_1.readFeatures(json_trasnport_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trasnport_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_trasnport_1.addFeatures(features_trasnport_1);
var lyr_trasnport_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_trasnport_1, 
                style: style_trasnport_1,
                popuplayertitle: 'trasnport',
                interactive: true,
    title: 'trasnport<br />\
    <img src="styles/legend/trasnport_1_0.png" /> inkscap-airport<br />\
    <img src="styles/legend/trasnport_1_1.png" /> inkscap-lighthouse<br />\
    <img src="styles/legend/trasnport_1_2.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_trasnport_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_trasnport_1];
lyr_trasnport_1.set('fieldAliases', {'fid': 'fid', 'location_id': 'location_id', 'place_name': 'place_name', 'category': 'category', 'subcategory': 'subcategory', 'icon_file': 'icon_file', 'area': 'area', 'address': 'address', 'latitude': 'latitude', 'longitude': 'longitude', 'package_name': 'package_name', 'nights': 'nights', 'room_type': 'room_type', 'description': 'description', 'inclusions': 'inclusions', 'exclusions': 'exclusions', 'website_url': 'website_url', 'photo_url': 'photo_url', 'photo_file': 'photo_file', 'photo_credit': 'photo_credit', 'photo_license': 'photo_license', 'photo_source_page': 'photo_source_page', 'display_on_web': 'display_on_web', 'photo_approved': 'photo_approved', 'google_maps_url': 'google_maps_url', 'verified': 'verified', 'notes': 'notes', });
lyr_trasnport_1.set('fieldImages', {'fid': 'TextEdit', 'location_id': 'TextEdit', 'place_name': 'TextEdit', 'category': 'TextEdit', 'subcategory': 'TextEdit', 'icon_file': 'TextEdit', 'area': 'TextEdit', 'address': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'package_name': 'TextEdit', 'nights': 'Range', 'room_type': 'TextEdit', 'description': 'TextEdit', 'inclusions': 'TextEdit', 'exclusions': 'TextEdit', 'website_url': 'TextEdit', 'photo_url': 'TextEdit', 'photo_file': 'TextEdit', 'photo_credit': 'TextEdit', 'photo_license': 'TextEdit', 'photo_source_page': 'TextEdit', 'display_on_web': 'CheckBox', 'photo_approved': 'CheckBox', 'google_maps_url': 'TextEdit', 'verified': 'CheckBox', 'notes': 'TextEdit', });
lyr_trasnport_1.set('fieldLabels', {'fid': 'hidden field', 'location_id': 'hidden field', 'place_name': 'header label - visible with data', 'category': 'hidden field', 'subcategory': 'inline label - visible with data', 'icon_file': 'hidden field', 'area': 'inline label - visible with data', 'address': 'hidden field', 'latitude': 'hidden field', 'longitude': 'hidden field', 'package_name': 'hidden field', 'nights': 'hidden field', 'room_type': 'hidden field', 'description': 'no label', 'inclusions': 'hidden field', 'exclusions': 'hidden field', 'website_url': 'hidden field', 'photo_url': 'hidden field', 'photo_file': 'hidden field', 'photo_credit': 'hidden field', 'photo_license': 'hidden field', 'photo_source_page': 'hidden field', 'display_on_web': 'hidden field', 'photo_approved': 'hidden field', 'google_maps_url': 'hidden field', 'verified': 'hidden field', 'notes': 'hidden field', });
lyr_trasnport_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});