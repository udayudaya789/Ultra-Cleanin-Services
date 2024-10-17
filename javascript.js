function validateForm() {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'city', 'service'];
    const urgency = document.querySelector('input[name="urgency"]:checked');
    let isValid = true;

    // empty field checking section so i made a simple method i didnt do any extra mailing service just a mailto function i added here
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (input.value === "") {
            alert(`Please fill out the ${input.previousElementSibling.innerText} field.`);
            input.focus();
            isValid = false;
            return;
        }
    });

    if (!urgency) {
        alert("Please select an urgency option.");
        isValid = false;
    }

    return isValid;
}

function showSummary() {
    if (!validateForm()) {
        return; // Stop if form is invalid
    }

    document.getElementById('summaryFirstName').textContent = document.getElementById('firstName').value;
    document.getElementById('summaryLastName').textContent = document.getElementById('lastName').value;
    document.getElementById('summaryEmail').textContent = document.getElementById('email').value;
    document.getElementById('summaryPhone').textContent = document.getElementById('phone').value;
    document.getElementById('summaryCity').textContent = document.getElementById('city').value;
    document.getElementById('summaryService').textContent = document.getElementById('service').value;
    document.getElementById('summaryUrgency').textContent = document.querySelector('input[name="urgency"]:checked').value;
    
    new bootstrap.Modal(document.getElementById('quoteModal')).hide();
    new bootstrap.Modal(document.getElementById('summaryModal')).show();
}

function editForm() {
    new bootstrap.Modal(document.getElementById('summaryModal')).hide();
    new bootstrap.Modal(document.getElementById('quoteModal')).show();
}

function sendEmail() {
    const mailtoLink = `mailto:admin@ultraclean.co.nz?subject=Free Quote Inquiry&body=First Name: ${document.getElementById('firstName').value}%0D%0ALast Name: ${document.getElementById('lastName').value}%0D%0AEmail: ${document.getElementById('email').value}%0D%0APhone: ${document.getElementById('phone').value}%0D%0ACity: ${document.getElementById('city').value}%0D%0ACleaning Service: ${document.getElementById('service').value}%0D%0AUrgency: ${document.querySelector('input[name="urgency"]:checked').value}`;
    window.location.href = mailtoLink;
}
