const form = document.getElementById('orderForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phoneNumber = document.getElementById('phoneNumber').value;

  
const address = document.getElementById('address').value;
  const pincode = document.getElementById('pincode').value;
  const orderNumber = document.getElementById('orderNumber').value;
  const email = document.getElementById('email').value;

  const orderData = {
    name,
    phoneNumber,
    address,
    pincode,
    orderNumber,
    email,
  };

  console.log('Order Data:', orderData);

  // Simulate sending an email notification
  

  setTimeout(() => {
    responseMessage.textContent = 'order successfull';
    responseMessage.style.display = 'block';

    // Record the response to a file

    const responseRecord = `${name}, ${phoneNumber}, ${address}, ${pincode}, ${orderNumber}, ${paymentid}, ${email}\n`;

    const fs = require('fs');
    fs.appendFile('response.txt', responseRecord, (err) => {
      if (err) {
        console.error('Error recording response:', err);
      } else {
        console.log('Response recorded successfully.');
      }
    });
  }, 2000);
});