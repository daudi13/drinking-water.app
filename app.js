const smallglasses = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');


smallglasses.forEach((glass, idx) => {
    glass.addEventListener('click', () => fillglasses(idx))
})

