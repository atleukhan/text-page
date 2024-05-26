let extraSumSpan = document.querySelector('.extra-products-count');
let extraCheckboxes = document.querySelectorAll('.checkbox');

document.addEventListener('DOMContentLoaded', () => {
    let priceWrapper = document.querySelectorAll('.price-wrapper');
    priceWrapper.forEach(item => {
        let sale = Number(item.querySelector('.sale').getAttribute('data-sum'));
        let price = Number(item.querySelector('.price').getAttribute('data-sum'));
        let discount = item.querySelector('.discount');
        let result = Math.round(100 - (100 * sale) / price);
        discount.innerText = "-" + result + "%";
    });

    updateExtraSum();
});

function updateExtraSum() {
    let extraSum = 0;
    extraCheckboxes.forEach(item => {
        if (item.classList.contains('checked')) {
            extraSum += Number(item.getAttribute('data-sum'));
        }
    });
    extraSumSpan.innerText = extraSum;
}

let typeButtons = document.querySelectorAll('.type-btn');
typeButtons.forEach(item => {
    if (!item.hasAttribute('disabled')) {
        item.onclick = () => {
            item.classList.toggle('btn-orange');
            item.classList.toggle('btn-outline-orange');
        };
    }
});

extraCheckboxes.forEach(item => {
    item.onclick = () => {
        item.classList.toggle('checked');
        updateExtraSum();
        console.log(extraSumSpan.innerText);
    };
});
