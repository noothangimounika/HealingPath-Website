
document.getElementById('resetPasswordForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    const resetPasswordForm=document.getElementById('resetPasswordForm');


    if (email === '') {
        message.textContent = 'Please enter your email address.';
        return;
    }

   
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        message.textContent = 'Please enter a valid email address.';
        return;
    }

    resetPasswordForm.style.display='none';
    message.style.color = 'green';
    message.textContent = 'Password Reset Sent to Email';
   

});
