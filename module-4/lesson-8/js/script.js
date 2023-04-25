let elFullname = $('#fullname'),
    elUsername = $('#username'),
    elPhoneNumber = $('#phone'),
    elPassword = $('#password'),
    elSignUp = $('#signUpBtn');
    // console.log(JSON.stringify(elFullname.value));
    
    elSignUp.addEventListener('click', e => { 
        let user = {
            fullname: elFullname.value,
            username: elUsername.value,
            phone: elPhoneNumber.value,
            password: elPassword.value
        }
      
            localStorage.setItem('user', user)
        
 
    })

    