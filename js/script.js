function showCategory(category) {
  // Hide all product categories
  const categories = document.querySelectorAll('.product-category');
  categories.forEach(cat => cat.style.display = 'none');

  // Show the selected category
  document.getElementById(category).style.display = 'block';
}

// Initialize to show the first category by default
document.addEventListener('DOMContentLoaded', () => showCategory('vegetables'));
