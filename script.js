

//elements
const animalButton = document.querySelectorAll(".big-five-button");
const animalSpotted = document.getElementById("spotted-animals-list");
const removeFirst = document.getElementById("remove-first-item-button");
const removeAll = document.getElementById("remove-all-button");


//functions
animalButton.forEach(button => {
    button.addEventListener("click", function (e) {
        console.log("click");
        const animalName = button.innerHTML.valueOf();
        const listElement = document.createElement("li");
        animalSpotted.appendChild(listElement);
        listElement.innerHTML = animalName;
    });
});

removeFirst.addEventListener("click", function (e) {
    const firstChild = animalSpotted.firstChild;
    const removed = animalSpotted.removeChild(firstChild);
})

removeAll.addEventListener("click", function (e) {
    const allInList = animalSpotted.querySelectorAll("li");
    allInList.forEach(animal => {
        animalSpotted.removeChild(animal);
    })
});
