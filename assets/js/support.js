function validateName() {
    let name = document.getElementById('name').value.trim();
    if (name === '') {
      document.getElementById('nameError').innerText = 'This field is required';
    } else {
      document.getElementById('nameError').innerText = ''; // Clear error message
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
  
  function validateCompanyName() {
        let companyName = document.getElementById('companyName').value.trim();
        if (companyName === '') {
            document.getElementById('companyNameError').innerText = 'This field is required';
            document.getElementById('')
        } else {
            document.getElementById('companyNameError').innerText = '';
        }
    }
    
    function validateAddress() {
        let address = document.getElementById('address').value.trim();
        if (address === '') {
            document.getElementById('addressError').innerText = 'This field is required';
        } else {
            document.getElementById('addressError').innerText = '';
        }
    }
    
    function validatePhoneNumber() {
        let phoneNumber = document.getElementById('mobile').value.trim();
        if (phoneNumber === '') {
            document.getElementById('mobileError').innerText = 'This field is required';
        } else {
            document.getElementById('mobileError').innerText = '';
        }
    }
    
    function validateEmail() {
        let email = document.getElementById('email').value.trim();
        if (email === '') {
            document.getElementById('emailError').innerText = 'This field is required';
        }
        else{
            if (!isValidEmail(email)) {
                document.getElementById('emailError').innerText = 'Valid Email is required';
            } 
            else{
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
    
        function ipAddress() {
            let ipAddress = document.getElementById('ipAddress').value.trim();
            if (ipAddress === '') {
                document.getElementById('ipError').innerText = 'This field is required';
            } else {
                document.getElementById('ipError').innerText = '';
            }
        } 
    
        function accountNumber() {
            let accountNumber = document.getElementById('accountNumber').value.trim();
            if (accountNumber === '') {
                document.getElementById('accountError').innerText = 'This field is required';
            } else {
                document.getElementById('accountError').innerText = '';
            }
        } 
    
        function vatNumber() {
            let vatNumber = document.getElementById('vatNumber').value.trim();
            if (vatNumber === '') {
                document.getElementById('vatError').innerText = 'This field is required';
            } else {
                document.getElementById('vatError').innerText = '';
            }
        } 
    
        function websiteUrl() {
            let websiteUrl = document.getElementById('websiteUrl').value.trim();
            if (websiteUrl === '') {
                document.getElementById('urlError').innerText = 'This field is required';
            } else {
                document.getElementById('urlError').innerText = '';
            }
        } 
    
        function bankPerferences() {
            let bankPerferences = document.getElementById('bankPerferences').value.trim();
            if (bankPerferences === '') {
                document.getElementById('bankperferenceError').innerText = 'This field is required';
            } else {
                document.getElementById('bankperferenceError').innerText = '';
            }
        } 
    
        function registeredCompanyNumber() {
            let registeredCompanyNumber = document.getElementById('registeredCompanyNumber').value.trim();
            if (registeredCompanyNumber === '') {
                document.getElementById('companyNumberError').innerText = 'This field is required';
            } else {
                document.getElementById('companyNumberError').innerText = '';
            }
        } 
    
        function incidentNumber() {
            let incidentNumber = document.getElementById('incidentNumber').value.trim();
            if (incidentNumber === '') {
                document.getElementById('incidentNumberError').innerText = 'This field is required';
            } else {
                document.getElementById('incidentNumberError').innerText = '';
            }
        } 
    
        function accountType() {
            let accountType = document.getElementById('accountType').value.trim();
            if (accountType === '') {
                document.getElementById('accountTypeError').innerText = 'This field is required';
            } else {
                document.getElementById('accountTypeError').innerText = '';
            }
        } 
    
        function summaryIssue() {
            let summaryIssue = document.getElementById('summaryIssue').value.trim();
            if (summaryIssue === '') {
                document.getElementById('summaryIssueError').innerText = 'This field is required';
            } else {
                document.getElementById('summaryIssueError').innerText = '';
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
    
        function validateSelect() {
            let selectInput = document.getElementById('select');
            let selectError = document.getElementById('selectError');
            if (selectInput.value === 'Select') {
                selectError.innerText = 'Please select an option';
                return false;
            } else {
                selectError.innerText = ''; // Clear error message
                return true;
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
  function submitForm() {
  
    let name = document.getElementById('name').value.trim();
    let companyName = document.getElementById('companyName').value.trim();
    let address = document.getElementById('address').value.trim();
    let mobile = document.getElementById('mobile').value.trim();
    let email = document.getElementById('email').value.trim();
    let socialMedia = document.getElementById('socialMedia').value.trim();
    let ipAddress = document.getElementById('ipAddress').value.trim();
    let accountNumber = document.getElementById('accountNumber').value.trim();
    let vatNumber = document.getElementById('vatNumber').value.trim();
    let websiteUrl = document.getElementById('websiteUrl').value.trim();
    let bankPerferences = document.getElementById('bankPerferences').value.trim();
    let registeredCompanyNumber = document.getElementById('registeredCompanyNumber').value.trim();
    let incidentNumber = document.getElementById('incidentNumber').value.trim();
    let accountType = document.getElementById('accountType').value.trim();
    let select = document.getElementById('select').value.trim();
    let summaryIssue = document.getElementById('summaryIssue').value.trim();
    let message = document.getElementById('message').value.trim();


  
    const obj = { name, companyName, address, email, mobile, socialMedia,
         ipAddress, accountNumber, vatNumber, websiteUrl, bankPerferences,
        registeredCompanyNumber, incidentNumber, accountType, summaryIssue, message
        };
    // Validate inputs
    let isValid = true;
    if (name === '') {
      document.getElementById('nameError').innerText = 'Enter your name';
      isValid = false;
    }
    if (companyName ==='') {
        document.getElementById('companyNameError').innerText = 'required'
        isValid = false;
    }
    if (address === '') {
        document.getElementById('addressError').innerText = 'required'; 
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
    if (socialMedia === '') {
        document.getElementById('socialMediaError').innerText = 'Required';
        isValid = false;
    }
    if (ipAddress === '') {
        document.getElementById('ipError').innerText = 'Required';
        isValid = false;
    }
    if(accountNumber === '') {
        document.getElementById('accountError').innerText = 'Required';
        isValid = false;
    }
    if (vatNumber === '') {
        document.getElementById('vatError').innerText = 'Required'
        isValid = false;
    }
    if (websiteUrl === '') {
        document.getElementById('urlError').innerText = 'Required';
        isValid = false;
    }
    if (bankPerferences === '') {
        document.getElementById('bankperferenceError').innerText = 'Required';
        isValid = false;
    }
    if (registeredCompanyNumber == '') {
        document.getElementById('companyNumberError').innerText = 'Required';
        isValid = false;
    }
    if (incidentNumber === '') {
        document.getElementById('incidentNumberError').innerText = 'Required';
        isValid = false;
    }
    if (accountType === '') {
        document.getElementById('accountTypeError').innerText = 'Required';
        isValid = false;
    }
    if (select === ''){
        document.getElementById('selectError').innerText = 'Required';
        isValid = false; 
    }
    if (summaryIssue === '') {
        document.getElementById('summaryIssueError').innerText = 'Required';
        isValid = false;
    }
    if (message === '') {
        document.getElementById('messageError').innerText = 'Required';
        isValid = false;
    }

    $.ajax({
                  method: "POST",
                  url: "./index.php",
                  data: obj,
                }).done(function(data){
                  console.log(data);
                   alert("mail send");
                });
}
