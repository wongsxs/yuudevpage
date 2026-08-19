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
        btn.addEventListener('click', () => {
            const productName = btn.getAttribute('data-name') || 'Voucher Photobox';
            const productPrice = btn.getAttribute('data-price') || '10000';
            
            if (modalProductTitle) modalProductTitle.innerText = `Pemesanan: ${productName}`;
            if (modalProductPrice) modalProductPrice.innerText = `Rp ${parseInt(productPrice).toLocaleString('id-ID')}`;
            
            if (checkoutForm) checkoutForm.style.display = 'block';
            if (paymentResult) paymentResult.style.display = 'none';
            if (modal) modal.style.display = 'block';
        });
    });

    // Close Modals
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    if (closePaymentBtn) {
        closePaymentBtn.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle Form Submit (Simulate Inquiry Response)
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const randomId = 'PHOTOBOX-' + Math.floor(100000000 + Math.random() * 900000000);
            if (merchantOrderId) {
                merchantOrderId.innerText = randomId;
            }

            checkoutForm.style.display = 'none';
            if (paymentResult) paymentResult.style.display = 'block';
        });
    }

    // ==========================================
    // INTERACTIVE KIOSK DEMO CAMERA SIMULATOR
    // ==========================================
    const startDemoBtn = document.getElementById('start-kiosk-demo-btn');
    const viewfinderIcon = document.getElementById('demo-viewfinder-icon');
    const viewfinderText = document.getElementById('demo-viewfinder-text');
    const countdownOverlay = document.getElementById('demo-countdown');
    const flashEffect = document.getElementById('demo-flash');
    const poseSlots = document.querySelectorAll('.pose-slot');

    const poseEmojis = ['📸 Sesi Pose 1', '✌️ Sesi Pose 2', '🥳 Sesi Pose 3', '❤️ Sesi Pose 4'];
    let isRunningDemo = false;

    if (startDemoBtn) {
        startDemoBtn.addEventListener('click', () => {
            if (isRunningDemo) return;
            isRunningDemo = true;

            // Reset slots
            poseSlots.forEach((slot, index) => {
                slot.className = 'pose-slot';
                slot.innerText = `Pose ${index + 1}`;
            });

            startDemoBtn.disabled = true;
            startDemoBtn.innerText = '⚡ DEMO SEDANG BERJALAN...';

            let currentPose = 0;

            function processNextPose() {
                if (currentPose >= 4) {
                    // Demo Finished
                    if (viewfinderIcon) viewfinderIcon.innerText = '✨🎉';
                    if (viewfinderText) viewfinderText.innerHTML = '<span style="color:#10b981; font-weight:800;">4 POSE FOTO TERKUMPUL!</span><br><small style="color:#cbd5e1;">Cetak Strip HD & Download GIF Siap!</small>';
                    startDemoBtn.disabled = false;
                    startDemoBtn.innerText = '🔄 COBA SIMULASI FOTO LAGI';
                    isRunningDemo = false;
                    return;
                }

                // Highlight active slot
                poseSlots.forEach((slot, idx) => {
                    if (idx === currentPose) slot.classList.add('active');
                });

                if (viewfinderIcon) viewfinderIcon.innerText = '📸';
                if (viewfinderText) viewfinderText.innerText = `Bersiap Pose ${currentPose + 1}...`;
                if (countdownOverlay) countdownOverlay.style.display = 'block';

                let count = 3;
                if (countdownOverlay) countdownOverlay.innerText = count;

                const timer = setInterval(() => {
                    count--;
                    if (count > 0) {
                        if (countdownOverlay) countdownOverlay.innerText = count;
                    } else {
                        clearInterval(timer);
                        if (countdownOverlay) countdownOverlay.style.display = 'none';

                        // Flash Effect
                        if (flashEffect) {
                            flashEffect.style.opacity = '1';
                            setTimeout(() => { flashEffect.style.opacity = '0'; }, 150);
                        }

                        // Mark Captured
                        if (poseSlots[currentPose]) {
                            poseSlots[currentPose].className = 'pose-slot captured';
                            poseSlots[currentPose].innerText = poseEmojis[currentPose];
                        }

                        currentPose++;
                        setTimeout(processNextPose, 800);
                    }
                }, 700);
            }

            processNextPose();
        });
    }
});
