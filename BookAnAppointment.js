document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const companyName = document.getElementById('companyName').value;
    const website = document.getElementById('website').value;
    const message = document.getElementById('message').value;
    const confirmationMessage = document.getElementById('confirmationMessage');
    const appointmentForm=document.getElementById('appointmentForm');

  
    confirmationMessage.style.display = 'block';
    appointmentForm.style.display='none';
    confirmationMessage.textContent = "Thank you! Your submission has been received!";

   
    document.getElementById('appointmentForm').reset();
});
