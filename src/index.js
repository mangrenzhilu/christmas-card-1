$(".container").click(() => {
    $(".container").toggleClass("has-open");

    if ($(".container").hasClass("has-open")) {
        $(".container").animate({left: "63%"}, () => {
            $(".front-img").toggleClass("open");
            $(".front-back-img").toggleClass("open");
            $(".star").toggleClass("item-open");
            $(".ball").toggleClass("item-open");
            $(".front-back-tree-img").toggleClass("open-tree");

        });
    } else {
        $(".container").animate({left: "50%"}, () => {
            $(".front-img").toggleClass("open");
            $(".front-back-img").toggleClass("open");
            $(".star").toggleClass("item-open");
            $(".ball").toggleClass("item-open");
            $(".front-back-tree-img").toggleClass("open-tree");
        });
    }

});