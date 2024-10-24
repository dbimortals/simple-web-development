const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar() {
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

    closeALLSubMenu()
}

function toggleSubMenu(button) {
    // Close all other submenus if the clicked one is not already open
    if(!button.nextElementSibling.classList.contains('show')) {
        closeALLSubMenu()
    }
    
    // Toggle the clicked submenu and rotate the button
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    // If sidebar is closed, open it when clicking the submenu button
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')
    }
}

function closeALLSubMenu() {
    Array.from(sidebar.getElementsByClassName('submenu')).forEach(ul => {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}
