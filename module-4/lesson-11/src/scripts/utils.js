const $ = (tag) => {
    return document.querySelector(tag);
}
function createElement(tagName, className, content) {
    const newElement = document.createElement(tagName);
    newElement.setAttribute('class', className);
    newElement.innerHTML = content;
    return newElement;
} 
function fetchData (URL, callback) {
    fetch(URL)
         .then(response => response.json())
         .then(data => callback(data));
}
