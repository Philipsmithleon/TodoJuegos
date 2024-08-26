$(document).ready(function() {
    $(".view-details").click(function(e) {
        e.preventDefault();
        
        var gameCard = $(this).closest(".card");
        var gameName = gameCard.find(".card-title").text();
        var gamePrice = gameCard.find(".card-text").first().text();
        var gameDesc = gameCard.find(".long-description").text();
        var gameImg = gameCard.find("img").attr("src");
        
        var currentUrl = window.location.pathname;
        
        localStorage.setItem("gameName", gameName);
        localStorage.setItem("gamePrice", gamePrice);
        localStorage.setItem("gameDesc", gameDesc);
        localStorage.setItem("gameImg", gameImg);
        localStorage.setItem("pageName", currentUrl);
        
        window.location.href = "detalle.html";
    });
});
