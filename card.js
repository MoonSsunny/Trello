// const listForm = document.getElementsByClassName("list_form");
// const listInput = document.getElementsByClassName("write_list");
// let writeList = [];

// function reloadList(text) {
//     const div = document.createElement("div");
//     div.classList.add("trello_card add_list");
//     div.innerHTML = `<h2>${text}</h2>`;
// }

// function loadList() {
//     const saveList = localStorage.getItem("list");
//     if (saveList !== null) {
//         const parseList = JSON.parse(saveList);
//         parseList.forEach((list) => {
//             reloadList(list.text);
//         });
//     }
// }

// function handleSubmit() {
//     event.preventDefault();
//     const listInputValue = listInput.value;
//     reloadList(listInputValue);
//     listInput.value = "";
// }

// function init() {
//     loadList();
//     listForm.addEventListener("submit", handleSubmit);
// }

// init();

let lists = [];

function saveList() {
    localStorage.setItem("list", JSON.stringify(lists));
    console.log(lists);
}

function trelloList() {
    const listValue = $(".write_list").val();
    const writeList = {
        title: listValue,
        id: lists.length + 1,
    };
    lists.push(writeList);
    saveList();
}

// const saveButton = document.getElementsByClassName(".saveList")
// saveButton.onclick = function(){

// }
$(".saveList").on("click", function () {
    trelloList();
    $(".write_list").val("");
});
