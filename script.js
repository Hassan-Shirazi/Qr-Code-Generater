  const generateBtn = document.getElementById("generateBtn");
        const clearBtn = document.getElementById("clearBtn");
        const qrImage = document.getElementById("qrImage");
        const qrInput = document.getElementById("qr");
        const placeholder = document.getElementById("placeholder");

        generateBtn.addEventListener('click', () => {
            if (qrInput.value.trim() === "") {
                alert("Please enter some text or URL to generate QR code!");
                return;
            }
            
            // Show loading state
            qrImage.style.opacity = "0.5";
            
            // Generate QR code
            qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrInput.value)}`;
            
            // Hide placeholder and show QR code
            placeholder.style.display = "none";
            
            // Reset opacity after image loads
            qrImage.onload = function() {
                qrImage.style.opacity = "1";
            };
        });

        clearBtn.addEventListener('click', () => {
            qrInput.value = "";
            qrImage.src = "";
            placeholder.style.display = "block";
        });