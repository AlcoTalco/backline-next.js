// /lib/catalogData.ts

// --- INTERFACES (La estructura de nuestra base de datos) ---

export interface BaseProduct {
  type: 'BaseProduct';
  id: string;
  name: string;
  brand?: string;
  category: string;
  subCategory: string;
  description?: string;
  image: string;
  relatedProductIds?: string[];
}

export interface ProductKit {
  type: 'ProductKit';
  id: string;
  name: string;
  brand?: string;
  category: string;
  subCategory: string;
  description: string;
  image: string;
  components: Array<{
    productId: string;
    isDefault: boolean;
    isOptional: boolean;
  }>;
  configurableOptions?: Array<{
    label: string;
    optionIds: string[];
  }>;
}

export type CatalogItem = BaseProduct | ProductKit;

// ======================================================================
// == LA NUEVA ARQUITECTURA DE CATEGORÍAS (EL CEREBRO DEL LAYOUT)      ==
// ======================================================================

export const categories = [
  { 
    id: 'drums', 
    name: 'Baterías',
    layout: 'tabs', // Usará la vista de pestañas.
    tabConfig: {
      primaryTabs: ['Baterías Completas', 'Platillos'],
      secondaryActionLabel: '¿Buscas algo específico? Ver Componentes individuales'
    }
  },
  { 
    id: 'keys', 
    name: 'Teclados y Pianos',
    layout: 'tabs', // Usará la vista de pestañas.
    tabConfig: {
      primaryTabs: ['Pianos de Escenario', 'Sintetizadores / Workstations'],
      secondaryActionLabel: 'Ver Soportes de Teclado'
    }
  },
  { 
    id: 'percussion', 
    name: 'Percusión',
    layout: 'grouped' // Usará la vista agrupada por subcategoría.
  },
  { 
    id: 'amps', 
    name: 'Amplificadores y Cabinas',
    layout: 'tabs', // Usará la vista de pestañas.
    tabConfig: {
      // El orden aquí define el orden de las pestañas en la página.
      primaryTabs: ['Amplificadores de Bajo', 'Amplificadores de Guitarra'],
      secondaryActionLabel: 'Ver Componentes y Stacks'
    }
  },
  { 
    id: 'stands', 
    name: 'Soportes y Accesorios',
    layout: 'grouped' // Usará la vista agrupada por subcategoría.
  },
];


// --- EL CATÁLOGO COMPLETO ---
// (Este es tu inventario completo, que se mantiene igual)

export const catalog: CatalogItem[] = [
  //======================================================================
  //== Soportes y Accesorios (Base para relaciones)
  //======================================================================

  // --- Soportes de Teclado ---
  { type: 'BaseProduct', id: 'stand_hercules_ks210b', name: 'Stand Hércules KS210B Doble', brand: 'Hércules', category: 'stands', subCategory: 'Soportes de Teclado', image: '/images/catalogo/stands/hercules-ks210b.jpg' },
  { type: 'BaseProduct', id: 'stand_hercules_ks120b', name: 'Stand Hércules KS120B Sencillo', brand: 'Hércules', category: 'stands', subCategory: 'Soportes de Teclado', image: '/images/catalogo/stands/hercules-ks120b.jpg' },
  { type: 'BaseProduct', id: 'stand_quiklok_t22', name: 'Stand Quiklok T22 Doble X', brand: 'Quiklok', category: 'stands', subCategory: 'Soportes de Teclado', image: '/images/catalogo/stands/quiklok-t22.jpg' },

  // --- Soportes de Guitarra ---
  { type: 'BaseProduct', id: 'stand_hercules_415bplus', name: 'Stand de Guitarra Hércules 415B Plus', brand: 'Hércules', category: 'stands', subCategory: 'Soportes de Instrumento', image: '/images/catalogo/stands/hercules-415bplus.jpg' },

  // --- Sillas ---
  { type: 'BaseProduct', id: 'silla_bateria_gibraltar_6608', name: 'Silla de Batería Gibraltar 6608', brand: 'Gibraltar', category: 'stands', subCategory: 'Sillas', image: '/images/catalogo/stands/gibraltar-6608.jpg' },
  { type: 'BaseProduct', id: 'silla_bateria_gibraltar_9608', name: 'Silla de Batería Gibraltar 9608', brand: 'Gibraltar', category: 'stands', subCategory: 'Sillas', image: '/images/catalogo/stands/gibraltar-9608.jpg' },
  { type: 'BaseProduct', id: 'silla_hidraulica_blanca', name: 'Silla Hidráulica Tipo Bar (Blanca)', brand: 'Genérico', category: 'stands', subCategory: 'Sillas', image: '/images/catalogo/stands/silla-blanca.jpg' },
  { type: 'BaseProduct', id: 'silla_hidraulica_negra', name: 'Silla Hidráulica Tipo Bar (Negra)', brand: 'Genérico', category: 'stands', subCategory: 'Sillas', image: '/images/catalogo/stands/silla-negra.jpg' },
  
  // --- Herrajes y Pedales ---
  { type: 'BaseProduct', id: 'pedal_dw_5000_sencillo', name: 'Pedal de Bombo DW 5000 Sencillo', brand: 'DW', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/pedal-dw5000.jpg' },
  { type: 'BaseProduct', id: 'pedal_dw_5000_doble', name: 'Pedal de Bombo DW 5000 Doble', brand: 'DW', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/pedal-dw5000-doble.jpg' },
  { type: 'BaseProduct', id: 'pedal_yamaha_sencillo', name: 'Pedal de Bombo Yamaha Sencillo', brand: 'Yamaha', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/pedal-yamaha.jpg' },
  { type: 'BaseProduct', id: 'stand_hihat_dw5000', name: 'Stand de Hi-Hat DW 5000', brand: 'DW', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/hihat-dw5000.jpg' },
  { type: 'BaseProduct', id: 'stand_hihat_yamaha', name: 'Stand de Hi-Hat Yamaha', brand: 'Yamaha', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/hihat-yamaha.jpg' },
  { type: 'BaseProduct', id: 'stand_redoblante_gibraltar_5706ex', name: 'Stand de Redoblante Gibraltar 5706EX (Alto)', brand: 'Gibraltar', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/stand-redoblante.jpg' },
  { type: 'BaseProduct', id: 'stand_redoblante_gibraltar_5706', name: 'Stand de Redoblante Gibraltar 5706 (Bajo)', brand: 'Gibraltar', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/stand-redoblante.jpg' },
  { type: 'BaseProduct', id: 'stand_redoblante_yamaha_ss950', name: 'Stand de Redoblante Yamaha SS950 (Bajo)', brand: 'Yamaha', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/stand-redoblante.jpg' },
  { type: 'BaseProduct', id: 'stand_platillo_gibraltar_5709', name: 'Stand de Platillo Gibraltar 5709', brand: 'Gibraltar', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/stand-platillo.jpg' },
  { type: 'BaseProduct', id: 'stand_platillo_yamaha_cs665a', name: 'Stand de Platillo Yamaha CS665A', brand: 'Yamaha', category: 'stands', subCategory: 'Herrajes y Pedales', image: '/images/catalogo/drums/stand-platillo.jpg' },

  // --- Accesorios de Escenario ---
  { type: 'BaseProduct', id: 'plexiglass_bateria', name: 'Panel Acrílico para Batería (Plexiglass)', description: 'Cobertura de 180 grados, 6 paneles con conectores.', brand: 'Genérico', category: 'stands', subCategory: 'Accesorios de Escenario', image: '/images/catalogo/stands/plexiglass.jpg' },
  { type: 'BaseProduct', id: 'tapete_bateria', name: 'Tapete para Batería 2x2m', brand: 'Genérico', category: 'stands', subCategory: 'Accesorios de Escenario', image: '/images/catalogo/stands/tapete.jpg' },
  { type: 'BaseProduct', id: 'stand_tablet_ipad_hamilton', name: 'Stand de Tablet/iPad Hamilton KB-130E', brand: 'Hamilton', category: 'stands', subCategory: 'Accesorios de Escenario', image: '/images/catalogo/stands/stand-tablet.jpg' },
  { type: 'BaseProduct', id: 'atril_partitura_quiklok', name: 'Atril de Partitura Quiklok MS330W con Luz', brand: 'Quiklok', category: 'stands', subCategory: 'Accesorios de Escenario', image: '/images/catalogo/stands/atril-partitura.jpg' },


  //======================================================================
  //== Amplificadores y Cabinas
  //======================================================================
  
  // --- Amplificadores de Guitarra ---
  { type: 'BaseProduct', id: 'amp_vox_ac30', name: 'VOX AC30 Combo 2x12', brand: 'VOX', category: 'amps', subCategory: 'Amplificadores de Guitarra', image: '/images/catalogo/amps/vox-ac30.jpg', relatedProductIds: ['stand_hercules_415bplus'] },
  { type: 'BaseProduct', id: 'amp_fender_hotrod', name: 'Fender Hot Rod DeVille', brand: 'Fender', category: 'amps', subCategory: 'Amplificadores de Guitarra', image: '/images/catalogo/amps/fender-hotrod.jpg', relatedProductIds: ['stand_hercules_415bplus'] },
  { type: 'BaseProduct', id: 'amp_orange', name: 'Amplificador Orange (Modelo específico pendiente)', brand: 'Orange', category: 'amps', subCategory: 'Amplificadores de Guitarra', image: '/images/catalogo/amps/orange.jpg', relatedProductIds: ['stand_hercules_415bplus'] },
  {
    type: 'ProductKit',
    id: 'kit_marshall_mg100fx',
    name: 'Stack Marshall MG100FX',
    brand: 'Marshall',
    category: 'amps',
    subCategory: 'Stacks Completos',
    description: 'Stack completo con cabezal MG100FX y cabina 4x12 a juego.',
    image: '/images/catalogo/amps/marshall-stack.jpg',
    components: [
      { productId: 'amp_marshall_mg100fx_head', isDefault: true, isOptional: false },
      { productId: 'cab_marshall_4x12', isDefault: true, isOptional: false }
    ],
    configurableOptions: [{ label: 'Añadir Stand de Guitarra', optionIds: ['stand_hercules_415bplus'] }]
  },
  { type: 'BaseProduct', id: 'amp_marshall_mg100fx_head', name: 'Cabezal Marshall MG100FX', brand: 'Marshall', category: 'amps', subCategory: 'Componentes de Amplificador', image: '/images/catalogo/amps/marshall-head.jpg', relatedProductIds: ['cab_marshall_4x12'] },
  { type: 'BaseProduct', id: 'cab_marshall_4x12', name: 'Cabina Marshall 4x12', brand: 'Marshall', category: 'amps', subCategory: 'Componentes de Amplificador', image: '/images/catalogo/amps/marshall-cab.jpg', relatedProductIds: ['amp_marshall_mg100fx_head'] },

  // --- Amplificadores de Bajo ---
  { type: 'BaseProduct', id: 'amp_ampeg_svt7pro', name: 'Cabezal Ampeg SVT-7 Pro', brand: 'Ampeg', category: 'amps', subCategory: 'Amplificadores de Bajo', image: '/images/catalogo/amps/ampeg-svt7.jpg', relatedProductIds: ['cab_ampeg_4x10', 'cab_ampeg_8x10'] },
  { type: 'BaseProduct', id: 'cab_ampeg_4x10', name: 'Cabina Ampeg 4x10', brand: 'Ampeg', category: 'amps', subCategory: 'Cabinas de Bajo', image: '/images/catalogo/amps/ampeg-cab-410.jpg' },
  { type: 'BaseProduct', id: 'amp_ampeg_svt4pro', name: 'Cabezal Ampeg SVT-4 Pro', brand: 'Ampeg', category: 'amps', subCategory: 'Amplificadores de Bajo', image: '/images/catalogo/amps/ampeg-svt4.jpg', relatedProductIds: ['cab_ampeg_4x10', 'cab_ampeg_8x10'] },
  { type: 'BaseProduct', id: 'cab_ampeg_8x10', name: 'Cabina Ampeg 8x10 "The Fridge"', brand: 'Ampeg', category: 'amps', subCategory: 'Cabinas de Bajo', image: '/images/catalogo/amps/ampeg-cab-810.jpg' },
  { type: 'BaseProduct', id: 'amp_hartke_1000', name: 'Cabezal Hartke (1000W)', brand: 'Hartke', category: 'amps', subCategory: 'Amplificadores de Bajo', image: '/images/catalogo/amps/hartke.jpg', relatedProductIds: ['cab_hartke_4x10'] },
  { type: 'BaseProduct', id: 'amp_hartke_500', name: 'Cabezal Hartke (500W)', brand: 'Hartke', category: 'amps', subCategory: 'Amplificadores de Bajo', image: '/images/catalogo/amps/hartke.jpg', relatedProductIds: ['cab_hartke_4x10'] },
  { type: 'BaseProduct', id: 'cab_hartke_4x10', name: 'Cabina Hartke 4x10', brand: 'Hartke', category: 'amps', subCategory: 'Cabinas de Bajo', image: '/images/catalogo/amps/hartke-cab-410.jpg' },
  { type: 'BaseProduct', id: 'amp_buguera', name: 'Amplificador Buguera (Modelo específico pendiente)', brand: 'Buguera', category: 'amps', subCategory: 'Amplificadores de Bajo', image: '/images/catalogo/amps/buguera.jpg', relatedProductIds: ['cab_buguera_4x10'] },
  { type: 'BaseProduct', id: 'cab_buguera_4x10', name: 'Cabina Buguera 4x10', brand: 'Buguera', category: 'amps', subCategory: 'Cabinas de Bajo', image: '/images/catalogo/amps/buguera-cab-410.jpg' },
  { type: 'BaseProduct', id: 'bass_baby_blady', name: 'Baby Bass Blady', brand: 'Blady', category: 'amps', subCategory: 'Instrumentos de Bajo', image: '/images/catalogo/amps/baby-bass.jpg' },


  //======================================================================
  //== Teclados y Pianos
  //======================================================================
  { type: 'BaseProduct', id: 'keys_nord_stage4', name: 'Nord Stage 4', brand: 'Nord', category: 'keys', subCategory: 'Pianos de Escenario', image: '/images/catalogo/keys/nord-stage4.jpg', relatedProductIds: ['stand_hercules_ks210b', 'silla_hidraulica_negra'] },
  { type: 'BaseProduct', id: 'keys_nord_compact76', name: 'Nord Stage Compact 76', brand: 'Nord', category: 'keys', subCategory: 'Pianos de Escenario', image: '/images/catalogo/keys/nord-compact76.jpg', relatedProductIds: ['stand_hercules_ks120b', 'silla_hidraulica_negra'] },
  { type: 'BaseProduct', id: 'keys_yamaha_montage8', name: 'Yamaha Montage 8', brand: 'Yamaha', category: 'keys', subCategory: 'Sintetizadores / Workstations', image: '/images/catalogo/keys/yamaha-montage8.jpg', relatedProductIds: ['stand_hercules_ks210b', 'silla_hidraulica_negra'] },
  { type: 'BaseProduct', id: 'keys_yamaha_motif_xf8', name: 'Yamaha Motif XF8', brand: 'Yamaha', category: 'keys', subCategory: 'Sintetizadores / Workstations', image: '/images/catalogo/keys/yamaha-motif-xf8.jpg', relatedProductIds: ['stand_hercules_ks210b', 'silla_hidraulica_negra'] },
  { type: 'BaseProduct', id: 'keys_yamaha_motif_xs7', name: 'Yamaha Motif XS7', brand: 'Yamaha', category: 'keys', subCategory: 'Sintetizadores / Workstations', image: '/images/catalogo/keys/yamaha-motif-xs7.jpg', relatedProductIds: ['stand_hercules_ks120b', 'silla_hidraulica_negra'] },
  { type: 'BaseProduct', id: 'keys_yamaha_motif_xf6', name: 'Yamaha Motif XF6', brand: 'Yamaha', category: 'keys', subCategory: 'Sintetizadores / Workstations', image: '/images/catalogo/keys/yamaha-motif-xf6.jpg', relatedProductIds: ['stand_hercules_ks120b', 'silla_hidraulica_negra'] },
  { type: 'BaseProduct', id: 'keys_yamaha_modx8plus', name: 'Yamaha MODX 8+', brand: 'Yamaha', category: 'keys', subCategory: 'Sintetizadores / Workstations', image: '/images/catalogo/keys/yamaha-modx8.jpg', relatedProductIds: ['stand_hercules_ks210b', 'silla_hidraulica_negra'] },
  { type: 'BaseProduct', id: 'keys_maudio_synth', name: 'Sintetizador M-Audio (Modelo específico pendiente)', brand: 'M-Audio', category: 'keys', subCategory: 'Sintetizadores / Workstations', image: '/images/catalogo/keys/maudio.jpg', relatedProductIds: ['stand_hercules_ks120b'] },


  //======================================================================
  //== Baterías (Componentes individuales primero)
  //======================================================================
  
  // --- Redoblantes ---
  { type: 'BaseProduct', id: 'snare_yamaha_sc_14', name: 'Redoblante Yamaha Stage Custom 14"x5.5"', brand: 'Yamaha', category: 'drums', subCategory: 'Redoblantes', image: '/images/catalogo/drums/snare-yamaha.jpg', relatedProductIds: ['stand_redoblante_yamaha_ss950'] },
  { type: 'BaseProduct', id: 'snare_dw_14', name: 'Redoblante DW Collector 14"x5.5"', brand: 'DW', category: 'drums', subCategory: 'Redoblantes', image: '/images/catalogo/drums/snare-dw.jpg', relatedProductIds: ['stand_redoblante_gibraltar_5706'] },
  { type: 'BaseProduct', id: 'snare_mapex_14', name: 'Redoblante Mapex 14"x5.5"', brand: 'Mapex', category: 'drums', subCategory: 'Redoblantes', image: '/images/catalogo/drums/snare-mapex.jpg', relatedProductIds: ['stand_redoblante_gibraltar_5706'] },
  { type: 'BaseProduct', id: 'snare_piccolo_13', name: 'Redoblante Piccolo 13"x3.5"', brand: 'Genérico', category: 'drums', subCategory: 'Redoblantes', image: '/images/catalogo/drums/snare-piccolo.jpg', relatedProductIds: ['stand_redoblante_gibraltar_5706ex'] },

  // --- Platillos ---
  {
    type: 'ProductKit',
    id: 'cymbals_zildjian_acustom_set',
    name: 'Set de Platillos Zildjian A Custom',
    brand: 'Zildjian',
    category: 'drums',
    subCategory: 'Platillos',
    description: 'Set profesional y brillante. Incluye 14" Hi-Hat, 16" Crash, 18" Crash, 21" Ride, y opcionales.',
    image: '/images/catalogo/drums/zildjian-set.jpg',
    components: [
      { productId: 'cymbal_zildjian_ac_14hh', isDefault: true, isOptional: false },
      { productId: 'cymbal_zildjian_ac_16cr', isDefault: true, isOptional: true },
      { productId: 'cymbal_zildjian_ac_18cr', isDefault: true, isOptional: true },
      { productId: 'cymbal_zildjian_ac_21rd', isDefault: true, isOptional: true }
    ],
    configurableOptions: [
      { label: 'Añadir platillos de efectos', optionIds: ['cymbal_zildjian_ac_10sp', 'cymbal_zildjian_ac_18ch'] }
    ]
  },
  { type: 'BaseProduct', id: 'cymbal_zildjian_ac_14hh', name: 'Hi-Hats Zildjian A Custom 14"', brand: 'Zildjian', category: 'drums', subCategory: 'Platillos Individuales', image: '/images/catalogo/drums/zildjian-hihat.jpg', relatedProductIds: ['stand_hihat_dw5000'] },
  { type: 'BaseProduct', id: 'cymbal_zildjian_ac_16cr', name: 'Crash Zildjian A Custom 16"', brand: 'Zildjian', category: 'drums', subCategory: 'Platillos Individuales', image: '/images/catalogo/drums/zildjian-crash.jpg', relatedProductIds: ['stand_platillo_gibraltar_5709'] },
  { type: 'BaseProduct', id: 'cymbal_zildjian_ac_18cr', name: 'Crash Zildjian A Custom 18"', brand: 'Zildjian', category: 'drums', subCategory: 'Platillos Individuales', image: '/images/catalogo/drums/zildjian-crash.jpg', relatedProductIds: ['stand_platillo_gibraltar_5709'] },
  { type: 'BaseProduct', id: 'cymbal_zildjian_ac_21rd', name: 'Ride Zildjian A Custom 21"', brand: 'Zildjian', category: 'drums', subCategory: 'Platillos Individuales', image: '/images/catalogo/drums/zildjian-ride.jpg', relatedProductIds: ['stand_platillo_gibraltar_5709'] },
  { type: 'BaseProduct', id: 'cymbal_zildjian_ac_10sp', name: 'Splash Zildjian A Custom 10"', brand: 'Zildjian', category: 'drums', subCategory: 'Platillos Individuales', image: '/images/catalogo/drums/zildjian-splash.jpg' },
  { type: 'BaseProduct', id: 'cymbal_zildjian_ac_18ch', name: 'China Zildjian A Custom 18"', brand: 'Zildjian', category: 'drums', subCategory: 'Platillos Individuales', image: '/images/catalogo/drums/zildjian-china.jpg' },
  
  // --- Componentes de Batería ---
  { type: 'BaseProduct', id: 'drum_yamaha_sc_kick22', name: 'Bombo Yamaha Stage Custom 22"', brand: 'Yamaha', category: 'drums', subCategory: 'Componentes de Batería', image: '/images/catalogo/drums/yamaha-kick.jpg', relatedProductIds: ['pedal_yamaha_sencillo'] },
  { type: 'BaseProduct', id: 'drum_yamaha_sc_tom10', name: 'Tom Yamaha Stage Custom 10"', brand: 'Yamaha', category: 'drums', subCategory: 'Componentes de Batería', image: '/images/catalogo/drums/yamaha-tom.jpg' },
  { type: 'BaseProduct', id: 'drum_yamaha_sc_tom12', name: 'Tom Yamaha Stage Custom 12"', brand: 'Yamaha', category: 'drums', subCategory: 'Componentes de Batería', image: '/images/catalogo/drums/yamaha-tom.jpg' },
  { type: 'BaseProduct', id: 'drum_yamaha_sc_floor14', name: 'Tom de Piso Yamaha Stage Custom 14"', brand: 'Yamaha', category: 'drums', subCategory: 'Componentes de Batería', image: '/images/catalogo/drums/yamaha-floor.jpg' },
  { type: 'BaseProduct', id: 'drum_yamaha_sc_floor16', name: 'Tom de Piso Yamaha Stage Custom 16"', brand: 'Yamaha', category: 'drums', subCategory: 'Componentes de Batería', image: '/images/catalogo/drums/yamaha-floor.jpg' },
  { type: 'BaseProduct', id: 'drum_dw_kick22', name: 'Bombo DW Collector 22"', brand: 'DW', category: 'drums', subCategory: 'Componentes de Batería', image: '/images/catalogo/drums/dw-kick.jpg', relatedProductIds: ['pedal_dw_5000_sencillo', 'pedal_dw_5000_doble'] },
  { type: 'BaseProduct', id: 'drum_dw_tom10', name: 'Tom DW Collector 10"', brand: 'DW', category: 'drums', subCategory: 'Componentes de Batería', image: '/images/catalogo/drums/dw-tom.jpg' },
  { type: 'BaseProduct', id: 'drum_dw_tom12', name: 'Tom DW Collector 12"', brand: 'DW', category: 'drums', subCategory: 'Componentes de Batería', image: '/images/catalogo/drums/dw-tom.jpg' },
  { type: 'BaseProduct', id: 'drum_dw_floor16', name: 'Tom de Piso DW Collector 16"', brand: 'DW', category: 'drums', subCategory: 'Componentes de Batería', image: '/images/catalogo/drums/dw-floor.jpg' },
  
  //======================================================================
  //== Baterías (Kits Completos)
  //======================================================================
  {
    type: 'ProductKit',
    id: 'drums_yamaha_sc_natural',
    name: 'Batería Yamaha Stage Custom (Natural)',
    brand: 'Yamaha',
    category: 'drums',
    subCategory: 'Baterías Completas',
    description: 'Kit estándar profesional. Incluye cascos y herrajes básicos. Configura platillos, pedal y silla a tu gusto.',
    image: '/images/catalogo/drums/yamaha-sc-natural.jpeg',
    components: [
      { productId: 'drum_yamaha_sc_kick22', isDefault: true, isOptional: false },
      { productId: 'drum_yamaha_sc_tom10', isDefault: true, isOptional: true },
      { productId: 'drum_yamaha_sc_tom12', isDefault: true, isOptional: true },
      { productId: 'drum_yamaha_sc_floor14', isDefault: true, isOptional: true },
      { productId: 'snare_yamaha_sc_14', isDefault: true, isOptional: true },
      { productId: 'stand_hihat_yamaha', isDefault: true, isOptional: true },
      { productId: 'stand_platillo_yamaha_cs665a', isDefault: true, isOptional: true },
      { productId: 'stand_redoblante_yamaha_ss950', isDefault: true, isOptional: true },
    ],
    configurableOptions: [
      { label: 'Añadir Set de Platillos', optionIds: ['cymbals_zildjian_acustom_set'] },
      { label: 'Elige tu Pedal de Bombo', optionIds: ['pedal_yamaha_sencillo', 'pedal_dw_5000_sencillo'] },
      { label: 'Elige tu Silla', optionIds: ['silla_bateria_gibraltar_6608', 'silla_bateria_gibraltar_9608'] }
    ]
  },
  {
    type: 'ProductKit',
    id: 'drums_yamaha_sc_cherry',
    name: 'Batería Yamaha Stage Custom (Cherry)',
    brand: 'Yamaha', category: 'drums',
    subCategory: 'Baterías Completas',
    description: 'Kit estándar profesional...', image: '/images/catalogo/drums/yamaha-sc-cherry.jpeg', 
    components: [
      { productId: 'drum_yamaha_sc_kick22', isDefault: true, isOptional: false },
      { productId: 'drum_yamaha_sc_tom10', isDefault: true, isOptional: true },
      { productId: 'drum_yamaha_sc_tom12', isDefault: true, isOptional: true },
      { productId: 'drum_yamaha_sc_floor14', isDefault: true, isOptional: true },
    ],
  },
  {
    type: 'ProductKit',
    id: 'drums_yamaha_sc_black',
    name: 'Batería Yamaha Stage Custom (Negra)',
    brand: 'Yamaha', category: 'drums',
    subCategory: 'Baterías Completas',
    description: 'Kit estándar profesional...', image: '/images/catalogo/drums/yamaha-sc-black.jpeg', 
    components: [
      { productId: 'drum_yamaha_sc_kick22', isDefault: true, isOptional: false },
      { productId: 'drum_yamaha_sc_tom10', isDefault: true, isOptional: true },
      { productId: 'drum_yamaha_sc_tom12', isDefault: true, isOptional: true },
      { productId: 'drum_yamaha_sc_floor16', isDefault: true, isOptional: true },
    ],
  },
  {
    type: 'ProductKit',
    id: 'drums_dw_collector',
    name: 'Batería DW Collector',
    brand: 'DW',
    category: 'drums',
    subCategory: 'Baterías Completas',
    description: 'Kit de alta gama para el sonido más exigente. Incluye cascos y herrajes DW...',
    image: '/images/catalogo/drums/dw-collector.jpeg',
    components: [
      { productId: 'drum_dw_kick22', isDefault: true, isOptional: false },
      { productId: 'drum_dw_tom10', isDefault: true, isOptional: true },
      { productId: 'drum_dw_tom12', isDefault: true, isOptional: true },
      { productId: 'drum_dw_floor16', isDefault: true, isOptional: true },
      { productId: 'snare_dw_14', isDefault: true, isOptional: true },
      { productId: 'stand_hihat_dw5000', isDefault: true, isOptional: true },
      { productId: 'stand_platillo_gibraltar_5709', isDefault: true, isOptional: true },
      { productId: 'stand_redoblante_gibraltar_5706', isDefault: true, isOptional: true },
    ],
    configurableOptions: [
      { label: 'Añadir Set de Platillos', optionIds: ['cymbals_zildjian_acustom_set'] },
      { label: 'Elige tu Pedal de Bombo', optionIds: ['pedal_dw_5000_sencillo', 'pedal_dw_5000_doble'] },
      { label: 'Elige tu Silla', optionIds: ['silla_bateria_gibraltar_9608'] }
    ]
  },


  //======================================================================
  //== Percusión
  //======================================================================

  // --- Timbales ---
  { type: 'BaseProduct', id: 'perc_timbales_lp_tp_silver', name: 'Timbales LP Tito Puente (Plateado)', brand: 'LP', category: 'percussion', subCategory: 'Timbales', image: '/images/catalogo/percussion/lp-timbal-silver.jpg' },
  { type: 'BaseProduct', id: 'perc_timbales_lp_tp_gold', name: 'Timbales LP Tito Puente (Dorado)', brand: 'LP', category: 'percussion', subCategory: 'Timbales', image: '/images/catalogo/percussion/lp-timbal-gold.jpg' },

  // --- Congas ---
  { type: 'BaseProduct', id: 'perc_congas_lp_hidalgo', name: 'Set de Congas LP Geovanni Hidalgo', brand: 'LP', category: 'percussion', subCategory: 'Congas', image: '/images/catalogo/percussion/lp-conga-hidalgo.jpg', relatedProductIds:['stand_congas_lp_individual', 'stand_congas_lp_doble'] },
  { type: 'BaseProduct', id: 'perc_congas_lp_classic', name: 'Set de Congas LP Classic', brand: 'LP', category: 'percussion', subCategory: 'Congas', image: '/images/catalogo/percussion/lp-conga-classic.jpg', relatedProductIds:['stand_congas_lp_individual', 'stand_congas_lp_doble'] },
  { type: 'BaseProduct', id: 'stand_congas_lp_individual', name: 'Stand de Congas LP Individual', brand: 'LP', category: 'stands', subCategory: 'Soportes de Percusión', image: '/images/catalogo/percussion/stand-conga-single.jpg' },
  { type: 'BaseProduct', id: 'stand_congas_lp_doble', name: 'Stand de Congas LP Doble', brand: 'LP', category: 'stands', subCategory: 'Soportes de Percusión', image: '/images/catalogo/percussion/stand-conga-double.jpg' },

  // --- Bongos ---
  { type: 'BaseProduct', id: 'perc_bongo_lp_hidalgo', name: 'Bongos LP Geovanni Hidalgo', brand: 'LP', category: 'percussion', subCategory: 'Bongos', image: '/images/catalogo/percussion/lp-bongo-hidalgo.jpg', relatedProductIds: ['stand_bongo_gibraltar'] },
  { type: 'BaseProduct', id: 'perc_bongo_lp_classic', name: 'Bongos LP Classic', brand: 'LP', category: 'percussion', subCategory: 'Bongos', image: '/images/catalogo/percussion/lp-bongo-classic.jpg', relatedProductIds: ['stand_bongo_gibraltar'] },
  { type: 'BaseProduct', id: 'stand_bongo_gibraltar', name: 'Stand para Bongos Gibraltar 7616', brand: 'Gibraltar', category: 'stands', subCategory: 'Soportes de Percusión', image: '/images/catalogo/percussion/stand-bongo.jpg' },

  // --- Djembes ---
  { type: 'BaseProduct', id: 'perc_djembe_lp_a632', name: 'Djembe LP A632-SW 12.5"', brand: 'LP', category: 'percussion', subCategory: 'Djembes', image: '/images/catalogo/percussion/lp-djembe.jpg', relatedProductIds: ['stand_djembe_gibraltar'] },
  { type: 'BaseProduct', id: 'perc_djembe_remo_dj0014', name: 'Djembe Remo DJ-0014-05 14"', brand: 'Remo', category: 'percussion', subCategory: 'Djembes', image: '/images/catalogo/percussion/remo-djembe.jpg', relatedProductIds: ['stand_djembe_gibraltar'] },
  { type: 'BaseProduct', id: 'stand_djembe_gibraltar', name: 'Stand para Djembe Gibraltar GPDS', brand: 'Gibraltar', category: 'stands', subCategory: 'Soportes de Percusión', image: '/images/catalogo/percussion/stand-djembe.jpg' },

  // --- Percusión Menor ---
  { type: 'BaseProduct', id: 'perc_shaker_lp_blue', name: 'Shaker LP (Azul)', brand: 'LP', category: 'percussion', subCategory: 'Percusión Menor', image: '/images/catalogo/percussion/shaker-blue.jpg' },
  { type: 'BaseProduct', id: 'perc_shaker_lp_red', name: 'Shaker LP (Rojo)', brand: 'LP', category: 'percussion', subCategory: 'Percusión Menor', image: '/images/catalogo/percussion/shaker-red.jpg' },
  { type: 'BaseProduct', id: 'perc_shaker_lp_yellow', name: 'Shaker LP (Amarillo)', brand: 'LP', category: 'percussion', subCategory: 'Percusión Menor', image: '/images/catalogo/percussion/shaker-yellow.jpg' },
  { type: 'BaseProduct', id: 'perc_shaker_lp_metal', name: 'Shaker LP Metálico', brand: 'LP', category: 'percussion', subCategory: 'Percusión Menor', image: '/images/catalogo/percussion/shaker-metal.jpg' },
  { type: 'BaseProduct', id: 'perc_campana_lp_es7', name: 'Campana de Timbal LP ES-7', brand: 'LP', category: 'percussion', subCategory: 'Percusión Menor', image: '/images/catalogo/percussion/campana.jpg' },
  { type: 'BaseProduct', id: 'perc_jamblock_lp_1207', name: 'Jam Block LP 1207 (Rojo)', brand: 'LP', category: 'percussion', subCategory: 'Percusión Menor', image: '/images/catalogo/percussion/jamblock.jpg' },
  { type: 'BaseProduct', id: 'perc_pandereta_lp_179', name: 'Pandereta LP 179 Cyclops', brand: 'LP', category: 'percussion', subCategory: 'Percusión Menor', image: '/images/catalogo/percussion/pandereta.jpg' },
  { type: 'BaseProduct', id: 'perc_cajon_lp_1442', name: 'Cajón Peruano LP 1442', brand: 'LP', category: 'percussion', subCategory: 'Percusión Menor', image: '/images/catalogo/percussion/cajon.jpg' },
  { type: 'BaseProduct', id: 'perc_celesta_lp_511c', name: 'Celesta LP 511C (36 Barras)', brand: 'LP', category: 'percussion', subCategory: 'Percusión Menor', image: '/images/catalogo/percussion/celesta.jpg' },
];
