/* ---------- icon templates (line-art, gold on transparent) ---------- */
const ICONS = {
  hoodie: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a13b" stroke-width="2.5"><path d="M30 20 Q50 5 70 20 L78 32 L68 38 L68 88 L32 88 L32 38 L22 32 Z"/><path d="M40 20 Q50 30 60 20" /></svg>`,
  tee: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a13b" stroke-width="2.5"><path d="M35 18 L15 30 L24 42 L35 34 L35 88 L65 88 L65 34 L76 42 L85 30 L65 18 Q50 28 35 18 Z"/></svg>`,
  tank: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a13b" stroke-width="2.5"><path d="M38 15 L38 26 L28 40 L34 88 L66 88 L72 40 L62 26 L62 15 Q50 24 38 15 Z"/></svg>`,
  joggers: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a13b" stroke-width="2.5"><path d="M32 14 L68 14 L70 55 L58 90 L50 90 L48 55 L52 90 L44 90 L30 55 Z"/><path d="M32 30 L68 30"/></svg>`,
  shorts: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a13b" stroke-width="2.5"><path d="M30 20 L70 20 L72 55 L58 85 L52 55 L48 85 L34 55 Z"/><path d="M30 32 L70 32"/></svg>`,
  beanie: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a13b" stroke-width="2.5"><path d="M20 60 Q20 20 50 20 Q80 20 80 60 Z"/><path d="M18 60 L82 60 L82 72 L18 72 Z"/></svg>`,
  bracelet: `<svg viewBox="0 0 100 100" fill="none" stroke="#c9a13b" stroke-width="2.5"><circle cx="50" cy="50" r="30"/><circle cx="50" cy="20" r="4" fill="#c9a13b"/><circle cx="50" cy="80" r="4" fill="#c9a13b"/><circle cx="20" cy="50" r="4" fill="#c9a13b"/><circle cx="80" cy="50" r="4" fill="#c9a13b"/></svg>`
};

/* ---------- product data ---------- */
const PRODUCTS = [
  { name:"Onyx V1 Hoodie", brand:"Gymshark", icon:"hoodie",
    desc:"Heavyweight seamless hoodie in the Onyx colourway — the piece the black-and-gold wardrobe gets built around.",
    url:"https://walterjackets.com/product/gymshark-onyx-v1-hoodie/" },
  { name:"Thorn Cross Tee", brand:"gymxata", icon:"tee",
    desc:"Compression tee with a thorn-and-cross graphic across the chest. Built for lifting, not just looking at.",
    url:"https://gymxata.shop/products/thorn-cross-t-shirt" },
  { name:"Black Metal Tee", brand:"gymxata", icon:"tee",
    desc:"Compression fit with a metal-inspired print, dark and understated until you're close enough to read it.",
    url:"https://gymxata.shop/products/black-metal-compression-t-shirt" },
  { name:"Dark Y2K Joggers", brand:"gymxata", icon:"joggers",
    desc:"Wide-leg streetwear joggers with a drawstring waist — loose enough for the gym floor, sharp enough for after.",
    url:"https://gymxata.shop/products/dark-y2k-unisex-streetwear-jogger-pants-men-women-casual-loose-fit-drawstring-workout-gym-trousers-wide-leg-fitness-fashion" },
  { name:"Gym Beanie", brand:"gymxata", icon:"beanie",
    desc:"Fitted knit beanie for the walk to the gym and the walk back — no logo shouting, just the shape.",
    url:"https://gymxata.shop/products/beanie" },
  { name:"Gym Bracelet", brand:"gymxata", icon:"bracelet",
    desc:"Minimal beaded bracelet, the one piece of jewellery that survives a lifting session.",
    url:"https://gymxata.shop/products/gym-bracelet-1" },
  { name:"Crest Zip Hoodie", brand:"gymxata", icon:"hoodie",
    desc:"Zip-through hoodie with a dark crest emblem — layer it over the tee and forget it's cold out.",
    url:"https://gymxata.shop/products/zip-hoodie" },
  { name:"Cross Tank", brand:"gymxata", icon:"tank",
    desc:"Open-shoulder tank for the sessions where sleeves just get in the way.",
    url:"https://gymxata.shop/products/cross-tank" },
  { name:"Thorn Hoodie", brand:"gymxata", icon:"hoodie",
    desc:"The pullover companion to the Thorn Cross tee — same graphic language, heavier fabric.",
    url:"https://gymxata.shop/products/thorn-hoodie" },
  { name:"Cross Shorts", brand:"gymxata", icon:"shorts",
    desc:"Training shorts with the cross motif at the hem, built for squat depth without riding up.",
    url:"https://gymxata.shop/products/shorts-cross" },
  { name:"Hello Kitty Joggers", brand:"gymxata", icon:"joggers",
    desc:"The wildcard of the lineup — soft joggers with a Hello Kitty print for the lighter training days.",
    url:"https://gymxata.shop/products/hello-kitty-pants" }
];

/* ---------- barcode demo data ---------- */
const BARCODES = {
  "5000159484695": { name:"Snickers 48g", kcal:243, protein:4 },
  "8410076430207": { name:"Banana (avg.)", kcal:105, protein:1 },
  "5000112548167": { name:"Coca-Cola 330ml", kcal:139, protein:0 },
  "4062300297716": { name:"Whey Protein Scoop", kcal:120, protein:24 },
  "5000169005228": { name:"Chicken Breast 150g", kcal:248, protein:47 }
};

/* ---------- state ---------- */
let log = [];

function renderLog(){
  const list = document.getElementById('logList');
  const empty = document.getElementById('logEmpty');
  list.querySelectorAll('.log-item').forEach(n => n.remove());

  let kcal = 0, protein = 0;
  log.forEach((item, i) => {
    kcal += item.kcal;
    protein += item.protein;
    const li = document.createElement('li');
    li.className = 'log-item';
    li.innerHTML = `<span>${item.name}<br><span class="log-item-meta">${item.kcal} kcal · ${item.protein}g protein</span></span>
      <button class="log-item-remove" data-i="${i}" aria-label="Remove">×</button>`;
    list.appendChild(li);
  });

  empty.hidden = log.length > 0;

  document.getElementById('totalKcal').textContent = kcal;
  document.getElementById('totalProtein').textContent = protein;
  document.getElementById('heroKcal').textContent = kcal;

  const goal = 2400;
  const circumference = 679;
  const pct = Math.min(kcal / goal, 1);
  document.querySelector('.ring-fill').style.strokeDashoffset = circumference * (1 - pct);

  list.querySelectorAll('.log-item-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      log.splice(Number(btn.dataset.i), 1);
      renderLog();
    });
  });
}

function addEntry(name, kcal, protein){
  if(!name || !kcal){ return false; }
  log.push({ name, kcal:Number(kcal), protein:Number(protein) || 0 });
  renderLog();
  return true;
}

/* ---------- tabs ---------- */
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected','false'); });
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    tab.setAttribute('aria-selected','true');
    document.querySelector(`.tab-panel[data-panel="${tab.dataset.tab}"]`).classList.add('active');
  });
});

/* ---------- photo panel ---------- */
const photoInput = document.getElementById('photoInput');
const dropzone = document.getElementById('dropzone');
const photoPreview = document.getElementById('photoPreview');

dropzone.addEventListener('click', e => { e.preventDefault(); photoInput.click(); });
['dragover','dragleave','drop'].forEach(evt => {
  dropzone.addEventListener(evt, e => {
    e.preventDefault();
    dropzone.classList.toggle('drag', evt === 'dragover');
    if(evt === 'drop' && e.dataTransfer.files[0]){
      photoInput.files = e.dataTransfer.files;
      showPreview(e.dataTransfer.files[0]);
    }
  });
});
photoInput.addEventListener('change', () => { if(photoInput.files[0]) showPreview(photoInput.files[0]); });

function showPreview(file){
  const reader = new FileReader();
  reader.onload = e => {
    photoPreview.src = e.target.result;
    photoPreview.hidden = false;
    document.getElementById('dzText').textContent = file.name;
  };
  reader.readAsDataURL(file);
}

document.getElementById('addPhoto').addEventListener('click', () => {
  const name = document.getElementById('photoName').value.trim() || 'Meal photo';
  const kcal = document.getElementById('photoKcal').value;
  const protein = document.getElementById('photoProtein').value;
  if(addEntry(name, kcal, protein)){
    document.getElementById('photoName').value = '';
    document.getElementById('photoKcal').value = '';
    document.getElementById('photoProtein').value = '';
  }
});

/* ---------- barcode panel ---------- */
document.getElementById('lookupBarcode').addEventListener('click', () => {
  const code = document.getElementById('barcodeInput').value.trim();
  const result = document.getElementById('barcodeResult');
  const match = BARCODES[code];
  if(match){
    result.hidden = false;
    result.innerHTML = `<span>${match.name}<br><span class="log-item-meta">${match.kcal} kcal · ${match.protein}g protein</span></span>
      <button class="btn btn-gold" id="addBarcode">Add</button>`;
    document.getElementById('addBarcode').addEventListener('click', () => addEntry(match.name, match.kcal, match.protein));
  } else {
    result.hidden = false;
    result.innerHTML = `<span>Not in the demo database.<br><span class="log-item-meta">Try the Manual tab instead.</span></span>`;
  }
});

/* ---------- manual panel ---------- */
document.getElementById('addManual').addEventListener('click', () => {
  const name = document.getElementById('manualName').value.trim();
  const kcal = document.getElementById('manualKcal').value;
  const protein = document.getElementById('manualProtein').value;
  if(addEntry(name, kcal, protein)){
    document.getElementById('manualName').value = '';
    document.getElementById('manualKcal').value = '';
    document.getElementById('manualProtein').value = '';
  }
});

/* ---------- shop grid ---------- */
const shopGrid = document.getElementById('shopGrid');
PRODUCTS.forEach((p, i) => {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.innerHTML = `<div class="product-icon">${ICONS[p.icon]}</div>
    <p class="product-brand">${p.brand}</p>
    <p class="product-name">${p.name}</p>`;
  card.addEventListener('click', () => openModal(i));
  shopGrid.appendChild(card);
});

/* ---------- modal ---------- */
const backdrop = document.getElementById('modalBackdrop');
function openModal(i){
  const p = PRODUCTS[i];
  document.getElementById('modalIcon').innerHTML = ICONS[p.icon];
  document.getElementById('modalBrand').textContent = p.brand;
  document.getElementById('modalName').textContent = p.name;
  document.getElementById('modalDesc').textContent = p.desc;
  document.getElementById('modalLink').href = p.url;
  backdrop.classList.add('open');
}
document.getElementById('modalClose').addEventListener('click', () => backdrop.classList.remove('open'));
backdrop.addEventListener('click', e => { if(e.target === backdrop) backdrop.classList.remove('open'); });
document.addEventListener('keydown', e => { if(e.key === 'Escape') backdrop.classList.remove('open'); });

renderLog();
