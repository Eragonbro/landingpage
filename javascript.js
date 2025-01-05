const checkbox = document.getElementById("toggleCheckbox");

checkbox.addEventListener('change', () => {
        document.documentElement.classList.toggle("dark");
        
        document.getElementById("moon").classList.toggle("moonColorWhite");
}

);

// define a CSS class for dark mode in CSS .darkMode { background-color: ; color: ;}

// add event lister on "change" event that adds the class to the body