let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');// lấy ra tất cả các tab-item
const panes = $$('.tab-pane');// lấy ra tất cả các tab-pane
const tabActive = $('.tab-item.active');// lấy ra cái tab item mà đang active
const line = $(".tabs .line");// lấy ra cái tab line
line.style.left = tabActive.offsetLeft + "px";// đây là mình đang set left và width cho cái line
line.style.width = tabActive.offsetWidth + "px";// sao cho nó khớp với cái tabitem đang active
// ok bây giờ sẽ lặp qua các phần tử để gọi sự kiện onlick
tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active');// remove class active
        $('.tab-pane.active').classList.remove('active');// khỏi tab và pane
        line.style.left = this.offsetLeft + "px"; // gán lại left width cho tab clik vào
        line.style.width = this.offsetWidth + "px";
        this.classList.add('active'); // gán lại cho tab click vào
        pane.classList.add('active');
    }
});