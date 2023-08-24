$(document).ready(function () {
    var items = $("footer span");

    items.click(schh);


    function schh() {
        items.removeClass("active1");
        $(this).addClass("active1");
    }

    $("footer span:nth-child(1)").addClass("active1");
    // When the element with the ID 'se' is clicked
    $("#se").click(function () {
        // Update the source of the embed
        $("embed").attr("src", "https://www.rm1news.com/search/label/سياسة");
    })
    $("#news").click(function () {
        // Update the source of the embed
        $("embed").attr("src", "https://www.rm1news.com/search/label/%D8%A3%D8%AE%D8%A8%D8%A7%D8%B1");
    })
    $("#torke").click(function () {
        // Update the source of the embed
        $("embed").attr("src", "https://www.rm1news.com/search/label/%D8%AA%D8%B1%D9%83%D9%8A%D8%A7");
    })
    $("#sport").click(function () {
        // Update the source of the embed
        $("embed").attr("src", "https://www.rm1news.com/search/label/%D8%B1%D9%8A%D8%A7%D8%B6%D8%A9");
    })
});

