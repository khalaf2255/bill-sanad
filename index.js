document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const paperWidthInpt = document.getElementById("paper_width");
  const paperHeightInpt = document.getElementById("paper_height");
  const faces = document.getElementById("faces");
  const material = document.getElementById("material");
  const quantity = document.getElementById("quantity");

  const price = document.getElementById("price");
  const paper = document.getElementById("paper-image");

  const paperWidthBill = document.querySelector(".width_bill");
  const paperHeightBill = document.querySelector(".height_bill");

  const facesBill = document.querySelector(".faces_bill");
  const materialBill = document.querySelector(".material_bill");
  const quantityBill = document.querySelector(".quantity_bill");

  const bill = document.querySelector(".bill");

  price.textContent = "";
  console.log(paperHeightInpt.value);

  price.textContent = paperWidthInpt.value * paperHeightInpt.value + " جنية";
  paperWidthBill.textContent = paperWidthInpt.value + " سم";
  paperHeightBill.textContent = paperHeightInpt.value + " سم";
  facesBill.textContent = faces.value;
  materialBill.textContent = material.value;
  quantityBill.textContent = quantity.value;

  paper.style.height = paperHeightInpt.value + "px";
  paper.style.width = paperWidthInpt.value + "px";
  // bill.style.display = "block";
  bill.style.opacity = "1";
  bill.style.pointerEvents = "none";
});

document.getElementById("screenshotBtn").addEventListener("click", function () {
  this.style.opacity = "0"

  const captureElement = document.getElementById("capture");
  html2canvas(captureElement).then((canvas) => {
    // Append the canvas to the output div
    document.getElementById("output").innerHTML = "";
    
    // Optionally, convert the canvas to a downloadable image
    const link = document.createElement("a");
    link.download = "My Bill.png";
    link.id = "download_bill";
    link.href = canvas.toDataURL();
    link.textContent = "تنزيل الفاتورة";
    
    document.getElementById("output").appendChild(link);
    document.getElementById("output").appendChild(canvas);

    setTimeout(() => {
      this.style.opacity = "1"
        
      }, 10);
  });
});
