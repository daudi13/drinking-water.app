 const smallglasses = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');


smallglasses.forEach((glass, idx) => {
    glass.addEventListener('click', () => fillglasses(idx))
})

function fillglasses(idx) {
    if (smallglasses[idx].classList.contains('full') && !smallglasses[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    smallglasses.forEach((glass, idx2) => {
        if (idx2 <= idx) {
            glass.classList.add('full')
        } else {
            glass.classList.remove('full')
        }
    } )
}