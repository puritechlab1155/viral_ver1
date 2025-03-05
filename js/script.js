document.addEventListener('DOMContentLoaded', function () {
    var menuArea = document.querySelector('.menu-area');
    var offcanvasOpen = document.querySelector('.offcanvas-open');
    var offcanvasWrap = document.querySelector('.offcanvas-wrap');
    var offcanvas = document.querySelector('.offcanvas');
    var gnbTraining = document.querySelector('.gnb-training');
    var gnbSub = document.querySelector('.gnb-sub');
    var dropIconL = document.querySelector('.drop-arrow .drop-left');
    var dropIconR = document.querySelector('.drop-arrow .drop-right');

    menuArea.style.transform = 'translateX(-100%)';

    if (offcanvasOpen && offcanvas && offcanvasWrap) {
        offcanvasOpen.addEventListener('click', function () {
            menuArea.style.transform = 'translateX(0%)';
            offcanvas.classList.toggle('active');
            offcanvasWrap.style.height = offcanvas.classList.contains('active') ? '100vh' : 'auto';
            offcanvas.style.transform = offcanvas.classList.contains('active') ? 'translateX(0%)' : 'translateX(-100%)';

            // 메뉴 닫을 때 드롭다운도 초기화
            if (!offcanvas.classList.contains('active') && gnbSub) {
                menuArea.style.transform = 'translateX(-100%)';
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
});