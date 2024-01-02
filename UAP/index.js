function onSubmitPrices() {
  document.getElementById("product-form");
  document.addEventListener("submit", function (event) {
    event.preventDefault();

    const productCode = parseInt(document.getElementById("product-code").value);
    const productQuantity = parseInt(
      document.getElementById("product-quantity").value
    );

    if (productCode === 0o1) {
      const price = 10.0;
      const productSubtotal = price * productQuantity;
      alert("total pembayaran adalah : " + productSubtotal);
    }
    // Reset the form
    document.getElementById("product-code").reset();
    document.getElementById("product-quantity").reset();
  });
}

//   function onSubmitPrice(){asd
//   }
