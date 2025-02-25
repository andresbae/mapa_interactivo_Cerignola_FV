var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ExteriorReservaAguaCentral_1 = new ol.format.GeoJSON();
var features_ExteriorReservaAguaCentral_1 = format_ExteriorReservaAguaCentral_1.readFeatures(json_ExteriorReservaAguaCentral_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ExteriorReservaAguaCentral_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ExteriorReservaAguaCentral_1.addFeatures(features_ExteriorReservaAguaCentral_1);
var lyr_ExteriorReservaAguaCentral_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ExteriorReservaAguaCentral_1, 
                style: style_ExteriorReservaAguaCentral_1,
                popuplayertitle: 'Exterior Reserva Agua Central',
                interactive: true,
                title: '<img src="styles/legend/ExteriorReservaAguaCentral_1.png" /> Exterior Reserva Agua Central'
            });
var format_AguaReservaCentral_2 = new ol.format.GeoJSON();
var features_AguaReservaCentral_2 = format_AguaReservaCentral_2.readFeatures(json_AguaReservaCentral_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguaReservaCentral_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguaReservaCentral_2.addFeatures(features_AguaReservaCentral_2);
var lyr_AguaReservaCentral_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AguaReservaCentral_2, 
                style: style_AguaReservaCentral_2,
                popuplayertitle: 'Agua Reserva Central',
                interactive: true,
                title: '<img src="styles/legend/AguaReservaCentral_2.png" /> Agua Reserva Central'
            });
var format_AbrevaderoReservaAguaCentral_3 = new ol.format.GeoJSON();
var features_AbrevaderoReservaAguaCentral_3 = format_AbrevaderoReservaAguaCentral_3.readFeatures(json_AbrevaderoReservaAguaCentral_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbrevaderoReservaAguaCentral_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbrevaderoReservaAguaCentral_3.addFeatures(features_AbrevaderoReservaAguaCentral_3);
var lyr_AbrevaderoReservaAguaCentral_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AbrevaderoReservaAguaCentral_3, 
                style: style_AbrevaderoReservaAguaCentral_3,
                popuplayertitle: 'Abrevadero Reserva Agua Central',
                interactive: true,
                title: '<img src="styles/legend/AbrevaderoReservaAguaCentral_3.png" /> Abrevadero Reserva Agua Central'
            });
var format_Parking_4 = new ol.format.GeoJSON();
var features_Parking_4 = format_Parking_4.readFeatures(json_Parking_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parking_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parking_4.addFeatures(features_Parking_4);
var lyr_Parking_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parking_4, 
                style: style_Parking_4,
                popuplayertitle: 'Parking',
                interactive: true,
                title: '<img src="styles/legend/Parking_4.png" /> Parking'
            });
var format_Subestacion3_5 = new ol.format.GeoJSON();
var features_Subestacion3_5 = format_Subestacion3_5.readFeatures(json_Subestacion3_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subestacion3_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subestacion3_5.addFeatures(features_Subestacion3_5);
var lyr_Subestacion3_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subestacion3_5, 
                style: style_Subestacion3_5,
                popuplayertitle: 'Subestacion 3',
                interactive: true,
                title: '<img src="styles/legend/Subestacion3_5.png" /> Subestacion 3'
            });
var format_Subestacion2_6 = new ol.format.GeoJSON();
var features_Subestacion2_6 = format_Subestacion2_6.readFeatures(json_Subestacion2_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subestacion2_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subestacion2_6.addFeatures(features_Subestacion2_6);
var lyr_Subestacion2_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Subestacion2_6, 
                style: style_Subestacion2_6,
                popuplayertitle: 'Subestacion 2',
                interactive: true,
                title: '<img src="styles/legend/Subestacion2_6.png" /> Subestacion 2'
            });
var format_Suebestacion_7 = new ol.format.GeoJSON();
var features_Suebestacion_7 = format_Suebestacion_7.readFeatures(json_Suebestacion_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suebestacion_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suebestacion_7.addFeatures(features_Suebestacion_7);
var lyr_Suebestacion_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suebestacion_7, 
                style: style_Suebestacion_7,
                popuplayertitle: 'Suebestacion',
                interactive: true,
                title: '<img src="styles/legend/Suebestacion_7.png" /> Suebestacion'
            });
var format_Sector1_8 = new ol.format.GeoJSON();
var features_Sector1_8 = format_Sector1_8.readFeatures(json_Sector1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector1_8.addFeatures(features_Sector1_8);
var lyr_Sector1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector1_8, 
                style: style_Sector1_8,
                popuplayertitle: 'Sector 1',
                interactive: true,
                title: '<img src="styles/legend/Sector1_8.png" /> Sector 1'
            });
var format_Sector3_9 = new ol.format.GeoJSON();
var features_Sector3_9 = format_Sector3_9.readFeatures(json_Sector3_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector3_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector3_9.addFeatures(features_Sector3_9);
var lyr_Sector3_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector3_9, 
                style: style_Sector3_9,
                popuplayertitle: 'Sector 3',
                interactive: true,
                title: '<img src="styles/legend/Sector3_9.png" /> Sector 3'
            });
var format_ZonaArboladaSector1_10 = new ol.format.GeoJSON();
var features_ZonaArboladaSector1_10 = format_ZonaArboladaSector1_10.readFeatures(json_ZonaArboladaSector1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaArboladaSector1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaArboladaSector1_10.addFeatures(features_ZonaArboladaSector1_10);
var lyr_ZonaArboladaSector1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaArboladaSector1_10, 
                style: style_ZonaArboladaSector1_10,
                popuplayertitle: 'Zona Arbolada Sector 1',
                interactive: true,
                title: '<img src="styles/legend/ZonaArboladaSector1_10.png" /> Zona Arbolada Sector 1'
            });
var format_ZonaArbolada2Sector3_11 = new ol.format.GeoJSON();
var features_ZonaArbolada2Sector3_11 = format_ZonaArbolada2Sector3_11.readFeatures(json_ZonaArbolada2Sector3_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaArbolada2Sector3_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaArbolada2Sector3_11.addFeatures(features_ZonaArbolada2Sector3_11);
var lyr_ZonaArbolada2Sector3_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaArbolada2Sector3_11, 
                style: style_ZonaArbolada2Sector3_11,
                popuplayertitle: 'Zona Arbolada 2 Sector 3',
                interactive: true,
                title: '<img src="styles/legend/ZonaArbolada2Sector3_11.png" /> Zona Arbolada 2 Sector 3'
            });
var format_ZonaArbolada1Sector3_12 = new ol.format.GeoJSON();
var features_ZonaArbolada1Sector3_12 = format_ZonaArbolada1Sector3_12.readFeatures(json_ZonaArbolada1Sector3_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaArbolada1Sector3_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaArbolada1Sector3_12.addFeatures(features_ZonaArbolada1Sector3_12);
var lyr_ZonaArbolada1Sector3_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaArbolada1Sector3_12, 
                style: style_ZonaArbolada1Sector3_12,
                popuplayertitle: 'Zona Arbolada 1 Sector 3',
                interactive: true,
                title: '<img src="styles/legend/ZonaArbolada1Sector3_12.png" /> Zona Arbolada 1 Sector 3'
            });
var format_Sector2_13 = new ol.format.GeoJSON();
var features_Sector2_13 = format_Sector2_13.readFeatures(json_Sector2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector2_13.addFeatures(features_Sector2_13);
var lyr_Sector2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector2_13, 
                style: style_Sector2_13,
                popuplayertitle: 'Sector 2',
                interactive: true,
                title: '<img src="styles/legend/Sector2_13.png" /> Sector 2'
            });
var format_ParcelaCasetaSector2_14 = new ol.format.GeoJSON();
var features_ParcelaCasetaSector2_14 = format_ParcelaCasetaSector2_14.readFeatures(json_ParcelaCasetaSector2_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelaCasetaSector2_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelaCasetaSector2_14.addFeatures(features_ParcelaCasetaSector2_14);
var lyr_ParcelaCasetaSector2_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelaCasetaSector2_14, 
                style: style_ParcelaCasetaSector2_14,
                popuplayertitle: 'Parcela Caseta Sector 2',
                interactive: true,
                title: '<img src="styles/legend/ParcelaCasetaSector2_14.png" /> Parcela Caseta Sector 2'
            });
var format_CasetaObra_15 = new ol.format.GeoJSON();
var features_CasetaObra_15 = format_CasetaObra_15.readFeatures(json_CasetaObra_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CasetaObra_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CasetaObra_15.addFeatures(features_CasetaObra_15);
var lyr_CasetaObra_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CasetaObra_15, 
                style: style_CasetaObra_15,
                popuplayertitle: 'Caseta Obra',
                interactive: true,
                title: '<img src="styles/legend/CasetaObra_15.png" /> Caseta Obra'
            });
var format_Caseta_16 = new ol.format.GeoJSON();
var features_Caseta_16 = format_Caseta_16.readFeatures(json_Caseta_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caseta_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caseta_16.addFeatures(features_Caseta_16);
var lyr_Caseta_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Caseta_16, 
                style: style_Caseta_16,
                popuplayertitle: 'Caseta',
                interactive: true,
                title: '<img src="styles/legend/Caseta_16.png" /> Caseta'
            });
var format_ReservadeAgua1_17 = new ol.format.GeoJSON();
var features_ReservadeAgua1_17 = format_ReservadeAgua1_17.readFeatures(json_ReservadeAgua1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservadeAgua1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservadeAgua1_17.addFeatures(features_ReservadeAgua1_17);
var lyr_ReservadeAgua1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservadeAgua1_17, 
                style: style_ReservadeAgua1_17,
                popuplayertitle: 'Reserva de Agua 1',
                interactive: true,
                title: '<img src="styles/legend/ReservadeAgua1_17.png" /> Reserva de Agua 1'
            });
var format_AguaReserva1_18 = new ol.format.GeoJSON();
var features_AguaReserva1_18 = format_AguaReserva1_18.readFeatures(json_AguaReserva1_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguaReserva1_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguaReserva1_18.addFeatures(features_AguaReserva1_18);
var lyr_AguaReserva1_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AguaReserva1_18, 
                style: style_AguaReserva1_18,
                popuplayertitle: 'Agua Reserva 1',
                interactive: true,
                title: '<img src="styles/legend/AguaReserva1_18.png" /> Agua Reserva 1'
            });
var format_ReservadeAgua2_19 = new ol.format.GeoJSON();
var features_ReservadeAgua2_19 = format_ReservadeAgua2_19.readFeatures(json_ReservadeAgua2_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservadeAgua2_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservadeAgua2_19.addFeatures(features_ReservadeAgua2_19);
var lyr_ReservadeAgua2_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservadeAgua2_19, 
                style: style_ReservadeAgua2_19,
                popuplayertitle: 'Reserva de Agua 2',
                interactive: true,
                title: '<img src="styles/legend/ReservadeAgua2_19.png" /> Reserva de Agua 2'
            });
var format_AguaReserva2_20 = new ol.format.GeoJSON();
var features_AguaReserva2_20 = format_AguaReserva2_20.readFeatures(json_AguaReserva2_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AguaReserva2_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AguaReserva2_20.addFeatures(features_AguaReserva2_20);
var lyr_AguaReserva2_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AguaReserva2_20, 
                style: style_AguaReserva2_20,
                popuplayertitle: 'Agua Reserva 2',
                interactive: true,
                title: '<img src="styles/legend/AguaReserva2_20.png" /> Agua Reserva 2'
            });
var format_Camino6_21 = new ol.format.GeoJSON();
var features_Camino6_21 = format_Camino6_21.readFeatures(json_Camino6_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino6_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino6_21.addFeatures(features_Camino6_21);
var lyr_Camino6_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino6_21, 
                style: style_Camino6_21,
                popuplayertitle: 'Camino 6',
                interactive: true,
                title: '<img src="styles/legend/Camino6_21.png" /> Camino 6'
            });
var format_Camino5_22 = new ol.format.GeoJSON();
var features_Camino5_22 = format_Camino5_22.readFeatures(json_Camino5_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino5_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino5_22.addFeatures(features_Camino5_22);
var lyr_Camino5_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino5_22, 
                style: style_Camino5_22,
                popuplayertitle: 'Camino 5',
                interactive: true,
                title: '<img src="styles/legend/Camino5_22.png" /> Camino 5'
            });
var format_Camino4_23 = new ol.format.GeoJSON();
var features_Camino4_23 = format_Camino4_23.readFeatures(json_Camino4_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino4_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino4_23.addFeatures(features_Camino4_23);
var lyr_Camino4_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino4_23, 
                style: style_Camino4_23,
                popuplayertitle: 'Camino 4',
                interactive: true,
                title: '<img src="styles/legend/Camino4_23.png" /> Camino 4'
            });
var format_Camino3_24 = new ol.format.GeoJSON();
var features_Camino3_24 = format_Camino3_24.readFeatures(json_Camino3_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino3_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino3_24.addFeatures(features_Camino3_24);
var lyr_Camino3_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino3_24, 
                style: style_Camino3_24,
                popuplayertitle: 'Camino 3',
                interactive: true,
                title: '<img src="styles/legend/Camino3_24.png" /> Camino 3'
            });
var format_Camino2_25 = new ol.format.GeoJSON();
var features_Camino2_25 = format_Camino2_25.readFeatures(json_Camino2_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino2_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino2_25.addFeatures(features_Camino2_25);
var lyr_Camino2_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino2_25, 
                style: style_Camino2_25,
                popuplayertitle: 'Camino 2',
                interactive: true,
                title: '<img src="styles/legend/Camino2_25.png" /> Camino 2'
            });
var format_Camino1_26 = new ol.format.GeoJSON();
var features_Camino1_26 = format_Camino1_26.readFeatures(json_Camino1_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino1_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino1_26.addFeatures(features_Camino1_26);
var lyr_Camino1_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino1_26, 
                style: style_Camino1_26,
                popuplayertitle: 'Camino 1',
                interactive: true,
                title: '<img src="styles/legend/Camino1_26.png" /> Camino 1'
            });
var format_Sector_4_Parcela_1_27 = new ol.format.GeoJSON();
var features_Sector_4_Parcela_1_27 = format_Sector_4_Parcela_1_27.readFeatures(json_Sector_4_Parcela_1_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector_4_Parcela_1_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector_4_Parcela_1_27.addFeatures(features_Sector_4_Parcela_1_27);
var lyr_Sector_4_Parcela_1_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector_4_Parcela_1_27, 
                style: style_Sector_4_Parcela_1_27,
                popuplayertitle: 'Sector_4_Parcela_1',
                interactive: true,
                title: '<img src="styles/legend/Sector_4_Parcela_1_27.png" /> Sector_4_Parcela_1'
            });
var format_Sector_4_Parcela_2_28 = new ol.format.GeoJSON();
var features_Sector_4_Parcela_2_28 = format_Sector_4_Parcela_2_28.readFeatures(json_Sector_4_Parcela_2_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector_4_Parcela_2_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector_4_Parcela_2_28.addFeatures(features_Sector_4_Parcela_2_28);
var lyr_Sector_4_Parcela_2_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector_4_Parcela_2_28, 
                style: style_Sector_4_Parcela_2_28,
                popuplayertitle: 'Sector_4_Parcela_2',
                interactive: true,
                title: '<img src="styles/legend/Sector_4_Parcela_2_28.png" /> Sector_4_Parcela_2'
            });
var format_Sector_4_Parcela_3_29 = new ol.format.GeoJSON();
var features_Sector_4_Parcela_3_29 = format_Sector_4_Parcela_3_29.readFeatures(json_Sector_4_Parcela_3_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sector_4_Parcela_3_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sector_4_Parcela_3_29.addFeatures(features_Sector_4_Parcela_3_29);
var lyr_Sector_4_Parcela_3_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sector_4_Parcela_3_29, 
                style: style_Sector_4_Parcela_3_29,
                popuplayertitle: 'Sector_4_Parcela_3',
                interactive: true,
                title: '<img src="styles/legend/Sector_4_Parcela_3_29.png" /> Sector_4_Parcela_3'
            });
var format_Camino1Sector4_30 = new ol.format.GeoJSON();
var features_Camino1Sector4_30 = format_Camino1Sector4_30.readFeatures(json_Camino1Sector4_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino1Sector4_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino1Sector4_30.addFeatures(features_Camino1Sector4_30);
var lyr_Camino1Sector4_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino1Sector4_30, 
                style: style_Camino1Sector4_30,
                popuplayertitle: 'Camino 1 Sector 4',
                interactive: true,
                title: '<img src="styles/legend/Camino1Sector4_30.png" /> Camino 1 Sector 4'
            });
var format_Camino3Sector4_31 = new ol.format.GeoJSON();
var features_Camino3Sector4_31 = format_Camino3Sector4_31.readFeatures(json_Camino3Sector4_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino3Sector4_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino3Sector4_31.addFeatures(features_Camino3Sector4_31);
var lyr_Camino3Sector4_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino3Sector4_31, 
                style: style_Camino3Sector4_31,
                popuplayertitle: 'Camino 3 Sector 4',
                interactive: true,
                title: '<img src="styles/legend/Camino3Sector4_31.png" /> Camino 3 Sector 4'
            });
var format_Arbol_1_32 = new ol.format.GeoJSON();
var features_Arbol_1_32 = format_Arbol_1_32.readFeatures(json_Arbol_1_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arbol_1_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbol_1_32.addFeatures(features_Arbol_1_32);
var lyr_Arbol_1_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbol_1_32, 
                style: style_Arbol_1_32,
                popuplayertitle: 'Arbol_1',
                interactive: true,
                title: '<img src="styles/legend/Arbol_1_32.png" /> Arbol_1'
            });
var format_Camino2Sector4_33 = new ol.format.GeoJSON();
var features_Camino2Sector4_33 = format_Camino2Sector4_33.readFeatures(json_Camino2Sector4_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino2Sector4_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino2Sector4_33.addFeatures(features_Camino2Sector4_33);
var lyr_Camino2Sector4_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino2Sector4_33, 
                style: style_Camino2Sector4_33,
                popuplayertitle: 'Camino 2 Sector 4',
                interactive: true,
                title: '<img src="styles/legend/Camino2Sector4_33.png" /> Camino 2 Sector 4'
            });
var format_ZonaArboladaSector5_34 = new ol.format.GeoJSON();
var features_ZonaArboladaSector5_34 = format_ZonaArboladaSector5_34.readFeatures(json_ZonaArboladaSector5_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZonaArboladaSector5_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZonaArboladaSector5_34.addFeatures(features_ZonaArboladaSector5_34);
var lyr_ZonaArboladaSector5_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZonaArboladaSector5_34, 
                style: style_ZonaArboladaSector5_34,
                popuplayertitle: 'Zona Arbolada Sector 5',
                interactive: true,
                title: '<img src="styles/legend/ZonaArboladaSector5_34.png" /> Zona Arbolada Sector 5'
            });
var format_Casa2Sector5Techo3_35 = new ol.format.GeoJSON();
var features_Casa2Sector5Techo3_35 = format_Casa2Sector5Techo3_35.readFeatures(json_Casa2Sector5Techo3_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casa2Sector5Techo3_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casa2Sector5Techo3_35.addFeatures(features_Casa2Sector5Techo3_35);
var lyr_Casa2Sector5Techo3_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casa2Sector5Techo3_35, 
                style: style_Casa2Sector5Techo3_35,
                popuplayertitle: 'Casa 2 Sector 5 Techo 3',
                interactive: true,
                title: '<img src="styles/legend/Casa2Sector5Techo3_35.png" /> Casa 2 Sector 5 Techo 3'
            });
var format_Casa2Sector5Techo2_36 = new ol.format.GeoJSON();
var features_Casa2Sector5Techo2_36 = format_Casa2Sector5Techo2_36.readFeatures(json_Casa2Sector5Techo2_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casa2Sector5Techo2_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casa2Sector5Techo2_36.addFeatures(features_Casa2Sector5Techo2_36);
var lyr_Casa2Sector5Techo2_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casa2Sector5Techo2_36, 
                style: style_Casa2Sector5Techo2_36,
                popuplayertitle: 'Casa 2 Sector 5 Techo 2',
                interactive: true,
                title: '<img src="styles/legend/Casa2Sector5Techo2_36.png" /> Casa 2 Sector 5 Techo 2'
            });
var format_Casa2Sector5Techo1_37 = new ol.format.GeoJSON();
var features_Casa2Sector5Techo1_37 = format_Casa2Sector5Techo1_37.readFeatures(json_Casa2Sector5Techo1_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Casa2Sector5Techo1_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Casa2Sector5Techo1_37.addFeatures(features_Casa2Sector5Techo1_37);
var lyr_Casa2Sector5Techo1_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Casa2Sector5Techo1_37, 
                style: style_Casa2Sector5Techo1_37,
                popuplayertitle: 'Casa 2 Sector 5 Techo1',
                interactive: true,
                title: '<img src="styles/legend/Casa2Sector5Techo1_37.png" /> Casa 2 Sector 5 Techo1'
            });
var format_Zona1Sector5_38 = new ol.format.GeoJSON();
var features_Zona1Sector5_38 = format_Zona1Sector5_38.readFeatures(json_Zona1Sector5_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona1Sector5_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona1Sector5_38.addFeatures(features_Zona1Sector5_38);
var lyr_Zona1Sector5_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona1Sector5_38, 
                style: style_Zona1Sector5_38,
                popuplayertitle: 'Zona 1 Sector 5 ',
                interactive: true,
                title: '<img src="styles/legend/Zona1Sector5_38.png" /> Zona 1 Sector 5 '
            });
var format_Zona2Sector5_39 = new ol.format.GeoJSON();
var features_Zona2Sector5_39 = format_Zona2Sector5_39.readFeatures(json_Zona2Sector5_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona2Sector5_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona2Sector5_39.addFeatures(features_Zona2Sector5_39);
var lyr_Zona2Sector5_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona2Sector5_39, 
                style: style_Zona2Sector5_39,
                popuplayertitle: ' Zona 2 Sector 5',
                interactive: true,
                title: '<img src="styles/legend/Zona2Sector5_39.png" />  Zona 2 Sector 5'
            });
var format_Zona3Sector5_40 = new ol.format.GeoJSON();
var features_Zona3Sector5_40 = format_Zona3Sector5_40.readFeatures(json_Zona3Sector5_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zona3Sector5_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zona3Sector5_40.addFeatures(features_Zona3Sector5_40);
var lyr_Zona3Sector5_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zona3Sector5_40, 
                style: style_Zona3Sector5_40,
                popuplayertitle: 'Zona 3 Sector 5 ',
                interactive: true,
                title: '<img src="styles/legend/Zona3Sector5_40.png" /> Zona 3 Sector 5 '
            });
var format_CaminoSector5_41 = new ol.format.GeoJSON();
var features_CaminoSector5_41 = format_CaminoSector5_41.readFeatures(json_CaminoSector5_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaminoSector5_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaminoSector5_41.addFeatures(features_CaminoSector5_41);
var lyr_CaminoSector5_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaminoSector5_41, 
                style: style_CaminoSector5_41,
                popuplayertitle: 'Camino Sector 5',
                interactive: true,
                title: '<img src="styles/legend/CaminoSector5_41.png" /> Camino Sector 5'
            });
var format_Camino3Sector5_42 = new ol.format.GeoJSON();
var features_Camino3Sector5_42 = format_Camino3Sector5_42.readFeatures(json_Camino3Sector5_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino3Sector5_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino3Sector5_42.addFeatures(features_Camino3Sector5_42);
var lyr_Camino3Sector5_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino3Sector5_42, 
                style: style_Camino3Sector5_42,
                popuplayertitle: 'Camino 3 Sector 5',
                interactive: true,
                title: '<img src="styles/legend/Camino3Sector5_42.png" /> Camino 3 Sector 5'
            });
var format_Camino2Sector5_43 = new ol.format.GeoJSON();
var features_Camino2Sector5_43 = format_Camino2Sector5_43.readFeatures(json_Camino2Sector5_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Camino2Sector5_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Camino2Sector5_43.addFeatures(features_Camino2Sector5_43);
var lyr_Camino2Sector5_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Camino2Sector5_43, 
                style: style_Camino2Sector5_43,
                popuplayertitle: 'Camino 2 Sector 5',
                interactive: true,
                title: '<img src="styles/legend/Camino2Sector5_43.png" /> Camino 2 Sector 5'
            });
var format_Arbol_44 = new ol.format.GeoJSON();
var features_Arbol_44 = format_Arbol_44.readFeatures(json_Arbol_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arbol_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbol_44.addFeatures(features_Arbol_44);
var lyr_Arbol_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbol_44, 
                style: style_Arbol_44,
                popuplayertitle: 'Arbol',
                interactive: true,
                title: '<img src="styles/legend/Arbol_44.png" /> Arbol'
            });
var format_ParcelaCasa1Sector5_45 = new ol.format.GeoJSON();
var features_ParcelaCasa1Sector5_45 = format_ParcelaCasa1Sector5_45.readFeatures(json_ParcelaCasa1Sector5_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcelaCasa1Sector5_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParcelaCasa1Sector5_45.addFeatures(features_ParcelaCasa1Sector5_45);
var lyr_ParcelaCasa1Sector5_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParcelaCasa1Sector5_45, 
                style: style_ParcelaCasa1Sector5_45,
                popuplayertitle: 'Parcela Casa 1 Sector 5',
                interactive: true,
                title: '<img src="styles/legend/ParcelaCasa1Sector5_45.png" /> Parcela Casa 1 Sector 5'
            });
var format_PlantaBaseCasa1Sector5_46 = new ol.format.GeoJSON();
var features_PlantaBaseCasa1Sector5_46 = format_PlantaBaseCasa1Sector5_46.readFeatures(json_PlantaBaseCasa1Sector5_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlantaBaseCasa1Sector5_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlantaBaseCasa1Sector5_46.addFeatures(features_PlantaBaseCasa1Sector5_46);
var lyr_PlantaBaseCasa1Sector5_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlantaBaseCasa1Sector5_46, 
                style: style_PlantaBaseCasa1Sector5_46,
                popuplayertitle: 'Planta Base Casa 1 Sector 5',
                interactive: true,
                title: '<img src="styles/legend/PlantaBaseCasa1Sector5_46.png" /> Planta Base Casa 1 Sector 5'
            });
var format_TorreCasa1Sector5_47 = new ol.format.GeoJSON();
var features_TorreCasa1Sector5_47 = format_TorreCasa1Sector5_47.readFeatures(json_TorreCasa1Sector5_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TorreCasa1Sector5_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorreCasa1Sector5_47.addFeatures(features_TorreCasa1Sector5_47);
var lyr_TorreCasa1Sector5_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorreCasa1Sector5_47, 
                style: style_TorreCasa1Sector5_47,
                popuplayertitle: 'Torre Casa 1 Sector 5',
                interactive: true,
                title: '<img src="styles/legend/TorreCasa1Sector5_47.png" /> Torre Casa 1 Sector 5'
            });
var format_EstabloCasa1Sector5_48 = new ol.format.GeoJSON();
var features_EstabloCasa1Sector5_48 = format_EstabloCasa1Sector5_48.readFeatures(json_EstabloCasa1Sector5_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstabloCasa1Sector5_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstabloCasa1Sector5_48.addFeatures(features_EstabloCasa1Sector5_48);
var lyr_EstabloCasa1Sector5_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstabloCasa1Sector5_48, 
                style: style_EstabloCasa1Sector5_48,
                popuplayertitle: 'Establo Casa 1 Sector 5',
                interactive: true,
                title: '<img src="styles/legend/EstabloCasa1Sector5_48.png" /> Establo Casa 1 Sector 5'
            });
var format_rbol_14_49 = new ol.format.GeoJSON();
var features_rbol_14_49 = format_rbol_14_49.readFeatures(json_rbol_14_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_14_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_14_49.addFeatures(features_rbol_14_49);
var lyr_rbol_14_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_14_49, 
                style: style_rbol_14_49,
                popuplayertitle: 'Árbol_14',
                interactive: true,
                title: '<img src="styles/legend/rbol_14_49.png" /> Árbol_14'
            });
var format_rbol_13_50 = new ol.format.GeoJSON();
var features_rbol_13_50 = format_rbol_13_50.readFeatures(json_rbol_13_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_13_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_13_50.addFeatures(features_rbol_13_50);
var lyr_rbol_13_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_13_50, 
                style: style_rbol_13_50,
                popuplayertitle: 'Árbol_13',
                interactive: true,
                title: '<img src="styles/legend/rbol_13_50.png" /> Árbol_13'
            });
var format_rbol_12_51 = new ol.format.GeoJSON();
var features_rbol_12_51 = format_rbol_12_51.readFeatures(json_rbol_12_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_12_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_12_51.addFeatures(features_rbol_12_51);
var lyr_rbol_12_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_12_51, 
                style: style_rbol_12_51,
                popuplayertitle: 'Árbol_12',
                interactive: true,
                title: '<img src="styles/legend/rbol_12_51.png" /> Árbol_12'
            });
var format_rbol_11_52 = new ol.format.GeoJSON();
var features_rbol_11_52 = format_rbol_11_52.readFeatures(json_rbol_11_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_11_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_11_52.addFeatures(features_rbol_11_52);
var lyr_rbol_11_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_11_52, 
                style: style_rbol_11_52,
                popuplayertitle: 'Árbol_11',
                interactive: true,
                title: '<img src="styles/legend/rbol_11_52.png" /> Árbol_11'
            });
var format_rbol_10_53 = new ol.format.GeoJSON();
var features_rbol_10_53 = format_rbol_10_53.readFeatures(json_rbol_10_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_10_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_10_53.addFeatures(features_rbol_10_53);
var lyr_rbol_10_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_10_53, 
                style: style_rbol_10_53,
                popuplayertitle: 'Árbol_10',
                interactive: true,
                title: '<img src="styles/legend/rbol_10_53.png" /> Árbol_10'
            });
var format_rbol_9_54 = new ol.format.GeoJSON();
var features_rbol_9_54 = format_rbol_9_54.readFeatures(json_rbol_9_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_9_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_9_54.addFeatures(features_rbol_9_54);
var lyr_rbol_9_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_9_54, 
                style: style_rbol_9_54,
                popuplayertitle: 'Árbol_9',
                interactive: true,
                title: '<img src="styles/legend/rbol_9_54.png" /> Árbol_9'
            });
var format_rbol_8_55 = new ol.format.GeoJSON();
var features_rbol_8_55 = format_rbol_8_55.readFeatures(json_rbol_8_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_8_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_8_55.addFeatures(features_rbol_8_55);
var lyr_rbol_8_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_8_55, 
                style: style_rbol_8_55,
                popuplayertitle: 'Árbol_8',
                interactive: true,
                title: '<img src="styles/legend/rbol_8_55.png" /> Árbol_8'
            });
var format_rbol_7_56 = new ol.format.GeoJSON();
var features_rbol_7_56 = format_rbol_7_56.readFeatures(json_rbol_7_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_7_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_7_56.addFeatures(features_rbol_7_56);
var lyr_rbol_7_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_7_56, 
                style: style_rbol_7_56,
                popuplayertitle: 'Árbol_7',
                interactive: true,
                title: '<img src="styles/legend/rbol_7_56.png" /> Árbol_7'
            });
var format_rbol_6_57 = new ol.format.GeoJSON();
var features_rbol_6_57 = format_rbol_6_57.readFeatures(json_rbol_6_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_6_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_6_57.addFeatures(features_rbol_6_57);
var lyr_rbol_6_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_6_57, 
                style: style_rbol_6_57,
                popuplayertitle: 'Árbol_6',
                interactive: true,
                title: '<img src="styles/legend/rbol_6_57.png" /> Árbol_6'
            });
var format_rbol_5_58 = new ol.format.GeoJSON();
var features_rbol_5_58 = format_rbol_5_58.readFeatures(json_rbol_5_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_5_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_5_58.addFeatures(features_rbol_5_58);
var lyr_rbol_5_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_5_58, 
                style: style_rbol_5_58,
                popuplayertitle: 'Árbol_5',
                interactive: true,
                title: '<img src="styles/legend/rbol_5_58.png" /> Árbol_5'
            });
var format_rbol_4_59 = new ol.format.GeoJSON();
var features_rbol_4_59 = format_rbol_4_59.readFeatures(json_rbol_4_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_4_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_4_59.addFeatures(features_rbol_4_59);
var lyr_rbol_4_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_4_59, 
                style: style_rbol_4_59,
                popuplayertitle: 'Árbol_4',
                interactive: true,
                title: '<img src="styles/legend/rbol_4_59.png" /> Árbol_4'
            });
var format_rbol_3_60 = new ol.format.GeoJSON();
var features_rbol_3_60 = format_rbol_3_60.readFeatures(json_rbol_3_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_3_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_3_60.addFeatures(features_rbol_3_60);
var lyr_rbol_3_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_3_60, 
                style: style_rbol_3_60,
                popuplayertitle: 'Árbol_3',
                interactive: true,
                title: '<img src="styles/legend/rbol_3_60.png" /> Árbol_3'
            });
var format_rbol_2_61 = new ol.format.GeoJSON();
var features_rbol_2_61 = format_rbol_2_61.readFeatures(json_rbol_2_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_2_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_2_61.addFeatures(features_rbol_2_61);
var lyr_rbol_2_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_2_61, 
                style: style_rbol_2_61,
                popuplayertitle: 'Árbol_2',
                interactive: true,
                title: '<img src="styles/legend/rbol_2_61.png" /> Árbol_2'
            });
var format_rbol_1_62 = new ol.format.GeoJSON();
var features_rbol_1_62 = format_rbol_1_62.readFeatures(json_rbol_1_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rbol_1_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rbol_1_62.addFeatures(features_rbol_1_62);
var lyr_rbol_1_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rbol_1_62, 
                style: style_rbol_1_62,
                popuplayertitle: 'Árbol_1',
                interactive: true,
                title: '<img src="styles/legend/rbol_1_62.png" /> Árbol_1'
            });
var format_LineaElectrica4_63 = new ol.format.GeoJSON();
var features_LineaElectrica4_63 = format_LineaElectrica4_63.readFeatures(json_LineaElectrica4_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineaElectrica4_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineaElectrica4_63.addFeatures(features_LineaElectrica4_63);
var lyr_LineaElectrica4_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineaElectrica4_63, 
                style: style_LineaElectrica4_63,
                popuplayertitle: 'Linea Electrica 4',
                interactive: true,
                title: '<img src="styles/legend/LineaElectrica4_63.png" /> Linea Electrica 4'
            });
var format_LineaElctrica3_64 = new ol.format.GeoJSON();
var features_LineaElctrica3_64 = format_LineaElctrica3_64.readFeatures(json_LineaElctrica3_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineaElctrica3_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineaElctrica3_64.addFeatures(features_LineaElctrica3_64);
var lyr_LineaElctrica3_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineaElctrica3_64, 
                style: style_LineaElctrica3_64,
                popuplayertitle: 'Linea Eléctrica 3',
                interactive: true,
                title: '<img src="styles/legend/LineaElctrica3_64.png" /> Linea Eléctrica 3'
            });
var format_LneaElctrica2_65 = new ol.format.GeoJSON();
var features_LneaElctrica2_65 = format_LneaElctrica2_65.readFeatures(json_LneaElctrica2_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LneaElctrica2_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LneaElctrica2_65.addFeatures(features_LneaElctrica2_65);
var lyr_LneaElctrica2_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LneaElctrica2_65, 
                style: style_LneaElctrica2_65,
                popuplayertitle: 'Línea Eléctrica 2',
                interactive: true,
                title: '<img src="styles/legend/LneaElctrica2_65.png" /> Línea Eléctrica 2'
            });
var format_LneaElctrica1_66 = new ol.format.GeoJSON();
var features_LneaElctrica1_66 = format_LneaElctrica1_66.readFeatures(json_LneaElctrica1_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LneaElctrica1_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LneaElctrica1_66.addFeatures(features_LneaElctrica1_66);
var lyr_LneaElctrica1_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LneaElctrica1_66, 
                style: style_LneaElctrica1_66,
                popuplayertitle: 'Línea Eléctrica 1',
                interactive: true,
                title: '<img src="styles/legend/LneaElctrica1_66.png" /> Línea Eléctrica 1'
            });
var format_PosteElctricoTipo2_67 = new ol.format.GeoJSON();
var features_PosteElctricoTipo2_67 = format_PosteElctricoTipo2_67.readFeatures(json_PosteElctricoTipo2_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosteElctricoTipo2_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosteElctricoTipo2_67.addFeatures(features_PosteElctricoTipo2_67);
var lyr_PosteElctricoTipo2_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PosteElctricoTipo2_67, 
                style: style_PosteElctricoTipo2_67,
                popuplayertitle: 'Poste Eléctrico Tipo 2',
                interactive: true,
                title: '<img src="styles/legend/PosteElctricoTipo2_67.png" /> Poste Eléctrico Tipo 2'
            });
var format_PosteElctricoTipo1_68 = new ol.format.GeoJSON();
var features_PosteElctricoTipo1_68 = format_PosteElctricoTipo1_68.readFeatures(json_PosteElctricoTipo1_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosteElctricoTipo1_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosteElctricoTipo1_68.addFeatures(features_PosteElctricoTipo1_68);
var lyr_PosteElctricoTipo1_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PosteElctricoTipo1_68, 
                style: style_PosteElctricoTipo1_68,
                popuplayertitle: 'Poste Eléctrico Tipo 1',
                interactive: true,
                title: '<img src="styles/legend/PosteElctricoTipo1_68.png" /> Poste Eléctrico Tipo 1'
            });
var format_TorreElctricaTipo1_69 = new ol.format.GeoJSON();
var features_TorreElctricaTipo1_69 = format_TorreElctricaTipo1_69.readFeatures(json_TorreElctricaTipo1_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TorreElctricaTipo1_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorreElctricaTipo1_69.addFeatures(features_TorreElctricaTipo1_69);
var lyr_TorreElctricaTipo1_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorreElctricaTipo1_69, 
                style: style_TorreElctricaTipo1_69,
                popuplayertitle: 'Torre Eléctrica Tipo 1',
                interactive: true,
                title: '<img src="styles/legend/TorreElctricaTipo1_69.png" /> Torre Eléctrica Tipo 1'
            });
var format_TorreElctricaTipo2_70 = new ol.format.GeoJSON();
var features_TorreElctricaTipo2_70 = format_TorreElctricaTipo2_70.readFeatures(json_TorreElctricaTipo2_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TorreElctricaTipo2_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TorreElctricaTipo2_70.addFeatures(features_TorreElctricaTipo2_70);
var lyr_TorreElctricaTipo2_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TorreElctricaTipo2_70, 
                style: style_TorreElctricaTipo2_70,
                popuplayertitle: 'Torre Eléctrica Tipo 2',
                interactive: true,
                title: '<img src="styles/legend/TorreElctricaTipo2_70.png" /> Torre Eléctrica Tipo 2'
            });
var group_Linea_electrica = new ol.layer.Group({
                                layers: [lyr_LineaElectrica4_63,lyr_LineaElctrica3_64,lyr_LneaElctrica2_65,lyr_LneaElctrica1_66,lyr_PosteElctricoTipo2_67,lyr_PosteElctricoTipo1_68,lyr_TorreElctricaTipo1_69,lyr_TorreElctricaTipo2_70,],
                                fold: "open",
                                title: 'Linea_electrica'});
var group_rboles_Zona1 = new ol.layer.Group({
                                layers: [lyr_rbol_14_49,lyr_rbol_13_50,lyr_rbol_12_51,lyr_rbol_11_52,lyr_rbol_10_53,lyr_rbol_9_54,lyr_rbol_8_55,lyr_rbol_7_56,lyr_rbol_6_57,lyr_rbol_5_58,lyr_rbol_4_59,lyr_rbol_3_60,lyr_rbol_2_61,lyr_rbol_1_62,],
                                fold: "open",
                                title: 'Árboles_Zona1'});
var group_CasaSector5 = new ol.layer.Group({
                                layers: [lyr_ParcelaCasa1Sector5_45,lyr_PlantaBaseCasa1Sector5_46,lyr_TorreCasa1Sector5_47,lyr_EstabloCasa1Sector5_48,],
                                fold: "open",
                                title: 'Casa Sector 5'});
var group_Sector_5 = new ol.layer.Group({
                                layers: [lyr_ZonaArboladaSector5_34,lyr_Casa2Sector5Techo3_35,lyr_Casa2Sector5Techo2_36,lyr_Casa2Sector5Techo1_37,lyr_Zona1Sector5_38,lyr_Zona2Sector5_39,lyr_Zona3Sector5_40,lyr_CaminoSector5_41,lyr_Camino3Sector5_42,lyr_Camino2Sector5_43,lyr_Arbol_44,],
                                fold: "open",
                                title: 'Sector_5'});
var group_Sector_4 = new ol.layer.Group({
                                layers: [lyr_Sector_4_Parcela_1_27,lyr_Sector_4_Parcela_2_28,lyr_Sector_4_Parcela_3_29,lyr_Camino1Sector4_30,lyr_Camino3Sector4_31,lyr_Arbol_1_32,lyr_Camino2Sector4_33,],
                                fold: "open",
                                title: 'Sector_4'});
var group_Poligonos = new ol.layer.Group({
                                layers: [lyr_Sector1_8,lyr_Sector3_9,lyr_ZonaArboladaSector1_10,lyr_ZonaArbolada2Sector3_11,lyr_ZonaArbolada1Sector3_12,lyr_Sector2_13,lyr_ParcelaCasetaSector2_14,lyr_CasetaObra_15,lyr_Caseta_16,lyr_ReservadeAgua1_17,lyr_AguaReserva1_18,lyr_ReservadeAgua2_19,lyr_AguaReserva2_20,lyr_Camino6_21,lyr_Camino5_22,lyr_Camino4_23,lyr_Camino3_24,lyr_Camino2_25,lyr_Camino1_26,],
                                fold: "open",
                                title: 'Poligonos'});
var group_Subestacion = new ol.layer.Group({
                                layers: [lyr_ExteriorReservaAguaCentral_1,lyr_AguaReservaCentral_2,lyr_AbrevaderoReservaAguaCentral_3,lyr_Parking_4,lyr_Subestacion3_5,lyr_Subestacion2_6,lyr_Suebestacion_7,],
                                fold: "open",
                                title: 'Subestacion'});

lyr_GoogleSatellite_0.setVisible(false);lyr_ExteriorReservaAguaCentral_1.setVisible(true);lyr_AguaReservaCentral_2.setVisible(true);lyr_AbrevaderoReservaAguaCentral_3.setVisible(true);lyr_Parking_4.setVisible(true);lyr_Subestacion3_5.setVisible(true);lyr_Subestacion2_6.setVisible(true);lyr_Suebestacion_7.setVisible(true);lyr_Sector1_8.setVisible(true);lyr_Sector3_9.setVisible(true);lyr_ZonaArboladaSector1_10.setVisible(true);lyr_ZonaArbolada2Sector3_11.setVisible(true);lyr_ZonaArbolada1Sector3_12.setVisible(true);lyr_Sector2_13.setVisible(true);lyr_ParcelaCasetaSector2_14.setVisible(true);lyr_CasetaObra_15.setVisible(true);lyr_Caseta_16.setVisible(true);lyr_ReservadeAgua1_17.setVisible(true);lyr_AguaReserva1_18.setVisible(true);lyr_ReservadeAgua2_19.setVisible(true);lyr_AguaReserva2_20.setVisible(true);lyr_Camino6_21.setVisible(true);lyr_Camino5_22.setVisible(true);lyr_Camino4_23.setVisible(true);lyr_Camino3_24.setVisible(true);lyr_Camino2_25.setVisible(true);lyr_Camino1_26.setVisible(true);lyr_Sector_4_Parcela_1_27.setVisible(true);lyr_Sector_4_Parcela_2_28.setVisible(true);lyr_Sector_4_Parcela_3_29.setVisible(true);lyr_Camino1Sector4_30.setVisible(true);lyr_Camino3Sector4_31.setVisible(true);lyr_Arbol_1_32.setVisible(true);lyr_Camino2Sector4_33.setVisible(true);lyr_ZonaArboladaSector5_34.setVisible(true);lyr_Casa2Sector5Techo3_35.setVisible(true);lyr_Casa2Sector5Techo2_36.setVisible(true);lyr_Casa2Sector5Techo1_37.setVisible(true);lyr_Zona1Sector5_38.setVisible(true);lyr_Zona2Sector5_39.setVisible(true);lyr_Zona3Sector5_40.setVisible(true);lyr_CaminoSector5_41.setVisible(true);lyr_Camino3Sector5_42.setVisible(true);lyr_Camino2Sector5_43.setVisible(true);lyr_Arbol_44.setVisible(true);lyr_ParcelaCasa1Sector5_45.setVisible(true);lyr_PlantaBaseCasa1Sector5_46.setVisible(true);lyr_TorreCasa1Sector5_47.setVisible(true);lyr_EstabloCasa1Sector5_48.setVisible(true);lyr_rbol_14_49.setVisible(true);lyr_rbol_13_50.setVisible(true);lyr_rbol_12_51.setVisible(true);lyr_rbol_11_52.setVisible(true);lyr_rbol_10_53.setVisible(true);lyr_rbol_9_54.setVisible(true);lyr_rbol_8_55.setVisible(true);lyr_rbol_7_56.setVisible(true);lyr_rbol_6_57.setVisible(true);lyr_rbol_5_58.setVisible(true);lyr_rbol_4_59.setVisible(true);lyr_rbol_3_60.setVisible(true);lyr_rbol_2_61.setVisible(true);lyr_rbol_1_62.setVisible(true);lyr_LineaElectrica4_63.setVisible(true);lyr_LineaElctrica3_64.setVisible(true);lyr_LneaElctrica2_65.setVisible(true);lyr_LneaElctrica1_66.setVisible(true);lyr_PosteElctricoTipo2_67.setVisible(true);lyr_PosteElctricoTipo1_68.setVisible(true);lyr_TorreElctricaTipo1_69.setVisible(true);lyr_TorreElctricaTipo2_70.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Subestacion,group_Poligonos,group_Sector_4,group_Sector_5,group_CasaSector5,group_rboles_Zona1,group_Linea_electrica];
lyr_ExteriorReservaAguaCentral_1.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_AguaReservaCentral_2.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_AbrevaderoReservaAguaCentral_3.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Parking_4.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Subestacion3_5.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Subestacion2_6.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Suebestacion_7.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Sector1_8.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Sector3_9.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_ZonaArboladaSector1_10.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_ZonaArbolada2Sector3_11.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_ZonaArbolada1Sector3_12.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Sector2_13.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_ParcelaCasetaSector2_14.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_CasetaObra_15.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Caseta_16.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_ReservadeAgua1_17.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_AguaReserva1_18.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_ReservadeAgua2_19.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_AguaReserva2_20.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Camino6_21.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Camino5_22.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Camino4_23.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Camino3_24.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Camino2_25.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Camino1_26.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Sector_4_Parcela_1_27.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Sector_4_Parcela_2_28.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Sector_4_Parcela_3_29.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Camino1Sector4_30.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Camino3Sector4_31.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Arbol_1_32.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Camino2Sector4_33.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_ZonaArboladaSector5_34.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Casa2Sector5Techo3_35.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Casa2Sector5Techo2_36.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Casa2Sector5Techo1_37.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Zona1Sector5_38.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Zona2Sector5_39.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_Zona3Sector5_40.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_CaminoSector5_41.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Camino3Sector5_42.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Camino2Sector5_43.set('fieldAliases', {'area_m2': 'area_m2', 'Longitud': 'Longitud', });
lyr_Arbol_44.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_ParcelaCasa1Sector5_45.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_PlantaBaseCasa1Sector5_46.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_TorreCasa1Sector5_47.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_EstabloCasa1Sector5_48.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_rbol_14_49.set('fieldAliases', {'area_m2': 'area_m2', 'area_m2_2': 'area_m2_2', 'area_m2_3': 'area_m2_3', 'area_m2_4': 'area_m2_4', 'area_m2_5': 'area_m2_5', 'area_m2_6': 'area_m2_6', 'area_m2_7': 'area_m2_7', 'area_m2_8': 'area_m2_8', 'area_m2_9': 'area_m2_9', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_13_50.set('fieldAliases', {'area_m2': 'area_m2', 'area_m2_1': 'area_m2_1', 'area_m2_2': 'area_m2_2', 'area_m2_3': 'area_m2_3', 'area_m2_4': 'area_m2_4', 'area_m2_5': 'area_m2_5', 'area_m2_6': 'area_m2_6', 'area_m2_7': 'area_m2_7', 'area_m2_8': 'area_m2_8', 'area_m2_9': 'area_m2_9', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_12_51.set('fieldAliases', {'area_m2': 'area_m2', });
lyr_rbol_11_52.set('fieldAliases', {'area_m2': 'area_m2', 'area_m213': 'area_m213', });
lyr_rbol_10_53.set('fieldAliases', {'area_m2': 'area_m2', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_9_54.set('fieldAliases', {'area_m2': 'area_m2', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_8_55.set('fieldAliases', {'area_m2': 'area_m2', 'area_m2_9': 'area_m2_9', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_7_56.set('fieldAliases', {'area_m2': 'area_m2', 'area_m2_8': 'area_m2_8', 'area_m2_9': 'area_m2_9', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_6_57.set('fieldAliases', {'area_m2': 'area_m2', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_5_58.set('fieldAliases', {'area_m2': 'area_m2', 'area_m2_7': 'area_m2_7', 'area_m2_8': 'area_m2_8', 'area_m2_9': 'area_m2_9', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_4_59.set('fieldAliases', {'area_m2': 'area_m2', 'area_m2_6': 'area_m2_6', 'area_m2_7': 'area_m2_7', 'area_m2_8': 'area_m2_8', 'area_m2_9': 'area_m2_9', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_3_60.set('fieldAliases', {'area_m2': 'area_m2', 'area_m2_5': 'area_m2_5', 'area_m2_6': 'area_m2_6', 'area_m2_7': 'area_m2_7', 'area_m2_8': 'area_m2_8', 'area_m2_9': 'area_m2_9', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_2_61.set('fieldAliases', {'area_m2': 'area_m2', 'area_m2_4': 'area_m2_4', 'area_m2_5': 'area_m2_5', 'area_m2_6': 'area_m2_6', 'area_m2_7': 'area_m2_7', 'area_m2_8': 'area_m2_8', 'area_m2_9': 'area_m2_9', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_rbol_1_62.set('fieldAliases', {'area_m2': 'area_m2', 'area_m2_3': 'area_m2_3', 'area_m2_4': 'area_m2_4', 'area_m2_5': 'area_m2_5', 'area_m2_6': 'area_m2_6', 'area_m2_7': 'area_m2_7', 'area_m2_8': 'area_m2_8', 'area_m2_9': 'area_m2_9', 'area_m210': 'area_m210', 'area_m211': 'area_m211', 'area_m212': 'area_m212', 'area_m213': 'area_m213', });
lyr_LineaElectrica4_63.set('fieldAliases', {'Longitud': 'Longitud', });
lyr_LineaElctrica3_64.set('fieldAliases', {'Longitud': 'Longitud', });
lyr_LneaElctrica2_65.set('fieldAliases', {'Longitud': 'Longitud', });
lyr_LneaElctrica1_66.set('fieldAliases', {'Longitud': 'Longitud', });
lyr_PosteElctricoTipo2_67.set('fieldAliases', {'area_m2': 'area_m2', 'Altura': 'Altura', });
lyr_PosteElctricoTipo1_68.set('fieldAliases', {'area_m2': 'area_m2', 'Altura': 'Altura', });
lyr_TorreElctricaTipo1_69.set('fieldAliases', {'area_m2': 'area_m2', 'Altura': 'Altura', });
lyr_TorreElctricaTipo2_70.set('fieldAliases', {'area_m2': 'area_m2', 'Altura': 'Altura', });
lyr_ExteriorReservaAguaCentral_1.set('fieldImages', {'area_m2': '', });
lyr_AguaReservaCentral_2.set('fieldImages', {'area_m2': '', });
lyr_AbrevaderoReservaAguaCentral_3.set('fieldImages', {'area_m2': '', });
lyr_Parking_4.set('fieldImages', {'area_m2': '', });
lyr_Subestacion3_5.set('fieldImages', {'area_m2': '', });
lyr_Subestacion2_6.set('fieldImages', {'area_m2': '', });
lyr_Suebestacion_7.set('fieldImages', {'area_m2': '', });
lyr_Sector1_8.set('fieldImages', {'area_m2': '', });
lyr_Sector3_9.set('fieldImages', {'area_m2': '', });
lyr_ZonaArboladaSector1_10.set('fieldImages', {'area_m2': '', });
lyr_ZonaArbolada2Sector3_11.set('fieldImages', {'area_m2': '', });
lyr_ZonaArbolada1Sector3_12.set('fieldImages', {'area_m2': '', });
lyr_Sector2_13.set('fieldImages', {'area_m2': '', });
lyr_ParcelaCasetaSector2_14.set('fieldImages', {'area_m2': '', });
lyr_CasetaObra_15.set('fieldImages', {'area_m2': '', });
lyr_Caseta_16.set('fieldImages', {'area_m2': '', });
lyr_ReservadeAgua1_17.set('fieldImages', {'area_m2': '', });
lyr_AguaReserva1_18.set('fieldImages', {'area_m2': 'TextEdit', });
lyr_ReservadeAgua2_19.set('fieldImages', {'area_m2': '', });
lyr_AguaReserva2_20.set('fieldImages', {'area_m2': '', });
lyr_Camino6_21.set('fieldImages', {'area_m2': '', 'Longitud': '', });
lyr_Camino5_22.set('fieldImages', {'area_m2': '', 'Longitud': '', });
lyr_Camino4_23.set('fieldImages', {'area_m2': '', });
lyr_Camino3_24.set('fieldImages', {'area_m2': '', 'Longitud': '', });
lyr_Camino2_25.set('fieldImages', {'area_m2': '', 'Longitud': '', });
lyr_Camino1_26.set('fieldImages', {'area_m2': '', 'Longitud': 'TextEdit', });
lyr_Sector_4_Parcela_1_27.set('fieldImages', {'area_m2': '', });
lyr_Sector_4_Parcela_2_28.set('fieldImages', {'area_m2': '', });
lyr_Sector_4_Parcela_3_29.set('fieldImages', {'area_m2': '', });
lyr_Camino1Sector4_30.set('fieldImages', {'area_m2': '', 'Longitud': '', });
lyr_Camino3Sector4_31.set('fieldImages', {'area_m2': '', 'Longitud': '', });
lyr_Arbol_1_32.set('fieldImages', {'area_m2': '', });
lyr_Camino2Sector4_33.set('fieldImages', {'area_m2': '', 'Longitud': '', });
lyr_ZonaArboladaSector5_34.set('fieldImages', {'area_m2': 'TextEdit', });
lyr_Casa2Sector5Techo3_35.set('fieldImages', {'area_m2': '', });
lyr_Casa2Sector5Techo2_36.set('fieldImages', {'area_m2': '', });
lyr_Casa2Sector5Techo1_37.set('fieldImages', {'area_m2': '', });
lyr_Zona1Sector5_38.set('fieldImages', {'area_m2': '', });
lyr_Zona2Sector5_39.set('fieldImages', {'area_m2': '', });
lyr_Zona3Sector5_40.set('fieldImages', {'area_m2': '', });
lyr_CaminoSector5_41.set('fieldImages', {'area_m2': '', 'Longitud': '', });
lyr_Camino3Sector5_42.set('fieldImages', {'area_m2': '', 'Longitud': '', });
lyr_Camino2Sector5_43.set('fieldImages', {'area_m2': 'TextEdit', 'Longitud': '', });
lyr_Arbol_44.set('fieldImages', {'area_m2': '', });
lyr_ParcelaCasa1Sector5_45.set('fieldImages', {'area_m2': '', });
lyr_PlantaBaseCasa1Sector5_46.set('fieldImages', {'area_m2': '', });
lyr_TorreCasa1Sector5_47.set('fieldImages', {'area_m2': '', });
lyr_EstabloCasa1Sector5_48.set('fieldImages', {'area_m2': '', });
lyr_rbol_14_49.set('fieldImages', {'area_m2': '', 'area_m2_2': '', 'area_m2_3': '', 'area_m2_4': '', 'area_m2_5': '', 'area_m2_6': '', 'area_m2_7': '', 'area_m2_8': '', 'area_m2_9': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_13_50.set('fieldImages', {'area_m2': '', 'area_m2_1': '', 'area_m2_2': '', 'area_m2_3': '', 'area_m2_4': '', 'area_m2_5': '', 'area_m2_6': '', 'area_m2_7': '', 'area_m2_8': '', 'area_m2_9': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_12_51.set('fieldImages', {'area_m2': '', });
lyr_rbol_11_52.set('fieldImages', {'area_m2': '', 'area_m213': '', });
lyr_rbol_10_53.set('fieldImages', {'area_m2': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_9_54.set('fieldImages', {'area_m2': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_8_55.set('fieldImages', {'area_m2': '', 'area_m2_9': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_7_56.set('fieldImages', {'area_m2': '', 'area_m2_8': '', 'area_m2_9': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_6_57.set('fieldImages', {'area_m2': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_5_58.set('fieldImages', {'area_m2': '', 'area_m2_7': '', 'area_m2_8': '', 'area_m2_9': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_4_59.set('fieldImages', {'area_m2': '', 'area_m2_6': '', 'area_m2_7': '', 'area_m2_8': '', 'area_m2_9': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_3_60.set('fieldImages', {'area_m2': '', 'area_m2_5': '', 'area_m2_6': '', 'area_m2_7': '', 'area_m2_8': '', 'area_m2_9': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_2_61.set('fieldImages', {'area_m2': '', 'area_m2_4': '', 'area_m2_5': '', 'area_m2_6': '', 'area_m2_7': '', 'area_m2_8': '', 'area_m2_9': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_rbol_1_62.set('fieldImages', {'area_m2': '', 'area_m2_3': '', 'area_m2_4': '', 'area_m2_5': '', 'area_m2_6': '', 'area_m2_7': '', 'area_m2_8': '', 'area_m2_9': '', 'area_m210': '', 'area_m211': '', 'area_m212': '', 'area_m213': '', });
lyr_LineaElectrica4_63.set('fieldImages', {'Longitud': '', });
lyr_LineaElctrica3_64.set('fieldImages', {'Longitud': '', });
lyr_LneaElctrica2_65.set('fieldImages', {'Longitud': '', });
lyr_LneaElctrica1_66.set('fieldImages', {'Longitud': '', });
lyr_PosteElctricoTipo2_67.set('fieldImages', {'area_m2': '', 'Altura': '', });
lyr_PosteElctricoTipo1_68.set('fieldImages', {'area_m2': '', 'Altura': '', });
lyr_TorreElctricaTipo1_69.set('fieldImages', {'area_m2': '', 'Altura': '', });
lyr_TorreElctricaTipo2_70.set('fieldImages', {'area_m2': '', 'Altura': '', });
lyr_ExteriorReservaAguaCentral_1.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_AguaReservaCentral_2.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_AbrevaderoReservaAguaCentral_3.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Parking_4.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Subestacion3_5.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Subestacion2_6.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Suebestacion_7.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Sector1_8.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Sector3_9.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_ZonaArboladaSector1_10.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_ZonaArbolada2Sector3_11.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_ZonaArbolada1Sector3_12.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Sector2_13.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_ParcelaCasetaSector2_14.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_CasetaObra_15.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Caseta_16.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_ReservadeAgua1_17.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_AguaReserva1_18.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_ReservadeAgua2_19.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_AguaReserva2_20.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Camino6_21.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Camino5_22.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Camino4_23.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Camino3_24.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Camino2_25.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Camino1_26.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Sector_4_Parcela_1_27.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Sector_4_Parcela_2_28.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Sector_4_Parcela_3_29.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Camino1Sector4_30.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Camino3Sector4_31.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Arbol_1_32.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Camino2Sector4_33.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_ZonaArboladaSector5_34.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Casa2Sector5Techo3_35.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Casa2Sector5Techo2_36.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Casa2Sector5Techo1_37.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Zona1Sector5_38.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Zona2Sector5_39.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_Zona3Sector5_40.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_CaminoSector5_41.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Camino3Sector5_42.set('fieldLabels', {'area_m2': 'no label', 'Longitud': 'no label', });
lyr_Camino2Sector5_43.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_Arbol_44.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_ParcelaCasa1Sector5_45.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_PlantaBaseCasa1Sector5_46.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_TorreCasa1Sector5_47.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_EstabloCasa1Sector5_48.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_rbol_14_49.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m2_2': 'no label', 'area_m2_3': 'no label', 'area_m2_4': 'no label', 'area_m2_5': 'no label', 'area_m2_6': 'no label', 'area_m2_7': 'no label', 'area_m2_8': 'no label', 'area_m2_9': 'no label', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_rbol_13_50.set('fieldLabels', {'area_m2': 'no label', 'area_m2_1': 'no label', 'area_m2_2': 'no label', 'area_m2_3': 'no label', 'area_m2_4': 'no label', 'area_m2_5': 'no label', 'area_m2_6': 'no label', 'area_m2_7': 'no label', 'area_m2_8': 'no label', 'area_m2_9': 'no label', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'inline label - visible with data', });
lyr_rbol_12_51.set('fieldLabels', {'area_m2': 'inline label - visible with data', });
lyr_rbol_11_52.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m213': 'no label', });
lyr_rbol_10_53.set('fieldLabels', {'area_m2': 'no label', 'area_m212': 'inline label - visible with data', 'area_m213': 'no label', });
lyr_rbol_9_54.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_rbol_8_55.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m2_9': 'no label', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_rbol_7_56.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m2_8': 'no label', 'area_m2_9': 'no label', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_rbol_6_57.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_rbol_5_58.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m2_7': 'no label', 'area_m2_8': 'no label', 'area_m2_9': 'no label', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_rbol_4_59.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m2_6': 'no label', 'area_m2_7': 'no label', 'area_m2_8': 'no label', 'area_m2_9': 'no label', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_rbol_3_60.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m2_5': 'no label', 'area_m2_6': 'no label', 'area_m2_7': 'no label', 'area_m2_8': 'no label', 'area_m2_9': 'no label', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_rbol_2_61.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m2_4': 'no label', 'area_m2_5': 'no label', 'area_m2_6': 'no label', 'area_m2_7': 'no label', 'area_m2_8': 'no label', 'area_m2_9': 'no label', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_rbol_1_62.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'area_m2_3': 'no label', 'area_m2_4': 'no label', 'area_m2_5': 'no label', 'area_m2_6': 'no label', 'area_m2_7': 'no label', 'area_m2_8': 'no label', 'area_m2_9': 'no label', 'area_m210': 'no label', 'area_m211': 'no label', 'area_m212': 'no label', 'area_m213': 'no label', });
lyr_LineaElectrica4_63.set('fieldLabels', {'Longitud': 'inline label - visible with data', });
lyr_LineaElctrica3_64.set('fieldLabels', {'Longitud': 'inline label - visible with data', });
lyr_LneaElctrica2_65.set('fieldLabels', {'Longitud': 'inline label - visible with data', });
lyr_LneaElctrica1_66.set('fieldLabels', {'Longitud': 'inline label - visible with data', });
lyr_PosteElctricoTipo2_67.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_PosteElctricoTipo1_68.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_TorreElctricaTipo1_69.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_TorreElctricaTipo2_70.set('fieldLabels', {'area_m2': 'inline label - visible with data', 'Altura': 'inline label - visible with data', });
lyr_TorreElctricaTipo2_70.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});