function back_menu(){
    document.getElementById('main-menu').classList.remove("active-menu");
}
function unChecked(){
    document.getElementById('order').checked = false;
    document.getElementById('payment').checked = false;
    document.getElementById('alerts').checked = false;
    document.getElementById('story').checked = false;
    document.getElementById('route').checked = false;
    document.getElementById('bonuses').checked = false;
    document.getElementById('rates').checked = false;
    document.getElementById('dispatcher').checked = false;
    document.getElementById('support').checked = false;
    document.getElementById('information').checked = false;
}
function BackG(){
    document.getElementById('BG').classList.add("background");
}
function BackG_not(){
    document.getElementById('BG').classList.remove("background");
}
function open_block(item){
    document.getElementById(item).classList.add("active");
    BackG();
}

function close_block(item){
    document.getElementById(item).classList.remove("active");
    BackG_not();
}