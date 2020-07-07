const saveButton = document.querySelector(".card_form");
let lists = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];

function listOpen(event) {
    const addButton = event.target;
    addButton.previousSibling.previousSibling.classList.toggle("showing");
    addButton.classList.toggle("non_showing");
}

function listClose(event) {
    const close = event.target;
    const listTarget = close.parentNode.previousSibling.parentNode;
    close.parentNode.classList.remove("showing");
    listTarget.classList.remove("showing");
    listTarget.nextSibling.nextSibling.classList.remove("non_showing");
}

function cardSave(event) {
    const cardSaveButton = event.target;
    const inputTarget =
        cardSaveButton.parentNode.previousSibling.parentElement.children[0];
    const inputValue = inputTarget.value;

    if (!inputValue) {
        event.preventDefault;
    } else {
        for (let i = 0; i < lists.length; i++) {
            if (lists[i].id === inputTarget.id) {
                lists[i].card.push(inputValue);
            }
        }

        saveList();
    }
}

function writingList(title, id, card) {
    $(".board").prepend(`<div class = "trello_card add_list${id}">
    <h2>${title}</h2>
    <ul class="trello_card_list">
    </ul>
    
    <div class="card_form">
        <input
            type="text"
            class="write_card"
            id="${id}"
            placeholder="Enter a title for your card ..."
        />
        <div class="save card">
            <button class="save_button saveCard">
                save
            </button>
            <span class="save_close closeCard">&times;</span>
        </div>
    </div>
    <button class="add_button card_button" id="add_${id}">
        <i class="fas fa-plus"></i>add another CARD
    </button>
    </div>
   `);

    const saveButton = document.querySelector(".add_button");
    const closeButton = document.querySelector(".closeCard");
    const saveCardButton = document.querySelector(".saveCard");
    const cardList = document.querySelector("ul");
    saveButton.addEventListener("click", listOpen);
    closeButton.addEventListener("click", listClose);
    saveCardButton.addEventListener("click", cardSave);

    for (let i = 0; i < card.length; i++) {
        cardList.innerHTML += `<li>${card[i]}</li>`;
    }
}

function saveList() {
    localStorage.setItem("list", JSON.stringify(lists));
    location.href = location.href;
}

function trelloList() {
    const listValue = $(".write_list").val();

    const writeList = {
        title: listValue,
        card: [],
        id: `card_${lists.length + 1}`,
    };
    lists.push(writeList);
    saveList();
}

$(".saveList").on("click", function () {
    const listValue = $(".write_list").val();
    if (!listValue) {
        event.preventDefault;
    } else {
        trelloList();
        $(".write_list").val("");
    }
});

function init() {
    if (lists !== null) {
        lists.forEach((currentList) => {
            writingList(currentList.title, currentList.id, currentList.card);
        });
    }
}

init();
