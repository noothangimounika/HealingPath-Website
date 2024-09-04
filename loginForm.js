
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    
    if (email === '' || password === '') {
        message.textContent = 'Both fields are required.';
        return;
    }

    message.style.color = 'green';
    message.textContent = 'Login successful! Redirecting...'

    setTimeout(() => {
        window.location.href = 'home.html'; 
    }, 2000);
});
