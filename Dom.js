// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p"); 
paragraph.textContent = "Hey I am Red" ; 
paragraph.style.color = "Red"
container.appendChild(paragraph);

const header3 = document.createElement("h3"); 
header3.textContent = "I am a blue h3" ; 
header3.style.color = "Blue"
container.appendChild(header3);

const content_2 = document.createElement("div");

const header_1 = document.createElement("h1");
header_1.textContent = "I'm in a div" ;

const paragraph_2 = document.createElement("p");
paragraph_2.textContent = "ME TOO!";

content_2.appendChild(header_1);
content_2.appendChild(paragraph_2);

container.appendChild(content_2);