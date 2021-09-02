document.getElementById("right-click").onclick = function(){
    var dropright = '<lable for="click-again" id="left-click" class="fa fa-angle-double-left"></lable>';
    document.getElementById("click").innerHTML = dropright;
    document.getElementById("right-sidebar").classList.add("right");
}

