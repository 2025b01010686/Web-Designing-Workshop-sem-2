document.addEventListener('DOMContentLoaded', function() {
    // Initialize the Bootstrap modal
    const modalElement = document.getElementById('productModal');
    const productModal = new bootstrap.Modal(modalElement);
    
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    
    const detailButtons = document.querySelectorAll('.view-details-btn');

    detailButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-product');
            
            
            modalTitle.innerText = productName + " Specifications";
            modalBody.innerHTML = `
                <p>This is the detailed view for the <strong>${productName}</strong>.</p>
                <ul>
                    <li>Premium Build Quality</li>
                    <li>1 Year Brand Warranty</li>
                    <li>Next Day Delivery Available</li>
                </ul>
            `;

            
            productModal.show();
        });
    });
});