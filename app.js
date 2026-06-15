/* ==========================================================================
   PRODUCT DATABASE
   ========================================================================== */
const FRUITS_DATA = [
    {
        id: "fresa",
        name: "Fresas Orgánicas",
        category: "berries",
        price: 12.00,
        unit: "kg",
        tag: "Antioxidante",
        emoji: "🍓",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=500&auto=format&fit=crop&q=60",
        color: "235, 77, 75", // RGB color representation for blender liquid blending
        nutrients: { vitC: 80, energy: 35, fiber: 40 },
        benefit: "Rica en vitamina C y antocianinas"
    },
    {
        id: "mango",
        name: "Mango Kent Premium",
        category: "tropical",
        price: 7.50,
        unit: "kg",
        tag: "Dulce & Jugoso",
        emoji: "🥭",
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&auto=format&fit=crop&q=60",
        color: "254, 202, 87",
        nutrients: { vitC: 60, energy: 65, fiber: 50 },
        benefit: "Alto contenido de vitamina A y enzimas"
    },
    {
        id: "naranja",
        name: "Naranja de Mesa",
        category: "citrus",
        price: 4.00,
        unit: "kg",
        tag: "Directo del campo",
        emoji: "🍊",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop&q=60",
        color: "255, 159, 67",
        nutrients: { vitC: 95, energy: 40, fiber: 45 },
        benefit: "Excelente fuente de hidratación y defensas"
    },
    {
        id: "kiwi",
        name: "Kiwi Importado",
        category: "tropical",
        price: 15.00,
        unit: "kg",
        tag: "Superalimento",
        emoji: "🥝",
        image: "https://images.unsplash.com/photo-1585059895524-72359e061381?w=500&auto=format&fit=crop&q=60",
        color: "46, 204, 113",
        nutrients: { vitC: 100, energy: 45, fiber: 60 },
        benefit: "Doble vitamina C que una naranja"
    },
    {
        id: "platano",
        name: "Plátano de Seda",
        category: "tropical",
        price: 3.50,
        unit: "kg",
        tag: "Energía pura",
        emoji: "🍌",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&auto=format&fit=crop&q=60",
        color: "255, 234, 167",
        nutrients: { vitC: 20, energy: 90, fiber: 55 },
        benefit: "Rico en potasio y carbohidratos sanos"
    },
    {
        id: "arandanos",
        name: "Arándanos Azules",
        category: "berries",
        price: 18.00,
        unit: "kg",
        tag: "Salud Cerebral",
        emoji: "🫐",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=500&auto=format&fit=crop&q=60",
        color: "72, 84, 96",
        nutrients: { vitC: 45, energy: 40, fiber: 70 },
        benefit: "Poderoso protector celular y antiinflamatorio"
    },
    {
        id: "sandia",
        name: "Sandía Baby",
        category: "melons",
        price: 9.00,
        unit: "und",
        tag: "Frescura Máxima",
        emoji: "🍉",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&auto=format&fit=crop&q=60",
        color: "255, 107, 129",
        nutrients: { vitC: 30, energy: 30, fiber: 20 },
        benefit: "92% de agua pura, altamente hidratante"
    },
    {
        id: "pina",
        name: "Piña Golden",
        category: "tropical",
        price: 6.00,
        unit: "und",
        tag: "Diurética",
        emoji: "🍍",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&auto=format&fit=crop&q=60",
        color: "255, 211, 42",
        nutrients: { vitC: 75, energy: 50, fiber: 65 },
        benefit: "Contiene bromelina para mejorar la digestión"
    },
    {
        id: "manzana",
        name: "Manzana Fuji",
        category: "sweet",
        price: 6.50,
        unit: "kg",
        tag: "Saciante",
        emoji: "🍎",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500&auto=format&fit=crop&q=60",
        color: "255, 94, 87",
        nutrients: { vitC: 15, energy: 50, fiber: 80 },
        benefit: "Excelente fibra soluble (pectina)"
    },
    {
        id: "durazno",
        name: "Durazno Blanquillo",
        category: "sweet",
        price: 8.00,
        unit: "kg",
        tag: "Piel Sana",
        emoji: "🍑",
        image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500&auto=format&fit=crop&q=60",
        color: "255, 178, 115",
        nutrients: { vitC: 25, energy: 45, fiber: 40 },
        benefit: "Alto contenido de betacarotenos"
    },
    {
        id: "limon",
        name: "Limón Sutil",
        category: "citrus",
        price: 5.00,
        unit: "kg",
        tag: "Esencial",
        emoji: "🍋",
        image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=500&auto=format&fit=crop&q=60",
        color: "241, 196, 15",
        nutrients: { vitC: 90, energy: 15, fiber: 25 },
        benefit: "Alcalinizante natural y desintoxicante"
    },
    {
        id: "maracuya",
        name: "Maracuyá Premium",
        category: "citrus",
        price: 6.00,
        unit: "kg",
        tag: "Relajante",
        emoji: "🍇",
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60",
        color: "186, 220, 88",
        nutrients: { vitC: 50, energy: 60, fiber: 75 },
        benefit: "Rico en nutrientes y ayuda a calmar el estrés"
    }
];

/* ==========================================================================
   APP STATE
   ========================================================================== */
let cart = JSON.parse(localStorage.getItem('tuvecindad_cart')) || [];
let activeFilter = 'all';
let searchQuery = '';
let discountApplied = false;
const DISCOUNT_CODE = "VECINO10";
const DISCOUNT_RATE = 0.10;

// Blender selected fruits
let selectedBlenderFruits = [];

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */
// Header / Nav
const themeToggle = document.getElementById('theme-toggle');
const cartToggleBtn = document.getElementById('cart-toggle-btn');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const cartBadge = document.getElementById('cart-badge');

// Catalog
const productsGrid = document.getElementById('products-grid');
const searchInput = document.getElementById('catalog-search');
const filterChipsContainer = document.getElementById('category-filters');

// Blender
const blenderIngredientsPool = document.getElementById('blender-ingredients-pool');
const blenderDevice = document.getElementById('blender-device');
const blenderInsideFruits = document.getElementById('blender-inside-fruits');
const blenderLiquid = document.getElementById('blender-liquid');
const btnBlend = document.getElementById('btn-blend');
const btnResetBlender = document.getElementById('btn-reset-blender');
const vitCBar = document.getElementById('vit-c-bar');
const vitCVal = document.getElementById('vit-c-val');
const energyBar = document.getElementById('energy-bar');
const energyVal = document.getElementById('energy-val');
const fiberBar = document.getElementById('fiber-bar');
const fiberVal = document.getElementById('fiber-val');
const recipeEmpty = document.getElementById('recipe-empty');
const recipeContent = document.getElementById('recipe-content');
const recipeTitle = document.getElementById('recipe-title');
const recipeDesc = document.getElementById('recipe-desc');
const btnAddSmoothieCart = document.getElementById('btn-add-smoothie-cart');

// Cart Drawer
const cartDrawer = document.getElementById('cart-drawer');
const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartItemsContainer = document.getElementById('cart-items');
const cartEmptyElement = document.getElementById('cart-empty');
const cartDrawerFooter = document.getElementById('cart-drawer-footer');
const cartSubtotalElement = document.getElementById('cart-subtotal');
const cartDiscountElement = document.getElementById('cart-discount');
const cartTotalElement = document.getElementById('cart-total');
const promoRow = document.getElementById('promo-row');
const promoCodeInput = document.getElementById('promo-code-input');
const btnApplyPromo = document.getElementById('btn-apply-promo');
const checkoutName = document.getElementById('checkout-name');
const checkoutAddress = document.getElementById('checkout-address');
const checkoutPayment = document.getElementById('checkout-payment');
const btnCheckoutWhatsapp = document.getElementById('btn-checkout-whatsapp');
const btnCartShopNow = document.getElementById('btn-cart-shop-now');

// Contact & Toast
const contactForm = document.getElementById('contact-form');
const toastContainer = document.getElementById('toast-container');

// Testimonials Slider
const testimonials = document.querySelectorAll('.testimonial-card');
const sliderPrev = document.getElementById('slider-prev');
const sliderNext = document.getElementById('slider-next');
const sliderDotsContainer = document.getElementById('slider-dots');
let currentTestimonialIndex = 0;
let testimonialInterval;

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderCatalog();
    renderBlenderSelector();
    updateCartUI();
    initTestimonialsSlider();
    setupEventListeners();
});

/* ==========================================================================
   THEME MANAGER (Light/Dark Mode)
   ========================================================================== */
function initTheme() {
    const savedTheme = localStorage.getItem('tuvecindad_theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function toggleTheme() {
    if (document.body.classList.contains('light-theme')) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('tuvecindad_theme', 'dark');
        showToast("¡Modo Oscuro activado!", "info");
    } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('tuvecindad_theme', 'light');
        showToast("¡Modo Claro activado!", "info");
    }
}

/* ==========================================================================
   TOAST SYSTEM
   ========================================================================== */
function showToast(message, type = "success") {
    const toast = document.createElement('div');
    toast.className = `toast ${type === 'accent' ? 'toast-accent' : ''}`;
    
    let iconHTML = '<i class="fa-solid fa-circle-check toast-icon"></i>';
    if (type === 'error') {
        iconHTML = '<i class="fa-solid fa-circle-exclamation toast-icon"></i>';
    } else if (type === 'info') {
        iconHTML = '<i class="fa-solid fa-circle-info toast-icon"></i>';
    }
    
    toast.innerHTML = `
        ${iconHTML}
        <span class="toast-message">${message}</span>
    `;
    
    toastContainer.appendChild(toast);
    
    // Auto-remove after 3.5 seconds
    setTimeout(() => {
        toast.style.animation = 'toast-slide-in 0.4s ease reverse';
        setTimeout(() => {
            toast.remove();
        }, 400);
    }, 3500);
}

/* ==========================================================================
   CATALOG RENDER & FILTER
   ========================================================================== */
function renderCatalog() {
    productsGrid.innerHTML = '';
    
    const filteredFruits = FRUITS_DATA.filter(fruit => {
        const matchesCategory = activeFilter === 'all' || fruit.category === activeFilter;
        const matchesSearch = fruit.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              fruit.benefit.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredFruits.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-products text-center" style="grid-column: 1 / -1; padding: 40px; color: var(--text-light);">
                <i class="fa-solid fa-circle-info" style="font-size: 2.5rem; margin-bottom: 12px;"></i>
                <p>No encontramos frutas con ese nombre en la vecindad. ¡Intenta con otra búsqueda!</p>
            </div>
        `;
        return;
    }

    filteredFruits.forEach(fruit => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <span class="product-tag">${fruit.tag}</span>
            <div class="product-image-container">
                <img src="${fruit.image}" alt="${fruit.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${fruit.emoji} ${fruit.name}</h3>
                <p class="product-benefit"><i class="fa-solid fa-circle-check"></i> ${fruit.benefit}</p>
                <div class="product-meta">
                    <div class="product-price-wrapper">
                        <span class="product-price">S/ ${fruit.price.toFixed(2)}</span>
                        <span class="product-unit">por ${fruit.unit}</span>
                    </div>
                    <button class="add-to-cart-btn" data-id="${fruit.id}" aria-label="Añadir ${fruit.name} al carrito">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });

    // Rebind add to cart click listeners
    const addBtns = productsGrid.querySelectorAll('.add-to-cart-btn');
    addBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = btn.getAttribute('data-id');
            addToCart(id);
            triggerCartBtnAnimation();
        });
    });
}

// Bounce cart button when adding item
function triggerCartBtnAnimation() {
    cartToggleBtn.classList.add('cart-added-shake');
    setTimeout(() => {
        cartToggleBtn.classList.remove('cart-added-shake');
    }, 500);
}

/* ==========================================================================
   CART LOGIC & WHATSAPP CHECKOUT
   ========================================================================== */
function addToCart(productId) {
    const fruit = FRUITS_DATA.find(item => item.id === productId);
    if (!fruit) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
        showToast(`Agregaste más ${fruit.name} al carrito.`);
    } else {
        cart.push({
            id: fruit.id,
            name: fruit.name,
            price: fruit.price,
            unit: fruit.unit,
            emoji: fruit.emoji,
            image: fruit.image,
            quantity: 1
        });
        showToast(`Agregaste ${fruit.name} al carrito!`);
    }

    saveCart();
    updateCartUI();
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    const item = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    if (item) {
        showToast(`Eliminaste ${item.name} del carrito`, "error");
    }
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('tuvecindad_cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update count Badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalItems;
    cartBadge.style.transform = 'scale(1.2)';
    setTimeout(() => {
        cartBadge.style.transform = 'scale(1)';
    }, 200);

    if (cart.length === 0) {
        cartEmptyElement.classList.remove('hidden');
        cartItemsContainer.classList.add('hidden');
        cartDrawerFooter.classList.add('hidden');
    } else {
        cartEmptyElement.classList.add('hidden');
        cartItemsContainer.classList.remove('hidden');
        cartDrawerFooter.classList.remove('hidden');

        // Render line items
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.emoji} ${item.name}</h4>
                    <span class="cart-item-price">S/ ${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div class="cart-item-actions">
                    <div class="quantity-controller">
                        <span class="quantity-btn min-btn" data-id="${item.id}">-</span>
                        <span class="quantity-num">${item.quantity}</span>
                        <span class="quantity-btn plus-btn" data-id="${item.id}">+</span>
                    </div>
                    <i class="fa-solid fa-trash remove-item-btn" data-id="${item.id}" aria-label="Eliminar item"></i>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        // Add events to quantities
        cartItemsContainer.querySelectorAll('.min-btn').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(btn.getAttribute('data-id'), -1));
        });
        cartItemsContainer.querySelectorAll('.plus-btn').forEach(btn => {
            btn.addEventListener('click', () => updateQuantity(btn.getAttribute('data-id'), 1));
        });
        cartItemsContainer.querySelectorAll('.remove-item-btn').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-id')));
        });

        // Calculate pricing
        const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let discount = 0;
        
        if (discountApplied) {
            discount = subtotal * DISCOUNT_RATE;
            promoRow.classList.remove('hidden');
            cartDiscountElement.textContent = `- S/ ${discount.toFixed(2)}`;
        } else {
            promoRow.classList.add('hidden');
        }

        const total = subtotal - discount;
        cartSubtotalElement.textContent = `S/ ${subtotal.toFixed(2)}`;
        cartTotalElement.textContent = `S/ ${total.toFixed(2)}`;
    }
}

function applyCoupon() {
    const inputVal = promoCodeInput.value.trim().toUpperCase();
    if (inputVal === DISCOUNT_CODE) {
        discountApplied = true;
        showToast("Cupón aplicado: ¡Descuento de Vecino del 10%!", "success");
        updateCartUI();
    } else {
        showToast("Código de descuento inválido", "error");
    }
}

function processCheckout() {
    const name = checkoutName.value.trim();
    const address = checkoutAddress.value.trim();
    const payment = checkoutPayment.value;

    if (!name || !address) {
        showToast("Por favor complete su nombre y dirección de entrega.", "error");
        return;
    }

    // Build the message
    let message = `*🍊 PEDIDO NUEVO - TUVECINDAD 🍉*\n\n`;
    message += `*Cliente:* ${name}\n`;
    message += `*Dirección:* ${address}\n`;
    message += `*Método de Pago:* ${payment}\n`;
    message += `-------------------------------------------\n`;
    
    cart.forEach(item => {
        const itemTotal = (item.price * item.quantity).toFixed(2);
        message += `• ${item.emoji} ${item.name} (${item.quantity} x S/ ${item.price.toFixed(2)}) = *S/ ${itemTotal}*\n`;
    });

    message += `-------------------------------------------\n`;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `*Subtotal:* S/ ${subtotal.toFixed(2)}\n`;

    if (discountApplied) {
        const discount = subtotal * DISCOUNT_RATE;
        message += `*Descuento (VECINO10):* - S/ ${discount.toFixed(2)}\n`;
        message += `*Total Neto:* *S/ ${(subtotal - discount).toFixed(2)}*\n`;
    } else {
        message += `*Total Neto:* *S/ ${subtotal.toFixed(2)}*\n`;
    }

    message += `\n¡Hola! Quisiera coordinar el despacho y pago de mi pedido. Quedo atento.`;

    // Encode URL
    const whatsappUrl = `https://wa.me/51987654321?text=${encodeURIComponent(message)}`;
    
    // Open Whatsapp
    window.open(whatsappUrl, '_blank');
    
    // Optional: Clear cart after order coordination
    cart = [];
    discountApplied = false;
    promoCodeInput.value = '';
    checkoutName.value = '';
    checkoutAddress.value = '';
    saveCart();
    updateCartUI();
    closeCart();
    
    showToast("Pedido enviado. Redirigiendo a WhatsApp...", "accent");
}

function openCart() {
    cartDrawer.classList.add('active');
    cartDrawerOverlay.classList.add('active');
}

function closeCart() {
    cartDrawer.classList.remove('active');
    cartDrawerOverlay.classList.remove('active');
}

/* ==========================================================================
   SMOOTHIE MAKER INTERACTIVITY (Blender)
   ========================================================================== */
function renderBlenderSelector() {
    blenderIngredientsPool.innerHTML = '';
    
    // Only display select few fruits in blender pool that are highly nutritious and make great combinations
    const blenderFruits = FRUITS_DATA.filter(f => ['fresa', 'mango', 'naranja', 'kiwi', 'platano', 'arandanos', 'pina', 'sandia'].includes(f.id));
    
    blenderFruits.forEach(fruit => {
        const chip = document.createElement('button');
        chip.className = 'ingredient-chip';
        chip.setAttribute('data-id', fruit.id);
        chip.innerHTML = `
            <span>${fruit.emoji} ${fruit.name.split(' ')[0]}</span>
            <span class="add-icon"><i class="fa-solid fa-plus"></i></span>
        `;
        
        chip.addEventListener('click', () => toggleBlenderIngredient(fruit.id, chip));
        blenderIngredientsPool.appendChild(chip);
    });
}

function toggleBlenderIngredient(fruitId, chipElement) {
    const index = selectedBlenderFruits.indexOf(fruitId);
    
    if (index > -1) {
        // Remove ingredient
        selectedBlenderFruits.splice(index, 1);
        chipElement.classList.remove('selected');
        chipElement.querySelector('.add-icon').innerHTML = '<i class="fa-solid fa-plus"></i>';
        removeFruitVisual(fruitId);
        showToast(`Removiste la fruta de la licuadora.`);
    } else {
        // Add ingredient (limit to 3)
        if (selectedBlenderFruits.length >= 3) {
            showToast("¡La licuadora ya está llena! Máximo 3 frutas.", "error");
            return;
        }
        selectedBlenderFruits.push(fruitId);
        chipElement.classList.add('selected');
        chipElement.querySelector('.add-icon').innerHTML = '<i class="fa-solid fa-check"></i>';
        addFruitVisual(fruitId);
        showToast(`Agregaste la fruta a la licuadora.`);
    }

    calculateBlenderNutrition();
}

function addFruitVisual(fruitId) {
    const fruit = FRUITS_DATA.find(f => f.id === fruitId);
    if (!fruit) return;

    const fruitElement = document.createElement('span');
    fruitElement.className = 'bfruit';
    fruitElement.setAttribute('data-id', fruitId);
    fruitElement.textContent = fruit.emoji;
    
    // Random position inside the jar
    const randomLeft = 20 + Math.random() * 50; // Between 20% and 70%
    const randomBottom = 20 + Math.random() * 60; // Between 20px and 80px
    const randomRotate = Math.random() * 360;

    fruitElement.style.left = `${randomLeft}%`;
    fruitElement.style.bottom = `${randomBottom}px`;
    fruitElement.style.transform = `rotate(${randomRotate}deg)`;

    blenderInsideFruits.appendChild(fruitElement);
    
    // Change liquid color based on current mix
    updateLiquidColor();
    
    // Increase liquid visual slightly
    const heightPercentage = selectedBlenderFruits.length * 15;
    blenderLiquid.style.height = `${heightPercentage}%`;
}

function removeFruitVisual(fruitId) {
    const fruitElements = blenderInsideFruits.querySelectorAll(`.bfruit[data-id="${fruitId}"]`);
    if (fruitElements.length > 0) {
        // Remove the last added visual element matching this fruit ID
        fruitElements[fruitElements.length - 1].remove();
    }
    
    // Change liquid color
    updateLiquidColor();
    
    // Decrease liquid visual
    const heightPercentage = selectedBlenderFruits.length * 15;
    blenderLiquid.style.height = `${heightPercentage}%`;
}

function updateLiquidColor() {
    if (selectedBlenderFruits.length === 0) {
        blenderLiquid.style.backgroundColor = 'transparent';
        return;
    }

    // Average colors of selected fruits
    let r = 0, g = 0, b = 0;
    selectedBlenderFruits.forEach(id => {
        const fruit = FRUITS_DATA.find(f => f.id === id);
        if (fruit) {
            const rgbValues = fruit.color.split(',');
            r += parseInt(rgbValues[0]);
            g += parseInt(rgbValues[1]);
            b += parseInt(rgbValues[2]);
        }
    });

    const count = selectedBlenderFruits.length;
    const avgR = Math.round(r / count);
    const avgG = Math.round(g / count);
    const avgB = Math.round(b / count);

    // Apply color to liquid with transparency
    blenderLiquid.style.backgroundColor = `rgba(${avgR}, ${avgG}, ${avgB}, 0.55)`;
}

function calculateBlenderNutrition() {
    if (selectedBlenderFruits.length === 0) {
        vitCBar.style.width = '0%';
        vitCVal.textContent = '0%';
        energyBar.style.width = '0%';
        energyVal.textContent = '0%';
        fiberBar.style.width = '0%';
        fiberVal.textContent = '0%';
        
        recipeEmpty.classList.remove('hidden');
        recipeContent.classList.add('hidden');
        return;
    }

    // Sum nutrients and cap at 100%
    let totalC = 0, totalEnergy = 0, totalFiber = 0;
    selectedBlenderFruits.forEach(id => {
        const fruit = FRUITS_DATA.find(f => f.id === id);
        if (fruit) {
            totalC += fruit.nutrients.vitC;
            totalEnergy += fruit.nutrients.energy;
            totalFiber += fruit.nutrients.fiber;
        }
    });

    // Divide by selected fruit count for averages, plus a small variety bonus
    const count = selectedBlenderFruits.length;
    const bonus = count > 1 ? (count * 8) : 0; // Bonus for mixing variety

    const finalC = Math.min(Math.round((totalC / count) + bonus), 100);
    const finalEnergy = Math.min(Math.round((totalEnergy / count) + bonus), 100);
    const finalFiber = Math.min(Math.round((totalFiber / count) + bonus), 100);

    // Update Dashboard UI
    vitCBar.style.width = `${finalC}%`;
    vitCVal.textContent = `${finalC}%`;
    energyBar.style.width = `${finalEnergy}%`;
    energyVal.textContent = `${finalEnergy}%`;
    fiberBar.style.width = `${finalFiber}%`;
    fiberVal.textContent = `${finalFiber}%`;
}

function mixSmoothie() {
    if (selectedBlenderFruits.length === 0) {
        showToast("¡Por favor, agrega al menos una fruta a la licuadora primero!", "error");
        return;
    }

    // Add blending class for animations
    blenderDevice.classList.add('blending');
    btnBlend.textContent = "LICUANDO...";
    
    // Raise liquid level during blend
    blenderLiquid.style.height = '75%';

    showToast("¡Licuando tu combinación de frutas...!", "info");

    setTimeout(() => {
        // Stop blending animations
        blenderDevice.classList.remove('blending');
        btnBlend.textContent = "LICUAR";
        blenderLiquid.style.height = '60%'; // settles back down

        // Generate recipe based on selection
        generateRecipeName();
    }, 2800);
}

function generateRecipeName() {
    const fruits = selectedBlenderFruits.map(id => FRUITS_DATA.find(f => f.id === id));
    
    let title = "";
    let desc = "";
    
    const fruitNames = fruits.map(f => f.name.split(' ')[0]).join(' y ');

    // Match recipe configurations
    const hasCitrus = fruits.some(f => f.category === 'citrus');
    const hasBerries = fruits.some(f => f.category === 'berries');
    const hasBanana = selectedBlenderFruits.includes('platano');
    const hasMango = selectedBlenderFruits.includes('mango');

    if (fruits.length === 1) {
        title = `Zumo Puro de ${fruits[0].name.split(' ')[0]}`;
        desc = `Disfruta el sabor 100% natural y concentrado de esta fruta de la vecindad. Un clásico repleto de beneficios.`;
    } else if (hasCitrus && hasBerries) {
        title = "Batido Antioxidante Inmuno-C";
        desc = `Una poderosa fusión cítrica y de bayas con un impulso masivo de vitamina C para fortalecer tus defensas. (${fruitNames}).`;
    } else if (hasBanana && hasMango) {
        title = "Super Combustible Tropical";
        desc = `Batido sumamente cremoso, perfecto para tomar antes de entrenar o como desayuno rápido y energizante. (${fruitNames}).`;
    } else if (hasBerries && hasBanana) {
        title = "Fresa & Plátano Velvet";
        desc = `El balance perfecto de cremosidad y acidez natural. Encantador para niños y deportistas. (${fruitNames}).`;
    } else if (fruits.length === 3) {
        title = "El Especial de la Vecindad";
        desc = `Nuestra mezcla triple estrella. Con un equilibrio fantástico de antioxidantes, hidratación y fibra para el día a día. (${fruitNames}).`;
    } else {
        title = "Cóctel Refrescante Vecinal";
        desc = `Combinación deliciosa y ligera de frutas de temporada ideal para un día caluroso. (${fruitNames}).`;
    }

    // Show Recipe content
    recipeTitle.textContent = title;
    recipeDesc.textContent = desc;
    recipeEmpty.classList.add('hidden');
    recipeContent.classList.remove('hidden');
    
    showToast("¡Batido listo para servir!", "success");
}

function addSmoothieComboToCart() {
    if (selectedBlenderFruits.length === 0) return;

    // Add each fruit from blender directly to the shopping cart
    selectedBlenderFruits.forEach(id => {
        addToCart(id);
    });

    showToast("¡Se agregaron las frutas del batido a tu carrito!", "accent");
    openCart();
}

function resetBlender() {
    selectedBlenderFruits = [];
    blenderInsideFruits.innerHTML = '';
    blenderLiquid.style.height = '0%';
    blenderLiquid.style.backgroundColor = 'transparent';
    
    // Reset selection chips classes
    document.querySelectorAll('.ingredient-chip').forEach(chip => {
        chip.classList.remove('selected');
        chip.querySelector('.add-icon').innerHTML = '<i class="fa-solid fa-plus"></i>';
    });

    calculateBlenderNutrition();
    showToast("Licuadora vaciada con éxito.", "info");
}

/* ==========================================================================
   TESTIMONIALS SLIDER
   ========================================================================== */
function initTestimonialsSlider() {
    // Generate navigation dots
    sliderDotsContainer.innerHTML = '';
    testimonials.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => showTestimonial(idx));
        sliderDotsContainer.appendChild(dot);
    });

    startSliderAutoplay();
}

function showTestimonial(index) {
    testimonials.forEach(t => t.classList.remove('active'));
    
    // Handle wrap-around
    if (index >= testimonials.length) {
        currentTestimonialIndex = 0;
    } else if (index < 0) {
        currentTestimonialIndex = testimonials.length - 1;
    } else {
        currentTestimonialIndex = index;
    }

    testimonials[currentTestimonialIndex].classList.add('active');
    
    // Update dots
    const dots = sliderDotsContainer.querySelectorAll('.dot');
    dots.forEach((dot, idx) => {
        if (idx === currentTestimonialIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });

    // Reset autoplay interval
    startSliderAutoplay();
}

function startSliderAutoplay() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => {
        showTestimonial(currentTestimonialIndex + 1);
    }, 6000);
}

/* ==========================================================================
   EVENT LISTENERS SETUP
   ========================================================================== */
function setupEventListeners() {
    // Theme Switcher
    themeToggle.addEventListener('click', toggleTheme);

    // Mobile Menu Toggle
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fa-solid fa-xmark';
        } else {
            icon.className = 'fa-solid fa-bars';
        }
    });

    // Nav Links smooth close mobile menu
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileToggle.querySelector('i').className = 'fa-solid fa-bars';
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Cart Drawer Controls
    cartToggleBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartDrawerOverlay.addEventListener('click', closeCart);
    btnCartShopNow.addEventListener('click', closeCart);

    // Coupon Code
    btnApplyPromo.addEventListener('click', applyCoupon);

    // Checkout Form
    btnCheckoutWhatsapp.addEventListener('click', processCheckout);

    // Search and Filters in Catalog
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderCatalog();
    });

    // Event delegation for category filter chips
    filterChipsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-chip')) {
            const chips = filterChipsContainer.querySelectorAll('.filter-chip');
            chips.forEach(c => c.classList.remove('active'));
            
            e.target.classList.add('active');
            activeFilter = e.target.getAttribute('data-category');
            renderCatalog();
        }
    });

    // Blender interaction actions
    btnBlend.addEventListener('click', mixSmoothie);
    btnResetBlender.addEventListener('click', resetBlender);
    btnAddSmoothieCart.addEventListener('click', addSmoothieComboToCart);

    // Testimonial sliders
    sliderPrev.addEventListener('click', () => showTestimonial(currentTestimonialIndex - 1));
    sliderNext.addEventListener('click', () => showTestimonial(currentTestimonialIndex + 1));

    // Contact form submit listener
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('form-name').value;
        showToast(`¡Gracias por escribirnos, ${name}! Te responderemos pronto.`, "success");
        contactForm.reset();
    });
}
