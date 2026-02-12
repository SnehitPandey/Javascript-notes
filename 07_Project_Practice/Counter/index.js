let count = 0;

const countDisplay = document.getElementById('countDisplay');
const allBtns = document.querySelectorAll('.button');

allBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.id === 'increase') {
            count++;
        } else if (e.target.id === 'decrease') {
            count--;
        } else if (e.target.id === 'reset') {
            count === 0;
        }

        countDisplay.innerText = count;
    });
});
