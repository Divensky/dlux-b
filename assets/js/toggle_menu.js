let toggle = document.querySelector("#toggle");
let menu = document.querySelector("#main-header");

if (toggle && menu) {
    /* Event Listener */
    toggle.addEventListener("click", () => {
        toggleMenu(toggle, menu);
    }, false);
}


/* Toggle flyout menu */
function toggleMenu(toggle, menu) {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        // change the menu icon to mobile menu
        toggle.querySelector("img").src = "images/icon_menu.svg";        
    } else {
        menu.classList.add("active");

        // change the menu icon to close button
        toggle.querySelector("img").src = "images/icon_exit_menu.svg";
    }
}
