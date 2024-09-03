document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    const emailInput = document.getElementById('email');
    const message = document.getElementById('message');
    const subscriptionForm=document.getElementById('subscriptionForm');
   
    subscriptionForm.style.display='none';
    message.style.display = 'block';
    message.textContent = 'Thank you for subscribing ........';

   
    emailInput.value = '';
});