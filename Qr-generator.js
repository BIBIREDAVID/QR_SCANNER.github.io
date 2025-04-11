function isValidUrl(url) {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*))\\.)+[a-z]{2,}'+ // domain name
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
  }
  
  function generateQRCode() {
    const input = document.getElementById('urlInput').value.trim();
    const error = document.getElementById('error');
    const qrCodeContainer = document.getElementById('qrcode');
    
    qrCodeContainer.innerHTML = ""; // Clear previous QR
    error.textContent = "";
  
    if (!isValidUrl(input)) {
      error.textContent = "Please enter a valid URL (e.g., https://example.com)";
      return;
    }
  
    new QRCode(qrCodeContainer, {
      text: input,
      width: 200,
      height: 200,
    });
  }
  