const addBtn = document.getElementById('add'); // console.log(addBtn);

addBtn.addEventListener('click', () => addNewNote('Add new note'));

function addNewNote() { // console.log('clicked!')
    const note = document.createElement('div');
    note.classList.add('note')

    note.innerHTML = `
        <div class="tools">
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>

        <div class="hidden"></div>
        <textarea ></textarea>
    `;
    
    //delete button
    const deleteBtn = note.querySelector('.delete') //console.log(deleteBtn)
    // delete function
    deleteBtn.addEventListener('click', () => {
        note.remove();
    })

    document.body.appendChild(note);
}
