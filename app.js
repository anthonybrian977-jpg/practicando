/* ============================================================
   PRODUCTOS — 8 accesorios en soles peruanos
   ============================================================ */
const PRODUCTS = [
    {
        id: "auriculares-tws",
        name: "Auriculares TWS Pro Max",
        cat: "audio",
        catLabel: "Audio",
        price: 289.90,
        oldPrice: 379.90,
        emoji: "🎧",
        badge: "hot",
        badgeLabel: "Más vendido",
        stars: 4.9,
        reviews: 324,
        desc: "Cancelación activa de ruido, 30 h de batería, resistencia IPX5 al agua."
    },
    {
        id: "parlante-bt",
        name: "Parlante Bluetooth 360°",
        cat: "audio",
        catLabel: "Audio",
        price: 199.90,
        oldPrice: 259.90,
        emoji: "🔊",
        badge: "sale",
        badgeLabel: "-23%",
        stars: 4.8,
        reviews: 211,
        desc: "Potencia 20 W, sonido envolvente 360°, IP67, 24 h de autonomía."
    },
    {
        id: "cargador-gan-65w",
        name: "Cargador GaN 65 W",
        cat: "carga",
        catLabel: "Carga",
        price: 129.90,
        oldPrice: 169.90,
        emoji: "⚡",
        badge: "hot",
        badgeLabel: "Top",
        stars: 4.9,
        reviews: 456,
        desc: "Tecnología GaN, carga ultrarrápida. 3 puertos: 2× USB-C + 1× USB-A. Universal."
    },
    {
        id: "powerbank-20k",
        name: "Power Bank 20 000 mAh",
        cat: "carga",
        catLabel: "Carga",
        price: 179.90,
        oldPrice: 229.90,
        emoji: "🔋",
        badge: "sale",
        badgeLabel: "-22%",
        stars: 4.8,
        reviews: 287,
        desc: "Carga rápida 22.5 W, 4 puertos, pantalla LED de batería. Hasta 5 dispositivos."
    },
    {
        id: "funda-premium",
        name: "Funda Silicona MagSafe",
        cat: "proteccion",
        catLabel: "Protección",
        price: 69.90,
        oldPrice: null,
        emoji: "📱",
        badge: "new",
        badgeLabel: "Nuevo",
        stars: 4.7,
        reviews: 512,
        desc: "Compatible con MagSafe, protección grado militar, 12 colores disponibles."
    },
    {
        id: "hub-usb-7en1",
        name: "Hub USB-C 7 en 1",
        cat: "conectividad",
        catLabel: "Conectividad",
        price: 159.90,
        oldPrice: 209.90,
        emoji: "🖥️",
        badge: "hot",
        badgeLabel: "Bestseller",
        stars: 4.8,
        reviews: 342,
        desc: "HDMI 4K, 3× USB-A, SD/MicroSD, USB-C PD 100 W. Compatible Mac y PC."
    },
    {
        id: "mouse-gaming",
        name: "Mouse Gaming RGB 16 000 DPI",
        cat: "gaming",
        catLabel: "Gaming",
        price: 219.90,
        oldPrice: 289.90,
        emoji: "🖱️",
        badge: "hot",
        badgeLabel: "Gamer",
        stars: 4.9,
        reviews: 445,
        desc: "16 000 DPI, RGB personalizable, 8 botones programables, polling 1000 Hz."
    },
    {
        id: "teclado-mecanico",
        name: "Teclado Mecánico RGB TKL",
        cat: "gaming",
        catLabel: "Gaming",
        price: 299.90,
        oldPrice: 399.90,
        emoji: "⌨️",
        badge: "sale",
        badgeLabel: "-25%",
        stars: 4.8,
        reviews: 298,
        desc: "Switches Red lineales, retroiluminación RGB por tecla, formato TKL, anti-ghosting."
    }
];

/* ============================================================
   ESTADO
   ============================================================ */
let cart = JSON.parse(localStorage.getItem('tz_cart')) || [];
let activeCat   = 'all';
let searchTerm  = '';
let promoActive = false;

const PROMO     = 'TECH15';
const DISC_RATE = 0.15;

/* ============================================================
   DOM
   ============================================================ */
const $  = id => document.getElementById(id);
const $$ = sel => document.querySelectorAll(sel);

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    renderProducts();
    updateCart();
    bindAll();
});

/* ============================================================
   THEME
   ============================================================ */
function loadTheme() {
    const t = localStorage.getItem('tz_theme') || 'light';
    setTheme(t);
}

function setTheme(mode) {
    document.body.classList.toggle('dark', mode === 'dark');
    $('theme-toggle').innerHTML = mode === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('tz_theme', mode);
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark');
    setTheme(isDark ? 'light' : 'dark');
    toast(isDark ? 'Modo claro activado' : 'Modo oscuro activado', 'info');
}

/* ============================================================
   TOAST
   ============================================================ */
function toast(msg, type = 'success') {
    const icons = {
        success: 'fa-circle-check',
        error:   'fa-circle-xmark',
        info:    'fa-circle-info'
    };
    const el = document.createElement('div');
    el.className = `toast t-${type}`;
    el.innerHTML = `<i class="fa-solid ${icons[type] || icons.info}"></i><span>${msg}</span>`;
    $('toast-container').appendChild(el);
    setTimeout(() => {
        el.style.animation = 'toast-in .28s ease reverse';
        setTimeout(() => el.remove(), 280);
    }, 3000);
}

/* ============================================================
   PRODUCTOS
   ============================================================ */
function renderProducts() {
    const grid = $('products-grid');
    grid.innerHTML = '';

    const list = PRODUCTS.filter(p => {
        const matchCat    = activeCat === 'all' || p.cat === activeCat;
        const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase())
                         || p.desc.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCat && matchSearch;
    });

    if (!list.length) {
        grid.innerHTML = `<div class="no-results">
            <i class="fa-solid fa-magnifying-glass"></i>
            <p>No encontramos productos con esa búsqueda.</p>
        </div>`;
        return;
    }

    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const badge   = p.badge  ? `<span class="prod-badge badge-${p.badge}">${p.badgeLabel}</span>` : '';
        const oldPriceHtml = p.oldPrice ? `<span class="prod-old">S/ ${p.oldPrice.toFixed(2)}</span>` : '';

        card.innerHTML = `
            ${badge}
            <div class="prod-img">${p.emoji}</div>
            <div class="prod-body">
                <p class="prod-cat">${p.catLabel}</p>
                <h3>${p.name}</h3>
                <p class="prod-desc">${p.desc}</p>
                <div class="prod-rating">
                    <span class="stars">${'★'.repeat(Math.round(p.stars))}</span>
                    <span>${p.stars}</span>
                    <span style="color:var(--text-3)">(${p.reviews} reseñas)</span>
                </div>
                <div class="prod-footer">
                    <div class="price-block">
                        ${oldPriceHtml}
                        <span class="prod-price">S/ ${p.price.toFixed(2)}</span>
                    </div>
                    <button class="add-btn" data-id="${p.id}" aria-label="Agregar al carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>`;

        grid.appendChild(card);
    });

    grid.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            addItem(btn.dataset.id);
            bounceCart();
        });
    });
}

/* ============================================================
   CARRITO — LÓGICA
   ============================================================ */
function addItem(id) {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    const existing = cart.find(x => x.id === id);
    if (existing) {
        existing.qty++;
        toast(`+1 ${p.name}`, 'success');
    } else {
        cart.push({ id: p.id, name: p.name, price: p.price, emoji: p.emoji, qty: 1 });
        toast(`${p.name} agregado`, 'success');
    }
    saveCart();
    updateCart();
}

function changeQty(id, delta) {
    const item = cart.find(x => x.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) removeItem(id);
    else { saveCart(); updateCart(); }
}

function removeItem(id) {
    const item = cart.find(x => x.id === id);
    cart = cart.filter(x => x.id !== id);
    if (item) toast(`${item.name} eliminado`, 'error');
    saveCart();
    updateCart();
}

function saveCart() {
    localStorage.setItem('tz_cart', JSON.stringify(cart));
}

function updateCart() {
    const totalQty = cart.reduce((s, i) => s + i.qty, 0);
    $('cart-count').textContent = totalQty;

    const empty  = $('cart-empty');
    const list   = $('cart-list');
    const footer = $('cart-footer');

    if (!cart.length) {
        empty.classList.remove('hidden');
        list.classList.add('hidden');
        footer.classList.add('hidden');
        return;
    }

    empty.classList.add('hidden');
    list.classList.remove('hidden');
    footer.classList.remove('hidden');

    list.innerHTML = '';
    cart.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <div class="ci-img">${item.emoji}</div>
            <div class="ci-info">
                <h4>${item.name}</h4>
                <span class="ci-price">S/ ${(item.price * item.qty).toFixed(2)}</span>
            </div>
            <div class="ci-actions">
                <div class="qty-box">
                    <span class="qty-btn dec" data-id="${item.id}">−</span>
                    <span class="qty-val">${item.qty}</span>
                    <span class="qty-btn inc" data-id="${item.id}">+</span>
                </div>
                <i class="fa-solid fa-trash ci-remove" data-id="${item.id}"></i>
            </div>`;
        list.appendChild(el);
    });

    list.querySelectorAll('.dec').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.id, -1)));
    list.querySelectorAll('.inc').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.id,  1)));
    list.querySelectorAll('.ci-remove').forEach(b => b.addEventListener('click', () => removeItem(b.dataset.id)));

    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const discount = promoActive ? subtotal * DISC_RATE : 0;
    const total    = subtotal - discount;

    $('cart-subtotal').textContent = `S/ ${subtotal.toFixed(2)}`;
    $('cart-total').textContent    = `S/ ${total.toFixed(2)}`;

    const promoRow = $('promo-row');
    if (promoActive) {
        promoRow.classList.remove('hidden');
        $('cart-discount').textContent = `– S/ ${discount.toFixed(2)}`;
    } else {
        promoRow.classList.add('hidden');
    }
}

function applyPromo() {
    const val = $('promo-input').value.trim().toUpperCase();
    if (val === PROMO) {
        promoActive = true;
        toast('¡Cupón TECH15 aplicado! 15% de descuento', 'success');
        updateCart();
    } else {
        toast('Código de descuento incorrecto', 'error');
    }
}

function checkout() {
    const name    = $('chk-name').value.trim();
    const address = $('chk-address').value.trim();
    const payment = $('chk-payment').value;

    if (!name || !address) {
        toast('Por favor completá tu nombre y dirección', 'error');
        return;
    }

    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const discount = promoActive ? subtotal * DISC_RATE : 0;
    const total    = subtotal - discount;

    let msg = `🛒 *NUEVO PEDIDO — TECHZONE*\n\n`;
    msg += `👤 *Cliente:* ${name}\n`;
    msg += `📍 *Dirección:* ${address}\n`;
    msg += `💳 *Pago:* ${payment}\n`;
    msg += `────────────────────────\n`;
    cart.forEach(i => {
        msg += `• ${i.emoji} ${i.name} ×${i.qty} = *S/ ${(i.price * i.qty).toFixed(2)}*\n`;
    });
    msg += `────────────────────────\n`;
    msg += `Subtotal: S/ ${subtotal.toFixed(2)}\n`;
    if (promoActive) msg += `Descuento TECH15: –S/ ${discount.toFixed(2)}\n`;
    msg += `*TOTAL: S/ ${total.toFixed(2)}*\n\n`;
    msg += `¡Hola! Quiero coordinar mi pedido. 🙌`;

    window.open(`https://wa.me/51987654321?text=${encodeURIComponent(msg)}`, '_blank');

    cart = [];
    promoActive = false;
    $('promo-input').value   = '';
    $('chk-name').value      = '';
    $('chk-address').value   = '';
    saveCart();
    updateCart();
    closeCart();
    toast('Pedido enviado. Redirigiendo a WhatsApp…', 'info');
}

/* ============================================================
   CART OPEN / CLOSE
   ============================================================ */
function openCart() {
    $('cart-drawer').classList.add('open');
    $('cart-overlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeCart() {
    $('cart-drawer').classList.remove('open');
    $('cart-overlay').classList.remove('open');
    document.body.style.overflow = '';
}
function bounceCart() {
    const btn = $('cart-btn');
    btn.classList.add('cart-bounce');
    setTimeout(() => btn.classList.remove('cart-bounce'), 400);
}

/* ============================================================
   EVENTOS
   ============================================================ */
function bindAll() {
    /* Theme */
    $('theme-toggle').addEventListener('click', toggleTheme);

    /* Mobile nav */
    $('hamburger').addEventListener('click', () => {
        const nav = $('nav-links');
        const open = nav.classList.toggle('open');
        const spans = $$('#hamburger span');
        if (open) {
            spans[0].style.cssText = 'transform:translateY(7px) rotate(45deg)';
            spans[1].style.opacity = '0';
            spans[2].style.cssText = 'transform:translateY(-7px) rotate(-45deg)';
        } else {
            spans.forEach(s => s.style.cssText = '');
        }
    });

    $$('.nav-item').forEach(link => {
        link.addEventListener('click', () => {
            $$('.nav-item').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            $('nav-links').classList.remove('open');
            $$('#hamburger span').forEach(s => s.style.cssText = '');
        });
    });

    /* Cart */
    $('cart-btn').addEventListener('click', openCart);
    $('close-cart').addEventListener('click', closeCart);
    $('cart-overlay').addEventListener('click', closeCart);
    const goShop = $('btn-go-shop');
    if (goShop) goShop.addEventListener('click', closeCart);

    /* Promo & checkout */
    $('btn-apply-promo').addEventListener('click', applyPromo);
    $('btn-checkout').addEventListener('click', checkout);

    /* Filters */
    $('filters-row').addEventListener('click', e => {
        const btn = e.target.closest('.filter-btn');
        if (!btn) return;
        $$('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCat = btn.dataset.cat;
        renderProducts();
    });

    /* Search */
    $('search-input').addEventListener('input', e => {
        searchTerm = e.target.value;
        renderProducts();
    });

    /* Contact form */
    $('contact-form').addEventListener('submit', e => {
        e.preventDefault();
        const name = $('f-name').value;
        toast(`¡Gracias ${name}! Te respondemos pronto.`, 'success');
        $('contact-form').reset();
    });

    /* Sticky navbar shadow */
    window.addEventListener('scroll', () => {
        $('navbar').style.boxShadow = window.scrollY > 8
            ? '0 4px 20px rgba(0,0,0,.08)' : '';
    });
}
