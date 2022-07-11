// add an event listener to the dog picture that listens for a "click" and gives an alert
document.querySelector("#dog-picture").addEventListener("click, () => alert("the image was clicked"));
// add an event listener to the list items in the class schedule that listens for a "mouseover" event and changes its background color
document.querySelector("#class-schedule-list").addEventListener("mouseover", event => (event.target.style.backgroundColor = "blue")

// add an event listener to the whole page that listens for a "keydown" event and prints the key that was pressed
.querySelector("body").addEventListener("keypress", event => console.log("The " + event.key + " was presse!"));
