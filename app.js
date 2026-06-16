/* ==========================================================================
   PRODUCTS DATABASE
   ========================================================================== */
const PRODUCTS = [
    {
        id: "airpods-pro",
        name: "Auriculares TWS Pro",
        category: "audio",
        price: 89.99,
        oldPrice: 120.00,
        emoji: "🎧",
        badge: "hot",
        badgeLabel: "Más vendido",
        rating: 4.9,
        reviews: 324,
        desc: "Cancelación de ruido activa, 30h batería, resistente al agua IPX5."
    },
    {
        id: "earbuds-sport",
        name: "Earbuds Sport",
        category: "audio",
        price: 39.99,
        oldPrice: null,
        emoji: "🎵",
        badge: "new",
        badgeLabel: "Nuevo",
        rating: 4.7,
        reviews: 98,
        desc: "Diseño ergonómico para deporte, Bluetooth 5.3 y bass potenciado."
    },
    {
        id: "speaker-bt",
        name: "Parlante Bluetooth 360°",
        category: "audio",
        price: 54.99,
        oldPrice: 70.00,
        emoji: "🔊",
        badge: "sale",
        badgeLabel: "-21%",
        rating: 4.8,
        reviews: 211,
        desc: "Sonido 360° con 20W de potencia. Resistente al agua IPX7. 24h autonomía."
    },
    {
        id: "charger-65w",
        name: "Cargador GaN 65W",
        category: "carga",
        price: 34.99,
        oldPrice: 45.00,
        emoji: "⚡",
        badge: "hot",
        badgeLabel: "Top",
        rating: 4.9,
        reviews: 456,
        desc: "Tecnología GaN, carga ultrarrápida. 3 puertos USB-C + USB-A. Universal."
    },
    {
        id: "power-bank-20k",
        name: "Power Bank 20,000 mAh",
        category: "carga",
        price: 49.99,
        oldPrice: 65.00,
        emoji: "🔋",
        badge: "sale",
        badgeLabel: "-23%",
        rating: 4.8,
        reviews: 287,
        desc: "Carga rápida 22.5W, 4 puertos, pantalla LED. Carga hasta 5 dispositivos."
    },
    {
        id: "wireless-charger",
        name: "Cargador Inalámbrico 15W",
        category: "carga",
        price: 24.99,
        oldPrice: null,
        emoji: "🔌",
        badge: "new",
        badgeLabel: "Nuevo",
        rating: 4.6,
        reviews: 134,
        desc: "Compatible Qi universal. Carga 15W para Samsung, 12W para iPhone."
    },
    {
        id: "case-iphone",
        name: "Funda Premium iPhone",
        category: "proteccion",
        price: 18.99,
        oldPrice: null,
        emoji: "📱",
        badge: null,
        badgeLabel: null,
        rating: 4.7,
        reviews: 512,
        desc: "Silicona MagSafe compatible. Protección grado militar, colores premium."
    },
    {
        id: "case-samsung",
        name: "Funda Armor Samsung",
        category: "proteccion",
        price: 16.99,
        oldPrice: null,
        emoji: "🛡️",
        badge: null,
        badgeLabel: null,
        rating: 4.6,
        reviews: 389,
        desc: "Carcasa doble capa, absorción de impactos. Compatible Galaxy S22/S23/S24."
    },
    {
        id: "tempered-glass",
        name: "Vidrio Templado 9H Pack x3",
        category: "proteccion",
        price: 12.99,
        oldPrice: 18.00,
        emoji: "🔒",
        badge: "sale",
        badgeLabel: "-28%",
        rating: 4.8,
        reviews: 678,
        desc: "Dureza 9H, cobertura completa, instalación sin burbujas. Pack de 3 unidades."
    },
    {
        id: "cable-usbc",
        name: "Cable USB-C 240W 2m",
        category: "conectividad",
        price: 14.99,
        oldPrice: null,
        emoji: "🔗",
        badge: "new",
        badgeLabel: "USB4",
        rating: 4.9,
        reviews: 201,
        desc: "Soporte 240W, 40Gbps datos, 8K video. Trenzado nylon ultra-resistente."
    },
    {
        id: "hub-usb",
        name: "Hub USB-C 7 en 1",
        category: "conectividad",
        price: 42.99,
        oldPrice: 55.00,
        emoji: "🖥️",
        badge: "hot",
        badgeLabel: "Bestseller",
        rating: 4.8,
        reviews: 342,
        desc: "HDMI 4K, USB-A x3, SD/MicroSD, USB-C PD 100W. Para Mac y PC."
    },
    {
        id: "adaptador-hdmi",
        name: "Adaptador USB-C a HDMI 4K",
        category: "conectividad",
        price: 19.99,
        oldPrice: 27.00,
        emoji: "📺",
        badge: "sale",
        badgeLabel: "-26%",
        rating: 4.7,
        reviews: 167,
        desc: "Salida 4K@60Hz, plug & play, compatible MacBook, iPad Pro, Windows."
    },
    {
        id: "mouse-gaming",
        name: "Mouse Gaming 16000 DPI",
        category: "gaming",
        price: 59.99,
        oldPrice: 79.00,
        emoji: "🖱️",
        badge: "hot",
        badgeLabel: "Gamer",
        rating: 4.9,
        reviews: 445,
        desc: "16,000 DPI, RGB personalizable, 8 botones programables, polling 1000Hz."
    },
    {
        id: "teclado-mecanico",
        name: "Teclado Mecánico RGB TKL",
        category: "gaming",
        price: 79.99,
        oldPrice: 110.00,
        emoji: "⌨️",
        badge: "sale",
        badgeLabel: "-27%",
        rating: 4.8,
        reviews: 298,
        desc: "Switches Red lineales, RGB por tecla, formato TKL sin numpad, anti-ghosting."
    },
    {
        id: "headset-gaming",
        name: "Headset Gaming 7.1 Surround",
        category: "gaming",
        price: 49.99,
        oldPrice: null,
        emoji: "🎮",
        badge: "new",
        badgeLabel: "7.1",
        rating: 4.7,
        reviews: 183,
        desc: "Sonido surround 7.1 virtual, micrófono cancelación de ruido, compatible PC/PS/Xbox."
    },
    {
        id: "mousepad-xl",
        name: "Mousepad XXL RGB 90x40cm",
        category: "gaming",
        price: 27.99,
        oldPrice: 35.00,
        emoji: "🎯",
        badge: null,
        badgeLabel: null,
        rating: 4.6,
        reviews: 234,
        desc: "Superficie de tela premium, base antideslizante, borde cosido, iluminación RGB."
    }
];

/* ==========================================================================
   STATE
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem('techzone_cart')) || [];
let activeFilter = 'all';
let searchQuery = '';
let discountApplied = false;
const PROMO_CODE = 'TECH15';
const DISCOUNT = 0.15;

/* ==========================================================================
   DOM REFERENCES
   ========================================================================== */
const themeToggleBtn    = document.getElementById('theme-toggle');
const mobileToggleBtn   = document.getElementById('mobile-toggle');
const navMenu           = document.getElementById('nav-menu');
const navLinks          = document.querySelectorAll('.nav-link');
const cartToggleBtn     = document.getElementById('cart-toggle-btn');
const cartBadge         = document.getElementById('cart-badge');

const catalogSearch     = document.getElementById('catalog-search');
const categoryFilters   = document.getElementById('category-filters');
const productsGrid      = document.getElementById('products-grid');

const cartOverlay       = document.getElementById('cart-overlay');
const cartDrawer        = document.getElementById('cart-drawer');
const closeCartBtn      = document.getElementById('close-cart-btn');
const cartEmpty         = document.getElementById('cart-empty');
const cartItemsEl       = document.getElementById('cart-items');
const cartFooter        = document.getElementById('cart-footer');
const cartSubtotal      = document.getElementById('cart-subtotal');
const cartDiscount      = document.getElementById('cart-discount');
const cartTotal         = document.getElementById('cart-total');
const promoRow          = document.getElementById('promo-row');
const promoInput        = document.getElementById('promo-input');
const btnApplyPromo     = document.getElementById('btn-apply-promo');
const checkoutName      = document.getElementById('checkout-name');
const checkoutAddress   = document.getElementById('checkout-address');
const checkoutPayment   = document.getElementById('checkout-payment');
const btnCheckout       = document.getElementById('btn-checkout');
const btnCartShop       = document.getElementById('btn-cart-shop');
const contactForm       = document.getElementById('contact-form');
const toastContainer    = document.getElementById('toast-container');

const sliderPrev        = document.getElementById('slider-prev');
const sliderNext        = document.getElementById('slider-next');
const sliderDots        = document.getElementById('slider-dots');
const testimonials      = document.querySelectorAll('.testimonial-card');
let currentSlide = 0;
let sliderInterval;

/* ==========================================================================
   INIT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderProducts();
    updateCartUI();
    initSlider();
    bindEvents();
});

/* ==========================================================================
   THEME
   ========================================================================== */
function initTheme() {
    const saved = localStorage.getItem('techzone_theme') || 'light';
    applyTheme(saved);
}

function applyTheme(theme) {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme === 'light');
    themeToggleBtn.innerHTML = theme === 'dark'
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('techzone_theme', theme);
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    applyTheme(isDark ? 'light' : 'dark');
    showToast(isDark ? 'Modo claro activado' : 'Modo oscuro activado', 'info');
}

/* ==========================================================================
   TOAST
   ========================================================================== */
function showToast(message, type = 'success') {
    const icons = {
        success: '<i class="fa-solid fa-circle-check toast-icon-success"></i>',
        error:   '<i class="fa-solid fa-circle-xmark toast-icon-error"></i>',
        info:    '<i class="fa-solid fa-circle-info toast-icon-info"></i>'
    };
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `${icons[type] || icons.info}<span class="toast-msg">${message}</span>`;
    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'toast-in 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3200);
}

/* ==========================================================================
   CATALOG
   ========================================================================== */
function renderProducts() {
    productsGrid.innerHTML = '';

    const filtered = PRODUCTS.filter(p => {
        const matchCat   = activeFilter === 'all' || p.category === activeFilter;
        const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>No encontramos productos con esa búsqueda. ¡Intentá con otro término!</p>
            </div>`;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';

        const badgeHTML = product.badge
            ? `<span class="product-badge badge-${product.badge}">${product.badgeLabel}</span>`
            : '';

        const oldPriceHTML = product.oldPrice
            ? `<span class="product-old-price">$${product.oldPrice.toFixed(2)}</span>`
            : '';

        const catLabels = {
            audio: 'Audio',
            carga: 'Carga & Energía',
            proteccion: 'Protección',
            conectividad: 'Conectividad',
            gaming: 'Gaming'
        };

        card.innerHTML = `
            ${badgeHTML}
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <span class="product-category">${catLabels[product.category] || product.category}</span>
                <h3>${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-rating">
                    <span class="stars">${'★'.repeat(Math.round(product.rating))}</span>
                    <span>${product.rating}</span>
                    <span class="count">(${product.reviews})</span>
                </div>
                <div class="product-footer">
                    <div class="price-wrap">
                        ${oldPriceHTML}
                        <span class="product-price">$${product.price.toFixed(2)}</span>
                    </div>
                    <button class="add-to-cart-btn" data-id="${product.id}" aria-label="Agregar al carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>`;

        productsGrid.appendChild(card);
    });

    // Bind add-to-cart buttons
    productsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            addToCart(btn.getAttribute('data-id'));
            animateCartBtn();
        });
    });
}

/* ==========================================================================
   CART LOGIC
   ========================================================================== */
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(i => i.id === productId);
    if (existing) {
        existing.qty += 1;
        showToast(`+1 ${product.name}`, 'success');
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
        showToast(`${product.name} agregado al carrito`, 'success');
    }

    saveCart();
    updateCartUI();
}

function changeQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    const item = cart.find(i => i.id === productId);
    cart = cart.filter(i => i.id !== productId);
    if (item) showToast(`${item.name} eliminado`, 'error');
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('techzone_cart', JSON.stringify(cart));
}

function updateCartUI() {
    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    cartBadge.textContent = totalItems;

    if (cart.length === 0) {
        cartEmpty.classList.remove('hidden');
        cartItemsEl.classList.add('hidden');
        cartFooter.classList.add('hidden');
        return;
    }

    cartEmpty.classList.add('hidden');
    cartItemsEl.classList.remove('hidden');
    cartFooter.classList.remove('hidden');

    cartItemsEl.innerHTML = '';
    cart.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <div class="cart-item-img">${item.emoji}</div>
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
            </div>
            <div class="cart-item-actions">
                <div class="qty-control">
                    <span class="qty-btn minus-btn" data-id="${item.id}">−</span>
                    <span class="qty-num">${item.qty}</span>
                    <span class="qty-btn plus-btn" data-id="${item.id}">+</span>
                </div>
                <i class="fa-solid fa-trash remove-btn" data-id="${item.id}"></i>
            </div>`;
        cartItemsEl.appendChild(el);
    });

    cartItemsEl.querySelectorAll('.minus-btn').forEach(b => b.addEventListener('click', () => changeQty(b.dataset.id, -1)));
    cartItemsEl.querySelectorAll('.plus-btn').forEach(b  => b.addEventListener('click', () => changeQty(b.dataset.id, 1)));
    cartItemsEl.querySelectorAll('.remove-btn').forEach(b => b.addEventListener('click', () => removeFromCart(b.dataset.id)));

    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    let discount = 0;

    if (discountApplied) {
        discount = subtotal * DISCOUNT;
        promoRow.classList.remove('hidden');
        cartDiscount.textContent = `-$${discount.toFixed(2)}`;
    } else {
        promoRow.classList.add('hidden');
    }

    cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    cartTotal.textContent    = `$${(subtotal - discount).toFixed(2)}`;
}

function applyPromo() {
    if (promoInput.value.trim().toUpperCase() === PROMO_CODE) {
        discountApplied = true;
        showToast('¡Cupón TECH15 aplicado! 15% de descuento', 'success');
        updateCartUI();
    } else {
        showToast('Código de descuento incorrecto', 'error');
    }
}

function checkout() {
    const name    = checkoutName.value.trim();
    const address = checkoutAddress.value.trim();
    const payment = checkoutPayment.value;

    if (!name || !address) {
        showToast('Completá tu nombre y dirección de entrega', 'error');
        return;
    }

    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const discount = discountApplied ? subtotal * DISCOUNT : 0;
    const total    = subtotal - discount;

    let msg = `*🛒 NUEVO PEDIDO — TECHZONE*\n\n`;
    msg += `👤 *Cliente:* ${name}\n`;
    msg += `📍 *Dirección:* ${address}\n`;
    msg += `💳 *Pago:* ${payment}\n`;
    msg += `─────────────────────────\n`;

    cart.forEach(item => {
        msg += `• ${item.emoji} ${item.name} x${item.qty} = *$${(item.price * item.qty).toFixed(2)}*\n`;
    });

    msg += `─────────────────────────\n`;
    msg += `*Subtotal:* $${subtotal.toFixed(2)}\n`;
    if (discountApplied) msg += `*Descuento (TECH15):* -$${discount.toFixed(2)}\n`;
    msg += `*TOTAL: $${total.toFixed(2)}*\n\n`;
    msg += `¡Hola TechZone! Quiero coordinar mi pedido. 🙌`;

    const url = `https://wa.me/51987654321?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');

    cart = [];
    discountApplied = false;
    promoInput.value = '';
    checkoutName.value = '';
    checkoutAddress.value = '';
    saveCart();
    updateCartUI();
    closeCart();
    showToast('¡Pedido enviado! Redirigiendo a WhatsApp...', 'info');
}

function openCart()  { cartDrawer.classList.add('active');    cartOverlay.classList.add('active');    }
function closeCart() { cartDrawer.classList.remove('active'); cartOverlay.classList.remove('active'); }

function animateCartBtn() {
    cartToggleBtn.classList.add('cart-anim');
    setTimeout(() => cartToggleBtn.classList.remove('cart-anim'), 450);
}

/* ==========================================================================
   SLIDER
   ========================================================================== */
function initSlider() {
    sliderDots.innerHTML = '';
    testimonials.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = `dot${i === 0 ? ' active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        sliderDots.appendChild(dot);
    });
    startSliderAuto();
}

function goToSlide(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    currentSlide = (index + testimonials.length) % testimonials.length;
    testimonials[currentSlide].classList.add('active');
    sliderDots.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === currentSlide));
    startSliderAuto();
}

function startSliderAuto() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => goToSlide(currentSlide + 1), 5500);
}

/* ==========================================================================
   EVENT LISTENERS
   ========================================================================== */
function bindEvents() {
    themeToggleBtn.addEventListener('click', toggleTheme);

    mobileToggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggleBtn.querySelector('i');
        icon.className = navMenu.classList.contains('active') ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            navMenu.classList.remove('active');
            mobileToggleBtn.querySelector('i').className = 'fa-solid fa-bars';
        });
    });

    cartToggleBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    btnCartShop && btnCartShop.addEventListener('click', closeCart);

    catalogSearch.addEventListener('input', e => {
        searchQuery = e.target.value;
        renderProducts();
    });

    categoryFilters.addEventListener('click', e => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;
        categoryFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        activeFilter = chip.dataset.category;
        renderProducts();
    });

    btnApplyPromo.addEventListener('click', applyPromo);
    btnCheckout.addEventListener('click', checkout);

    sliderPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
    sliderNext.addEventListener('click', () => goToSlide(currentSlide + 1));

    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('form-name').value;
        showToast(`¡Gracias ${name}! Te respondemos pronto.`, 'success');
        contactForm.reset();
    });

    // Navbar scroll shadow
    window.addEventListener('scroll', () => {
        document.getElementById('navbar').style.boxShadow =
            window.scrollY > 10 ? 'var(--shadow-md)' : '';
    });
}
