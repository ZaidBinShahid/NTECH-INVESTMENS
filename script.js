function validateName() {
  let name = document.getElementById('name').value.trim();
  if (name === '') {
    document.getElementById('nameError').innerText = 'This field is required';
  } else {
    document.getElementById('nameError').innerText = ''; // Clear error message
  }
}

// Function to validate email
function validateEmail() {
  let email = document.getElementById('email').value.trim();
  if (email === '') {
    document.getElementById('emailError').innerText = 'Enter your email';
  } else {
    if (!isValidEmail(email)) {
      document.getElementById('emailError').innerText = 'Enter valid email address';
    } else {
      document.getElementById('emailError').innerText = ''; // Clear error message
    }
  }
}

// Function to validate mobile number
function validateMobile() {
  let mobile = document.getElementById('mobile').value.trim();
  if (mobile === '') {
    document.getElementById('mobileError').innerText = 'Enter your mobile number';
  } else {
    if (!isValidMobile(mobile)) {
      document.getElementById('mobileError').innerText = 'Enter a valid mobile number';
    } else {
      document.getElementById('mobileError').innerText = ''; // Clear error message
    }
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

// Function to submit the form
function submitFormNews() {
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let mobile = document.getElementById('mobile').value.trim()

  const obj = { name, email, mobile };
  // Validate inputs
  let isValid = true;
  if (name === '') {
    document.getElementById('nameError').innerText = 'Enter your name';
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
  if (mobile === '') {
    document.getElementById('mobileError').innerText = 'Enter your mobile number';
    isValid = false;
  } else {
    if (!isValidMobile(mobile)) {
      document.getElementById('mobileError').innerText = 'Enter a valid mobile number';
      isValid = false;
    }
  }

  console.info(obj)

  $.ajax({
    method: "POST",
    url: "./mail.php",
    data: obj,
  }).done(function(data){
    console.log(data);
     alert("mail send");
  });

} 
