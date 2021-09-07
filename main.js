const name= document.querySelector("#name");
const author = document.querySelector("#author");
const year = document.querySelector("#year");
const btn= document.querySelector("#btn");
const bookList = document.querySelector("#booklist");

btn.addEventListener("click",function(e){
  e.preventDefault();
if(name.value == "" && author.value == ""
 &&  year.value == ""){
   alert('Please Add Something!!');
   }  
  else{
  const newRow = document.createElement("tr");
  const newName = document.createElement("th");
  newName.innerHTML = name.value;
  
 newRow.appendChild(newName);
 
const newAuthor = document.createElement("th");
  newAuthor.innerHTML = author.value;
 newRow.appendChild(newAuthor);
 
 
const newYear = document.createElement("th");
  newYear.innerHTML = year.value;
 newRow.appendChild(newYear);
  bookList.appendChild(newRow);
 
        
        
        
        
        
        
        
  }
})

