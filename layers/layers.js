var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_carte_viti_20263_1 = new ol.format.GeoJSON();
var features_carte_viti_20263_1 = format_carte_viti_20263_1.readFeatures(json_carte_viti_20263_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carte_viti_20263_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carte_viti_20263_1.addFeatures(features_carte_viti_20263_1);
var lyr_carte_viti_20263_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_carte_viti_20263_1, 
                style: style_carte_viti_20263_1,
                popuplayertitle: 'carte_viti_2026 ( 3 )',
                interactive: true,
    title: 'carte_viti_2026 ( 3 )<br />\
    <img src="styles/legend/carte_viti_20263_1_0.png" /> Cabernet franc<br />\
    <img src="styles/legend/carte_viti_20263_1_1.png" /> Cabernet Sauvignon<br />\
    <img src="styles/legend/carte_viti_20263_1_2.png" /> Malbec<br />\
    <img src="styles/legend/carte_viti_20263_1_3.png" /> Merlot<br />\
    <img src="styles/legend/carte_viti_20263_1_4.png" /> Terre<br />\
    <img src="styles/legend/carte_viti_20263_1_5.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_carte_viti_20263_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_carte_viti_20263_1];
lyr_carte_viti_20263_1.set('fieldAliases', {'fid': 'fid', 'SS_PARCELL': 'SS_PARCELL', 'age': 'age', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SS_PARCELLE': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SS_PARCELLE', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_Château': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_Château', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_CEPAGE': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_CEPAGE', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_PORTE_GREFFE': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_PORTE_GREFFE', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ANNEE_PLANTATION': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ANNEE_PLANTATION', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_RANGS': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_RANGS', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SURFACE_PRATIQUE_HA': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SURFACE_PRATIQUE_HA', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_NB_PIEDS': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_NB_PIEDS', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SURFACE_cvi': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SURFACE_cvi', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ETAT': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ETAT', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_CAMPAGNE': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_CAMPAGNE', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ANNEE_ARRACHAGE': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ANNEE_ARRACHAGE', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_AGE': 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_AGE', });
lyr_carte_viti_20263_1.set('fieldImages', {'fid': 'TextEdit', 'SS_PARCELL': 'TextEdit', 'age': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SS_PARCELLE': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_Château': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_CEPAGE': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_PORTE_GREFFE': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ANNEE_PLANTATION': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_RANGS': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SURFACE_PRATIQUE_HA': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_NB_PIEDS': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SURFACE_cvi': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ETAT': 'TextEdit', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_CAMPAGNE': 'Range', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ANNEE_ARRACHAGE': 'Range', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_AGE': 'Range', });
lyr_carte_viti_20263_1.set('fieldLabels', {'fid': 'no label', 'SS_PARCELL': 'no label', 'age': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SS_PARCELLE': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_Château': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_CEPAGE': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_PORTE_GREFFE': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ANNEE_PLANTATION': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_RANGS': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SURFACE_PRATIQUE_HA': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_NB_PIEDS': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_SURFACE_cvi': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ETAT': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_CAMPAGNE': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_ANNEE_ARRACHAGE': 'no label', 'MAJ SS_PARCELLES 05062026 - Copie — Feuil1_AGE': 'no label', });
lyr_carte_viti_20263_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});