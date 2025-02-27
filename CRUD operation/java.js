var selectedRow = null;

function onFormSubmit(event) {
            event.preventDefault();
            var formData = readFormData();

            if (selectedRow === null) {
                insertNewRecord(formData);
            } else {
                
            }
            
        }


function readFormData(){
    var formData = {};
    formData["Productcode"] = document.getElementById("productcode").value;
    formData["ProductName"] = document.getElementById("ProductName").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["Perprice"] = document.getElementById("Perprice").value;
   return formData;
}
function insertNewrecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table. Length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productcode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.productname;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perprice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = '<button onclick="onEdit(this)">Edit</button><buton onclick="onDelete(this)">Delete</button>';
    }    

function onedit(td){
selectedRow = td.parentElement.parentElement;
document.getElementById("productcode").value = selectedRow.cells[0].innerHTML;
document.getElementById("productname").value = selectedRow.cells[1].innerHTML;
document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
document.getElementById("perprice").value = selectedRow.cells[3].innerHTML;
}
function updaterecord(formdata){
    selectedRow.cells[0].innerHTML = formdata.productcode;
    selectedRow.cells[1].innerHTML = formdata.productname;
    selectedRow.cells[2].innerHTML = formdata.qty;
    selectedRow.cells[3].innerHTML = formdata.perprice;
}


function onDelete(td) {
    if (confirm("Are you sure you want to delete this record?")) {
        var row = td.parentElement.parentElement;
        document.getElementById("storelist").deleteRow(row.rowIndex);
        resetForm();
    }
}


function resetForm() {
    document.getElementById("productcode").value = "";
    document.getElementById("productname").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("Perprice").value = "";
    selectedRow = null;
}
