const brand = document.querySelector('#brand');

//показ марки и моделей по умолчанию
document.getElementById('Renault').selected = true; 
const renaultModel = document.getElementById('Renault-model');
const opelModel = document.getElementById('Opel-model');
const mazdaModel = document.getElementById('Mazda-model');
const jaguarModel = document.getElementById('Jaguar-model');
renaultModel.style.display = '';
opelModel.style.display = 'none'; 
mazdaModel.style.display = 'none'; 
jaguarModel.style.display = 'none';
document.getElementById('Arkana').selected = true; 
document.getElementById('Antara').selected = true; 
document.getElementById('Axela').selected = true; 
document.getElementById('F-Pace').selected = true; 

let model;

function chooseBrand (){
    if (brand.value === 'Renault'){
        renaultModel.style.display = '';
        opelModel.style.display = 'none'; 
        mazdaModel.style.display = 'none'; 
        jaguarModel.style.display = 'none'; 
    }
    else if (brand.value === 'Opel'){
        renaultModel.style.display = 'none'; 
        opelModel.style.display = '';
        mazdaModel.style.display = 'none'; 
        jaguarModel.style.display = 'none'; 
    }
    else if (brand.value === 'Mazda') {
        opelModel.style.display = 'none'; 
        renaultModel.style.display = 'none'; 
        mazdaModel.style.display = '';
        jaguarModel.style.display = 'none'; 
    }
    else if (brand.value === 'Jaguar') {
        renaultModel.style.display = 'none'; 
        opelModel.style.display = 'none'; 
        mazdaModel.style.display = 'none'; 
        jaguarModel.style.display = '';
    }
}
brand.addEventListener('change', chooseBrand);

//показ состояния машины по умолчанию
document.getElementById('conditions').style.display = 'none';
const firstCondition = document.getElementById('condition1');
firstCondition.checked = true;
//выбор состояния машины
const secondCondition = document.getElementById('condition2');
function chooseCondition(){
    if (secondCondition.checked) {document.getElementById('conditions').style.display = ''};
}
secondCondition.addEventListener('change', chooseCondition);

//рассчет полной стоимости
function calculatePrice (evt) {
    evt.preventDefault();
    //список моделей
    if (brand.value === 'Renault'){
        model = renaultModel;
    }
    else if (brand.value === 'Opel'){
        model = opelModel;
    }
    else if (brand.value === 'Mazda') {
        model = mazdaModel;
    }
    else if (brand.value === 'Jaguar') {
        model = jaguarModel;
    }
    const modelPrice = model.value;
    
    let totalPrice = +modelPrice;
    //прибавляем тип топлива
    const fuelType = document.querySelectorAll('.fuel');
    for (let i = 0; i < fuelType.length; i++) {
        if (fuelType[i].checked === true) {
            totalPrice = totalPrice + +fuelType[i].value;
        }
    }

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
        const exOwner = document.querySelectorAll('input[name="ex-owner"]');
        for (let i = 0; i < exOwner.length; i++){
            if (exOwner[i].checked === true){
                totalPrice = totalPrice - (totalPrice * +exOwner[i].value);
            }
        }
    }

    // скидка на оплату
    const payment = document.querySelectorAll('input[name="payment"]');
    for (let i = 0; i < payment.length; i++){
        if (payment[i].checked === true) {
            totalPrice = totalPrice - (totalPrice * +payment[i].value);
        }
    }

    const priceText = document.getElementById('total-price');
    priceText.innerHTML = `<p>Расчетная цена: ${totalPrice}</p>`;
    form.reset();
}

const button = document.getElementById('button');
// button.addEventListener('click', calculatePrice);

button.addEventListener('click', function() {
    if(document.getElementById('capacity').value === "") {
      alert('Введите объем двигателя');
    } else { calculatePrice (); }
  });