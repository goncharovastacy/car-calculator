const brand = document.querySelector('#brand');

function chooseBrand (){
    if (brand.value === 'Renault'){
        document.getElementById('Opel-model').style.display = 'none'; 
        document.getElementById('Mazda-model').style.display = 'none'; 
        document.getElementById('Jaguar-model').style.display = 'none'; 
    }
    else if (brand.value === 'Opel'){
        document.getElementById('Renault-model').style.display = 'none'; 
        document.getElementById('Mazda-model').style.display = 'none'; 
        document.getElementById('Jaguar-model').style.display = 'none'; 
    }
    else if (brand.value === 'Mazda') {
        document.getElementById('Opel-model').style.display = 'none'; 
        document.getElementById('Renault-model').style.display = 'none'; 
        document.getElementById('Jaguar-model').style.display = 'none'; 
    }
    else if (brand.value === 'Jaguar') {
        document.getElementById('Renault-model').style.display = 'none'; 
        document.getElementById('Opel-model').style.display = 'none'; 
        document.getElementById('Mazda-model').style.display = 'none'; 
    }
}
chooseBrand ();