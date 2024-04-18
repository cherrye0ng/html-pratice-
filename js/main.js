
// 서브메뉴 선택하면 메인타이틀 내용변경 이벤트 
document.getElementById('mainMenu').addEventListener('click', function() {
    document.querySelector('.mainpagetitle').innerText = "메인메뉴";
});

document.getElementById('chickenMenu').addEventListener('click', function() {
    document.querySelector('.mainpagetitle').innerText = "닭발메뉴";
});

document.getElementById('toppingMenu').addEventListener('click', function() {
    document.querySelector('.mainpagetitle').innerText = "토핑";
});


// 선택한 서브메뉴 따라서 이미지 내용변경  // 현재 서브타이틀은 메인메뉴로 !! 
var currentMenu = 'mainMenu';
toggleMenu(currentMenu);

document.getElementById('mainMenu').addEventListener('click', function() {
    changeMenu('mainMenu');
});

document.getElementById('chickenMenu').addEventListener('click', function() {
    changeMenu('chickenMenu');
});

document.getElementById('toppingMenu').addEventListener('click', function() {
    changeMenu('toppingMenu');
});

//  changeMenu 
function changeMenu(menuId) {
    if (menuId !== currentMenu) {
        toggleMenu(menuId);
        currentMenu = menuId;
    }
}

// toggleMenu
function toggleMenu(menuId) {
    var menus = document.querySelectorAll('.slider-content');
    for (var i = 0; i < menus.length; i++) {
        menus[i].style.display = 'none';
    }
    var menuToShow = document.querySelector('.slider.' + menuId);
    if (menuToShow) {
        menuToShow.style.display = 'flex';
    }
}



// 자동 슬라이더 
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 슬라이드 반복되도록
        autoplay: {
            delay: 2000, // 2초간격 설정
        },
    });
});
