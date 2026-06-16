/* ─────────────────────────────────────────
   CATÁLOGO — 8 productos en soles
───────────────────────────────────────── */
const PRODUCTS = [
  {
    id: 'tws-pro',
    name: 'Auriculares TWS Pro',
    cat: 'audio', catLabel: 'Audio',
    price: 289.90, oldPrice: 369.90,
    emoji: '🎧',
    tag: 'hot', tagLabel: 'Top ventas',
    stars: 4.9, reviews: 324,
    desc: 'Cancelación activa de ruido, 30 h de batería, resistencia IPX5.'
  },
  {
    id: 'speaker-360',
    name: 'Parlante Bluetooth 360°',
    cat: 'audio', catLabel: 'Audio',
    price: 199.90, oldPrice: 259.90,
    emoji: '🔊',
    tag: 'sale', tagLabel: '−23%',
    stars: 4.8, reviews: 211,
    desc: 'Potencia 20 W, sonido omnidireccional, IP67, 24 h de autonomía.'
  },
  {
    id: 'charger-gan',
    name: 'Cargador GaN 65 W',
    cat: 'carga', catLabel: 'Carga',
    price: 129.90, oldPrice: 169.90,
    emoji: '⚡',
    tag: 'hot', tagLabel: 'Top ventas',
    stars: 4.9, reviews: 456,
    desc: 'Tecnología GaN, 3 puertos USB-C/A, carga ultrarrápida. Universal.'
  },
  {
    id: 'powerbank-20k',
    name: 'Power Bank 20 000 mAh',
    cat: 'carga', catLabel: 'Carga',
    price: 179.90, oldPrice: 229.90,
    emoji: '🔋',
    tag: 'sale', tagLabel: '−22%',
    stars: 4.8, reviews: 287,
    desc: 'Carga rápida 22.5 W, 4 puertos, pantalla LED. Hasta 5 dispositivos.'
  },
  {
    id: 'case-magsafe',
    name: 'Funda MagSafe Silicona',
    cat: 'proteccion', catLabel: 'Protección',
    price: 69.90, oldPrice: null,
    emoji: '📱',
    tag: 'new', tagLabel: 'Nuevo',
    stars: 4.7, reviews: 512,
    desc: 'Compatible MagSafe, protección grado militar, 12 colores disponibles.'
  },
  {
    id: 'hub-7in1',
    name: 'Hub USB‑C 7 en 1',
    cat: 'conectividad', catLabel: 'Conectividad',
    price: 159.90, oldPrice: 209.90,
    emoji: '🖥️',
    tag: 'hot', tagLabel: 'Bestseller',
    stars: 4.8, reviews: 342,
    desc: 'HDMI 4 K, 3× USB‑A, SD/MicroSD, USB‑C PD 100 W. Mac y PC.'
  },
  {
    id: 'mouse-gaming',
    name: 'Mouse Gaming 16 000 DPI',
    cat: 'gaming', catLabel: 'Gaming',
    price: 219.90, oldPrice: 289.90,
    emoji: '🖱️',
    tag: 'hot', tagLabel: 'Gamer',
    stars: 4.9, reviews: 445,
    desc: '16 000 DPI, RGB por zona, 8 botones programables, polling 1000 Hz.'
  },
  {
    id: 'keyboard-tkl',
    name: 'Teclado Mecánico RGB TKL',
    cat: 'gaming', catLabel: 'Gaming',
    price: 299.90, oldPrice: 399.90,
    emoji: '⌨️',
    tag: 'sale', tagLabel: '−25%',
    stars: 4.8, reviews: 298,
    desc: 'Switches Red lineales, RGB por tecla, formato TKL, anti‑ghosting total.'
  }
];

/* ─────────────────────────────────────────
   ESTADO
───────────────────────────────────────── */
let cart       = JSON.parse(localStorage.getItem('tz2_cart') || '[]');
let activeCat  = 'all';
let query      = '';
let promoOn    = false;

const PROMO_CODE  = 'TECH15';
const PROMO_RATE  = 0.15;

/* ─────────────────────────────────────────
   UTILS
───────────────────────────────────────── */
const $ = id => document.getElementById(id);

function toast(msg, type = 'ok') {
  const icons = { ok: 'fa-check', err: 'fa-xmark', inf: 'fa-circle-info' };
  const el = document.createElement('div');
  el.className = `toast t-${type}`;
  el.innerHTML = `<i class="fa-solid ${icons[type]}"></i>${msg}`;
  $('toasts').appendChild(el);
  setTimeout(() => {
    el.style.opacity = '0';
    el.style.transition = 'opacity .2s';
    setTimeout(() => el.remove(), 200);
  }, 2800);
}

/* ─────────────────────────────────────────
   TEMA
───────────────────────────────────────── */
function loadTheme() {
  if (localStorage.getItem('tz2_dark') === '1') applyDark(true);
}
function applyDark(on) {
  document.body.classList.toggle('dark', on);
  $('theme-btn').innerHTML = on
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
}
function toggleTheme() {
  const on = !document.body.classList.contains('dark');
  applyDark(on);
  localStorage.setItem('tz2_dark', on ? '1' : '0');
}

/* ─────────────────────────────────────────
   PRODUCTOS
───────────────────────────────────────── */
function renderProducts() {
  const grid = $('grid');
  const list = PRODUCTS.filter(p =>
    (activeCat === 'all' || p.cat === activeCat) &&
    (p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query))
  );

  if (!list.length) {
    grid.innerHTML = `<div class="no-results"><i class="fa-solid fa-magnifying-glass"></i>No encontramos productos con esa búsqueda.</div>`;
    return;
  }

  grid.innerHTML = list.map(p => {
    const tag  = p.tag ? `<span class="prod-tag tag-${p.tag}">${p.tagLabel}</span>` : '';
    const old  = p.oldPrice ? `<span class="old-price">S/ ${p.oldPrice.toFixed(2)}</span>` : '';
    return `
      <div class="card">
        ${tag}
        <div class="card-img">${p.emoji}</div>
        <div class="card-body">
          <span class="card-cat">${p.catLabel}</span>
          <h3 class="card-name">${p.name}</h3>
          <p class="card-desc">${p.desc}</p>
          <div class="card-rating">
            <span class="stars">${'★'.repeat(Math.round(p.stars))}</span>
            <span>${p.stars} (${p.reviews})</span>
          </div>
          <div class="card-foot">
            <div class="price-wrap">
              ${old}
              <span class="price">S/ ${p.price.toFixed(2)}</span>
            </div>
            <button class="add-btn" data-id="${p.id}" aria-label="Agregar">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>`;
  }).join('');

  grid.querySelectorAll('.add-btn').forEach(btn =>
    btn.addEventListener('click', () => { addItem(btn.dataset.id); popCart(); })
  );
}

/* ─────────────────────────────────────────
   CARRITO
───────────────────────────────────────── */
function addItem(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const ex = cart.find(x => x.id === id);
  if (ex) { ex.qty++; toast(`+1 ${p.name}`, 'ok'); }
  else { cart.push({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, qty: 1 }); toast(`${p.name} agregado`, 'ok'); }
  save(); render();
}

function changeQty(id, d) {
  const item = cart.find(x => x.id === id);
  if (!item) return;
  item.qty += d;
  if (item.qty <= 0) delItem(id);
  else { save(); render(); }
}

function delItem(id) {
  const item = cart.find(x => x.id === id);
  cart = cart.filter(x => x.id !== id);
  if (item) toast(`${item.name} eliminado`, 'err');
  save(); render();
}

function save() { localStorage.setItem('tz2_cart', JSON.stringify(cart)); }

function render() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  $('cart-badge').textContent = total;

  const empty  = $('cart-empty');
  const list   = $('cart-list');
  const foot   = $('cart-foot');

  if (!cart.length) {
    empty.classList.remove('hidden');
    list.classList.add('hidden');
    foot.classList.add('hidden');
    return;
  }

  empty.classList.add('hidden');
  list.classList.remove('hidden');
  foot.classList.remove('hidden');

  list.innerHTML = cart.map(item => `
    <div class="ci">
      <div class="ci-emoji">${item.emoji}</div>
      <div class="ci-info">
        <h4>${item.name}</h4>
        <span>S/ ${(item.price * item.qty).toFixed(2)}</span>
      </div>
      <div class="ci-ctrl">
        <div class="qty-wrap">
          <span class="q-btn dec" data-id="${item.id}">−</span>
          <span class="q-num">${item.qty}</span>
          <span class="q-btn inc" data-id="${item.id}">+</span>
        </div>
        <i class="fa-solid fa-trash ci-del" data-id="${item.id}"></i>
      </div>
    </div>`).join('');

  list.querySelectorAll('.dec').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.id, -1)));
  list.querySelectorAll('.inc').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.id,  1)));
  list.querySelectorAll('.ci-del').forEach(b => b.addEventListener('click', () => delItem(b.dataset.id)));

  const sub  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = promoOn ? sub * PROMO_RATE : 0;

  $('t-sub').textContent   = `S/ ${sub.toFixed(2)}`;
  $('t-total').textContent = `S/ ${(sub - disc).toFixed(2)}`;

  const pr = $('promo-row');
  if (promoOn) { pr.classList.remove('hidden'); $('t-disc').textContent = `– S/ ${disc.toFixed(2)}`; }
  else pr.classList.add('hidden');
}

function applyPromo() {
  if ($('promo').value.trim().toUpperCase() === PROMO_CODE) {
    promoOn = true; render();
    toast('Descuento del 15% aplicado', 'ok');
  } else {
    toast('Código incorrecto', 'err');
  }
}

function doCheckout() {
  const name = $('chk-name').value.trim();
  const addr = $('chk-address').value.trim();
  if (!name || !addr) { toast('Completá nombre y dirección', 'err'); return; }

  const sub  = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const disc = promoOn ? sub * PROMO_RATE : 0;
  const tot  = sub - disc;
  const pay  = $('chk-pay').value;

  let msg = `🛒 *PEDIDO — TECHZONE*\n\n👤 ${name}\n📍 ${addr}\n💳 ${pay}\n──────────────────\n`;
  cart.forEach(i => msg += `${i.emoji} ${i.name} ×${i.qty}  S/ ${(i.price * i.qty).toFixed(2)}\n`);
  msg += `──────────────────\n`;
  if (promoOn) msg += `Descuento: –S/ ${disc.toFixed(2)}\n`;
  msg += `*Total: S/ ${tot.toFixed(2)}*\n\n¡Hola! Quiero coordinar mi pedido.`;

  window.open(`https://wa.me/51987654321?text=${encodeURIComponent(msg)}`, '_blank');

  cart = []; promoOn = false;
  ['promo','chk-name','chk-address'].forEach(id => $(id).value = '');
  save(); render(); closeDrawer();
  toast('Redirigiendo a WhatsApp…', 'inf');
}

/* ─────────────────────────────────────────
   DRAWER
───────────────────────────────────────── */
function openDrawer()  {
  $('drawer').classList.add('open');
  $('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  $('drawer').classList.remove('open');
  $('overlay').classList.remove('open');
  document.body.style.overflow = '';
}
function popCart() {
  const b = $('cart-btn');
  b.classList.add('cart-pop');
  b.addEventListener('animationend', () => b.classList.remove('cart-pop'), { once: true });
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  loadTheme();
  renderProducts();
  render();

  /* Theme */
  $('theme-btn').addEventListener('click', toggleTheme);

  /* Mobile nav */
  $('burger').addEventListener('click', () => {
    const nav  = $('nav-center');
    const open = nav.classList.toggle('open');
    const bars = document.querySelectorAll('.burger span');
    bars[0].style.transform = open ? 'translateY(6px) rotate(45deg)' : '';
    bars[1].style.transform = open ? 'translateY(-6px) rotate(-45deg)' : '';
  });
  document.querySelectorAll('.nl').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nl').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      $('nav-center').classList.remove('open');
      document.querySelectorAll('.burger span').forEach(s => s.style.transform = '');
    });
  });

  /* Cart */
  $('cart-btn').addEventListener('click', openDrawer);
  $('close-cart').addEventListener('click', closeDrawer);
  $('overlay').addEventListener('click', closeDrawer);
  const gs = $('go-shop');
  if (gs) gs.addEventListener('click', closeDrawer);

  /* Promo & checkout */
  $('apply-promo').addEventListener('click', applyPromo);
  $('checkout-btn').addEventListener('click', doCheckout);

  /* Filters */
  $('filters').addEventListener('click', e => {
    const btn = e.target.closest('.f-btn');
    if (!btn) return;
    document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCat = btn.dataset.cat;
    renderProducts();
  });

  /* Search */
  $('search').addEventListener('input', e => {
    query = e.target.value.toLowerCase().trim();
    renderProducts();
  });

  /* Contact */
  $('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    toast(`Mensaje enviado. Te respondemos pronto.`, 'ok');
    $('contact-form').reset();
  });

  /* Nav shadow on scroll */
  window.addEventListener('scroll', () => {
    $('nav').style.boxShadow = window.scrollY > 4
      ? '0 1px 0 var(--line)' : '';
  }, { passive: true });
});
