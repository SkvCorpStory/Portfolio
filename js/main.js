const contacts = document.querySelectorAll('.left>div');
    
    contacts.forEach(element => {
        element.addEventListener('click', function() {
            element.classList.toggle('active');
        })
    })