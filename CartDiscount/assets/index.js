const potterPrice = document.querySelector('.PotterPriceNumber');
const citizenPrice = document.querySelector('.CitizenPriceNumber');
const skyfallPrice = document.querySelector('.SkyfallPriceNumber');
const fieldsPrice = document.querySelector('.FieldsPriceNumber');
const withDiscount = document.querySelector('.withDiscount');

const potterPriceNumber = Number(potterPrice.innerHTML);
const citizenPriceNumber = Number(citizenPrice.innerHTML);
const skyfallPriceNumber = Number(skyfallPrice.innerHTML);
const fieldsPriceNumber = Number(fieldsPrice.innerHTML);

const total = potterPriceNumber + citizenPriceNumber + skyfallPriceNumber + fieldsPriceNumber;
const result = document.querySelector('.result');
result.textContent = total;

function getDiscount(){
    const discount = total - (total * 20 / 100);
    result.textContent = discount;
}
withDiscount.addEventListener('click', getDiscount)