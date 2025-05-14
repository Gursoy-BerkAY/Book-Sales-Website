


let canClick = true; // Global tıklama kontrol değişkeni

function enableClick() {
    canClick = true; // Tıklamaya tekrar izin ver
}
var kutu=document.getElementById("kutu");

var sagsayac=0;
var solsayac=0;
// Sol ok butonları için
let scrollLeftButtons = document.getElementsByClassName('scroll-left');
Array.from(scrollLeftButtons).forEach((button, index) => {
    button.onclick = function () {
        if (canClick) {
            canClick = false; // Tıklamayı geçici olarak devre dışı bırak
            solsayac+=5;
            if(sagsayac==0){
                sagsayac=20;
            }
            else{
                sagsayac-=5;
            }
            let productList = document.getElementsByClassName('product-list')[index]; // İlgili product-list öğesini seç
            productList.scrollBy({
                left: -(kutu.offsetWidth*4+80), // Sol tarafa kaydırma
                behavior: 'smooth'
            });
            if (productList.scrollLeft <= 0) {
                productList.scrollLeft = productList.scrollWidth; // En sona atla
            }
            setTimeout(enableClick, 400); // 0.4 saniye bekleme süresi
        }
    };
});


// Sağ ok butonları için
let scrollRightButtons = document.getElementsByClassName('scroll-right');
Array.from(scrollRightButtons).forEach((button, index) => {
    button.onclick = function () {
        if (canClick) {
            canClick = false; // Tıklamayı geçici olarak devre dışı bırak
            sagsayac+=5;
            if(solsayac==20){
                solsayac=0;
            }
            else{
                solsayac-=5;
            }
            let productList = document.getElementsByClassName('product-list')[index]; // İlgili product-list öğesini seç
            productList.scrollBy({
                left: kutu.offsetWidth*4+80, // Sağ tarafa kaydırma
                behavior: 'smooth'
            });
            if (productList.scrollLeft + productList.clientWidth >= productList.scrollWidth) {
                productList.scrollLeft = 0; // En başa atla
            }
            setTimeout(enableClick, 400); // 0.4 saniye bekleme süresi
        }
    };
});


