
const inputName = $('#name');
const inputEmail = $('#mail');
const creditCard = $('#cc-num');
const zipCode = $('#zip');
const cvv = $('#cvv')


document.addEventListener('input', (e)=>{
    console.log(validName(e.target.value));
    console.log(validEmail(e.target.value));
    console.log(validCreditcard(e.target.value));
    console.log(validZip(e.target.value));
    console.log(validCvv(e.target.value));
    
})

function validName (userName){
    if(userName != ''){
        return /^[a-z ,.'-]+$/i.test(userName);         
    }
        return false 
}

function validEmail (userEmail){
    if(userEmail != ''){
        return /^[^@]+@[^@,]+\.[a-z]+$/i.test(userEmail);
    }
        return false
}

function validCreditcard(userCreditcard){
    if(userCreditcard != ''){
        return /^(\d{4}[- ]){3}\d{4}|\d{16}$/.test(userCreditcard);
    }
        return false
}

function validZip(userZip){
    if(userZip != ''){
        return /^[0-9]{5}$/.test(userZip)
    }
        return false
}

function validCvv(userCVV){
    if(userCVV != ''){
        return /^[0-9]{3}$/.test(userCVV)
    }
        return false
}