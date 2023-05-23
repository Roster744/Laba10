function addRow() {
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let coffe = document.getElementById("coffe").value;
    let much = document.getElementById("much").value;
    let table = document.getElementById("datatable");

    let newRow = table.insertRow();
    let nameCell = newRow.insertCell();
    let addressCell = newRow.insertCell();
    let emailCell = newRow.insertCell();
    let coffeCell = newRow.insertCell();
    let muchCell = newRow.insertCell();

    nameCell.innerHTML = name;
    addressCell.innerHTML = address;
    emailCell.innerHTML = email;
    coffeCell.innerHTML = coffe;
    muchCell.innerHTML = much;

    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("coffe").value = "";
    document.getElementById("much").value = "";
}