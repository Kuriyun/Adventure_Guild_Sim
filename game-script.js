// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and panes
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Add click handlers for buttons
document.querySelectorAll('.claim-btn, .buy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const action = btn.classList.contains('claim-btn') ? 'claimed' : 'purchased';
        alert('Item ' + action + ' successfully!');
    });
});

// Equipment and inventory item hover effects
document.querySelectorAll('.equipment-slot, .inventory-item').forEach(item => {
    item.addEventListener('click', () => {
        const name = item.querySelector('p').textContent;
        console.log('Selected: ' + name);
    });
});
