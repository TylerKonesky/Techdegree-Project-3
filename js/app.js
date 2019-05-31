



//******************** Form submission and validations ************************** */

//created the variables that will be used in this section.
//this includes the invalid input text boxes that will appear
//on incorrect inputs. 

const $inputName = $('#name');
const $inputEmail = $('#mail');
const $creditCard = $('#cc-num');
const $zipCode = $('#zip');
const $cvv = $('#cvv');
const $registerButton = $('button');

const $invalidName = $('<div id="wrong_name" style="color:maroon; font-size:12px">You may only use letters. No numbers or special characters</div>')
const $invalidEmail = $('<div id="wrong_email" style="color:maroon; font-size:12px">Email must be formatted correctly: example@example.com</div>')
const $invalidCC = $('<div id="wrong_cc" style="color:maroon; font-size:12px">Invalid Credit Card. Must only contain 16 numbers</div>')
const $invalidZip = $('<div id="wrong_zip" style="color:maroon; font-size:12px">Please enter your 5 digit zip code</div>')
const $invalidCvv = $('<div id="wrong_cvv" style="color:maroon; font-size:12px">Please enter valid 3 digit cvv code from the back of your card</div>')

let namePass = false;
let emailPass = false; 
let ccPass = false; 
let zipPass = false; 
let cvvPass = false; 
 

//set default cursor location to the "name" field

$('#name').focus();

//running tests to add or remove help boxes depending on valid submissions. 

$inputName.prev().append($invalidName);
$invalidName.hide();

$($inputName).blur( ()=>{
    if(validName($inputName.val())){
        $inputName.css({'border-color':'#c1deeb'});
        $invalidName.hide();
        namePass = true; 
    }else{
    $inputName.css({'border-color':'red'});
    $invalidName.show();
    namePass = false; 
    }
})

$inputEmail.prev().append($invalidEmail);
$invalidEmail.hide();

$($inputEmail).blur( ()=>{
    if(validEmail($inputEmail.val())){
        $inputEmail.css({'border-color':'#c1deeb'});
        $invalidEmail.hide();
        emailPass = true; 
    }else{
        $inputEmail.css({'border-color':'red'});
        $invalidEmail.show();
        emailPass = false; 
    }
})

$creditCard.prev().append($invalidCC);
$invalidCC.hide();

$($creditCard).blur( ()=>{
    if(validCreditcard($creditCard.val())){
        $creditCard.css({'border-color':'#c1deeb'});
        $invalidCC.hide();
        ccPass = true; 
    }else{
        $creditCard.css({'border-color':'red'});
        $invalidCC.show();
        ccPass = false; 
    }
})

$zipCode.prev().append($invalidZip);
$invalidZip.hide();

$($zipCode).blur( ()=>{
    if(validZip($zipCode.val())){
        $zipCode.css({'border-color':'#c1deeb'});
        $invalidZip.hide();
        zipPass = true; 
    }else{
        $zipCode.css({'border-color':'red'});
        $invalidZip.show();
        zipPass = false; 
    }
})

$cvv.prev().append($invalidCvv);
$invalidCvv.hide();

$($cvv).blur( ()=>{
    if(validCvv($cvv.val())){
        $cvv.css({'border-color':'#c1deeb'});
        $invalidCvv.hide();
        cvvPass = true; 
    }else{
        $cvv.css({'border-color':'red'});
        $invalidCvv.show();
        cvvPass = false; 
    }
})

//created the validation functions to check for valid
//user inputs

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


//******************** Submit Form ************************** */

//tests to check if each field has been validly completed. 
//If it has been, it submits the form. Otherwise it generates an alert
//letting the user know which field needs to be corrected. 
//if a field has not been submitted correctly, the form will automatically
//focus that field. 

$('.container').on('click', 'button', (e) => {
    if(!namePass){
        e.preventDefault()
        $('#name').css({'border-color':'red'})
        $('#name').focus();
    }else if (!emailPass){
        e.preventDefault()
        $('#mail').css({'border-color':'red'})
        $('#mail').focus();
    }else if(cost == 0){
        e.preventDefault();
        alert('You must select at least one conference event!')
    }else if($ccDiv.is(':visible')){
        if(!ccPass){
            e.preventDefault()
            $('#cc-num').css({'border-color':'red'})
            $('#cc-num').focus();
        }else if(!zipPass){
            e.preventDefault()
            $('#zip').css({'border-color':'red'})
            $('#zip').focus();
        }else if(!cvvPass){
            e.preventDefault()
            $('#cvv').css({'border-color':'red'})
            $('#cvv').focus();
        }else{
            alert('Form successfully submitted!')
        }
    }
})

//******************** Job Roles ************************** */

//created a function to check which role is selected
//if "other" is selected, an input box opens to accept an input
//if any other choice is selected, the box goes away. 

const $otherJob = $('#other-title');

$($otherJob).hide();

$('#title').change( ()=> {
    if($('#title').val() === 'other'){
        $($otherJob).show();
    }else{
        $($otherJob).hide();
    }
})

//******************** T-Shirts ************************** */

//created variables to select the different HTML elements that
//are used in this section. 

const $puns = $('#design option:eq(1)');
const $hearts = $('#design option:eq(2)');

const $cornFlowerBlue = $('#color option:eq(0)'); 
const $darkSlateGrey = $cornFlowerBlue.next();
const $gold = $darkSlateGrey.next();
const $tomato = $gold.next();
const $steelBlue = $tomato.next();
const $dimGrey = $steelBlue.next();

//created variable to show or hide the shirt colors. 
const $shirtColors = $('#colors-js-puns');
$shirtColors.hide();

//created the functionality to show the correct colors
//or not colors that will be available depending on which
//design element is selected. 

$('#design').change( () => {
    if($('#design').val() === "js puns"){

        $cornFlowerBlue.show();
        $darkSlateGrey.show();
        $gold.show();

        $tomato.hide();
        $steelBlue.hide();
        $dimGrey.hide();

        $shirtColors.show();
    }else if($('#design').val() === "heart js"){

        $cornFlowerBlue.hide();
        $darkSlateGrey.hide();
        $gold.hide();

        $tomato.show();
        $steelBlue.show();
        $dimGrey.show();

        $shirtColors.show();
    }else{
        $shirtColors.hide();
    }
})


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


//selected the variables that will be used in the below section
//as well as created the "errors" for conflicting timne slots
const $all = $('input[name=all]');
const $jsFrameworks = $('input[name=js-frameworks]');
const $jsLibraries = $('input[name=js-libs]');
const $expressWorkshop = $('input[name=express');
const $nodeWorkshop = $('input[name=node]');
const $buildTools = $('input[name=build-tools]');
const $npmWorkshop = $('input[name=npm]');

const $unavailable = $('<div id=unavailable-time style="color:maroon; font-size:12px">This event conflicts with another event you have selected.</div>'); 
const $unavailable2 = $('<div id=unavailable-time style="color:maroon; font-size:12px">This event conflicts with another event you have selected.</div>'); 


//created the functionality to determine and total costs
//as well as any conflicts that arise between events. 
//checkboxes will be disabled and notifications will be showsn
//if there is a conflict. 
//when there is no conflict, totals will be added and removed as 
//necessary. 
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

//******************** PAYMENT METHOD ************************** */

//selected the payment variables that will be used in this section. 
const $ccPayment = $('#payment option:eq(1)');
const $ppPaymeny = $('#payment option:eq(2)');
const $bitPayment = $('#payment option:eq(3)');

const $ccDiv = $('#credit-card');
const $ppDiv = $('p:eq(0)');
const $bitDiv = $('p:eq(1)');

// hid the "select payment" as well as the unnecessary paypal
// and bitcoin text. Set Credit card as the default method. 
$('#payment option:eq(0)').hide();
$ppDiv.hide();
$bitDiv.hide();

$ccPayment.prop('selected', true);

//created the functionalty to show the appropriate fields
//depending on the selections from the payment field. 

$('#payment').change( ()=> {
    if($('#payment').val() === 'paypal'){
        $ccDiv.hide();
        $ppDiv.show();
        $bitDiv.hide();
    }else if($('#payment').val() === 'bitcoin'){
        $ccDiv.hide();
        $ppDiv.hide();
        $bitDiv.show();
    }else{
        $ccDiv.show();
        $ppDiv.hide();
        $bitDiv.hide();
    }
})