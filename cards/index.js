const maxWidth = 100;
const maxHeight = 70;
const staticSercices = 200;
const imgCard = `<img src="paper.jpg" id="paper-image" alt="" />`;
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const paperWidthInpt = document.getElementById("paper_width");
  const paperHeightInpt = document.getElementById("paper_height");
  const faces = document.getElementById("faces");
  const material = document.getElementById("material");
  const quantity = document.getElementById("quantity");
  const card_price = document.getElementById("card_price");

  const price = document.getElementById("price");
  const paper = document.getElementById("paper-image");

  const paperWidthBill = document.querySelector(".width_bill");
  const paperHeightBill = document.querySelector(".height_bill");

  const paper_parent_image = document.querySelector(".paper_parent_image");
  const facesBill = document.querySelector(".faces_bill");
  const materialBill = document.querySelector(".material_bill");
  const quantityBill = document.querySelector(".quantity_bill");
  const carts_bill = document.querySelector(".carts_bill");
  const bill = document.querySelector(".bill");
  const far5CountBill = document.querySelector(".far5_count_bill");

  price.textContent = "";
  // paper_parent_image.innerHTML = "";

  let countHeightParts1 = maxHeight / paperHeightInpt.value;
  let countWidthParts1 = maxWidth / paperWidthInpt.value;
  let allParts1 = Math.floor(countHeightParts1) * Math.floor(countWidthParts1);

  let countHeightParts2 = maxHeight / paperWidthInpt.value;
  let countWidthParts2 = maxWidth / paperHeightInpt.value;
  let allParts2 = Math.floor(countHeightParts2) * Math.floor(countWidthParts2);
  console.log("allParts1 => " + allParts1, "allParts2 => " + allParts2);

  const lengthCards = allParts2 > allParts1 ? allParts2 : allParts1;

  // for (let i = 0; i < lengthCards; i++) {
  //   const numCard = `<span style='position: absolute'>${i + 1}</span>`;

  //    paper_parent_image.innerHTML += `<div style='display: flex;
  //   align-items: center;
  //   justify-content: center;'>${imgCard} ${numCard}</div>`;
  // }

  let far5 = (quantity.value / lengthCards).toFixed(1).split(".");

  console.log(+(quantity.value / lengthCards).toFixed(1));
  let far5Price = Math.ceil(
    +material.value * +far5[0] + +material.value * (+far5[1] / 10)
  );
  // let leftCards = Math.ceil(lengthCards - lengthCards * (+far5[1] / 10));
  console.log(far5Price);

  const selectHtmlMaterial = {
    6: "كوشية 150 جرام",
    11: "كوشية 200 جرام",
    13: "كوشية 300 جرام",
  };

  console.log(selectHtmlMaterial[material.value]);

  price.textContent = far5Price * faces.value + " جنية";

  // ----------------------------
  paperWidthBill.textContent = paperWidthInpt.value + " سم";
  paperHeightBill.textContent = paperHeightInpt.value + " سم";
  far5CountBill.textContent = +(quantity.value / lengthCards).toFixed(1);
  facesBill.textContent = faces.value;
  materialBill.textContent = selectHtmlMaterial[material.value];
  quantityBill.textContent = quantity.value;
  carts_bill.textContent = lengthCards;
  card_price.textContent = (( (quantity.value / 500) * 400) * faces.value) + 200 ;
  console.log(card_price.textContent);

  // paper.style.height = +paperHeightInpt.value + "px";
  // paper.style.width = +paperWidthInpt.value + "px";
  // bill.style.display = "block";

  bill.style.opacity = "1";
  bill.style.pointerEvents = "none";

  console.log(far5CountBill.textContent);
});

document.getElementById("screenshotBtn").addEventListener("click", function () {
  this.style.opacity = "0";
  document.getElementById("output").innerHTML = "";

  const captureElement = document.getElementById("capture");
  html2canvas(captureElement).then((canvas) => {
    // Append the canvas to the output div

    // Optionally, convert the canvas to a downloadable image
    const link = document.createElement("a");
    link.download = "My Bill.png";
    link.id = "download_bill";
    link.href = canvas.toDataURL();
    link.textContent = "تنزيل الفاتورة";

    document.getElementById("output").appendChild(link);
    document.getElementById("output").appendChild(canvas);

    setTimeout(() => {
      this.style.opacity = "1";
    }, 10);
  });
});
