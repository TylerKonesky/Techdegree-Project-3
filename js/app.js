
const inputName = $('#name');
const inputEmail = $('#mail');
const creditCard = $('#cc-num');
const zipCode = $('#zip');
const cvv = $('#cvv')


// document.addEventListener('input', (e)=>{
//     console.log(validName(e.target.value));
//     console.log(validEmail(e.target.value));
//     console.log(validCreditcard(e.target.value));
//     console.log(validZip(e.target.value));
//     console.log(validCvv(e.target.value));
    
// })

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

//******************** CONFERENCE EVENTS************************** */

let cost = 100;

const $costDiv = $(`<div id=total-cost-div>Total: $${cost}</div>`)
$('.activities').append($costDiv);
if(cost == 0){
    $costDiv.hide();
}

const $all = $('input[name=all]');
const $jsFrameworks = $('input[name=js-frameworks]');
const $jsLibraries = $('input[name=js-libs]');
const $expressWorkshop = $('input[name=express');
const $nodeWorkshop = $('input[name=node]');
const $buildTools = $('input[name=build-tools]');
const $npmWorkshop = $('input[name=npm]');

const $unavailable = $('<div id=unavailable-time>This event conflicts with another event you have selected.</div>'); 


$($jsFrameworks).change( () => {
    if(($jsFrameworks).is(':checked')){
        $expressWorkshop.attr('disabled', true);
        $expressWorkshop.parent().prepend($unavailable);
    }else{
        $expressWorkshop.attr('disabled', false);
        $expressWorkshop.parent()[0].firstChild.remove();
    }
})

$($expressWorkshop).change( () => {
    if(($expressWorkshop).is(':checked')){
        $jsFrameworks.attr('disabled', true);
        $jsFrameworks.parent().prepend($unavailable);
    }else{
        $jsFrameworks.attr('disabled', false);
        $jsFrameworks.parent()[0].firstChild.remove();
    }
})

$($jsLibraries).change( () => {
    if(($jsLibraries).is(':checked')){
        $nodeWorkshop.attr('disabled', true);
        $nodeWorkshop.parent().prepend($unavailable);
    }else{
        $nodeWorkshop.attr('disabled', false);
        $nodeWorkshop.parent()[0].firstChild.remove();
    }
})

$($nodeWorkshop).change( () => {
    if(($nodeWorkshop).is(':checked')){
        $jsLibraries.attr('disabled', true);
        $jsLibraries.parent().prepend($unavailable);
    }else{
        $jsLibraries.attr('disabled', false);
        $jsLibraries.parent()[0].firstChild.remove();
    }
})


console.log(
    $all,
    $jsFrameworks,
    $jsLibraries,
    $expressWorkshop,
    $nodeWorkshop,
    $buildTools,
    $npmWorkshop
)

// <fieldset class="activities">
//         <legend>Register for Activities</legend>
//         <label><input type="checkbox" name="all"> Main Conference — $200</label>
//         <label><input type="checkbox" name="js-frameworks"> JavaScript Frameworks Workshop — Tuesday 9am-12pm, $100</label>
//         <label><input type="checkbox" name="js-libs"> JavaScript Libraries Workshop — Tuesday 1pm-4pm, $100</label>
//         <label><input type="checkbox" name="express"> Express Workshop — Tuesday 9am-12pm, $100</label>
//         <label><input type="checkbox" name="node"> Node.js Workshop — Tuesday 1pm-4pm, $100</label>          
//         <label><input type="checkbox" name="build-tools"> Build tools Workshop — Wednesday 9am-12pm, $100</label>
//         <label><input type="checkbox" name="npm"> npm Workshop — Wednesday 1pm-4pm, $100</label>
                  	
//       </fieldset>