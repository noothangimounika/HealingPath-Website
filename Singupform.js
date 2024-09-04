document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;
    const message = document.getElementById('message');
    
 
    if (username === '' || email === '' || password === '') {
        message.textContent = 'All fields are required.';
        return;
    }

 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        return;
    }

  
    if (password.length < 6) {
        message.textContent = 'Password must be at least 6 characters long.';
        return;
    }
    

    if (!terms) {
        message.textContent = 'You must agree to the terms and conditions.';
        return;
    }


    message.style.color = 'green';
    message.style.fontsize='20px';
    message.textContent = 'Sign-up successful! Redirecting to login...';
    
    setTimeout(() => {
        window.location.href = 'login.html'; 
    }, 2000);

});
