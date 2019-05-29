
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

//******************** CONFERENCE EVENTS ************************** */

let cost = 0;

//created the div to hold the total cost (if necessary)
//defaulted to hidden, until an event is selected. 

const $costDiv = $(`<div id=total-cost-div>Total: $${cost}</div>`)
$('.activities').append($costDiv);
if(cost == 0){
    $costDiv.hide();
}

//created functions to add or remove costs based on selected
//conference events. If there is no total, the total box will 
//be hidden. Updated text content to enable real time updating. 
function addCost(){
    cost = cost + 100;
    if(cost != 0){
        $costDiv.show();
    }
    $('#total-cost-div')[0].textContent = `Total: $${cost}`
}
function removeCost(){
    cost = cost - 100;
    if(cost == 0){
        $costDiv.hide();
    }
    $('#total-cost-div')[0].textContent = `Total: $${cost}`
}

const $all = $('input[name=all]');
const $jsFrameworks = $('input[name=js-frameworks]');
const $jsLibraries = $('input[name=js-libs]');
const $expressWorkshop = $('input[name=express');
const $nodeWorkshop = $('input[name=node]');
const $buildTools = $('input[name=build-tools]');
const $npmWorkshop = $('input[name=npm]');

const $unavailable = $('<div id=unavailable-time style="color:maroon; font-size:12px">This event conflicts with another event you have selected.</div>'); 
const $unavailable2 = $('<div id=unavailable-time style="color:maroon; font-size:12px">This event conflicts with another event you have selected.</div>'); 

$($all).change( () => {
    if(($all).is(':checked')){
        addCost();
        addCost();
    }else{
        removeCost();
        removeCost();
    }
})

$($jsFrameworks).change( () => {
    if(($jsFrameworks).is(':checked')){
        $expressWorkshop.attr('disabled', true);
        $expressWorkshop.parent().prepend($unavailable);
        console.log($expressWorkshop.parent())
        addCost();
        
    }else{
        $expressWorkshop.attr('disabled', false);
        removeCost();
        if($expressWorkshop.parent()[0].firstChild.id === 'unavailable-time'){
            $expressWorkshop.parent()[0].firstChild.remove();
        }
        
    }
})

$($expressWorkshop).change( () => {
    if(($expressWorkshop).is(':checked')){
        $jsFrameworks.attr('disabled', true);
        $jsFrameworks.parent().prepend($unavailable);
        console.log($jsFrameworks.parent())
        addCost();
    }else{
        $jsFrameworks.attr('disabled', false);
        removeCost();
        if($jsFrameworks.parent()[0].firstChild.id === 'unavailable-time'){
            $jsFrameworks.parent()[0].firstChild.remove();
        }
    }
})

$($jsLibraries).change( () => {
    if(($jsLibraries).is(':checked')){
        $nodeWorkshop.attr('disabled', true);
        $nodeWorkshop.parent().prepend($unavailable2);
        console.log($nodeWorkshop.parent())
        addCost();
    }else{
        $nodeWorkshop.attr('disabled', false);
        removeCost();
        if($nodeWorkshop.parent()[0].firstChild.id === 'unavailable-time'){
            $nodeWorkshop.parent()[0].firstChild.remove();
        }
    }
})

$($nodeWorkshop).change( () => {
    if(($nodeWorkshop).is(':checked')){
        $jsLibraries.attr('disabled', true);
        $jsLibraries.parent().prepend($unavailable2);
        console.log($jsLibraries.parent())
        addCost();
    }else{
        $jsLibraries.attr('disabled', false);
        removeCost();
        if($jsLibraries.parent()[0].firstChild.id === 'unavailable-time'){
            $jsLibraries.parent()[0].firstChild.remove();
        }
    }
})

$($buildTools).change( () => {
    if(($buildTools).is(':checked')){
        addCost();
    }else{
        removeCost();
    }
})

$($npmWorkshop).change( () => {
    if(($npmWorkshop).is(':checked')){
        addCost();
    }else{
        removeCost();
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
                  	
// </fieldset>\

//******************** PAYMENT METHOD ************************** */



{/* <fieldset>
<legend>Payment Info</legend>

<label for="payment">I'm going to pay with:</label>
<select id="payment" name="user_payment">
  <option value="select_method">Select Payment Method</option>
  <option value="credit card">Credit Card</option>
  <option value="paypal">PayPal</option>
  <option value="bitcoin">Bitcoin</option>
</select>

<div id="credit-card" class="credit-card">

  <div class="col-6 col">
    <label for="cc-num">Card Number:</label>
      <input id="cc-num" name="user_cc-num" type="text">
  </div>

  <div class="col-3 col">
    <label for="zip">Zip Code:</label>
    <input id="zip" name="user_zip" type="text"> 
  </div>

  <div class="col-3 col">
    <label for="cvv">CVV:</label>
    <input id="cvv" name="user_cvv" type="text"> 
  </div>

  <label for="exp-month">Expiration Date:</label>
  <select id="exp-month" name="user_exp-month">
    <option value="1">1 - January</option>
    <option value="2">2 - February</option>
    <option value="3">3 - March</option>
    <option value="4">4 - April</option>
    <option value="5">5 - May</option>
    <option value="6">6 - June</option>
    <option value="7">7 - July</option>
    <option value="8">8 - August</option>
    <option value="9">9 - September</option>
    <option value="10">10 - October</option>
    <option value="11">11 - November</option>	
    <option value="12">12 - December</option>          		          
  </select>
  <label for="exp-year">Expiration Year:</label>
  <select id="exp-year" name="user_exp-year">
    <option value="2016">2016</option>
    <option value="2017">2017</option>
    <option value="2018">2018</option>
    <option value="2019">2019</option>
    <option value="2020">2020</option>        		          
  </select> 	                  	         
</div>

<div>
    <p>If you selected the PayPal option we'll take you to Paypal's site to set up your billing information, when you click “Register” below.</p>
</div> 

<div>
    <p>If you selected the Bitcoin option we'll take you to the Coinbase site to set up your billing information. Due to the nature of exchanging Bitcoin, all Bitcoin transactions will be final.</p>
</div>                  

</fieldset>     */}