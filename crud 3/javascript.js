let products = [];

function onFormSubmit(event) {
    event.preventDefault();

    const productCode = document.getElementById('productcode').value;
    const productName = document.getElementById('productname').value;
    const qty = document.getElementById('qty').value;
    const price = document.getElementById('perprice').value;

    const product = {
        productCode,
        productName,
        qty,
        price
    };

    // Check if the product already exists
    const existingProductIndex = products.findIndex(p => p.productCode === productCode);

    if (existingProductIndex === -1) {
        // Add new product
        products.push(product);
    } else {
        // Update existing product
        products[existingProductIndex] = product;
    }

    // Clear the form
    event.target.reset();

    // Refresh the table
    renderTable();
}

function renderTable() {
    const tbody = document.querySelector('#storelist tbody');
    tbody.innerHTML = '';

    products.forEach((product, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.productCode}</td>
            <td>${product.productName}</td>
            <td>${product.qty}</td>
            <td>${product.price}</td>
            <td>
                <button onclick="onEdit('${product.productCode}')">Edit</button>
                <button onclick="onDelete('${product.productCode}')">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function onEdit(productCode) {
    const product = products.find(p => p.productCode === productCode);

    if (product) {
        document.getElementById('productcode').value = product.productCode;
        document.getElementById('productname').value = product.productName;
        document.getElementById('qty').value = product.qty;
        document.getElementById('perprice').value = product.price;
    }
}

function onDelete(productCode) {
    products = products.filter(p => p.productCode !== productCode);
    renderTable();
}

// Initial render
renderTable();