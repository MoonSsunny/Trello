"use strict";

$(document).ready(function () {
    // 모달창 button 제어

    $(".close").on("click", function () {
        $(".modal").css("display", "none");
    });

    $(document).on("click", function (e) {
        if ($(".modal").is(e.target)) {
            $(".modal").css("display", "none");
        }
    });

    $(".edit_box .closeButton").on("click", function () {
        $(".edit_box").css("display", "none");
    });

    $(".edit_title_box .closeButton").on("click", function () {
        $(".edit_title_box").css("display", "none");
    });

    $(".titleEdit").on("click", function () {
        $(".edit_title_box").toggle();
    });

    $(".descriptionEdit").on("click", function () {
        $(".edit_box").toggle();
    });

    // card & list button 제어

    $(".card_button").on("click", function () {
        $(".write_card").toggle();
        $(".save.card").css("display", "flex");
        $(".card_button").css("display", "none");
    });
    $(".list_button").on("click", function () {
        $(".write_list").toggle();
        $(".save.list").css("display", "flex");
        $(".list_button").css("display", "none");
    });

    $(".saveList").on("click", function () {
        $(".write_list").toggle();
        $(".list_button").css("display", "block");
        $(".save.list").css("display", "none");
    });

    $(".saveCard").on("click", function () {
        $(".write_card").toggle();
        $(".card_button").css("display", "block");
        $(".save.card").css("display", "none");
    });
});
