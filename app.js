 const smallglasses = document.querySelectorAll('.cup-small');
const litres = document.getElementById('litres');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigGlass();

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
    })
    
    updateBigGlass();
}

function updateBigGlass() {
    const fullGlass = document.querySelectorAll('.cup-small.full').length

    const totalglasses = smallglasses.length

    if (fullGlass === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height  = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullGlass / totalglasses * 330}px`
    }

    percentage.innerHTML = `${(fullGlass / totalglasses) * 100}%`;
    remained.innerHTML = `${(fullGlass / totalglasses) * 2}L`;

    }