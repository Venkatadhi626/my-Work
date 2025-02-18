// Create an object with properties and a method
const book = {
    title: "JavaScript Essentials",
    author: "Jane Smith",
    pages: 250,
    isAvailable: true,
    summary: "This book covers the basics of JavaScript, including objects, functions, and the DOM.",
    showSummary: function() {
        const summaryElement = document.getElementById("summary");
        summaryElement.textContent = this.summary;
        summaryElement.classList.toggle("hidden");
    }
};

// Display the object properties on the webpage
document.getElementById("title").textContent = book.title;
document.getElementById("author").textContent = "Author: " + book.author;
document.getElementById("pages").textContent = "Pages: " + book.pages;
document.getElementById("availability").textContent = "Available: " + (book.isAvailable ? "Yes" : "No");
