const urlParams = new URLSearchParams(window.location.search);
const namas = urlParams.get("nama");
const nims = urlParams.get("nim");
const alamats = urlParams.get("alamat");

if (namas && nims && alamats) {
  console.log(namas);
  console.log(nims);
  console.log(alamats);

  const table = document
    .getElementById("data-table")
    .getElementsByTagName("tbody")[0];
  const newRow = table.insertRow(table.rows.length);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.innerHTML = namas;
  cell2.innerHTML = nims;
  cell3.innerHTML = alamats;
}
