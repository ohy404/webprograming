export default async function main() {
    console.log("start app");

    let currentInedx = 0;
    const menuItems = document.querySelectorAll(".menu_text");
    console.log(menuItems);
    
    console.log(menuItems.length);
    const menuitem_count = menuItems.length;

    menuItems[currentInedx].classList.add("selected");
    window.addEventListener("keydown", (e) => {
        console.log(e.key);
        menuItems[currentInedx].classList.remove("selected");
        if(e.key == "ArrowUp"){
            currentInedx--
            if(currentInedx < 0){
                currentInedx = menuitem_count - 1;
            }
        }
        if(e.key == "ArrowDown"){
            currentInedx++
            currentInedx %= menuitem_count;
        }
    });
}