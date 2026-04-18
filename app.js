// SELECT ELEMENTS
const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const qrPopup = document.getElementById("qrPopup");
const qrImage = document.querySelector("#qrPopup img");
const downloadBtn = document.getElementById("downloadBtn");
const closeBtn = document.getElementById("close");

// GENERATE QR CODE
generateBtn.addEventListener("click", () => {
    const inputValue = qrInput.value.trim();

    if (inputValue === "") {
        alert("Please enter text or URL");
        return;
    }

    // QR API
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(inputValue)}`;

    // SET IMAGE
    qrImage.src = qrURL;

    // SHOW POPUP
    qrPopup.classList.add("active");
});

// DOWNLOAD QR CODE
downloadBtn.addEventListener("click", () => {
    const imgSrc = qrImage.src;

    if (!imgSrc) return;

    const link = document.createElement("a");
    link.href = imgSrc;
    link.download = "qr-code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// CLOSE POPUP
closeBtn.addEventListener("click", () => {
    qrPopup.classList.remove("active");
});

// CLOSE ON OUTSIDE CLICK (optional)
window.addEventListener("click", (e) => {
    if (e.target === qrPopup) {
        qrPopup.classList.remove("active");
    }
});