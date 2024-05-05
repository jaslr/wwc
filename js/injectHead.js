
document.addEventListener("DOMContentLoaded", function() {
    fetch('/index.html')  // Adjust the path as necessary
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, "text/html");
            const headContent = doc.head.innerHTML;
            document.head.innerHTML += headContent;
        })
        .catch(error => console.error('Error loading the head content:', error));
});