ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:25830").setExtent([422570.610458, 4450593.874865, 458640.014371, 4510432.865039]);
var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'type':'base',
            'opacity': 0.468000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'http://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIStandard_1 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_4 = new ol.layer.Tile({
            'title': 'Google Road',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ndicedeInmigracin_5 = new ol.format.GeoJSON();
var features_ndicedeInmigracin_5 = format_ndicedeInmigracin_5.readFeatures(json_ndicedeInmigracin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ndicedeInmigracin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndicedeInmigracin_5.addFeatures(features_ndicedeInmigracin_5);
var lyr_ndicedeInmigracin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndicedeInmigracin_5, 
                style: style_ndicedeInmigracin_5,
                popuplayertitle: 'Índice de Inmigración',
                interactive: true,
    title: 'Índice de Inmigración<br />\
    <img src="styles/legend/ndicedeInmigracin_5_0.png" /> 0 - 0,25<br />\
    <img src="styles/legend/ndicedeInmigracin_5_1.png" /> 0,25 - 0,5<br />\
    <img src="styles/legend/ndicedeInmigracin_5_2.png" /> 0,5 - 0,75<br />\
    <img src="styles/legend/ndicedeInmigracin_5_3.png" /> 0,75 - 1<br />' });
var format_ndicedeEducacin_6 = new ol.format.GeoJSON();
var features_ndicedeEducacin_6 = format_ndicedeEducacin_6.readFeatures(json_ndicedeEducacin_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ndicedeEducacin_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndicedeEducacin_6.addFeatures(features_ndicedeEducacin_6);
var lyr_ndicedeEducacin_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndicedeEducacin_6, 
                style: style_ndicedeEducacin_6,
                popuplayertitle: 'Índice de Educación',
                interactive: true,
    title: 'Índice de Educación<br />\
    <img src="styles/legend/ndicedeEducacin_6_0.png" /> 0 - 0,25<br />\
    <img src="styles/legend/ndicedeEducacin_6_1.png" /> 0,25 - 0,5<br />\
    <img src="styles/legend/ndicedeEducacin_6_2.png" /> 0,5 - 0,75<br />\
    <img src="styles/legend/ndicedeEducacin_6_3.png" /> 0,75 - 1<br />' });
var format_ndicedeParo_7 = new ol.format.GeoJSON();
var features_ndicedeParo_7 = format_ndicedeParo_7.readFeatures(json_ndicedeParo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ndicedeParo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndicedeParo_7.addFeatures(features_ndicedeParo_7);
var lyr_ndicedeParo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndicedeParo_7, 
                style: style_ndicedeParo_7,
                popuplayertitle: 'Índice de Paro',
                interactive: true,
    title: 'Índice de Paro<br />\
    <img src="styles/legend/ndicedeParo_7_0.png" /> 0 - 0,25<br />\
    <img src="styles/legend/ndicedeParo_7_1.png" /> 0,25 - 0,5<br />\
    <img src="styles/legend/ndicedeParo_7_2.png" /> 0,5 - 0,75<br />\
    <img src="styles/legend/ndicedeParo_7_3.png" /> 0,75 - 1<br />' });
var format_ndicedeRenta_8 = new ol.format.GeoJSON();
var features_ndicedeRenta_8 = format_ndicedeRenta_8.readFeatures(json_ndicedeRenta_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ndicedeRenta_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndicedeRenta_8.addFeatures(features_ndicedeRenta_8);
var lyr_ndicedeRenta_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndicedeRenta_8, 
                style: style_ndicedeRenta_8,
                popuplayertitle: 'Índice de Renta',
                interactive: true,
    title: 'Índice de Renta<br />\
    <img src="styles/legend/ndicedeRenta_8_0.png" /> 0,00 - 0,25<br />\
    <img src="styles/legend/ndicedeRenta_8_1.png" /> 0,25 - 0,46<br />\
    <img src="styles/legend/ndicedeRenta_8_2.png" /> 0,46 - 0,68<br />\
    <img src="styles/legend/ndicedeRenta_8_3.png" /> 0,68 - 0,90<br />' });
var format_ndicedePrivacinIP21_9 = new ol.format.GeoJSON();
var features_ndicedePrivacinIP21_9 = format_ndicedePrivacinIP21_9.readFeatures(json_ndicedePrivacinIP21_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ndicedePrivacinIP21_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ndicedePrivacinIP21_9.addFeatures(features_ndicedePrivacinIP21_9);
var lyr_ndicedePrivacinIP21_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ndicedePrivacinIP21_9, 
                style: style_ndicedePrivacinIP21_9,
                popuplayertitle: 'Índice de Privación - IP21',
                interactive: true,
    title: 'Índice de Privación - IP21<br />\
    <img src="styles/legend/ndicedePrivacinIP21_9_0.png" /> 0 - 0,25<br />\
    <img src="styles/legend/ndicedePrivacinIP21_9_1.png" /> 0,25 - 0,46<br />\
    <img src="styles/legend/ndicedePrivacinIP21_9_2.png" /> 0,46 - 0,68<br />\
    <img src="styles/legend/ndicedePrivacinIP21_9_3.png" /> 0,68 - 0,9<br />' });
var format_AmbitoCMSc_10 = new ol.format.GeoJSON();
var features_AmbitoCMSc_10 = format_AmbitoCMSc_10.readFeatures(json_AmbitoCMSc_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AmbitoCMSc_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmbitoCMSc_10.addFeatures(features_AmbitoCMSc_10);
var lyr_AmbitoCMSc_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmbitoCMSc_10, 
                style: style_AmbitoCMSc_10,
                popuplayertitle: 'Ambito CMSc',
                interactive: true,
                title: '<img src="styles/legend/AmbitoCMSc_10.png" /> Ambito CMSc'
            });
var format_ZonaBasicaSaludAreaUnicaZBSAU_11 = new ol.format.GeoJSON();
var features_ZonaBasicaSaludAreaUnicaZBSAU_11 = format_ZonaBasicaSaludAreaUnicaZBSAU_11.readFeatures(json_ZonaBasicaSaludAreaUnicaZBSAU_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ZonaBasicaSaludAreaUnicaZBSAU_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaBasicaSaludAreaUnicaZBSAU_11.addFeatures(features_ZonaBasicaSaludAreaUnicaZBSAU_11);
var lyr_ZonaBasicaSaludAreaUnicaZBSAU_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaBasicaSaludAreaUnicaZBSAU_11, 
                style: style_ZonaBasicaSaludAreaUnicaZBSAU_11,
                popuplayertitle: 'Zona Basica Salud Area Unica (ZB SAU)',
                interactive: true,
                title: '<img src="styles/legend/ZonaBasicaSaludAreaUnicaZBSAU_11.png" /> Zona Basica Salud Area Unica (ZB SAU)'
            });
var format_SeccionesCensales_12 = new ol.format.GeoJSON();
var features_SeccionesCensales_12 = format_SeccionesCensales_12.readFeatures(json_SeccionesCensales_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_SeccionesCensales_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SeccionesCensales_12.addFeatures(features_SeccionesCensales_12);
var lyr_SeccionesCensales_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SeccionesCensales_12, 
                style: style_SeccionesCensales_12,
                popuplayertitle: 'Secciones Censales',
                interactive: true,
                title: '<img src="styles/legend/SeccionesCensales_12.png" /> Secciones Censales'
            });
var format_Barrios_13 = new ol.format.GeoJSON();
var features_Barrios_13 = format_Barrios_13.readFeatures(json_Barrios_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Barrios_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barrios_13.addFeatures(features_Barrios_13);
var lyr_Barrios_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barrios_13, 
                style: style_Barrios_13,
                popuplayertitle: 'Barrios',
                interactive: true,
                title: '<img src="styles/legend/Barrios_13.png" /> Barrios'
            });
var format_Distritos_14 = new ol.format.GeoJSON();
var features_Distritos_14 = format_Distritos_14.readFeatures(json_Distritos_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_Distritos_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_14.addFeatures(features_Distritos_14);
var lyr_Distritos_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Distritos_14, 
                style: style_Distritos_14,
                popuplayertitle: 'Distritos',
                interactive: true,
                title: '<img src="styles/legend/Distritos_14.png" /> Distritos'
            });
var format_LineasdeBusUrbanoEMT_15 = new ol.format.GeoJSON();
var features_LineasdeBusUrbanoEMT_15 = format_LineasdeBusUrbanoEMT_15.readFeatures(json_LineasdeBusUrbanoEMT_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_LineasdeBusUrbanoEMT_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineasdeBusUrbanoEMT_15.addFeatures(features_LineasdeBusUrbanoEMT_15);
var lyr_LineasdeBusUrbanoEMT_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineasdeBusUrbanoEMT_15, 
                style: style_LineasdeBusUrbanoEMT_15,
                popuplayertitle: 'Lineas de Bus Urbano EMT',
                interactive: true,
                title: '<img src="styles/legend/LineasdeBusUrbanoEMT_15.png" /> Lineas de Bus Urbano EMT'
            });
var format_ParadasdeBusUrbanoEMT_16 = new ol.format.GeoJSON();
var features_ParadasdeBusUrbanoEMT_16 = format_ParadasdeBusUrbanoEMT_16.readFeatures(json_ParadasdeBusUrbanoEMT_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ParadasdeBusUrbanoEMT_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParadasdeBusUrbanoEMT_16.addFeatures(features_ParadasdeBusUrbanoEMT_16);
var lyr_ParadasdeBusUrbanoEMT_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParadasdeBusUrbanoEMT_16, 
                style: style_ParadasdeBusUrbanoEMT_16,
                popuplayertitle: 'Paradas de Bus Urbano EMT',
                interactive: true,
                title: '<img src="styles/legend/ParadasdeBusUrbanoEMT_16.png" /> Paradas de Bus Urbano EMT'
            });
var format_LineasdeMetro_17 = new ol.format.GeoJSON();
var features_LineasdeMetro_17 = format_LineasdeMetro_17.readFeatures(json_LineasdeMetro_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_LineasdeMetro_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineasdeMetro_17.addFeatures(features_LineasdeMetro_17);
var lyr_LineasdeMetro_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineasdeMetro_17, 
                style: style_LineasdeMetro_17,
                popuplayertitle: 'Lineas de Metro',
                interactive: true,
    title: 'Lineas de Metro<br />\
    <img src="styles/legend/LineasdeMetro_17_0.png" /> 1<br />\
    <img src="styles/legend/LineasdeMetro_17_1.png" /> 2<br />\
    <img src="styles/legend/LineasdeMetro_17_2.png" /> 3<br />\
    <img src="styles/legend/LineasdeMetro_17_3.png" /> 4<br />\
    <img src="styles/legend/LineasdeMetro_17_4.png" /> 5<br />\
    <img src="styles/legend/LineasdeMetro_17_5.png" /> 6<br />\
    <img src="styles/legend/LineasdeMetro_17_6.png" /> 7<br />\
    <img src="styles/legend/LineasdeMetro_17_7.png" /> 8<br />\
    <img src="styles/legend/LineasdeMetro_17_8.png" /> 9<br />\
    <img src="styles/legend/LineasdeMetro_17_9.png" /> 10<br />\
    <img src="styles/legend/LineasdeMetro_17_10.png" /> 11<br />\
    <img src="styles/legend/LineasdeMetro_17_11.png" /> 12<br />\
    <img src="styles/legend/LineasdeMetro_17_12.png" /> ML-1<br />\
    <img src="styles/legend/LineasdeMetro_17_13.png" /> ML-2<br />\
    <img src="styles/legend/LineasdeMetro_17_14.png" /> ML-3<br />\
    <img src="styles/legend/LineasdeMetro_17_15.png" /> Ramal<br />\
    <img src="styles/legend/LineasdeMetro_17_16.png" /> TP<br />' });
var format_EstacionMetrodeMadrid_18 = new ol.format.GeoJSON();
var features_EstacionMetrodeMadrid_18 = format_EstacionMetrodeMadrid_18.readFeatures(json_EstacionMetrodeMadrid_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EstacionMetrodeMadrid_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionMetrodeMadrid_18.addFeatures(features_EstacionMetrodeMadrid_18);
var lyr_EstacionMetrodeMadrid_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionMetrodeMadrid_18, 
                style: style_EstacionMetrodeMadrid_18,
                popuplayertitle: 'Estacion Metro de Madrid',
                interactive: true,
                title: '<img src="styles/legend/EstacionMetrodeMadrid_18.png" /> Estacion Metro de Madrid'
            });
var format_LneasdetrenCercaniasRenfe_19 = new ol.format.GeoJSON();
var features_LneasdetrenCercaniasRenfe_19 = format_LneasdetrenCercaniasRenfe_19.readFeatures(json_LneasdetrenCercaniasRenfe_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_LneasdetrenCercaniasRenfe_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LneasdetrenCercaniasRenfe_19.addFeatures(features_LneasdetrenCercaniasRenfe_19);
var lyr_LneasdetrenCercaniasRenfe_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LneasdetrenCercaniasRenfe_19, 
                style: style_LneasdetrenCercaniasRenfe_19,
                popuplayertitle: 'Líneas de tren Cercanias Renfe',
                interactive: true,
                title: '<img src="styles/legend/LneasdetrenCercaniasRenfe_19.png" /> Líneas de tren Cercanias Renfe'
            });
var format_EstacionCercaniasRenfe_20 = new ol.format.GeoJSON();
var features_EstacionCercaniasRenfe_20 = format_EstacionCercaniasRenfe_20.readFeatures(json_EstacionCercaniasRenfe_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_EstacionCercaniasRenfe_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionCercaniasRenfe_20.addFeatures(features_EstacionCercaniasRenfe_20);
var lyr_EstacionCercaniasRenfe_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstacionCercaniasRenfe_20, 
                style: style_EstacionCercaniasRenfe_20,
                popuplayertitle: 'Estacion Cercanias Renfe',
                interactive: true,
                title: '<img src="styles/legend/EstacionCercaniasRenfe_20.png" /> Estacion Cercanias Renfe'
            });
var format_PARQUESYJARDINES_21 = new ol.format.GeoJSON();
var features_PARQUESYJARDINES_21 = format_PARQUESYJARDINES_21.readFeatures(json_PARQUESYJARDINES_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PARQUESYJARDINES_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PARQUESYJARDINES_21.addFeatures(features_PARQUESYJARDINES_21);
var lyr_PARQUESYJARDINES_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PARQUESYJARDINES_21, 
                style: style_PARQUESYJARDINES_21,
                popuplayertitle: 'PARQUES Y JARDINES',
                interactive: true,
                title: '<img src="styles/legend/PARQUESYJARDINES_21.png" /> PARQUES Y JARDINES'
            });
var format_INSTALACIONESDEPORTIVAS_22 = new ol.format.GeoJSON();
var features_INSTALACIONESDEPORTIVAS_22 = format_INSTALACIONESDEPORTIVAS_22.readFeatures(json_INSTALACIONESDEPORTIVAS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_INSTALACIONESDEPORTIVAS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSTALACIONESDEPORTIVAS_22.addFeatures(features_INSTALACIONESDEPORTIVAS_22);
var lyr_INSTALACIONESDEPORTIVAS_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INSTALACIONESDEPORTIVAS_22, 
                style: style_INSTALACIONESDEPORTIVAS_22,
                popuplayertitle: 'INSTALACIONES DEPORTIVAS',
                interactive: true,
                title: '<img src="styles/legend/INSTALACIONESDEPORTIVAS_22.png" /> INSTALACIONES DEPORTIVAS'
            });
var format_RUTASWAP_23 = new ol.format.GeoJSON();
var features_RUTASWAP_23 = format_RUTASWAP_23.readFeatures(json_RUTASWAP_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_RUTASWAP_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTASWAP_23.addFeatures(features_RUTASWAP_23);
var lyr_RUTASWAP_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTASWAP_23, 
                style: style_RUTASWAP_23,
                popuplayertitle: 'RUTAS WAP',
                interactive: true,
                title: '<img src="styles/legend/RUTASWAP_23.png" /> RUTAS WAP'
            });
var format_INSTALACIONESDEPORTIVASBSICAS_24 = new ol.format.GeoJSON();
var features_INSTALACIONESDEPORTIVASBSICAS_24 = format_INSTALACIONESDEPORTIVASBSICAS_24.readFeatures(json_INSTALACIONESDEPORTIVASBSICAS_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_INSTALACIONESDEPORTIVASBSICAS_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSTALACIONESDEPORTIVASBSICAS_24.addFeatures(features_INSTALACIONESDEPORTIVASBSICAS_24);
var lyr_INSTALACIONESDEPORTIVASBSICAS_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INSTALACIONESDEPORTIVASBSICAS_24, 
                style: style_INSTALACIONESDEPORTIVASBSICAS_24,
                popuplayertitle: 'INSTALACIONES DEPORTIVAS BÁSICAS',
                interactive: true,
                title: '<img src="styles/legend/INSTALACIONESDEPORTIVASBSICAS_24.png" /> INSTALACIONES DEPORTIVAS BÁSICAS'
            });
var format_AREASDEPORTIVAS_25 = new ol.format.GeoJSON();
var features_AREASDEPORTIVAS_25 = format_AREASDEPORTIVAS_25.readFeatures(json_AREASDEPORTIVAS_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AREASDEPORTIVAS_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASDEPORTIVAS_25.addFeatures(features_AREASDEPORTIVAS_25);
var lyr_AREASDEPORTIVAS_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREASDEPORTIVAS_25, 
                style: style_AREASDEPORTIVAS_25,
                popuplayertitle: 'AREAS DEPORTIVAS',
                interactive: true,
                title: '<img src="styles/legend/AREASDEPORTIVAS_25.png" /> AREAS DEPORTIVAS'
            });
var format_AREASINFANTILES_26 = new ol.format.GeoJSON();
var features_AREASINFANTILES_26 = format_AREASINFANTILES_26.readFeatures(json_AREASINFANTILES_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AREASINFANTILES_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREASINFANTILES_26.addFeatures(features_AREASINFANTILES_26);
var lyr_AREASINFANTILES_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREASINFANTILES_26, 
                style: style_AREASINFANTILES_26,
                popuplayertitle: 'AREAS INFANTILES',
                interactive: true,
                title: '<img src="styles/legend/AREASINFANTILES_26.png" /> AREAS INFANTILES'
            });
var format_AREADEMAYORES_27 = new ol.format.GeoJSON();
var features_AREADEMAYORES_27 = format_AREADEMAYORES_27.readFeatures(json_AREADEMAYORES_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AREADEMAYORES_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREADEMAYORES_27.addFeatures(features_AREADEMAYORES_27);
var lyr_AREADEMAYORES_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AREADEMAYORES_27, 
                style: style_AREADEMAYORES_27,
                popuplayertitle: 'AREA DE MAYORES',
                interactive: true,
                title: '<img src="styles/legend/AREADEMAYORES_27.png" /> AREA DE MAYORES'
            });
var format_MERCADILLOS_28 = new ol.format.GeoJSON();
var features_MERCADILLOS_28 = format_MERCADILLOS_28.readFeatures(json_MERCADILLOS_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_MERCADILLOS_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MERCADILLOS_28.addFeatures(features_MERCADILLOS_28);
var lyr_MERCADILLOS_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MERCADILLOS_28, 
                style: style_MERCADILLOS_28,
                popuplayertitle: 'MERCADILLOS',
                interactive: true,
                title: '<img src="styles/legend/MERCADILLOS_28.png" /> MERCADILLOS'
            });
var format_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29 = new ol.format.GeoJSON();
var features_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29 = format_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29.readFeatures(json_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29.addFeatures(features_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29);
var lyr_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29, 
                style: style_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29,
                popuplayertitle: 'GALERÍAS DE ALIMENTACIÓN Y MERCADOS MUNICIPALES',
                interactive: true,
                title: '<img src="styles/legend/GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29.png" /> GALERÍAS DE ALIMENTACIÓN Y MERCADOS MUNICIPALES'
            });
var format_CENTROSCOMERCIALES_30 = new ol.format.GeoJSON();
var features_CENTROSCOMERCIALES_30 = format_CENTROSCOMERCIALES_30.readFeatures(json_CENTROSCOMERCIALES_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSCOMERCIALES_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCOMERCIALES_30.addFeatures(features_CENTROSCOMERCIALES_30);
var lyr_CENTROSCOMERCIALES_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSCOMERCIALES_30, 
                style: style_CENTROSCOMERCIALES_30,
                popuplayertitle: 'CENTROS COMERCIALES',
                interactive: true,
                title: '<img src="styles/legend/CENTROSCOMERCIALES_30.png" /> CENTROS COMERCIALES'
            });
var format_FARMACIAS_31 = new ol.format.GeoJSON();
var features_FARMACIAS_31 = format_FARMACIAS_31.readFeatures(json_FARMACIAS_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_FARMACIAS_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FARMACIAS_31.addFeatures(features_FARMACIAS_31);
var lyr_FARMACIAS_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FARMACIAS_31, 
                style: style_FARMACIAS_31,
                popuplayertitle: 'FARMACIAS',
                interactive: true,
                title: '<img src="styles/legend/FARMACIAS_31.png" /> FARMACIAS'
            });
var format_TEMPLOSOTRASRELIGIONES_32 = new ol.format.GeoJSON();
var features_TEMPLOSOTRASRELIGIONES_32 = format_TEMPLOSOTRASRELIGIONES_32.readFeatures(json_TEMPLOSOTRASRELIGIONES_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_TEMPLOSOTRASRELIGIONES_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPLOSOTRASRELIGIONES_32.addFeatures(features_TEMPLOSOTRASRELIGIONES_32);
var lyr_TEMPLOSOTRASRELIGIONES_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPLOSOTRASRELIGIONES_32, 
                style: style_TEMPLOSOTRASRELIGIONES_32,
                popuplayertitle: 'TEMPLOS OTRAS RELIGIONES',
                interactive: true,
                title: '<img src="styles/legend/TEMPLOSOTRASRELIGIONES_32.png" /> TEMPLOS OTRAS RELIGIONES'
            });
var format_TEMPLOSIGLESIASCATLICAS_33 = new ol.format.GeoJSON();
var features_TEMPLOSIGLESIASCATLICAS_33 = format_TEMPLOSIGLESIASCATLICAS_33.readFeatures(json_TEMPLOSIGLESIASCATLICAS_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_TEMPLOSIGLESIASCATLICAS_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TEMPLOSIGLESIASCATLICAS_33.addFeatures(features_TEMPLOSIGLESIASCATLICAS_33);
var lyr_TEMPLOSIGLESIASCATLICAS_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TEMPLOSIGLESIASCATLICAS_33, 
                style: style_TEMPLOSIGLESIASCATLICAS_33,
                popuplayertitle: 'TEMPLOS IGLESIAS CATÓLICAS',
                interactive: true,
                title: '<img src="styles/legend/TEMPLOSIGLESIASCATLICAS_33.png" /> TEMPLOS IGLESIAS CATÓLICAS'
            });
var format_HUERTOSURBANOS_34 = new ol.format.GeoJSON();
var features_HUERTOSURBANOS_34 = format_HUERTOSURBANOS_34.readFeatures(json_HUERTOSURBANOS_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_HUERTOSURBANOS_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HUERTOSURBANOS_34.addFeatures(features_HUERTOSURBANOS_34);
var lyr_HUERTOSURBANOS_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HUERTOSURBANOS_34, 
                style: style_HUERTOSURBANOS_34,
                popuplayertitle: 'HUERTOS URBANOS',
                interactive: true,
                title: '<img src="styles/legend/HUERTOSURBANOS_34.png" /> HUERTOS URBANOS'
            });
var format_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35 = new ol.format.GeoJSON();
var features_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35 = format_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35.readFeatures(json_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35.addFeatures(features_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35);
var lyr_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35, 
                style: style_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35,
                popuplayertitle: 'ESPACIOS COMUNITARIOS COMPARTIDOS',
                interactive: true,
                title: '<img src="styles/legend/ESPACIOSCOMUNITARIOSCOMPARTIDOS_35.png" /> ESPACIOS COMUNITARIOS COMPARTIDOS'
            });
var format_AGENCIASDECOLOCACIN_36 = new ol.format.GeoJSON();
var features_AGENCIASDECOLOCACIN_36 = format_AGENCIASDECOLOCACIN_36.readFeatures(json_AGENCIASDECOLOCACIN_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_AGENCIASDECOLOCACIN_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGENCIASDECOLOCACIN_36.addFeatures(features_AGENCIASDECOLOCACIN_36);
var lyr_AGENCIASDECOLOCACIN_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGENCIASDECOLOCACIN_36, 
                style: style_AGENCIASDECOLOCACIN_36,
                popuplayertitle: 'AGENCIAS DE COLOCACIÓN',
                interactive: true,
                title: '<img src="styles/legend/AGENCIASDECOLOCACIN_36.png" /> AGENCIAS DE COLOCACIÓN'
            });
var format_COMISARASDEPOLICA_37 = new ol.format.GeoJSON();
var features_COMISARASDEPOLICA_37 = format_COMISARASDEPOLICA_37.readFeatures(json_COMISARASDEPOLICA_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_COMISARASDEPOLICA_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMISARASDEPOLICA_37.addFeatures(features_COMISARASDEPOLICA_37);
var lyr_COMISARASDEPOLICA_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMISARASDEPOLICA_37, 
                style: style_COMISARASDEPOLICA_37,
                popuplayertitle: 'COMISARÍAS DE POLICÍA',
                interactive: true,
                title: '<img src="styles/legend/COMISARASDEPOLICA_37.png" /> COMISARÍAS DE POLICÍA'
            });
var format_OFICINASDEINFORMACINJUVENIL_38 = new ol.format.GeoJSON();
var features_OFICINASDEINFORMACINJUVENIL_38 = format_OFICINASDEINFORMACINJUVENIL_38.readFeatures(json_OFICINASDEINFORMACINJUVENIL_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_OFICINASDEINFORMACINJUVENIL_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OFICINASDEINFORMACINJUVENIL_38.addFeatures(features_OFICINASDEINFORMACINJUVENIL_38);
var lyr_OFICINASDEINFORMACINJUVENIL_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OFICINASDEINFORMACINJUVENIL_38, 
                style: style_OFICINASDEINFORMACINJUVENIL_38,
                popuplayertitle: 'OFICINAS DE INFORMACIÓN JUVENIL',
                interactive: true,
                title: '<img src="styles/legend/OFICINASDEINFORMACINJUVENIL_38.png" /> OFICINAS DE INFORMACIÓN JUVENIL'
            });
var format_JUNTASMUNICIPALESDEDISTRITO_39 = new ol.format.GeoJSON();
var features_JUNTASMUNICIPALESDEDISTRITO_39 = format_JUNTASMUNICIPALESDEDISTRITO_39.readFeatures(json_JUNTASMUNICIPALESDEDISTRITO_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_JUNTASMUNICIPALESDEDISTRITO_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JUNTASMUNICIPALESDEDISTRITO_39.addFeatures(features_JUNTASMUNICIPALESDEDISTRITO_39);
var lyr_JUNTASMUNICIPALESDEDISTRITO_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JUNTASMUNICIPALESDEDISTRITO_39, 
                style: style_JUNTASMUNICIPALESDEDISTRITO_39,
                popuplayertitle: 'JUNTAS MUNICIPALES DE DISTRITO',
                interactive: true,
                title: '<img src="styles/legend/JUNTASMUNICIPALESDEDISTRITO_39.png" /> JUNTAS MUNICIPALES DE DISTRITO'
            });
var format_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40 = new ol.format.GeoJSON();
var features_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40 = format_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40.readFeatures(json_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40.addFeatures(features_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40);
var lyr_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40, 
                style: style_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40,
                popuplayertitle: 'ASOCIACIONES DE ACCIÓN SOCIAL Y COOPERACIÓN',
                interactive: true,
                title: '<img src="styles/legend/ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40.png" /> ASOCIACIONES DE ACCIÓN SOCIAL Y COOPERACIÓN'
            });
var format_ASOCIACIONESDEINMIGRANTES_41 = new ol.format.GeoJSON();
var features_ASOCIACIONESDEINMIGRANTES_41 = format_ASOCIACIONESDEINMIGRANTES_41.readFeatures(json_ASOCIACIONESDEINMIGRANTES_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ASOCIACIONESDEINMIGRANTES_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASOCIACIONESDEINMIGRANTES_41.addFeatures(features_ASOCIACIONESDEINMIGRANTES_41);
var lyr_ASOCIACIONESDEINMIGRANTES_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASOCIACIONESDEINMIGRANTES_41, 
                style: style_ASOCIACIONESDEINMIGRANTES_41,
                popuplayertitle: 'ASOCIACIONES DE INMIGRANTES',
                interactive: true,
                title: '<img src="styles/legend/ASOCIACIONESDEINMIGRANTES_41.png" /> ASOCIACIONES DE INMIGRANTES'
            });
var format_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42 = new ol.format.GeoJSON();
var features_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42 = format_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42.readFeatures(json_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42.addFeatures(features_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42);
var lyr_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42, 
                style: style_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42,
                popuplayertitle: 'ASOCIACIONES DE MUJERES Y PERSONAS LGTBI',
                interactive: true,
                title: '<img src="styles/legend/ASOCIACIONESDEMUJERESYPERSONASLGTBI_42.png" /> ASOCIACIONES DE MUJERES Y PERSONAS LGTBI'
            });
var format_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43 = new ol.format.GeoJSON();
var features_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43 = format_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43.readFeatures(json_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43.addFeatures(features_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43);
var lyr_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43, 
                style: style_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43,
                popuplayertitle: 'ASOCIACIONES DE PERSONAS CON DISCAPACIDAD',
                interactive: true,
                title: '<img src="styles/legend/ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43.png" /> ASOCIACIONES DE PERSONAS CON DISCAPACIDAD'
            });
var format_ASOCIACIONESDEFAMILIASEINFANCIA_44 = new ol.format.GeoJSON();
var features_ASOCIACIONESDEFAMILIASEINFANCIA_44 = format_ASOCIACIONESDEFAMILIASEINFANCIA_44.readFeatures(json_ASOCIACIONESDEFAMILIASEINFANCIA_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ASOCIACIONESDEFAMILIASEINFANCIA_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASOCIACIONESDEFAMILIASEINFANCIA_44.addFeatures(features_ASOCIACIONESDEFAMILIASEINFANCIA_44);
var lyr_ASOCIACIONESDEFAMILIASEINFANCIA_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASOCIACIONESDEFAMILIASEINFANCIA_44, 
                style: style_ASOCIACIONESDEFAMILIASEINFANCIA_44,
                popuplayertitle: 'ASOCIACIONES DE FAMILIAS E INFANCIA',
                interactive: true,
                title: '<img src="styles/legend/ASOCIACIONESDEFAMILIASEINFANCIA_44.png" /> ASOCIACIONES DE FAMILIAS E INFANCIA'
            });
var format_ASOCIACIONESDESALUDYAPOYOMUTUO_45 = new ol.format.GeoJSON();
var features_ASOCIACIONESDESALUDYAPOYOMUTUO_45 = format_ASOCIACIONESDESALUDYAPOYOMUTUO_45.readFeatures(json_ASOCIACIONESDESALUDYAPOYOMUTUO_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ASOCIACIONESDESALUDYAPOYOMUTUO_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASOCIACIONESDESALUDYAPOYOMUTUO_45.addFeatures(features_ASOCIACIONESDESALUDYAPOYOMUTUO_45);
var lyr_ASOCIACIONESDESALUDYAPOYOMUTUO_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASOCIACIONESDESALUDYAPOYOMUTUO_45, 
                style: style_ASOCIACIONESDESALUDYAPOYOMUTUO_45,
                popuplayertitle: 'ASOCIACIONES DE SALUD Y APOYO MUTUO',
                interactive: true,
                title: '<img src="styles/legend/ASOCIACIONESDESALUDYAPOYOMUTUO_45.png" /> ASOCIACIONES DE SALUD Y APOYO MUTUO'
            });
var format_ASOCIACIONESVECINALES_46 = new ol.format.GeoJSON();
var features_ASOCIACIONESVECINALES_46 = format_ASOCIACIONESVECINALES_46.readFeatures(json_ASOCIACIONESVECINALES_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ASOCIACIONESVECINALES_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ASOCIACIONESVECINALES_46.addFeatures(features_ASOCIACIONESVECINALES_46);
var lyr_ASOCIACIONESVECINALES_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ASOCIACIONESVECINALES_46, 
                style: style_ASOCIACIONESVECINALES_46,
                popuplayertitle: 'ASOCIACIONES VECINALES',
                interactive: true,
                title: '<img src="styles/legend/ASOCIACIONESVECINALES_46.png" /> ASOCIACIONES VECINALES'
            });
var format_PISCINAS_47 = new ol.format.GeoJSON();
var features_PISCINAS_47 = format_PISCINAS_47.readFeatures(json_PISCINAS_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_PISCINAS_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PISCINAS_47.addFeatures(features_PISCINAS_47);
var lyr_PISCINAS_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PISCINAS_47, 
                style: style_PISCINAS_47,
                popuplayertitle: 'PISCINAS',
                interactive: true,
                title: '<img src="styles/legend/PISCINAS_47.png" /> PISCINAS'
            });
var format_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48 = new ol.format.GeoJSON();
var features_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48 = format_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48.readFeatures(json_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48.addFeatures(features_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48);
var lyr_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48, 
                style: style_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48,
                popuplayertitle: 'CENTROS DEPORTIVOS MUNICIPALES Y ESPACIOS DE DEPORTE',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48.png" /> CENTROS DEPORTIVOS MUNICIPALES Y ESPACIOS DE DEPORTE'
            });
var format_MUSEOS_49 = new ol.format.GeoJSON();
var features_MUSEOS_49 = format_MUSEOS_49.readFeatures(json_MUSEOS_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_MUSEOS_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUSEOS_49.addFeatures(features_MUSEOS_49);
var lyr_MUSEOS_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUSEOS_49, 
                style: style_MUSEOS_49,
                popuplayertitle: 'MUSEOS',
                interactive: true,
                title: '<img src="styles/legend/MUSEOS_49.png" /> MUSEOS'
            });
var format_BIBLIOTECAS_50 = new ol.format.GeoJSON();
var features_BIBLIOTECAS_50 = format_BIBLIOTECAS_50.readFeatures(json_BIBLIOTECAS_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_BIBLIOTECAS_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BIBLIOTECAS_50.addFeatures(features_BIBLIOTECAS_50);
var lyr_BIBLIOTECAS_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BIBLIOTECAS_50, 
                style: style_BIBLIOTECAS_50,
                popuplayertitle: 'BIBLIOTECAS',
                interactive: true,
                title: '<img src="styles/legend/BIBLIOTECAS_50.png" /> BIBLIOTECAS'
            });
var format_CENTROSCULTURALES_51 = new ol.format.GeoJSON();
var features_CENTROSCULTURALES_51 = format_CENTROSCULTURALES_51.readFeatures(json_CENTROSCULTURALES_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSCULTURALES_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSCULTURALES_51.addFeatures(features_CENTROSCULTURALES_51);
var lyr_CENTROSCULTURALES_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSCULTURALES_51, 
                style: style_CENTROSCULTURALES_51,
                popuplayertitle: 'CENTROS CULTURALES',
                interactive: true,
                title: '<img src="styles/legend/CENTROSCULTURALES_51.png" /> CENTROS CULTURALES'
            });
var format_OTROSCENTROSEDUCATIVOS_52 = new ol.format.GeoJSON();
var features_OTROSCENTROSEDUCATIVOS_52 = format_OTROSCENTROSEDUCATIVOS_52.readFeatures(json_OTROSCENTROSEDUCATIVOS_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_OTROSCENTROSEDUCATIVOS_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTROSCENTROSEDUCATIVOS_52.addFeatures(features_OTROSCENTROSEDUCATIVOS_52);
var lyr_OTROSCENTROSEDUCATIVOS_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OTROSCENTROSEDUCATIVOS_52, 
                style: style_OTROSCENTROSEDUCATIVOS_52,
                popuplayertitle: 'OTROS CENTROS EDUCATIVOS',
                interactive: true,
                title: '<img src="styles/legend/OTROSCENTROSEDUCATIVOS_52.png" /> OTROS CENTROS EDUCATIVOS'
            });
var format_COLEGIOSMAYORESYUNIVERSIDADES_53 = new ol.format.GeoJSON();
var features_COLEGIOSMAYORESYUNIVERSIDADES_53 = format_COLEGIOSMAYORESYUNIVERSIDADES_53.readFeatures(json_COLEGIOSMAYORESYUNIVERSIDADES_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_COLEGIOSMAYORESYUNIVERSIDADES_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLEGIOSMAYORESYUNIVERSIDADES_53.addFeatures(features_COLEGIOSMAYORESYUNIVERSIDADES_53);
var lyr_COLEGIOSMAYORESYUNIVERSIDADES_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLEGIOSMAYORESYUNIVERSIDADES_53, 
                style: style_COLEGIOSMAYORESYUNIVERSIDADES_53,
                popuplayertitle: 'COLEGIOS MAYORES Y UNIVERSIDADES',
                interactive: true,
                title: '<img src="styles/legend/COLEGIOSMAYORESYUNIVERSIDADES_53.png" /> COLEGIOS MAYORES Y UNIVERSIDADES'
            });
var format_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54 = new ol.format.GeoJSON();
var features_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54 = format_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54.readFeatures(json_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54.addFeatures(features_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54);
var lyr_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54, 
                style: style_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54,
                popuplayertitle: 'CONSERVATORIOS Y ESCUELAS DE MÚSICA Y DANZA',
                interactive: true,
                title: '<img src="styles/legend/CONSERVATORIOSYESCUELASDEMSICAYDANZA_54.png" /> CONSERVATORIOS Y ESCUELAS DE MÚSICA Y DANZA'
            });
var format_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55 = new ol.format.GeoJSON();
var features_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55 = format_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55.readFeatures(json_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55.addFeatures(features_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55);
var lyr_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55, 
                style: style_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55,
                popuplayertitle: 'CENTROS DE EDUCACIÓN ESPECIAL PRIVADOS Y CONCERTADOS',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55.png" /> CENTROS DE EDUCACIÓN ESPECIAL PRIVADOS Y CONCERTADOS'
            });
var format_CENTROSDEEDUCACINESPECIALPBLICOS_56 = new ol.format.GeoJSON();
var features_CENTROSDEEDUCACINESPECIALPBLICOS_56 = format_CENTROSDEEDUCACINESPECIALPBLICOS_56.readFeatures(json_CENTROSDEEDUCACINESPECIALPBLICOS_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEEDUCACINESPECIALPBLICOS_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEEDUCACINESPECIALPBLICOS_56.addFeatures(features_CENTROSDEEDUCACINESPECIALPBLICOS_56);
var lyr_CENTROSDEEDUCACINESPECIALPBLICOS_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEEDUCACINESPECIALPBLICOS_56, 
                style: style_CENTROSDEEDUCACINESPECIALPBLICOS_56,
                popuplayertitle: 'CENTROS DE EDUCACIÓN ESPECIAL PÚBLICOS',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEEDUCACINESPECIALPBLICOS_56.png" /> CENTROS DE EDUCACIÓN ESPECIAL PÚBLICOS'
            });
var format_CENTROSDEEDUCACINPARAADULTOS_57 = new ol.format.GeoJSON();
var features_CENTROSDEEDUCACINPARAADULTOS_57 = format_CENTROSDEEDUCACINPARAADULTOS_57.readFeatures(json_CENTROSDEEDUCACINPARAADULTOS_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEEDUCACINPARAADULTOS_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEEDUCACINPARAADULTOS_57.addFeatures(features_CENTROSDEEDUCACINPARAADULTOS_57);
var lyr_CENTROSDEEDUCACINPARAADULTOS_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEEDUCACINPARAADULTOS_57, 
                style: style_CENTROSDEEDUCACINPARAADULTOS_57,
                popuplayertitle: 'CENTROS DE EDUCACIÓN PARA ADULTOS',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEEDUCACINPARAADULTOS_57.png" /> CENTROS DE EDUCACIÓN PARA ADULTOS'
            });
var format_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58 = new ol.format.GeoJSON();
var features_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58 = format_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58.readFeatures(json_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58.addFeatures(features_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58);
var lyr_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58, 
                style: style_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58,
                popuplayertitle: 'CENTROS DE FORMACIÓN PROFESIONAL PRIVADOS Y CONCERTADOS',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58.png" /> CENTROS DE FORMACIÓN PROFESIONAL PRIVADOS Y CONCERTADOS'
            });
var format_CENTROSDEFORMACINPROFESIONALPBLICOS_59 = new ol.format.GeoJSON();
var features_CENTROSDEFORMACINPROFESIONALPBLICOS_59 = format_CENTROSDEFORMACINPROFESIONALPBLICOS_59.readFeatures(json_CENTROSDEFORMACINPROFESIONALPBLICOS_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEFORMACINPROFESIONALPBLICOS_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEFORMACINPROFESIONALPBLICOS_59.addFeatures(features_CENTROSDEFORMACINPROFESIONALPBLICOS_59);
var lyr_CENTROSDEFORMACINPROFESIONALPBLICOS_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEFORMACINPROFESIONALPBLICOS_59, 
                style: style_CENTROSDEFORMACINPROFESIONALPBLICOS_59,
                popuplayertitle: 'CENTROS DE FORMACIÓN PROFESIONAL PÚBLICOS',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEFORMACINPROFESIONALPBLICOS_59.png" /> CENTROS DE FORMACIÓN PROFESIONAL PÚBLICOS'
            });
var format_INSTITUTOSDEENSEANZASECUNDARIA_60 = new ol.format.GeoJSON();
var features_INSTITUTOSDEENSEANZASECUNDARIA_60 = format_INSTITUTOSDEENSEANZASECUNDARIA_60.readFeatures(json_INSTITUTOSDEENSEANZASECUNDARIA_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_INSTITUTOSDEENSEANZASECUNDARIA_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INSTITUTOSDEENSEANZASECUNDARIA_60.addFeatures(features_INSTITUTOSDEENSEANZASECUNDARIA_60);
var lyr_INSTITUTOSDEENSEANZASECUNDARIA_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INSTITUTOSDEENSEANZASECUNDARIA_60, 
                style: style_INSTITUTOSDEENSEANZASECUNDARIA_60,
                popuplayertitle: 'INSTITUTOS DE ENSEÑANZA SECUNDARIA',
                interactive: true,
                title: '<img src="styles/legend/INSTITUTOSDEENSEANZASECUNDARIA_60.png" /> INSTITUTOS DE ENSEÑANZA SECUNDARIA'
            });
var format_COLEGIOSPRIVADOSYCONCERTADOS_61 = new ol.format.GeoJSON();
var features_COLEGIOSPRIVADOSYCONCERTADOS_61 = format_COLEGIOSPRIVADOSYCONCERTADOS_61.readFeatures(json_COLEGIOSPRIVADOSYCONCERTADOS_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_COLEGIOSPRIVADOSYCONCERTADOS_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLEGIOSPRIVADOSYCONCERTADOS_61.addFeatures(features_COLEGIOSPRIVADOSYCONCERTADOS_61);
var lyr_COLEGIOSPRIVADOSYCONCERTADOS_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLEGIOSPRIVADOSYCONCERTADOS_61, 
                style: style_COLEGIOSPRIVADOSYCONCERTADOS_61,
                popuplayertitle: 'COLEGIOS PRIVADOS Y CONCERTADOS',
                interactive: true,
                title: '<img src="styles/legend/COLEGIOSPRIVADOSYCONCERTADOS_61.png" /> COLEGIOS PRIVADOS Y CONCERTADOS'
            });
var format_COLEGIOSPBLICOS_62 = new ol.format.GeoJSON();
var features_COLEGIOSPBLICOS_62 = format_COLEGIOSPBLICOS_62.readFeatures(json_COLEGIOSPBLICOS_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_COLEGIOSPBLICOS_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COLEGIOSPBLICOS_62.addFeatures(features_COLEGIOSPBLICOS_62);
var lyr_COLEGIOSPBLICOS_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COLEGIOSPBLICOS_62, 
                style: style_COLEGIOSPBLICOS_62,
                popuplayertitle: 'COLEGIOS PÚBLICOS',
                interactive: true,
                title: '<img src="styles/legend/COLEGIOSPBLICOS_62.png" /> COLEGIOS PÚBLICOS'
            });
var format_ESCUELASINFANTILESPRIVADAS_63 = new ol.format.GeoJSON();
var features_ESCUELASINFANTILESPRIVADAS_63 = format_ESCUELASINFANTILESPRIVADAS_63.readFeatures(json_ESCUELASINFANTILESPRIVADAS_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ESCUELASINFANTILESPRIVADAS_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESCUELASINFANTILESPRIVADAS_63.addFeatures(features_ESCUELASINFANTILESPRIVADAS_63);
var lyr_ESCUELASINFANTILESPRIVADAS_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESCUELASINFANTILESPRIVADAS_63, 
                style: style_ESCUELASINFANTILESPRIVADAS_63,
                popuplayertitle: 'ESCUELAS INFANTILES PRIVADAS',
                interactive: true,
                title: '<img src="styles/legend/ESCUELASINFANTILESPRIVADAS_63.png" /> ESCUELAS INFANTILES PRIVADAS'
            });
var format_ESCUELASINFANTILESPBLICAS_64 = new ol.format.GeoJSON();
var features_ESCUELASINFANTILESPBLICAS_64 = format_ESCUELASINFANTILESPBLICAS_64.readFeatures(json_ESCUELASINFANTILESPBLICAS_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ESCUELASINFANTILESPBLICAS_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESCUELASINFANTILESPBLICAS_64.addFeatures(features_ESCUELASINFANTILESPBLICAS_64);
var lyr_ESCUELASINFANTILESPBLICAS_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESCUELASINFANTILESPBLICAS_64, 
                style: style_ESCUELASINFANTILESPBLICAS_64,
                popuplayertitle: 'ESCUELAS INFANTILES PÚBLICAS',
                interactive: true,
                title: '<img src="styles/legend/ESCUELASINFANTILESPBLICAS_64.png" /> ESCUELAS INFANTILES PÚBLICAS'
            });
var format_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65 = new ol.format.GeoJSON();
var features_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65 = format_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65.readFeatures(json_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65.addFeatures(features_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65);
var lyr_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65, 
                style: style_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65,
                popuplayertitle: 'CENTROS SOCIALES COMUNITARIOS Y DE APOYO',
                interactive: true,
                title: '<img src="styles/legend/CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65.png" /> CENTROS SOCIALES COMUNITARIOS Y DE APOYO'
            });
var format_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66 = new ol.format.GeoJSON();
var features_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66 = format_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66.readFeatures(json_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66.addFeatures(features_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66);
var lyr_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66, 
                style: style_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66,
                popuplayertitle: 'CENTROS DE IGUALDAD Y DE ATENCIÓN SOCIAL A MUJERES Y VÍCTIMAS VIOGEN, SEXUAL O LGTBIFOBIA',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66.png" /> CENTROS DE IGUALDAD Y DE ATENCIÓN SOCIAL A MUJERES Y VÍCTIMAS VIOGEN, SEXUAL O LGTBIFOBIA'
            });
var format_COMEDORESSOCIALES_67 = new ol.format.GeoJSON();
var features_COMEDORESSOCIALES_67 = format_COMEDORESSOCIALES_67.readFeatures(json_COMEDORESSOCIALES_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_COMEDORESSOCIALES_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COMEDORESSOCIALES_67.addFeatures(features_COMEDORESSOCIALES_67);
var lyr_COMEDORESSOCIALES_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COMEDORESSOCIALES_67, 
                style: style_COMEDORESSOCIALES_67,
                popuplayertitle: 'COMEDORES SOCIALES',
                interactive: true,
                title: '<img src="styles/legend/COMEDORESSOCIALES_67.png" /> COMEDORES SOCIALES'
            });
var format_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68 = new ol.format.GeoJSON();
var features_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68 = format_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68.readFeatures(json_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68.addFeatures(features_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68);
var lyr_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68, 
                style: style_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68,
                popuplayertitle: 'ALBERGUES SOCIALES Y CENTROS DE ACOGIDA',
                interactive: true,
                title: '<img src="styles/legend/ALBERGUESSOCIALESYCENTROSDEACOGIDA_68.png" /> ALBERGUES SOCIALES Y CENTROS DE ACOGIDA'
            });
var format_CENTROSDEATENCINSOCIALAINMIGRANTES_69 = new ol.format.GeoJSON();
var features_CENTROSDEATENCINSOCIALAINMIGRANTES_69 = format_CENTROSDEATENCINSOCIALAINMIGRANTES_69.readFeatures(json_CENTROSDEATENCINSOCIALAINMIGRANTES_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEATENCINSOCIALAINMIGRANTES_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEATENCINSOCIALAINMIGRANTES_69.addFeatures(features_CENTROSDEATENCINSOCIALAINMIGRANTES_69);
var lyr_CENTROSDEATENCINSOCIALAINMIGRANTES_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEATENCINSOCIALAINMIGRANTES_69, 
                style: style_CENTROSDEATENCINSOCIALAINMIGRANTES_69,
                popuplayertitle: 'CENTROS DE ATENCIÓN SOCIAL A INMIGRANTES',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEATENCINSOCIALAINMIGRANTES_69.png" /> CENTROS DE ATENCIÓN SOCIAL A INMIGRANTES'
            });
var format_CENTROSDEASISTENCIAADROGODEPENDIENTES_70 = new ol.format.GeoJSON();
var features_CENTROSDEASISTENCIAADROGODEPENDIENTES_70 = format_CENTROSDEASISTENCIAADROGODEPENDIENTES_70.readFeatures(json_CENTROSDEASISTENCIAADROGODEPENDIENTES_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEASISTENCIAADROGODEPENDIENTES_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEASISTENCIAADROGODEPENDIENTES_70.addFeatures(features_CENTROSDEASISTENCIAADROGODEPENDIENTES_70);
var lyr_CENTROSDEASISTENCIAADROGODEPENDIENTES_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEASISTENCIAADROGODEPENDIENTES_70, 
                style: style_CENTROSDEASISTENCIAADROGODEPENDIENTES_70,
                popuplayertitle: 'CENTROS DE ASISTENCIA A DROGODEPENDIENTES',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEASISTENCIAADROGODEPENDIENTES_70.png" /> CENTROS DE ASISTENCIA A DROGODEPENDIENTES'
            });
var format_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71 = new ol.format.GeoJSON();
var features_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71 = format_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71.readFeatures(json_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71.addFeatures(features_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71);
var lyr_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71, 
                style: style_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71,
                popuplayertitle: 'CENTROS DE ATENCIÓN SOCIAL A PERSONAS CON DISCAPACIDAD',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71.png" /> CENTROS DE ATENCIÓN SOCIAL A PERSONAS CON DISCAPACIDAD'
            });
var format_CENTROSDEMAYORES_72 = new ol.format.GeoJSON();
var features_CENTROSDEMAYORES_72 = format_CENTROSDEMAYORES_72.readFeatures(json_CENTROSDEMAYORES_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEMAYORES_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEMAYORES_72.addFeatures(features_CENTROSDEMAYORES_72);
var lyr_CENTROSDEMAYORES_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEMAYORES_72, 
                style: style_CENTROSDEMAYORES_72,
                popuplayertitle: 'CENTROS DE MAYORES',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEMAYORES_72.png" /> CENTROS DE MAYORES'
            });
var format_CENTROSDEMENORESYFAMILIAS_73 = new ol.format.GeoJSON();
var features_CENTROSDEMENORESYFAMILIAS_73 = format_CENTROSDEMENORESYFAMILIAS_73.readFeatures(json_CENTROSDEMENORESYFAMILIAS_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEMENORESYFAMILIAS_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEMENORESYFAMILIAS_73.addFeatures(features_CENTROSDEMENORESYFAMILIAS_73);
var lyr_CENTROSDEMENORESYFAMILIAS_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEMENORESYFAMILIAS_73, 
                style: style_CENTROSDEMENORESYFAMILIAS_73,
                popuplayertitle: 'CENTROS DE MENORES Y FAMILIAS',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEMENORESYFAMILIAS_73.png" /> CENTROS DE MENORES Y FAMILIAS'
            });
var format_CENTROSDESERVICIOSSOCIALES_74 = new ol.format.GeoJSON();
var features_CENTROSDESERVICIOSSOCIALES_74 = format_CENTROSDESERVICIOSSOCIALES_74.readFeatures(json_CENTROSDESERVICIOSSOCIALES_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDESERVICIOSSOCIALES_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDESERVICIOSSOCIALES_74.addFeatures(features_CENTROSDESERVICIOSSOCIALES_74);
var lyr_CENTROSDESERVICIOSSOCIALES_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDESERVICIOSSOCIALES_74, 
                style: style_CENTROSDESERVICIOSSOCIALES_74,
                popuplayertitle: 'CENTROS DE SERVICIOS SOCIALES',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDESERVICIOSSOCIALES_74.png" /> CENTROS DE SERVICIOS SOCIALES'
            });
var format_CENTROSDESALUDMENTAL_75 = new ol.format.GeoJSON();
var features_CENTROSDESALUDMENTAL_75 = format_CENTROSDESALUDMENTAL_75.readFeatures(json_CENTROSDESALUDMENTAL_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDESALUDMENTAL_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDESALUDMENTAL_75.addFeatures(features_CENTROSDESALUDMENTAL_75);
var lyr_CENTROSDESALUDMENTAL_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDESALUDMENTAL_75, 
                style: style_CENTROSDESALUDMENTAL_75,
                popuplayertitle: 'CENTROS DE SALUD MENTAL',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDESALUDMENTAL_75.png" /> CENTROS DE SALUD MENTAL'
            });
var format_CENTROSDEPREVENCINDEENFERMEDADES_76 = new ol.format.GeoJSON();
var features_CENTROSDEPREVENCINDEENFERMEDADES_76 = format_CENTROSDEPREVENCINDEENFERMEDADES_76.readFeatures(json_CENTROSDEPREVENCINDEENFERMEDADES_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEPREVENCINDEENFERMEDADES_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEPREVENCINDEENFERMEDADES_76.addFeatures(features_CENTROSDEPREVENCINDEENFERMEDADES_76);
var lyr_CENTROSDEPREVENCINDEENFERMEDADES_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEPREVENCINDEENFERMEDADES_76, 
                style: style_CENTROSDEPREVENCINDEENFERMEDADES_76,
                popuplayertitle: 'CENTROS DE PREVENCIÓN DE ENFERMEDADES',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEPREVENCINDEENFERMEDADES_76.png" /> CENTROS DE PREVENCIÓN DE ENFERMEDADES'
            });
var format_CENTROSDEESPECIALIDADESMDICAS_77 = new ol.format.GeoJSON();
var features_CENTROSDEESPECIALIDADESMDICAS_77 = format_CENTROSDEESPECIALIDADESMDICAS_77.readFeatures(json_CENTROSDEESPECIALIDADESMDICAS_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEESPECIALIDADESMDICAS_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEESPECIALIDADESMDICAS_77.addFeatures(features_CENTROSDEESPECIALIDADESMDICAS_77);
var lyr_CENTROSDEESPECIALIDADESMDICAS_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEESPECIALIDADESMDICAS_77, 
                style: style_CENTROSDEESPECIALIDADESMDICAS_77,
                popuplayertitle: 'CENTROS DE ESPECIALIDADES MÉDICAS',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEESPECIALIDADESMDICAS_77.png" /> CENTROS DE ESPECIALIDADES MÉDICAS'
            });
var format_CENTROSDESALUD_78 = new ol.format.GeoJSON();
var features_CENTROSDESALUD_78 = format_CENTROSDESALUD_78.readFeatures(json_CENTROSDESALUD_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDESALUD_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDESALUD_78.addFeatures(features_CENTROSDESALUD_78);
var lyr_CENTROSDESALUD_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDESALUD_78, 
                style: style_CENTROSDESALUD_78,
                popuplayertitle: 'CENTROS DE SALUD',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDESALUD_78.png" /> CENTROS DE SALUD'
            });
var format_HOSPITALES_79 = new ol.format.GeoJSON();
var features_HOSPITALES_79 = format_HOSPITALES_79.readFeatures(json_HOSPITALES_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_HOSPITALES_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSPITALES_79.addFeatures(features_HOSPITALES_79);
var lyr_HOSPITALES_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HOSPITALES_79, 
                style: style_HOSPITALES_79,
                popuplayertitle: 'HOSPITALES',
                interactive: true,
                title: '<img src="styles/legend/HOSPITALES_79.png" /> HOSPITALES'
            });
var format_CENTROSDEMADRIDSALUD_80 = new ol.format.GeoJSON();
var features_CENTROSDEMADRIDSALUD_80 = format_CENTROSDEMADRIDSALUD_80.readFeatures(json_CENTROSDEMADRIDSALUD_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSDEMADRIDSALUD_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSDEMADRIDSALUD_80.addFeatures(features_CENTROSDEMADRIDSALUD_80);
var lyr_CENTROSDEMADRIDSALUD_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSDEMADRIDSALUD_80, 
                style: style_CENTROSDEMADRIDSALUD_80,
                popuplayertitle: 'CENTROS DE MADRID SALUD',
                interactive: true,
                title: '<img src="styles/legend/CENTROSDEMADRIDSALUD_80.png" /> CENTROS DE MADRID SALUD'
            });
var format_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81 = new ol.format.GeoJSON();
var features_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81 = format_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81.readFeatures(json_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:25830'});
var jsonSource_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81.addFeatures(features_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81);
var lyr_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81, 
                style: style_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81,
                popuplayertitle: 'CENTROS MUNICIPALES DE SALUD COMUNITARIA (CMSC)',
                interactive: true,
                title: '<img src="styles/legend/CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81.png" /> CENTROS MUNICIPALES DE SALUD COMUNITARIA (CMSC)'
            });
var group_CENTROSSANITARIOS = new ol.layer.Group({
                                layers: [lyr_CENTROSDESALUDMENTAL_75,lyr_CENTROSDEPREVENCINDEENFERMEDADES_76,lyr_CENTROSDEESPECIALIDADESMDICAS_77,lyr_CENTROSDESALUD_78,lyr_HOSPITALES_79,lyr_CENTROSDEMADRIDSALUD_80,lyr_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81,],
                                fold: 'open',
                                title: 'CENTROS SANITARIOS'});
var group_CENTROSDESERVICIOSSOCIALES = new ol.layer.Group({
                                layers: [lyr_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65,lyr_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66,lyr_COMEDORESSOCIALES_67,lyr_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68,lyr_CENTROSDEATENCINSOCIALAINMIGRANTES_69,lyr_CENTROSDEASISTENCIAADROGODEPENDIENTES_70,lyr_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71,lyr_CENTROSDEMAYORES_72,lyr_CENTROSDEMENORESYFAMILIAS_73,lyr_CENTROSDESERVICIOSSOCIALES_74,],
                                fold: 'close',
                                title: 'CENTROS DE SERVICIOS SOCIALES'});
var group_CENTROSEDUCATIVOS = new ol.layer.Group({
                                layers: [lyr_OTROSCENTROSEDUCATIVOS_52,lyr_COLEGIOSMAYORESYUNIVERSIDADES_53,lyr_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54,lyr_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55,lyr_CENTROSDEEDUCACINESPECIALPBLICOS_56,lyr_CENTROSDEEDUCACINPARAADULTOS_57,lyr_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58,lyr_CENTROSDEFORMACINPROFESIONALPBLICOS_59,lyr_INSTITUTOSDEENSEANZASECUNDARIA_60,lyr_COLEGIOSPRIVADOSYCONCERTADOS_61,lyr_COLEGIOSPBLICOS_62,lyr_ESCUELASINFANTILESPRIVADAS_63,lyr_ESCUELASINFANTILESPBLICAS_64,],
                                fold: 'close',
                                title: 'CENTROS EDUCATIVOS'});
var group_CENTROSCULTURALESYDEPORTIVOS = new ol.layer.Group({
                                layers: [lyr_PISCINAS_47,lyr_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48,lyr_MUSEOS_49,lyr_BIBLIOTECAS_50,lyr_CENTROSCULTURALES_51,],
                                fold: 'close',
                                title: 'CENTROS CULTURALES Y DEPORTIVOS'});
var group_ENTIDADESDEPARTICIPACINCIUDADANA = new ol.layer.Group({
                                layers: [lyr_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40,lyr_ASOCIACIONESDEINMIGRANTES_41,lyr_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42,lyr_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43,lyr_ASOCIACIONESDEFAMILIASEINFANCIA_44,lyr_ASOCIACIONESDESALUDYAPOYOMUTUO_45,lyr_ASOCIACIONESVECINALES_46,],
                                fold: 'close',
                                title: 'ENTIDADES DE PARTICIPACIÓN CIUDADANA'});
var group_SERVICIOSPBLICOSYORGANISMOSOFICIALES = new ol.layer.Group({
                                layers: [lyr_AGENCIASDECOLOCACIN_36,lyr_COMISARASDEPOLICA_37,lyr_OFICINASDEINFORMACINJUVENIL_38,lyr_JUNTASMUNICIPALESDEDISTRITO_39,],
                                fold: 'close',
                                title: 'SERVICIOS PÚBLICOS Y ORGANISMOS OFICIALES'});
var group_OTROS = new ol.layer.Group({
                                layers: [lyr_PARQUESYJARDINES_21,lyr_INSTALACIONESDEPORTIVAS_22,lyr_RUTASWAP_23,lyr_INSTALACIONESDEPORTIVASBSICAS_24,lyr_AREASDEPORTIVAS_25,lyr_AREASINFANTILES_26,lyr_AREADEMAYORES_27,lyr_MERCADILLOS_28,lyr_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29,lyr_CENTROSCOMERCIALES_30,lyr_FARMACIAS_31,lyr_TEMPLOSOTRASRELIGIONES_32,lyr_TEMPLOSIGLESIASCATLICAS_33,lyr_HUERTOSURBANOS_34,lyr_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35,],
                                fold: 'close',
                                title: 'OTROS'});
var group_TRANSPORTE = new ol.layer.Group({
                                layers: [lyr_LineasdeBusUrbanoEMT_15,lyr_ParadasdeBusUrbanoEMT_16,lyr_LineasdeMetro_17,lyr_EstacionMetrodeMadrid_18,lyr_LneasdetrenCercaniasRenfe_19,lyr_EstacionCercaniasRenfe_20,],
                                fold: 'close',
                                title: 'TRANSPORTE'});
var group_LIMITESADMINISTRATIVOS = new ol.layer.Group({
                                layers: [lyr_AmbitoCMSc_10,lyr_ZonaBasicaSaludAreaUnicaZBSAU_11,lyr_SeccionesCensales_12,lyr_Barrios_13,lyr_Distritos_14,],
                                fold: 'open',
                                title: 'LIMITES ADMINISTRATIVOS'});
var group_ndicedePrivacinIP21porseccincensal = new ol.layer.Group({
                                layers: [lyr_ndicedeInmigracin_5,lyr_ndicedeEducacin_6,lyr_ndicedeParo_7,lyr_ndicedeRenta_8,lyr_ndicedePrivacinIP21_9,],
                                fold: 'open',
                                title: 'Índice de Privación - IP21 (por sección censal)'});
var group_MAPABASE = new ol.layer.Group({
                                layers: [lyr_Positronnolabels_0,lyr_ESRIStandard_1,lyr_OSMStandard_2,lyr_GoogleSatellite_3,lyr_GoogleRoad_4,],
                                fold: 'close',
                                title: 'MAPA BASE'});

lyr_Positronnolabels_0.setVisible(true);lyr_ESRIStandard_1.setVisible(false);lyr_OSMStandard_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(false);lyr_GoogleRoad_4.setVisible(false);lyr_ndicedeInmigracin_5.setVisible(false);lyr_ndicedeEducacin_6.setVisible(false);lyr_ndicedeParo_7.setVisible(false);lyr_ndicedeRenta_8.setVisible(false);lyr_ndicedePrivacinIP21_9.setVisible(true);lyr_AmbitoCMSc_10.setVisible(false);lyr_ZonaBasicaSaludAreaUnicaZBSAU_11.setVisible(false);lyr_SeccionesCensales_12.setVisible(false);lyr_Barrios_13.setVisible(false);lyr_Distritos_14.setVisible(true);lyr_LineasdeBusUrbanoEMT_15.setVisible(false);lyr_ParadasdeBusUrbanoEMT_16.setVisible(false);lyr_LineasdeMetro_17.setVisible(false);lyr_EstacionMetrodeMadrid_18.setVisible(false);lyr_LneasdetrenCercaniasRenfe_19.setVisible(false);lyr_EstacionCercaniasRenfe_20.setVisible(false);lyr_PARQUESYJARDINES_21.setVisible(false);lyr_INSTALACIONESDEPORTIVAS_22.setVisible(false);lyr_RUTASWAP_23.setVisible(false);lyr_INSTALACIONESDEPORTIVASBSICAS_24.setVisible(false);lyr_AREASDEPORTIVAS_25.setVisible(false);lyr_AREASINFANTILES_26.setVisible(false);lyr_AREADEMAYORES_27.setVisible(false);lyr_MERCADILLOS_28.setVisible(false);lyr_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29.setVisible(false);lyr_CENTROSCOMERCIALES_30.setVisible(false);lyr_FARMACIAS_31.setVisible(false);lyr_TEMPLOSOTRASRELIGIONES_32.setVisible(false);lyr_TEMPLOSIGLESIASCATLICAS_33.setVisible(false);lyr_HUERTOSURBANOS_34.setVisible(false);lyr_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35.setVisible(false);lyr_AGENCIASDECOLOCACIN_36.setVisible(false);lyr_COMISARASDEPOLICA_37.setVisible(false);lyr_OFICINASDEINFORMACINJUVENIL_38.setVisible(false);lyr_JUNTASMUNICIPALESDEDISTRITO_39.setVisible(false);lyr_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40.setVisible(false);lyr_ASOCIACIONESDEINMIGRANTES_41.setVisible(false);lyr_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42.setVisible(false);lyr_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43.setVisible(false);lyr_ASOCIACIONESDEFAMILIASEINFANCIA_44.setVisible(false);lyr_ASOCIACIONESDESALUDYAPOYOMUTUO_45.setVisible(false);lyr_ASOCIACIONESVECINALES_46.setVisible(false);lyr_PISCINAS_47.setVisible(false);lyr_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48.setVisible(false);lyr_MUSEOS_49.setVisible(false);lyr_BIBLIOTECAS_50.setVisible(false);lyr_CENTROSCULTURALES_51.setVisible(false);lyr_OTROSCENTROSEDUCATIVOS_52.setVisible(false);lyr_COLEGIOSMAYORESYUNIVERSIDADES_53.setVisible(false);lyr_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54.setVisible(false);lyr_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55.setVisible(false);lyr_CENTROSDEEDUCACINESPECIALPBLICOS_56.setVisible(false);lyr_CENTROSDEEDUCACINPARAADULTOS_57.setVisible(false);lyr_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58.setVisible(false);lyr_CENTROSDEFORMACINPROFESIONALPBLICOS_59.setVisible(false);lyr_INSTITUTOSDEENSEANZASECUNDARIA_60.setVisible(false);lyr_COLEGIOSPRIVADOSYCONCERTADOS_61.setVisible(false);lyr_COLEGIOSPBLICOS_62.setVisible(false);lyr_ESCUELASINFANTILESPRIVADAS_63.setVisible(false);lyr_ESCUELASINFANTILESPBLICAS_64.setVisible(false);lyr_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65.setVisible(false);lyr_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66.setVisible(false);lyr_COMEDORESSOCIALES_67.setVisible(false);lyr_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68.setVisible(false);lyr_CENTROSDEATENCINSOCIALAINMIGRANTES_69.setVisible(false);lyr_CENTROSDEASISTENCIAADROGODEPENDIENTES_70.setVisible(false);lyr_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71.setVisible(false);lyr_CENTROSDEMAYORES_72.setVisible(false);lyr_CENTROSDEMENORESYFAMILIAS_73.setVisible(false);lyr_CENTROSDESERVICIOSSOCIALES_74.setVisible(false);lyr_CENTROSDESALUDMENTAL_75.setVisible(false);lyr_CENTROSDEPREVENCINDEENFERMEDADES_76.setVisible(false);lyr_CENTROSDEESPECIALIDADESMDICAS_77.setVisible(false);lyr_CENTROSDESALUD_78.setVisible(false);lyr_HOSPITALES_79.setVisible(false);lyr_CENTROSDEMADRIDSALUD_80.setVisible(false);lyr_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81.setVisible(true);
var layersList = [group_MAPABASE,group_ndicedePrivacinIP21porseccincensal,group_LIMITESADMINISTRATIVOS,group_TRANSPORTE,group_OTROS,group_SERVICIOSPBLICOSYORGANISMOSOFICIALES,group_ENTIDADESDEPARTICIPACINCIUDADANA,group_CENTROSCULTURALESYDEPORTIVOS,group_CENTROSEDUCATIVOS,group_CENTROSDESERVICIOSSOCIALES,group_CENTROSSANITARIOS];
lyr_ndicedeInmigracin_5.set('fieldAliases', {'Índice Re': 'Índice Re', 'Indice Abs': 'Indice Abs', 'Indice Edu': 'Indice Edu', 'Indice Par': 'Indice Par', 'Indice Inm': 'Indice Inm', 'IP21': 'IP21', 'Quintil pr': 'Quintil pr', 'Distrito': 'Distrito', 'Barrio': 'Barrio', });
lyr_ndicedeEducacin_6.set('fieldAliases', {'Índice Re': 'Índice Re', 'Indice Abs': 'Indice Abs', 'Indice Edu': 'Indice Edu', 'Indice Par': 'Indice Par', 'Indice Inm': 'Indice Inm', 'IP21': 'IP21', 'Quintil pr': 'Quintil pr', 'Distrito': 'Distrito', 'Barrio': 'Barrio', });
lyr_ndicedeParo_7.set('fieldAliases', {'Índice Re': 'Índice Re', 'Indice Abs': 'Indice Abs', 'Indice Edu': 'Indice Edu', 'Indice Par': 'Indice Par', 'Indice Inm': 'Indice Inm', 'IP21': 'IP21', 'Quintil pr': 'Quintil pr', 'Distrito': 'Distrito', 'Barrio': 'Barrio', });
lyr_ndicedeRenta_8.set('fieldAliases', {'Índice Re': 'Índice Re', 'Indice Abs': 'Indice Abs', 'Indice Edu': 'Indice Edu', 'Indice Par': 'Indice Par', 'Indice Inm': 'Indice Inm', 'IP21': 'IP21', 'Quintil pr': 'Quintil pr', 'Distrito': 'Distrito', 'Barrio': 'Barrio', });
lyr_ndicedePrivacinIP21_9.set('fieldAliases', {'Índice Re': 'Índice Re', 'Indice Abs': 'Indice Abs', 'Indice Edu': 'Indice Edu', 'Indice Par': 'Indice Par', 'Indice Inm': 'Indice Inm', 'IP21': 'IP21', 'Quintil pr': 'Quintil pr', 'Distrito': 'Distrito', 'Barrio': 'Barrio', });
lyr_AmbitoCMSc_10.set('fieldAliases', {'Ambito': 'Ambito', });
lyr_ZonaBasicaSaludAreaUnicaZBSAU_11.set('fieldAliases', {'DESBDT': 'DESBDT', });
lyr_SeccionesCensales_12.set('fieldAliases', {'CODSECCION': 'CODSECCION', });
lyr_Barrios_13.set('fieldAliases', {'Distrito': 'Distrito', 'Barrio': 'Barrio', 'Poblacion2': 'Poblacion2', 'IP21': 'IP21', 'Renta': 'Renta', 'Educacion': 'Educacion', 'Inmigracio': 'Inmigracio', 'Paro': 'Paro', });
lyr_Distritos_14.set('fieldAliases', {'Distrito': 'Distrito', 'Poblacion2': 'Poblacion2', 'IP': 'IP', 'MAYUS': 'MAYUS', });
lyr_LineasdeBusUrbanoEMT_15.set('fieldAliases', {'LINEA': 'LINEA', 'layer': 'layer', 'INFO': 'INFO', });
lyr_ParadasdeBusUrbanoEMT_16.set('fieldAliases', {'Estacion': 'Estacion', 'Linea_nomb': 'Linea_nomb', 'Direccion': 'Direccion', 'Lineas': 'Lineas', });
lyr_LineasdeMetro_17.set('fieldAliases', {'LINEA': 'LINEA', 'layer': 'layer', 'INFO': 'INFO', });
lyr_EstacionMetrodeMadrid_18.set('fieldAliases', {'ESTAC_LIN': 'ESTAC_LIN', });
lyr_LneasdetrenCercaniasRenfe_19.set('fieldAliases', {'LINEA': 'LINEA', 'layer': 'layer', 'INFO': 'INFO', });
lyr_EstacionCercaniasRenfe_20.set('fieldAliases', {'LINEA': 'LINEA', 'NOMBRE': 'NOMBRE', 'CONEXION': 'CONEXION', });
lyr_PARQUESYJARDINES_21.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'area_m2': 'area_m2', });
lyr_INSTALACIONESDEPORTIVAS_22.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', });
lyr_RUTASWAP_23.set('fieldAliases', {'DES_RUTA': 'DES_RUTA', 'DES_TRAMO': 'DES_TRAMO', });
lyr_INSTALACIONESDEPORTIVASBSICAS_24.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_AREASDEPORTIVAS_25.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_AREASINFANTILES_26.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_AREADEMAYORES_27.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_MERCADILLOS_28.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_CENTROSCOMERCIALES_30.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_FARMACIAS_31.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_TEMPLOSOTRASRELIGIONES_32.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_TEMPLOSIGLESIASCATLICAS_33.set('fieldAliases', {'Nombre': 'Nombre', });
lyr_HUERTOSURBANOS_34.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_AGENCIASDECOLOCACIN_36.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_COMISARASDEPOLICA_37.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_OFICINASDEINFORMACINJUVENIL_38.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_JUNTASMUNICIPALESDEDISTRITO_39.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ASOCIACIONESDEINMIGRANTES_41.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ASOCIACIONESDEFAMILIASEINFANCIA_44.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ASOCIACIONESDESALUDYAPOYOMUTUO_45.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ASOCIACIONESVECINALES_46.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_PISCINAS_47.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_MUSEOS_49.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_BIBLIOTECAS_50.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSCULTURALES_51.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_OTROSCENTROSEDUCATIVOS_52.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_COLEGIOSMAYORESYUNIVERSIDADES_53.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEEDUCACINESPECIALPBLICOS_56.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEEDUCACINPARAADULTOS_57.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEFORMACINPROFESIONALPBLICOS_59.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_INSTITUTOSDEENSEANZASECUNDARIA_60.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_COLEGIOSPRIVADOSYCONCERTADOS_61.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_COLEGIOSPBLICOS_62.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ESCUELASINFANTILESPRIVADAS_63.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ESCUELASINFANTILESPBLICAS_64.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_COMEDORESSOCIALES_67.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEATENCINSOCIALAINMIGRANTES_69.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEASISTENCIAADROGODEPENDIENTES_70.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEMAYORES_72.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEMENORESYFAMILIAS_73.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDESERVICIOSSOCIALES_74.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDESALUDMENTAL_75.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEPREVENCINDEENFERMEDADES_76.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEESPECIALIDADESMDICAS_77.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDESALUD_78.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_HOSPITALES_79.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSDEMADRIDSALUD_80.set('fieldAliases', {'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'CATEGORIA': 'CATEGORIA', 'AMBITO_CMS': 'AMBITO_CMS', 'CONTACTO': 'CONTACTO', 'HORARIO': 'HORARIO', 'DIRECCION': 'DIRECCION', 'TRANSPORTE': 'TRANSPORTE', 'WEB': 'WEB', 'INFO': 'INFO', 'EQUIPO': 'EQUIPO', 'FID': 'FID', 'ID_PDI': 'ID_PDI', });
lyr_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81.set('fieldAliases', {'DIRECCION': 'DIRECCION', 'CENTRO': 'CENTRO', });
lyr_ndicedeInmigracin_5.set('fieldImages', {'Índice Re': '', 'Indice Abs': '', 'Indice Edu': '', 'Indice Par': '', 'Indice Inm': '', 'IP21': 'TextEdit', 'Quintil pr': '', 'Distrito': '', 'Barrio': '', });
lyr_ndicedeEducacin_6.set('fieldImages', {'Índice Re': '', 'Indice Abs': '', 'Indice Edu': '', 'Indice Par': '', 'Indice Inm': '', 'IP21': 'TextEdit', 'Quintil pr': '', 'Distrito': '', 'Barrio': '', });
lyr_ndicedeParo_7.set('fieldImages', {'Índice Re': '', 'Indice Abs': '', 'Indice Edu': '', 'Indice Par': '', 'Indice Inm': '', 'IP21': 'TextEdit', 'Quintil pr': '', 'Distrito': '', 'Barrio': '', });
lyr_ndicedeRenta_8.set('fieldImages', {'Índice Re': '', 'Indice Abs': '', 'Indice Edu': '', 'Indice Par': '', 'Indice Inm': '', 'IP21': 'TextEdit', 'Quintil pr': '', 'Distrito': '', 'Barrio': '', });
lyr_ndicedePrivacinIP21_9.set('fieldImages', {'Índice Re': '', 'Indice Abs': '', 'Indice Edu': '', 'Indice Par': '', 'Indice Inm': '', 'IP21': 'TextEdit', 'Quintil pr': '', 'Distrito': '', 'Barrio': '', });
lyr_AmbitoCMSc_10.set('fieldImages', {'Ambito': '', });
lyr_ZonaBasicaSaludAreaUnicaZBSAU_11.set('fieldImages', {'DESBDT': '', });
lyr_SeccionesCensales_12.set('fieldImages', {'CODSECCION': '', });
lyr_Barrios_13.set('fieldImages', {'Distrito': 'TextEdit', 'Barrio': 'TextEdit', 'Poblacion2': '', 'IP21': '', 'Renta': 'TextEdit', 'Educacion': '', 'Inmigracio': 'TextEdit', 'Paro': 'TextEdit', });
lyr_Distritos_14.set('fieldImages', {'Distrito': 'TextEdit', 'Poblacion2': 'TextEdit', 'IP': 'TextEdit', 'MAYUS': '', });
lyr_LineasdeBusUrbanoEMT_15.set('fieldImages', {'LINEA': '', 'layer': '', 'INFO': '', });
lyr_ParadasdeBusUrbanoEMT_16.set('fieldImages', {'Estacion': '', 'Linea_nomb': '', 'Direccion': '', 'Lineas': '', });
lyr_LineasdeMetro_17.set('fieldImages', {'LINEA': '', 'layer': '', 'INFO': '', });
lyr_EstacionMetrodeMadrid_18.set('fieldImages', {'ESTAC_LIN': '', });
lyr_LneasdetrenCercaniasRenfe_19.set('fieldImages', {'LINEA': '', 'layer': '', 'INFO': '', });
lyr_EstacionCercaniasRenfe_20.set('fieldImages', {'LINEA': '', 'NOMBRE': '', 'CONEXION': '', });
lyr_PARQUESYJARDINES_21.set('fieldImages', {'NOMBRE': '', 'area_m2': '', });
lyr_INSTALACIONESDEPORTIVAS_22.set('fieldImages', {'NOMBRE': '', 'TIPO': '', });
lyr_RUTASWAP_23.set('fieldImages', {'DES_RUTA': '', 'DES_TRAMO': '', });
lyr_INSTALACIONESDEPORTIVASBSICAS_24.set('fieldImages', {'Nombre': '', });
lyr_AREASDEPORTIVAS_25.set('fieldImages', {'Nombre': '', });
lyr_AREASINFANTILES_26.set('fieldImages', {'Nombre': '', });
lyr_AREADEMAYORES_27.set('fieldImages', {'Nombre': '', });
lyr_MERCADILLOS_28.set('fieldImages', {'Nombre': '', });
lyr_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29.set('fieldImages', {'Nombre': '', });
lyr_CENTROSCOMERCIALES_30.set('fieldImages', {'Nombre': '', });
lyr_FARMACIAS_31.set('fieldImages', {'Nombre': '', });
lyr_TEMPLOSOTRASRELIGIONES_32.set('fieldImages', {'Nombre': '', });
lyr_TEMPLOSIGLESIASCATLICAS_33.set('fieldImages', {'Nombre': '', });
lyr_HUERTOSURBANOS_34.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_AGENCIASDECOLOCACIN_36.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_COMISARASDEPOLICA_37.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_OFICINASDEINFORMACINJUVENIL_38.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_JUNTASMUNICIPALESDEDISTRITO_39.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ASOCIACIONESDEINMIGRANTES_41.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ASOCIACIONESDEFAMILIASEINFANCIA_44.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ASOCIACIONESDESALUDYAPOYOMUTUO_45.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ASOCIACIONESVECINALES_46.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_PISCINAS_47.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_MUSEOS_49.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_BIBLIOTECAS_50.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSCULTURALES_51.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_OTROSCENTROSEDUCATIVOS_52.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_COLEGIOSMAYORESYUNIVERSIDADES_53.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEEDUCACINESPECIALPBLICOS_56.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEEDUCACINPARAADULTOS_57.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEFORMACINPROFESIONALPBLICOS_59.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_INSTITUTOSDEENSEANZASECUNDARIA_60.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_COLEGIOSPRIVADOSYCONCERTADOS_61.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_COLEGIOSPBLICOS_62.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ESCUELASINFANTILESPRIVADAS_63.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ESCUELASINFANTILESPBLICAS_64.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_COMEDORESSOCIALES_67.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEATENCINSOCIALAINMIGRANTES_69.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEASISTENCIAADROGODEPENDIENTES_70.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEMAYORES_72.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEMENORESYFAMILIAS_73.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDESERVICIOSSOCIALES_74.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDESALUDMENTAL_75.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEPREVENCINDEENFERMEDADES_76.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEESPECIALIDADESMDICAS_77.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDESALUD_78.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_HOSPITALES_79.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSDEMADRIDSALUD_80.set('fieldImages', {'NOMBRE': '', 'TIPO': '', 'CATEGORIA': '', 'AMBITO_CMS': '', 'CONTACTO': '', 'HORARIO': '', 'DIRECCION': '', 'TRANSPORTE': '', 'WEB': '', 'INFO': '', 'EQUIPO': '', 'FID': '', 'ID_PDI': '', });
lyr_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81.set('fieldImages', {'DIRECCION': '', 'CENTRO': '', });
lyr_ndicedeInmigracin_5.set('fieldLabels', {'Índice Re': 'inline label - visible with data', 'Indice Abs': 'inline label - visible with data', 'Indice Edu': 'inline label - visible with data', 'Indice Par': 'inline label - visible with data', 'Indice Inm': 'inline label - visible with data', 'IP21': 'inline label - visible with data', 'Quintil pr': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', 'Barrio': 'inline label - visible with data', });
lyr_ndicedeEducacin_6.set('fieldLabels', {'Índice Re': 'inline label - visible with data', 'Indice Abs': 'inline label - visible with data', 'Indice Edu': 'inline label - visible with data', 'Indice Par': 'inline label - visible with data', 'Indice Inm': 'inline label - visible with data', 'IP21': 'inline label - visible with data', 'Quintil pr': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', 'Barrio': 'inline label - visible with data', });
lyr_ndicedeParo_7.set('fieldLabels', {'Índice Re': 'inline label - visible with data', 'Indice Abs': 'inline label - visible with data', 'Indice Edu': 'inline label - visible with data', 'Indice Par': 'inline label - visible with data', 'Indice Inm': 'inline label - visible with data', 'IP21': 'inline label - visible with data', 'Quintil pr': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', 'Barrio': 'inline label - visible with data', });
lyr_ndicedeRenta_8.set('fieldLabels', {'Índice Re': 'inline label - visible with data', 'Indice Abs': 'inline label - visible with data', 'Indice Edu': 'inline label - visible with data', 'Indice Par': 'inline label - visible with data', 'Indice Inm': 'inline label - visible with data', 'IP21': 'inline label - visible with data', 'Quintil pr': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', 'Barrio': 'inline label - visible with data', });
lyr_ndicedePrivacinIP21_9.set('fieldLabels', {'Índice Re': 'inline label - visible with data', 'Indice Abs': 'inline label - visible with data', 'Indice Edu': 'inline label - visible with data', 'Indice Par': 'inline label - visible with data', 'Indice Inm': 'inline label - visible with data', 'IP21': 'inline label - visible with data', 'Quintil pr': 'inline label - visible with data', 'Distrito': 'inline label - visible with data', 'Barrio': 'inline label - visible with data', });
lyr_AmbitoCMSc_10.set('fieldLabels', {'Ambito': 'inline label - visible with data', });
lyr_ZonaBasicaSaludAreaUnicaZBSAU_11.set('fieldLabels', {'DESBDT': 'inline label - visible with data', });
lyr_SeccionesCensales_12.set('fieldLabels', {'CODSECCION': 'inline label - visible with data', });
lyr_Barrios_13.set('fieldLabels', {'Distrito': 'inline label - visible with data', 'Barrio': 'inline label - visible with data', 'Poblacion2': 'inline label - visible with data', 'IP21': 'inline label - visible with data', 'Renta': 'inline label - visible with data', 'Educacion': 'inline label - visible with data', 'Inmigracio': 'inline label - visible with data', 'Paro': 'inline label - visible with data', });
lyr_Distritos_14.set('fieldLabels', {'Distrito': 'inline label - visible with data', 'Poblacion2': 'inline label - visible with data', 'IP': 'inline label - visible with data', 'MAYUS': 'no label', });
lyr_LineasdeBusUrbanoEMT_15.set('fieldLabels', {'LINEA': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'INFO': 'inline label - visible with data', });
lyr_ParadasdeBusUrbanoEMT_16.set('fieldLabels', {'Estacion': 'inline label - visible with data', 'Linea_nomb': 'inline label - visible with data', 'Direccion': 'inline label - visible with data', 'Lineas': 'inline label - visible with data', });
lyr_LineasdeMetro_17.set('fieldLabels', {'LINEA': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'INFO': 'inline label - visible with data', });
lyr_EstacionMetrodeMadrid_18.set('fieldLabels', {'ESTAC_LIN': 'inline label - visible with data', });
lyr_LneasdetrenCercaniasRenfe_19.set('fieldLabels', {'LINEA': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'INFO': 'inline label - visible with data', });
lyr_EstacionCercaniasRenfe_20.set('fieldLabels', {'LINEA': 'inline label - visible with data', 'NOMBRE': 'inline label - visible with data', 'CONEXION': 'inline label - visible with data', });
lyr_PARQUESYJARDINES_21.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'area_m2': 'inline label - visible with data', });
lyr_INSTALACIONESDEPORTIVAS_22.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', });
lyr_RUTASWAP_23.set('fieldLabels', {'DES_RUTA': 'inline label - visible with data', 'DES_TRAMO': 'inline label - visible with data', });
lyr_INSTALACIONESDEPORTIVASBSICAS_24.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_AREASDEPORTIVAS_25.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_AREASINFANTILES_26.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_AREADEMAYORES_27.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_MERCADILLOS_28.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_GALERASDEALIMENTACINYMERCADOSMUNICIPALES_29.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_CENTROSCOMERCIALES_30.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_FARMACIAS_31.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_TEMPLOSOTRASRELIGIONES_32.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_TEMPLOSIGLESIASCATLICAS_33.set('fieldLabels', {'Nombre': 'inline label - visible with data', });
lyr_HUERTOSURBANOS_34.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ESPACIOSCOMUNITARIOSCOMPARTIDOS_35.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_AGENCIASDECOLOCACIN_36.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_COMISARASDEPOLICA_37.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_OFICINASDEINFORMACINJUVENIL_38.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_JUNTASMUNICIPALESDEDISTRITO_39.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ASOCIACIONESDEACCINSOCIALYCOOPERACIN_40.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ASOCIACIONESDEINMIGRANTES_41.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ASOCIACIONESDEMUJERESYPERSONASLGTBI_42.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ASOCIACIONESDEPERSONASCONDISCAPACIDAD_43.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ASOCIACIONESDEFAMILIASEINFANCIA_44.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ASOCIACIONESDESALUDYAPOYOMUTUO_45.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ASOCIACIONESVECINALES_46.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_PISCINAS_47.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEPORTIVOSMUNICIPALESYESPACIOSDEDEPORTE_48.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_MUSEOS_49.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_BIBLIOTECAS_50.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSCULTURALES_51.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'header label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_OTROSCENTROSEDUCATIVOS_52.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_COLEGIOSMAYORESYUNIVERSIDADES_53.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CONSERVATORIOSYESCUELASDEMSICAYDANZA_54.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEEDUCACINESPECIALPRIVADOSYCONCERTADOS_55.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEEDUCACINESPECIALPBLICOS_56.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEEDUCACINPARAADULTOS_57.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEFORMACINPROFESIONALPRIVADOSYCONCERTADOS_58.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEFORMACINPROFESIONALPBLICOS_59.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_INSTITUTOSDEENSEANZASECUNDARIA_60.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_COLEGIOSPRIVADOSYCONCERTADOS_61.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_COLEGIOSPBLICOS_62.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ESCUELASINFANTILESPRIVADAS_63.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ESCUELASINFANTILESPBLICAS_64.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSSOCIALESCOMUNITARIOSYDEAPOYO_65.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEIGUALDADYDEATENCINSOCIALAMUJERESYVCTIMASVIOGENSEXUALOLGTBIFOBIA_66.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_COMEDORESSOCIALES_67.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_ALBERGUESSOCIALESYCENTROSDEACOGIDA_68.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEATENCINSOCIALAINMIGRANTES_69.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEASISTENCIAADROGODEPENDIENTES_70.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEATENCINSOCIALAPERSONASCONDISCAPACIDAD_71.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEMAYORES_72.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEMENORESYFAMILIAS_73.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDESERVICIOSSOCIALES_74.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDESALUDMENTAL_75.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEPREVENCINDEENFERMEDADES_76.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEESPECIALIDADESMDICAS_77.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDESALUD_78.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_HOSPITALES_79.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSDEMADRIDSALUD_80.set('fieldLabels', {'NOMBRE': 'inline label - visible with data', 'TIPO': 'inline label - visible with data', 'CATEGORIA': 'inline label - visible with data', 'AMBITO_CMS': 'inline label - visible with data', 'CONTACTO': 'inline label - visible with data', 'HORARIO': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'TRANSPORTE': 'inline label - visible with data', 'WEB': 'inline label - visible with data', 'INFO': 'inline label - visible with data', 'EQUIPO': 'inline label - visible with data', 'FID': 'inline label - visible with data', 'ID_PDI': 'inline label - visible with data', });
lyr_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81.set('fieldLabels', {'DIRECCION': 'inline label - visible with data', 'CENTRO': 'inline label - visible with data', });
lyr_CENTROSMUNICIPALESDESALUDCOMUNITARIACMSC_81.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});