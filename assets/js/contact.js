function validateName() {
    let name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').innerText = 'This field is required';
    } else {
        document.getElementById('nameError').innerText = '';
        // nameInput.classList.remove("invalid");
    }
}

function validateCompanyName() {
    let companyName = document.getElementById('companyName').value.trim();
    if (companyName === '') {
        document.getElementById('companyNameError').innerText = 'This field is required';
    } else {
        document.getElementById('companyNameError').innerText = '';
    }
}

function validateCountry() {
    let country = document.getElementById('country').value.trim();
    if (country === '') {
        document.getElementById('countryError').innerText = 'This field is required';
    } else {
        document.getElementById('countryError').innerText = '';
    }
}

function validatePhoneNumber() {
    let phoneNumber = document.getElementById('phoneNumber').value.trim();
    if (phoneNumber === '') {
        document.getElementById('phoneNumberError').innerText = 'This field is required';
    } else {
        document.getElementById('phoneNumberError').innerText = '';
    }
}

function validateEmail() {
    let email = document.getElementById('email').value.trim();
    if (email === '') {
        document.getElementById('emailError').innerText = 'This field is required';
    }
    else {
        if (!isValidEmail(email)) {
            document.getElementById('emailError').innerText = 'This field is required';
        } else {
            document.getElementById('emailError').innerText = ''; // Clear error message
        }
    }
}

function validateSocialMedia() {
    let socialMedia = document.getElementById('socialMedia').value.trim();
    if (socialMedia === '') {
        document.getElementById('socialMediaError').innerText = 'This field is required';
    } else {
        document.getElementById('socialMediaError').innerText = '';
    }
}

function validateMessage() {
    let message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('messageError').innerText = 'This field is required';
    } else {
        document.getElementById('messageError').innerText = '';
    }
}

// Function to validate email using regex
function isValidEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to validate mobile number using regex
  function isValidMobile(mobile) {
    let mobileRegex = /^\d{10}$/;
    return mobileRegex.test(mobile);
  }
  

// Function to submit form
function submitForm() {
    let name = document.getElementById('name').value.trim();
    let companyName = document.getElementById('companyName').value.trim();
    let country = document.getElementById('country').value.trim();
    let phoneNumber = document.getElementById('phoneNumber').value.trim();
    let email = document.getElementById('email').value.trim();
    let socialMedia = document.getElementById('socialMedia').value.trim();
    let message = document.getElementById('message').value.trim();

    const obj = { name, companyName, country, phoneNumber, email, socialMedia, message }

    let isValid = true;
    // Check if any error exists
    if (name === '') {
        document.getElementById('nameError').innerText = 'This field is required';
        isValid = false;
    }
    if (companyName === '') {
        document.getElementById('companyNameError').innerText = 'This field is required'
        isValid = false;
    }
    if (country === '') {
        document.getElementById('countryError').innerText = 'This field is required'
        isValid = false;
    }
    if (phoneNumber === '') {
        document.getElementById('phoneNumberError').innerText = 'Enter your mobile number';
        isValid = false;
    }
    if (email === '') {
        document.getElementById('emailError').innerText = 'Enter your email';
        isValid = false;
    } else {
        if (!isValidEmail(email)) {
            document.getElementById('emailError').innerText = 'Enter valid email address';
            isValid = false;
        }
    }
    if (socialMedia === '') {
        document.getElementById('socialMediaError').innerText = 'Required';
        isValid = false;
    }
    if (message === '') {
        document.getElementById('messageError').innerText = 'Required';
        isValid = false;
    }

    console.info(obj)

    $.ajax({
      method: "POST",
      url: "./contact.php",
      data: obj,
    }).done(function(data){
      console.log(data);
       alert("mail send");
    });
}