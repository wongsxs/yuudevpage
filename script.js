document.addEventListener('DOMContentLoaded', () => {
    // Checkout Modal Elements
    const modal = document.getElementById('checkout-modal');
    const closeModal = document.querySelector('.close-modal');
    const checkoutBtns = document.querySelectorAll('.btn-checkout');
    const checkoutForm = document.getElementById('checkout-form');
    const paymentResult = document.getElementById('payment-result');
    const closePaymentBtn = document.querySelector('.btn-close-payment');
    
    const modalProductTitle = document.getElementById('modal-product-title');
    const modalProductPrice = document.getElementById('modal-product-price');
    const merchantOrderId = document.getElementById('merchant-order-id');

    // Handle Open Checkout Modal
    checkoutBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productName = btn.getAttribute('data-name') || 'Voucher Photobox';
            const productPrice = btn.getAttribute('data-price') || '10000';
            
            modalProductTitle.innerText = `Pemesanan: ${productName}`;
            modalProductPrice.innerText = `Rp ${parseInt(productPrice).toLocaleString('id-ID')}`;
            
            checkoutForm.style.display = 'block';
            paymentResult.style.display = 'none';
            modal.style.display = 'block';
        });
    });

    // Close Modals
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (closePaymentBtn) {
        closePaymentBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle Form Submit (Simulate Duitku Inquiry Response)
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const randomId = 'PHOTOBOX-' + Math.floor(100000000 + Math.random() * 900000000);
            if (merchantOrderId) {
                merchantOrderId.innerText = randomId;
            }

            checkoutForm.style.display = 'none';
            paymentResult.style.display = 'block';
        });
    }
});
