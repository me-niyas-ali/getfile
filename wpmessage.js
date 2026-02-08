 document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const phoneNumber = "+919645245018"; // ← replace with your WhatsApp number (country code + number)

    const whatsappMessage =
      `Design Inquiry \n\n` +
      `Name: ${name} \n\n` +
      `Email: ${email} \n\n` +
      `Message: ${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");
  });
