const addBtn = document.getElementById("add"); // console.log(addBtn);

const notes = JSON.parse(localStorage.getItem("notes"))

if(notes) {
    notes.forEach(note => addNewNote(note))
}

addBtn.addEventListener("click", () => addNewNote("Add a new note"));

function addNewNote(text = "") { // console.log('clicked!')
    const note = document.createElement("div");
    note.classList.add("note")

    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

    const deleteBtn = note.querySelector(".delete"); //delete button console.log(deleteBtn)
    const editBtn = note.querySelector(".edit");
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea"); // delete function

    textArea.value = text
    main.innerHTML = text

    deleteBtn.addEventListener("click", () => {
        note.remove();
    });

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    })

    textArea.addEventListener("input", (e) => {
        const value = e.target.value;
        // console.log(value);
        main.innerHTML = value;

        updateLS();
    })

    document.body.appendChild(note);
}

function updateLS() {
    const notesText = document.querySelectorAll("textarea");
    console.log(notesText)

    const notes = [];

    notesText.forEach(note => notes.push(note.value))

    // console.log(notes, notesText)

    localStorage.setItem("notes", JSON.stringify(notes))
}



// localStorage.setItem("name", "Miranda");
// localStorage.getItem("name");
// localStorage.removeItem("name");
// localStorage.setItem("studentNames", JSON.stringify())
// JSON.parse(localStorage.getItem)
