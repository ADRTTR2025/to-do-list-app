const Tasklist = document.getElementById("Tasklist");
const Taskinput = document.getElementById("Taskinput");
const press = document.getElementById("press");

press.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = Taskinput.value;
    Tasklist.appendChild(li);
    Taskinput.value = "";

    const donebtn = document.createElement("button");
    donebtn.textContent = "Delete";

    donebtn.addEventListener("click", () => {
        li.remove();
        
    });
    

    li.appendChild(donebtn);
});