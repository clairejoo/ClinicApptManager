$(function() {
    $('#alert-success').hide();
    $('#alert-failure').hide();
    
    // set today's date by default
    $('#text-date').datepicker({dateFormat: 'dd/mm/yy', minDate: new Date()});
    $('#text-date').datepicker().datepicker("setDate", new Date());
    
    var apptTime = new Date();
    apptTime.setHours(08, 30, 00);
    
    var i;
    for (i = 0; i < 17; i++) {
        // making minutes in 2 digits
        var min;
        if (apptTime.getMinutes() < 10) {
            min = "0" + apptTime.getMinutes();
        } else {
            min = apptTime.getMinutes();
        }
        // add time dropdown lists
        $('#time-dropdown').append('<li class="appt-time"><a class="dropdown-item" href="#">' + apptTime.getHours() + ':' + min + '</a></li>');
        
        apptTime.setMinutes(apptTime.getMinutes() + 30); 
    }
    
    $('.appt-time').click(function() {
        $('#text-time').text($(this).text());
    });
});
// submit
$('#submit-button').click(function() {
    var dateValue = $('#text-date').val();
    var timeValue = $('#text-time').text();
    var vetsValue = $('#text-vets').text();
    var servicesValue = $('#text-services').text();
    var nameValue = $('#text-name').val();
    var numberValue = $('#text-number').val();
    
    if (timeValue == "Time ") {
        showTimeErrorMessage();
    } else if (vetsValue == "Vets ") {
        showVetsErrorMessage();
    } else if (servicesValue == "Services ") {
        showServicesErrorMessage();
    } else if (nameValue.trim().length == 0) {
        showNameErrorMessage();
    } else if (!/^[a-zA-Z ]*$/.test(nameValue)) {
        showNameErrorMessage();
    } else if (numberValue.trim().length == 0) {
        showNumberErrorMessage();
    } else if (!/^[0-9]+$/.test(numberValue)) {
        showNumberErrorMessage();
    } else {
        var message = 'Thanks, ' + nameValue + ' for making an appointment (on ' + dateValue + ' at ' + timeValue + ') with ' + vetsValue + ' for ' + servicesValue;
        $('#alert-success-message').text(message);
        $('#alert-success').show();
        $('#alert-failure').hide();
        reset();
    }
});

$('.vets-name').click(function() {
    $('#text-vets').text($(this).text());
});

$('.services-name').click(function() {
    $('#text-services').text($(this).text());
});

function showTimeErrorMessage() {
    var message = 'Ooops! Please select an appointment time.';
    $('#alert-failure-message').text(message);
    $('#alert-failure').show();
    $('#alert-success').hide();
}

function showVetsErrorMessage() {
    var message = 'Ooops! Please select a vet.';
    $('#alert-failure-message').text(message);
    $('#alert-failure').show();
    $('#alert-success').hide();
}

function showServicesErrorMessage() {
    var message = 'Ooops! Please select a service.';
    $('#alert-failure-message').text(message);
    $('#alert-failure').show();
    $('#alert-success').hide();
}

function showNameErrorMessage() {
    var message = 'Oops! Please check your name.';
    $('#alert-failure-message').text(message);
    $('#alert-failure').show();
    $('#alert-success').hide();
}

function showNumberErrorMessage() {
    var message = 'Ooops! Please check your contact number.';
    $('#alert-failure-message').text(message);
    $('#alert-failure').show();
    $('#alert-success').hide();
}

function reset() {
    $('#text-date').datepicker().datepicker("setDate", new Date());
    $('#text-time').text("Time ");
    $('#text-vets').text("Vets ");
    $('#text-services').text("Services ");
    $('#text-name').val("");
    $('#text-number').val("");
}



