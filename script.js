'use strict';

// переменные
const brand = document.querySelector('#brand');
const carModel = document.querySelector('#model');
const button = document.getElementById('button');

// показ по умолчанию
document.querySelector('.car-model').style.display = 'none';
document.getElementById('none').selected = true;

// объекты с моделями
const renaultModel = {
    Arkana: 1100000,
    Duster: 1200000,
    Fluence: 1300000,
    Grand: 1400000,
    Kaptur: 1500000
}
const opelModel = {
    Antara: 1110000,
    Astra: 1210000,
    Astra: 1310000,
    Astra: 1410000,
    Corsa: 1510000
}

const mazdaModel = {
    Axela: 700000,
    Biante: 800000,
    Mazda3: 900000,
    Mazda6: 600000,
    Demio: 500000
}

const jaguarModel = {
    XF: 30200000,
    XJ: 3500000
}

// функция выбора бренда
function chooseBrand () {
    if (brand.value === 'none'){
        document.querySelector('.car-model').style.display = 'none';
    }
    else if (brand.value === 'Renault'){
        chooseModelList(renaultModel, carModel);
    }
    else if (brand.value === 'Opel'){
        chooseModelList(opelModel, carModel);
    }
    else if (brand.value === 'Mazda') {
        chooseModelList(mazdaModel, carModel);
    }
    else if (brand.value === 'Jaguar') {
        chooseModelList(jaguarModel, carModel);
    }
}

brand.addEventListener('change', chooseBrand);

// функция добавления списка моделей
function chooseModelList (obj, element){
    document.querySelector('.car-model').style.display = '';
    element.innerHTML = '';
    for (let key in obj) {
    const option = document.createElement('option');
    option.value = obj[key];
    option.innerText = key;
    element.appendChild(option);
}}

//показ состояния машины по умолчанию
document.getElementById('conditions').style.display = 'none';
const firstCondition = document.getElementById('condition1');
firstCondition.checked = true;

//выбор состояния машины
const secondCondition = document.getElementById('condition2');
function chooseCondition(){
    if (secondCondition.checked) {document.getElementById('conditions').style.display = ''}
    else {document.getElementById('conditions').style.display = 'none'};
}
firstCondition.addEventListener('change', chooseCondition);
secondCondition.addEventListener('change', chooseCondition);

//рассчет полной стоимости
function calculatePrice () {
   
    const modelPrice = carModel.value;

    let totalPrice = +modelPrice;
    //прибавляем тип топлива
    const fuelType = document.querySelector('input[name="fuel"]:checked');
    totalPrice = totalPrice + +fuelType.value;


    //прибавляем объем двигателя
    const capacity = document.getElementById('capacity').value;
    if (+capacity <= 2){
        totalPrice = totalPrice + 3000;
    }
    else if (+capacity <= 3){
        totalPrice = totalPrice + 5000;
    }
    else {
        totalPrice = totalPrice + 7000;
    }

    // делаем скидку в зависимости от того, сколько было владельцев
    if (secondCondition.checked) {
        const exOwner = document.querySelector('input[name="ex-owner"]:checked');
        totalPrice = totalPrice - (totalPrice * +exOwner.value);
    }

    // скидка на оплату
    const payment = document.querySelector('input[name="payment"]:checked');
    totalPrice = totalPrice - (totalPrice * +payment.value);

    const priceText = document.getElementById('total-price');
    priceText.innerHTML = `<p>Расчетная цена: ${totalPrice}</p>`;
    document.querySelector('.car-model').style.display = 'none';
    form.reset();
}

// если поле с объемом двигателя пустое, то функция не сработает
button.addEventListener('click', function(evt) {
    evt.preventDefault();
    if(document.getElementById('capacity').value === "" || brand.value === 'none') {
      alert('Выберите все значения');
    } 
    else { calculatePrice (); }
  });