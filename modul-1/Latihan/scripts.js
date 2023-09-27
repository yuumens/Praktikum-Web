let numbers = 1;

function tambahData() {
  const namas = document.getElementById("nama").value;
  const nims = document.getElementById("nim").value;
  const alamats = document.getElementById("alamat").value;

  if (namas && nims && alamats) {
    // console.log(namas);
    // console.log(nims);
    // console.log(alamats);

    const table = document
      .getElementById("data-table")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);

    cell1.innerHTML = numbers;
    cell2.innerHTML = namas;
    cell3.innerHTML = nims;
    cell4.innerHTML = alamats;

    numbers++;
  }
}
