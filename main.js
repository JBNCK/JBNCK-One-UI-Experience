function onload() {
    sidebar_collapsed = 0;
}

function sidebar_move() {
    if (sidebar_collapsed == 0) {
        var element = document.getElementById("sidebar_id");
        element.setAttribute("style", "width: 0; opacity: 0;");
        var element = document.getElementById("sidebar_content");
        element.setAttribute("style", "display: none; width: 0; opacity: 0;");
        var element = document.getElementById("main_id");
        element.setAttribute("style", "margin-left: 0;")
        sidebar_collapsed = 1;
    }
    else {
        var element = document.getElementById("sidebar_id");
        element.setAttribute("style", "display: block;")
        element.setAttribute("style", "width: 200px;");
        var element = document.getElementById("sidebar_content");
        element.setAttribute("style", "display: block; opacity: 100%; width: 100%;");
        var element = document.getElementById("main_id")
        element.setAttribute("style", "margin-left: 250px;")
        sidebar_collapsed = 0;
    }
}