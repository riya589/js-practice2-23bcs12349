// Get a reference to the dropdown menu and the list of product items
const categoryFilter = document.getElementById('category-filter');
const productItems = document.querySelectorAll('.product-item');

// Add an event listener to the dropdown menu for the 'change' event
categoryFilter.addEventListener('change', (event) => {
    // Get the selected category value from the dropdown
    const selectedCategory = event.target.value;

    // Loop through each product item
    productItems.forEach(item => {
        // Get the category of the current item from its data attribute
        const itemCategory = item.getAttribute('data-category');

        // Check if the item should be displayed based on the selected category
        if (selectedCategory === 'all' || selectedCategory === itemCategory) {
            // Show the item
            item.style.display = 'block';
        } else {
            // Hide the item
            item.style.display = 'none';
        }
    });
});