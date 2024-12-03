$(document).ready(function () {
    // Завдання 1
    const $text = $('#hide_text');
    $text.hide();
    $('.button').click(function () {
        $text.show(200);
    });

    // Завдання 2
    $("p:first").text("DOM first!");
    $("p:last").text("DOM last!");

    $("#hover-div").hover(
        function () {
            $(this).addClass("hovered");
        },
        function () {
            $(this).removeClass("hovered");
        }
    );

    // Завдання 3.1
    $("#click-div").bind("click", function () {
        $(this).addClass("clicked");
    });

    $("#click-div").bind("dblclick", function () {
        $(this).removeClass("clicked");
    });

    // Завдання 3.2
    $("#single-click-btn").bind("click", function () {
        alert("Одинарний клік");
    });

    $("#double-click-btn").bind("dblclick", function () {
        alert("Подвійний клік");
    });

    // Завдання 3.3
    $("#show-image").click(function () {
        $("#image").fadeIn();
    });

    $("#image").click(function () {
        $(this).fadeOut();
    });

    $("#image").hover(
        function () {
            $("#image-caption").show();
        },
        function () {
            $("#image-caption").hide();
        }
    );

    // Завдання 3.4
    $("#validation-form").submit(function (event) {
        event.preventDefault();
        const input = $("#input-text").val();
        if (input === "correct") {
            $("#validation-message").text("Успішно!").css("color", "green");
        } else {
            $("#validation-message").text("Неправильно!").css("color", "red");
        }
    });
});