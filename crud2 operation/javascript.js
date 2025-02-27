var selectedRow = null;

        document.addEventListener("DOMContentLoaded", loadTableData); // Load saved data when page loads

        function onFormSubmit(event) {
            event.preventDefault();
            var formData = readFormData();

            if (selectedRow === null) {
                insertNewRecord(formData);
            } else {
                updateRecord(formData);
                selectedRow = null;
            }
            saveDataToLocalStorage(); // Save data persistently
            resetForm();
        }

        function readFormData() {
            return {
                Productcode: document.getElementById("productcode").value,
                Productname: document.getElementById("productname").value,
                qty: document.getElementById("qty").value,
                Perprice: document.getElementById("perprice").value
            };
        }

        function insertNewRecord(data) {
            var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.rows.length);

            newRow.insertCell(0).innerHTML = data.Productcode;
            newRow.insertCell(1).innerHTML = data.Productname;
            newRow.insertCell(2).innerHTML = data.qty;
            newRow.insertCell(3).innerHTML = data.Perprice;
            newRow.insertCell(4).innerHTML = `
                <button onClick="onEdit(this)">Edit</button>
                <button onClick="onDelete(this)">Delete</button>
            `;

            saveDataToLocalStorage();
        }

        function onEdit(td) {
            selectedRow = td.parentElement.parentElement;
            document.getElementById("productcode").value = selectedRow.cells[0].innerHTML;
            document.getElementById("productname").value = selectedRow.cells[1].innerHTML;
            document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
            document.getElementById("perprice").value = selectedRow.cells[3].innerHTML;
        }

        function updateRecord(formData) {
            selectedRow.cells[0].innerHTML = formData.Productcode;
            selectedRow.cells[1].innerHTML = formData.Productname;
            selectedRow.cells[2].innerHTML = formData.qty;
            selectedRow.cells[3].innerHTML = formData.Perprice;

            saveDataToLocalStorage();
        }

        function onDelete(td) {
            if (confirm("Are you sure you want to delete this record?")) {
                var row = td.parentElement.parentElement;
                document.getElementById("storelist").deleteRow(row.rowIndex);
                resetForm();
                saveDataToLocalStorage();
            }
        }

        function resetForm() {
            document.getElementById("productcode").value = "";
            document.getElementById("productname").value = "";
            document.getElementById("qty").value = "";
            document.getElementById("perprice").value = "";
            selectedRow = null;
        }

        function saveDataToLocalStorage() {
            var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
            var products = [];

            for (var i = 0; i < table.rows.length; i++) {
                var row = table.rows[i];
                var product = {
                    Productcode: row.cells[0].innerHTML,
                    Productname: row.cells[1].innerHTML,
                    qty: row.cells[2].innerHTML,
                    Perprice: row.cells[3].innerHTML
                };
                products.push(product);
            }

            localStorage.setItem("products", JSON.stringify(products));
        }

        function loadTableData() {
            var products = JSON.parse(localStorage.getItem("products")) || [];
            products.forEach(product => insertNewRecord(product));
        }