document.addEventListener('DOMContentLoaded', function () {
    var menuArea = document.querySelector('.menu-area');
    var offcanvasOpen = document.querySelector('.offcanvas-open');
    var offcanvasWrap = document.querySelector('.offcanvas-wrap');
    var offcanvas = document.querySelector('.offcanvas');
    var gnbTraining = document.querySelector('.gnb-training');
    var gnbSub = document.querySelector('.gnb-sub');
    var dropIconL = document.querySelector('.drop-arrow .drop-left');
    var dropIconR = document.querySelector('.drop-arrow .drop-right');
    var alertBox = document.querySelector("#home .content-area .content-wrap .alert");
    var scrollTop = window.scrollY || document.documentElement.scrollTop;


    // 초기 상태
    offcanvas.classList.toggle('active');
    offcanvasWrap.style.height = offcanvas.classList.contains('active') ? '100vh' : 'auto';
    offcanvas.style.transform = offcanvas.classList.contains('active') ? 'translateX(0%)' : 'translateX(-100%)';
    menuArea.style.transform = offcanvas.classList.contains('active') ? 'translateX(0%)' : 'translateX(-100%)';
    menuArea.style.display = "block";

    // window.addEventListener("scroll", function () {
    //     var alertBox = document.querySelector("#home .content-area .content-wrap .alert");
    //     var scrollTop = window.scrollY || document.documentElement.scrollTop;

    //     if (scrollTop > 0) {
    //         alertBox.classList.add("fixed-alert"); // 스크롤이 발생하면 fixed 적용
    //         alertBox.style.top = "60px";
            
    //     } else {
    //         alertBox.classList.remove("fixed-alert"); 
    //         alertBox.style.top = "0";
    //     }
    // });

    if (offcanvasOpen && offcanvas && offcanvasWrap) {
        offcanvasOpen.addEventListener('click', function () {
            // offcanvas 상태 변경
            offcanvas.classList.toggle('active');
            offcanvasWrap.style.height = offcanvas.classList.contains('active') ? '100vh' : 'auto';
            offcanvas.style.transform = offcanvas.classList.contains('active') ? 'translateX(0%)' : 'translateX(-100%)';

            // 메뉴가 열릴 때 menuArea도 나타나게 함
            menuArea.style.transform = offcanvas.classList.contains('active') ? 'translateX(0%)' : 'translateX(-100%)';
            menuArea.style.display = "block";

            // 메뉴 닫을 때 드롭다운도 초기화
            if (!offcanvas.classList.contains('active') && gnbSub) {
                menuArea.style.display = "none";
                gnbSub.classList.remove('active');
                gnbSub.style.display = 'none';
                
                if (dropIconL && dropIconR) {
                    dropIconL.style.transform = 'rotate(45deg)';
                    dropIconR.style.transform = 'rotate(-45deg)';

                }
            }
        });
    }

    if (gnbTraining && gnbSub && dropIconL && dropIconR) {
        gnbTraining.addEventListener('click', function (event) {
            event.stopPropagation(); // 이벤트 버블링 방지
            gnbSub.classList.toggle('active');
            gnbSub.style.display = gnbSub.classList.contains('active') ? 'block' : 'none';

            dropIconL.style.transform = gnbSub.classList.contains('active') ? 'rotate(-45deg)' : 'rotate(45deg)';
            dropIconR.style.transform = gnbSub.classList.contains('active') ? 'rotate(45deg)' : 'rotate(-45deg)';
        });
    }

    // 더보기 아이콘 클릭
    var addIcon = document.querySelector('.add-icon');
    var addItem = document.querySelector('.add-item');

    addIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        if (addItem.style.display === "block") {
            addItem.style.display = "none";
        } else {
            addItem.style.display = "block";
        }
    });

    document.addEventListener('click', function (event) { // 다른 곳 클릭 시 드롭다운 닫기
        if (!addIcon.contains(event.target) && !addItem.contains(event.target)) {
            addItem.style.display = "none";
        }
    });
});