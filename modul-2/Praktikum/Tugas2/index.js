document.addEventListener("DOMContentLoaded", function () {
  const inputTaskAdd = document.getElementById("input-task");
  const addTaskAdd = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  // Fungsi untuk menambahkan tugas ke daftar
  function addTaskToList(taskText) {
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td>${taskText}</td>
        <td><button class="btn btn-warning btn-sm editTask">Edit</button></td>
        <td><button class="btn btn-danger btn-sm deleteTask">Delete</button></td>
    `;
    taskList.appendChild(tableRow);

    // Tambahkan event listener untuk tombol "Delete"
    const deleteButton = tableRow.querySelector(".deleteTask");
    deleteButton.addEventListener("click", function () {
      if (confirm("Apakah Anda Ingin Menghapus Aktivitas Ini?")) {
        taskList.removeChild(tableRow);
      }
    });

    // Tambahkan event listener untuk tombol "Edit"
    const editButton = tableRow.querySelector(".editTask");
    editButton.addEventListener("click", function () {
      const newText = prompt("Edit tugas:", taskText);
      if (newText !== null) {
        tableRow.querySelector("td").textContent = newText;
      }
    });
  }

  addTaskAdd.addEventListener("click", function () {
    const taskText = inputTaskAdd.value.trim();
    if (taskText !== "") {
      addTaskToList(taskText);
      inputTaskAdd.value = "";
    }
  });
});
