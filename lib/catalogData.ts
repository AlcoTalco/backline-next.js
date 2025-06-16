export interface Product {
    id: string;
    name: string;
    category: string;
    description?: string;
    image: string; // Usaremos placeholders por ahora
  }
  
  export const categories = [
    { id: 'guitar_amps', name: 'Amplificadores de Guitarra', image: '/images/equipo1.jpeg' },
    { id: 'bass_amps', name: 'Amplificadores de Bajo', image: '/images/equipo1.png' },
    { id: 'drums', name: 'Baterías', image: '/images/equipo2.jpeg' },
    { id: 'keys', name: 'Pianos y Teclados', image: '/images/equipo3.jpeg' },
    { id: 'percussion', name: 'Percusión', image: '/images/percusion_placeholder.jpg' },
    { id: 'stands', name: 'Accesorios y Soportes', image: '/images/stand_placeholder.jpg' },
  ];
  
  export const catalog: Product[] = [
    // --- Amplificadores de Guitarra ---
    { id: 'amp_vox_ac30', name: 'VOX AC30 Combo 2x12', category: 'guitar_amps', image: '/images/equipo1.jpeg' },
    { id: 'amp_marshall_mg100', name: 'MARSHALL MG100 FX', category: 'guitar_amps', description: 'Cabina 4x12', image: '/images/equipo1.jpeg' },
    { id: 'amp_fender_hotrod', name: 'Fender Hot Rod Deville', category: 'guitar_amps', image: '/images/equipo1.jpeg' },
    { id: 'amp_orange', name: 'Amplificador Orange', category: 'guitar_amps', image: '/images/equipo1.jpeg' },
    
    // --- Pianos y Teclados ---
    { id: 'keys_nord_stage3', name: 'Nord Stage 3 Compact 76', category: 'keys', image: '/images/equipo3.jpeg' },
    { id: 'keys_nord_stage4', name: 'Nord Stage 4', category: 'keys', image: '/images/equipo3.jpeg' },
    { id: 'keys_yamaha_montage8', name: 'Yamaha Montage 8', category: 'keys', image: '/images/equipo3.jpeg' },
    { id: 'keys_yamaha_motif_xf8', name: 'Yamaha MOTIF XF8', category: 'keys', image: '/images/equipo3.jpeg' },
    { id: 'keys_yamaha_motif_xs7', name: 'Yamaha MOTIF XS7', category: 'keys', image: '/images/equipo3.jpeg' },
    { id: 'keys_yamaha_motif_xf6', name: 'Yamaha MOTIF XF6', category: 'keys', image: '/images/equipo3.jpeg' },
    { id: 'keys_yamaha_modx8', name: 'Yamaha MODX 8+', category: 'keys', image: '/images/equipo3.jpeg' },
    { id: 'keys_maudio_synth', name: 'Sintetizador MAUDIO', category: 'keys', image: '/images/equipo3.jpeg' },
  
    // --- Amplificadores de Bajo ---
    { id: 'bass_baby_blady', name: 'Baby Bass Blady', category: 'bass_amps', image: '/images/equipo1.png' },
    { id: 'amp_ampeg_stv7', name: 'Ampeg SVT-7 Pro', category: 'bass_amps', image: '/images/equipo1.png' },
    { id: 'cab_ampeg_4x10', name: 'Cabina Ampeg 4x10', category: 'bass_amps', image: '/images/equipo1.png' },
    { id: 'amp_ampeg_stv4', name: 'Ampeg SVT-4 Pro', category: 'bass_amps', image: '/images/equipo1.png' },
    { id: 'cab_ampeg_8x10', name: 'Cabina Ampeg 8x10', category: 'bass_amps', image: '/images/equipo1.png' },
    { id: 'amp_hartke_1000', name: 'Amplificador Hartke 1000', category: 'bass_amps', image: '/images/equipo1.png' },
    { id: 'amp_hartke_500', name: 'Amplificador Hartke 500', category: 'bass_amps', image: '/images/equipo1.png' },
    { id: 'cab_hartke_4x10', name: 'Cabina Hartke 4x10', category: 'bass_amps', image: '/images/equipo1.png' },
    { id: 'amp_buguera', name: 'Amplificador Buguera', category: 'bass_amps', image: '/images/equipo1.png' },
    { id: 'cab_buguera_4x10', name: 'Cabina Buguera 4x10', category: 'bass_amps', image: '/images/equipo1.png' },
  
    // --- Baterías ---
    { id: 'drums_yamaha_sc_nat', name: 'Batería Yamaha Stage Custom', category: 'drums', description: 'Color Natural. Bombo 22”, Toms 10”, 12”, Piso 16”', image: '/images/equipo2.jpeg' },
    { id: 'drums_yamaha_sc_blk', name: 'Batería Yamaha Stage Custom', category: 'drums', description: 'Color Negro. Bombo 22”, Toms 10”, 12”, Piso 16”', image: '/images/equipo2.jpeg' },
    { id: 'drums_yamaha_sc_red', name: 'Batería Yamaha Stage Custom', category: 'drums', description: 'Color Rojo. Bombo 22”, Toms 10”, 12”, Piso 16”', image: '/images/equipo2.jpeg' },
    { id: 'drums_dw_collectors', name: 'Batería DW Collectors', category: 'drums', description: 'Bombo 22”, Toms 10”, 12”, Piso 16”. Sillas hidráulicas (negras, blancas)', image: '/images/equipo2.jpeg' },
  
    // --- Percusión ---
    { id: 'perc_timbales_lp_tp', name: 'Timbales LP Tito Puente', category: 'percussion', description: 'Profesional Series 14-15. Colores plateado, dorado.', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_congas_lp_gh', name: 'Set Congas LP Geovanni Hidalgo', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_congas_lp_classic', name: 'Set Congas LP Classic', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_bongo_lp_gh', name: 'Bongo LP Geovanni Hidalgo', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_bongo_lp_classic', name: 'Bongo LP Classic', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_djembe_lp', name: 'Djembe LP', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_djembe_remo', name: 'Djembe Remo', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_cajon_lp', name: 'Cajón Peruano LP', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_campana_es7', name: 'Campana LP ES-7', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_campana_es6', name: 'Campana LP ES-6', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_campana_es2', name: 'Campana LP ES-2', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_jamblock_1207', name: 'Jam Block LP 1207', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_shaker_lp441t', name: 'Shaker LP 441T Azul', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_vibraslap_lp209', name: 'Vibraslap LP 209', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_celesta_lp511c', name: 'Celesta LP 511C 36 barras', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_triangulo_lp331c', name: 'Triángulo LP 331C', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_pandereta_lp179', name: 'Pandereta LP 179', category: 'percussion', image: '/images/percusion_placeholder.jpg' },
    { id: 'perc_redoblante_piccolo', name: 'Redoblante Piccolo 14" Profesional', category: 'drums', image: '/images/equipo2.jpeg' },
    { id: 'perc_redoblante_dw', name: 'Redoblante DW', category: 'drums', image: '/images/equipo2.jpeg' },
    { id: 'perc_redoblante_mapex', name: 'Redoblante Mapex', category: 'drums', image: '/images/equipo2.jpeg' },
    { id: 'perc_platillos_zildjian', name: 'Set Platillos Zildjian A Custom', category: 'drums', description: '14” hi-hat, 10” splash, 16” crash, 18” crash, 21” ride, 18” chine', image: '/images/equipo2.jpeg' },
    
    // --- Accesorios y Soportes ---
    { id: 'stand_pedal_dw5000', name: 'Pedal DW 5000 Doble Cadena', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_pedal_dw9000', name: 'Pedal DW 9000 Doble Cadena', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_hihat_dw5000', name: 'Stand Hi-Hat DW 5000', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_silla_gibraltar', name: 'Silla Gibraltar para Batería', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_platillo_gibraltar', name: 'Stand de Platillo Boom GIBRALTAR', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_redoblante_gibraltar', name: 'Base de Redoblante Gibraltar', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_mesa_percusion', name: 'Mesa de Percusión Gibraltar 7615', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_guitarra_hercules', name: 'Stand de Guitarra HÉRCULES 415BPLUS', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_piano_sencillo', name: 'Stand Sencillo para Piano HÉRCULES (Doble X)', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_piano_doble', name: 'Stand Doble para Piano Hércules', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_tablet_hercules', name: 'Stand de Tablet Hércules', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_ipad', name: 'Stand de iPad', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_partitura', name: 'Atril de Partituras con Luz', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_plexiglass', name: 'Plexiglass con Cobertura 180°', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_bongo_gibraltar', name: 'Stand Gibraltar para Bongos', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_djembe', name: 'Stand para Djembe', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_conga_sencillo', name: 'Stand Conga Individual LP 636', category: 'stands', image: '/images/stand_placeholder.jpg' },
    { id: 'stand_conga_doble', name: 'Stand Conga Doble LP 290B', category: 'stands', image: '/images/stand_placeholder.jpg' },
  ];