$(document).ready(function () {
    var items = $("footer span");
    items.click(schh);


    function schh() {
        items.removeClass("active1");
        $(this).addClass("active1");
    }

    $("footer span:nth-child(1)").addClass("active1");
    // When the element with the ID 'se' is clicked
    $("#home").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/");
    });
    $("#home1").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/");
    });
    $("#me").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/p/blog-page_59.html");
    });
    $("#se").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/search/label/سياسة");
    });
    $("#news").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/search/label/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1");
    });
    $("#torke").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/search/label/%D8%AA%D8%B1%D9%83%D9%8A%D8%A7");
    });
    $("#sport").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/search/label/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9");
    });
    $("#seicurty").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/p/blog-page_17.html");
    });
    $("#callme").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/p/blog-page_49.html");
    });
    $("#who").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/p/blog-page_59.html");
    });
    $("#ad").click(function () {
        // Update the source of the iframe
        $("iframe").attr("src", "https://www.rm1news.com/p/blog-page_47.html");
    });

    $("#open-menu").click(function () {
        openNav();
    });

    $("#close-menu,#me,#call span,#ad").click(function () {
        closeNav();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest("#side-menu").length && !$(event.target).is("#open-menu")) {
            closeNav();
        }
    });

    function openNav() {
        $("#side-menu").css("inset-inline-start", "0");
        $("#navbarClose").addClass("active5");

    }

    function closeNav() {
        $("#side-menu").css("inset-inline-start", "calc(-100%)");
        $("#navbarClose").removeClass("active5");
    }
    $("#side-menu li a").append('<i class="fa fa-angle-right" aria-hidden="true"></i>');

});

