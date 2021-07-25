console.log('js');
let employeeInfo = [];

$(document).ready(onReady);

function onReady() {
    console.log('ready to go!');
    $('#SalaryForm').on('submit', onSubmit);
    console.log('.removeBtn', $('.removeBtn'));
    $(document).on('click', '.removeBtn', removeEntry);
}

function onSubmit(event) {
    console.log('this is', $(this));
    console.log('event', event);
    event.preventDefault();
    console.log('onSubmit');
    let employee = getEmployeeFromDOM();
    employeeInfo.push(employee);
    console.log(employeeInfo);

    $('#nameInput').focus();
    $('input').val('');
    renderEmployeeToDOM();
    let totalSalary = calculateTotalSalary();
    $('#totalSalary').text(totalSalary.toFixed(2))
}

function getEmployeeFromDOM() {
    let employee = {
        name: $('#nameInput').val(),
        lastName: $('#lastNameInput').val(),
        iDInput: $('#iDInput').val(),
        Title: $('#employeeTitle').val(),
        price: Number($('#priceInput').val()),
    };
    return employee;
}


function calculateTotalSalary() {
    let monthyValue = $('.monthyValue');
    let totalSalary = 0;
    for (let employee of employeeInfo) {
        totalSalary += employee.price;
    if (totalSalary >= 20000){
      monthyValue.css('background','red');
    }
  }
    return totalSalary;
}

function removeEntry(){
console.log('in delete function');
  console.log('this is', $(this));
  $(this).parent().remove();
}

function renderEmployeeToDOM() {
    $('#SalaryTable').empty();
    for (let employee of employeeInfo) {
        $('#SalaryTable').append(`
            <tr>
                <td>${employee.name}</td>
                <td>${employee.lastName}</td>
                <td>${employee.iDInput}</td>
                <td>${employee.Title}</td>
                <td>$${employee.price.toFixed(2)}</td>
                <td> <button id="removeBtn">Delete</button> </td>
            </tr>
        `);
    }
}
