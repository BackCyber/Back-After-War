    const mode = document.getElementById("mode");
        mode.addEventListener("click", () => {
            document.body.classList.toggle("dark")
    if (document.body.classList.contains("dark")) {
        mode.textContent = "Light Mode"
    }else {
        mode.textContent = "Dark Mode"
    }
    })    
