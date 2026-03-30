// Initialize Lucide icons

lucide.createIcons();

// Sparkles

const sc = document.getElementById('sparkles-container');

for (let i = 0; i < 20; i++) {

  const s = document.createElement('div');

  s.className = 'sparkle-star';

  s.innerHTML = '✦';

  s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;color:rgba(201,168,76,${0.15+Math.random()*0.25});font-size:${8+Math.random()*14}px;--dur:${2+Math.random()*4}s;--del:${Math.random()*5}s;`;

  sc.appendChild(s);

}

// Default configuration

const defaultConfig = {

  recipient_name: 'Rahma',

  sender_name: 'Peace Walker',

  main_message: 'Wishing you a year filled with success, growth, and countless achievements. Your dedication and professionalism inspire everyone around you. May this new chapter bring you all the happiness and fulfillment you truly deserve.',

  background_color: '#0f1729',

  surface_color: '#1a2744',

  text_color: '#e8dcc8',

  accent_color: '#c9a84c',

  secondary_color: '#6b8cae',

  font_family: 'Playfair Display',

  font_size: 16

};

// Apply configuration

function applyConfig(c) {

  document.getElementById('recipient-text').textContent = c.recipient_name || defaultConfig.recipient_name;

  document.getElementById('sender-text').textContent = c.sender_name || defaultConfig.sender_name;

  document.getElementById('message-text').textContent = c.main_message || defaultConfig.main_message;

  const root = document.documentElement;

  root.style.setProperty('--bg-color', c.background_color || defaultConfig.background_color);

  root.style.setProperty('--surface-color', c.surface_color || defaultConfig.surface_color);

  root.style.setProperty('--text-color', c.text_color || defaultConfig.text_color);

  root.style.setProperty('--accent-color', c.accent_color || defaultConfig.accent_color);

  root.style.setProperty('--secondary-color', c.secondary_color || defaultConfig.secondary_color);

  const font = c.font_family || defaultConfig.font_family;

  const base = c.font_size || defaultConfig.font_size;

  document.getElementById('title-text').style.fontFamily = `${font}, Playfair Display, serif`;

  document.getElementById('recipient-text').style.fontFamily = `${font}, Playfair Display, serif`;

  document.getElementById('sender-text').style.fontFamily = `${font}, Playfair Display, serif`;

  document.getElementById('title-text').style.fontSize = `${base * 3.2}px`;

  document.getElementById('recipient-text').style.fontSize = `${base * 2.2}px`;

  document.getElementById('message-text').style.fontSize = `${base * 1.1}px`;

  document.getElementById('sender-text').style.fontSize = `${base * 1.5}px`;

}

// Element SDK initialization

window.elementSdk.init({

  defaultConfig,

  onConfigChange: async (config) => { applyConfig(config); },

  mapToCapabilities: (config) => ({

    recolorables: [

      { get: () => config.background_color || defaultConfig.background_color, set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },

      { get: () => config.surface_color || defaultConfig.surface_color, set: (v) => { config.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },

      { get: () => config.text_color || defaultConfig.text_color, set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },

      { get: () => config.accent_color || defaultConfig.accent_color, set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); } },

      { get: () => config.secondary_color || defaultConfig.secondary_color, set: (v) => { config.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); } }

    ],

    borderables: [],

    fontEditable: { get: () => config.font_family || defaultConfig.font_family, set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); } },

    fontSizeable: { get: () => config.font_size || defaultConfig.font_size, set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); } }

  }),

  mapToEditPanelValues: (config) => new Map([

    ['recipient_name', config.recipient_name || defaultConfig.recipient_name],

    ['sender_name', config.sender_name || defaultConfig.sender_name],

    ['main_message', config.main_message || defaultConfig.main_message]

  ])

});