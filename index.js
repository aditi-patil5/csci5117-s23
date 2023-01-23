window.addEventListener("DOMContentLoaded", ()=>{
    console.log("hello")
    button = document.getElementById("button");
    button.addEventListener("click", ()=> {
        console.log("helloThere")
        bookName = document.getElementById("bookName").value;
        image = document.getElementById("image").value || "";
        link = document.getElementById("weblink").value;
        description = document.getElementById("description").value;
        
        row = document.createElement("tr");
        bookNode = document.createElement("td");
        bookNode.innerText = bookName;
        row.appendChild(bookNode);
        imgNode = document.createElement("td");
        imgNode.innerHTML = `<img src="${image}">`;
        row.appendChild(imgNode);
        linkNode = document.createElement("td");
        linkNode.innerHTML = `<a href="${link}">Wiki Link</a>`;
        row.appendChild(linkNode);
        descriptionNode = document.createElement("td");
        descriptionNode.innerText = description;
        row.appendChild(descriptionNode);

        table = document.getElementById("bookTable");
        table.appendChild(row);

        document.getElementById("form").reset();
    });
    
    
});