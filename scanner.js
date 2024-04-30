function domReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    let htmlScanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 },
        /* verbose= */ false
    );

    htmlScanner.render(function (decodeText, decodeResult) {
        onScanSuccess(decodeText, decodeResult, 'qrcode');
    });

    let barcodeScanner = new Html5QrcodeScanner(
        "my-barcode-reader",
        { fps: 10, qrbox: 250, aspectRatio: 1.0 },
        /* verbose= */ false
    );

    barcodeScanner.render(function (decodeText, decodeResult) {
        onScanSuccess(decodeText, decodeResult, 'barcode');
    });

    function onScanSuccess(decodeText, decodeResult, type) {
        if (type === 'qrcode') {
            if (isValidURL(decodeText)) {
                window.open(decodeText, '_blank');
            } else {
                alert("Scanned QR code: " + decodeText);
            }
        } else if (type === 'barcode') {
            window.open(decodeText, '_blank');
        }
    }

    function isValidURL(url) {
        // Simple URL validation, you can enhance this as per your requirements
        return /^(https?:\/\/)?([\w.]+)\.([a-z]{2,6}\.?)(\/[\w\d-]+)*\/?$/.test(url);
    }
});
domReady(function () {
    try {
        // Your existing code for QR code and barcode scanners instantiation and rendering
    } catch (error) {
        console.error("An error occurred:", error);
    }
});
