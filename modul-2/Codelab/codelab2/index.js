function onRegister() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const address = document.getElementById("alamat").value;

  if (name === "" || email === "" || address === "") {
    alert("Anda Harus Mengisi Data Dengan Lengkap!");
  } else {
    alert(
      "Nama Lengkap : " + name + "\nEmail : " + email + "\nAlamat : " + address
    );
  }
}
