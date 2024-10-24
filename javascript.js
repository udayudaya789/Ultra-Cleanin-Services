
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
    
});



function validateForm() {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'city', 'service'];
    const urgency = document.querySelector('input[name="urgency"]:checked');
    let isValid = true;

    
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
        return; 
    }

    
    document.getElementById('summaryFirstName').textContent = document.getElementById('firstName').value;
    document.getElementById('summaryLastName').textContent = document.getElementById('lastName').value;
    document.getElementById('summaryEmail').textContent = document.getElementById('email').value;
    document.getElementById('summaryPhone').textContent = document.getElementById('phone').value;
    document.getElementById('summaryCity').textContent = document.getElementById('city').value;
    document.getElementById('summaryService').textContent = document.getElementById('service').value;
    document.getElementById('summaryUrgency').textContent = document.querySelector('input[name="urgency"]:checked').value;
    
    const quoteModal = bootstrap.Modal.getInstance(document.getElementById('quoteModal'));
    quoteModal.hide();
    const summaryModal = new bootstrap.Modal(document.getElementById('summaryModal'));
    summaryModal.show();
}


function editForm() {
    const summaryModal = bootstrap.Modal.getInstance(document.getElementById('summaryModal'));
    summaryModal.hide();
    const quoteModal = new bootstrap.Modal(document.getElementById('quoteModal'));
    quoteModal.show();
}


function sendEmail() {
    const mailtoLink = `mailto:admin@ultraclean.co.nz?subject=Free Quote Inquiry&body=First Name: ${document.getElementById('firstName').value}%0D%0ALast Name: ${document.getElementById('lastName').value}%0D%0AEmail: ${document.getElementById('email').value}%0D%0APhone: ${document.getElementById('phone').value}%0D%0ACity: ${document.getElementById('city').value}%0D%0ACleaning Service: ${document.getElementById('service').value}%0D%0AUrgency: ${document.querySelector('input[name="urgency"]:checked').value}`;
    window.location.href = mailtoLink;
}


function cancelForm() {
    const quoteModal = bootstrap.Modal.getInstance(document.getElementById('quoteModal'));
    if (quoteModal) quoteModal.hide();
    const summaryModal = bootstrap.Modal.getInstance(document.getElementById('summaryModal'));
    if (summaryModal) summaryModal.hide();
}
window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.custom-navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    
});
document.getElementById('galleryDropdown').addEventListener('click', function (e) {
    if (!this.classList.contains('show')) {
        window.location.href = 'gallery.html';
    }
});


window.addEventListener('load', function() {
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 3000); // Wait for 3 seconds
});

