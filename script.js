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
    let modelPrice = model.value;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerHTML = `<p>Расчетная цена: ${modelPrice}</p>`;
    form.reset();
}

const button = document.getElementById('button');
button.addEventListener('click', calculatePrice);