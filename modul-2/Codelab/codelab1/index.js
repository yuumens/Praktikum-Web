function onSubmitChange() {
  const angka1 = parseInt(document.getElementById("angka-satu").value);
  const angka2 = parseInt(document.getElementById("angka-kedua").value);

  const result = angka1 + angka2;

  alert("Hasilnya Adalah : " + result);
  console.log("Hasilnya Adalah : " + result);
}

function onResetChange() {
  document.getElementById("angka-satu").value = "";
  document.getElementById("angka-kedua").value = "";
}
