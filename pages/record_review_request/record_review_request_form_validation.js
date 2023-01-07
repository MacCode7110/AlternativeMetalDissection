const recordName = document.getElementById('recordname'); //getElementByID method returns a reference to the first object with the specificed value of the ID attribute. And document is the variable needed to search other files for the first object with the specificed value of the ID attribute.
const bandName = document.getElementById('bandname'); 
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let errorMessages = [];
    if(recordName.value === '' || recordName.value == null) { //=== compares both the data types and values of the operands, while == performs a data type conversion BEFORE the comparison of the values of the operands.
        errorMessages.push('Record Name is a required field');
    }
    if(bandName.value === '' || recordName.value == null) {
        errorMessages.push('Band Name is a required field');
    }
    if(recordName.value.length > 125)
    {
        errorMessages.push('Record Name must be no longer than 125 characters')
    }
    if(bandName.value.length > 125)
    {
        errorMessages.push('Band Name must be no longer than 125 characters')
    }
    if(errorMessages.length > 0)
    {
        e.preventDefault(); //preventDefault prevents the default event e, which is the event that the form is submitted.
        errorElement.innerText() = errorMessages.join(','); //innerText() function is used to write dynamic text on an HTML document. When all of the error messages are joined into a single string, this single string is rendered onto the HTML document through the use of the innerText() function. 
    }
});
