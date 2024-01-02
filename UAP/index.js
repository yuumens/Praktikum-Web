function onSubmitPrices() {
  const productCode = parseFloat(document.getElementById("product-code").value);
  const productQuantity = parseFloat(
    document.getElementById("product-quantity").value
  );

  if (productCode === 0o1) {
    const price = 10000;
    const productSubtotal = price * productQuantity;
    alert("total pembayaran adalah : " + productSubtotal);
    const userCash = parseFloat(prompt("Masukkan jumlah uang:"));
    if (isNaN(userCash)) {
      alert("Input tidak valid, silakan masukkan angka.");
    } else {
      const totalChange = userCash - productSubtotal;
      alert("kembalian anda adalah : " + totalChange);
    }
  } else if (productCode === 0o2) {
    const price = 20000;
    const productSubtotal = price * productQuantity;
    alert("total pembayaran adalah : " + productSubtotal);
    const userCash = parseFloat(prompt("Masukkan jumlah uang:"));
    if (isNaN(userCash)) {
      alert("Input tidak valid, silakan masukkan angka.");
    } else {
      const totalChange = userCash - productSubtotal;
      alert("kembalian anda adalah : " + totalChange);
    }
  } else if (productCode === 0o3) {
    const price = 30000;
    const productSubtotal = price * productQuantity;
    alert("total pembayaran adalah : " + productSubtotal);
    const userCash = parseFloat(prompt("Masukkan jumlah uang:"));
    if (isNaN(userCash)) {
      alert("Input tidak valid, silakan masukkan angka.");
    } else {
      const totalChange = userCash - productSubtotal;
      alert("kembalian anda adalah : " + totalChange);
    }
  } else {
    alert("Product Code Tidak Di Temukan");
  }
  document.getElementById("product-form").reset();
}
