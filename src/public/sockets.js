
const saveNote = (title, description) => {
    socket.emit('client:newnote', {
        title,
        description,
    })
    console.log(perra);
}

socket.on('server:newnote', data => {
    notes.innerHTML += 'newnote'
})