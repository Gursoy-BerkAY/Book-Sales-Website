
// İkinci HTML'de çalışan kod
window.onload = function() {
    // LocalStorage'dan arka plan URL'sini al
    const imageUrl = localStorage.getItem("backgroundImage");
    const ack=localStorage.getItem("ack");
    const fiyat=localStorage.getItem("fiyat");
    if (imageUrl) {
        // Eğer URL varsa, arka planı değiştir
        document.getElementsByClassName("ack")[1].innerText=`${ack}`;
        document.getElementsByClassName("fiyat")[1].innerText = `${fiyat}`;
        document.getElementsByClassName("urunpng")[1].style.backgroundImage = `url('${imageUrl}')`;

        document.getElementsByClassName("ack")[0].innerText=`${ack}`;
        document.getElementsByClassName("fiyat")[0].innerText = `${fiyat}`;
        document.getElementsByClassName("urunpng")[0].style.backgroundImage = `url('${imageUrl}')`;
    
    }
};

function sepeteEkle(urunAdi) {
    // Sayaç artır
    let sayacElement =Number( document.getElementById("sayac").innerText++);

    var urun = document.createElement("div");
    var img = document.createElement("img");
    var detaylar = document.createElement("div");
    var urunadi = document.createElement("h2");
    var ack = document.createElement("p");
    var sayac = document.createElement("div");
    var arttir = document.createElement("input");
    var adet = document.createElement("p");
    var azalt = document.createElement("input");
    var sil = document.createElement("input");

    document.querySelector(".urunler").appendChild(urun);
    urun.appendChild(img);
    urun.appendChild(detaylar);
    detaylar.appendChild(urunadi);
    detaylar.appendChild(ack);
    detaylar.appendChild(sayac);
    detaylar.appendChild(arttir);
    detaylar.appendChild(adet);
    detaylar.appendChild(azalt);
    detaylar.appendChild(sil);

    // Sınıf atamaları
    urun.setAttribute("class", "urun");
    img.setAttribute("src", imageUrl);
    img.setAttribute("class", "resim");
    detaylar.setAttribute("class", "detaylar");
    urunadi.setAttribute("class", "UrunAdi");
    urunadi.innerText = urunAdi; // Ürün adı ekleme
    ack.setAttribute("class", "aciklama");
    sayac.setAttribute("class", "urunsayac");
    arttir.setAttribute("type", "button");
    arttir.setAttribute("class", "btn");
    arttir.setAttribute("onClick", "arttir()");
    arttir.setAttribute("value", "+");
    adet.setAttribute("class", "adet");
    azalt.setAttribute("type", "button");
    azalt.setAttribute("class", "btn");
    azalt.setAttribute("onClick", "azalt()");
    azalt.setAttribute("value", "-");
    sil.setAttribute("type", "button");
    sil.setAttribute("class", "btn");
    sil.setAttribute("onClick", "cikart()");
    sil.setAttribute("value", "🗑️");

    // Sepete ekleme işlemi
    var urunFiyat = parseFloat((urunFiyatlari[urunAdi] || "0").toString().replace(',', '.')); 

    var kayitliSepet = localStorage.getItem(sepetAnahtari);
    sepet = kayitliSepet ? JSON.parse(kayitliSepet) : [];

    var urunIndex = sepet.findIndex(u => u.ad === urunAdi);
    if (urunIndex > -1) {
        sepet[urunIndex].adet++;
    } else {
        sepet.push({ ad: urunAdi, fiyat: urunFiyat, adet: 1 });
        alert("Ürün Sepete Eklendi 😊");
    }

    localStorage.setItem(sepetAnahtari, JSON.stringify(sepet));
    guncelleSepet();
}



for(var i=1;i<100;i++)
    {
    var yenidiv=document.createElement("div");
    
    var yeniimg=document.createElement("img");
    
    document.getElementById("ana").appendChild(yenidiv);
    
    var image=yenidiv.appendChild(yeniimg);
    image.setAttribute("src", i+".jpg");
    }

function Avcilar() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/Avcilar.webp");
    localStorage.setItem("ack", "Avlanma becerilerini test eden bir hikaye, okurlarını tehlikeli bir maceranın merkezine taşıyor...");
    localStorage.setItem("fiyat", "78 TL");
    window.location.href = "ürünsayfasi.html";
}

function SuikastcininNotlari() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/SuikastcininNotlari.webp");
    localStorage.setItem("ack", "Gizem dolu bir suikastçı ve hedefleri, okurları aksiyon ve gerilim dolu bir hikayeye davet ediyor...");
    localStorage.setItem("fiyat", "87 TL");
    window.location.href = "ürünsayfasi.html";
}

function MadMaxFuryRoad() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/MadMax.webp");
    localStorage.setItem("ack", "Çorak bir dünyada geçen bu hikaye, hayatta kalma mücadelesinin en etkileyici detaylarını sunuyor...");
    localStorage.setItem("fiyat", "91 TL");
    window.location.href = "ürünsayfasi.html";
}

function HungerGames() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/HungerGames.webp");
    localStorage.setItem("ack", "Katniss Everdeen’ın hayatta kalma mücadelesi, okuyucuları distopik bir dünyanın karanlık gerçekleriyle buluşturuyor...");
    localStorage.setItem("fiyat", "89 TL");
    window.location.href = "ürünsayfasi.html";
}

function GorevimizTehlike() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/Gtehlike.webp");
    localStorage.setItem("ack", "Ethan Hunt’ın imkansızı başarma çabasını konu alan bu kitap, okuyucuyu aksiyon dolu bir serüvene çıkarıyor...");
    localStorage.setItem("fiyat", "75 TL");
    window.location.href = "ürünsayfasi.html";
}

function AvengersSonsuzlukSavasi() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/AvengersSS.webp");
    localStorage.setItem("ack", "Süper kahramanların Thanos’a karşı verdiği savaş, aksiyonun ve fedakarlığın zirvesine ulaşıyor...");
    localStorage.setItem("fiyat", "97 TL");
    window.location.href = "ürünsayfasi.html";
}

function BourneKimligi() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/bournekimliği.webp");
    localStorage.setItem("ack", "Jason Bourne’un unutulmuş geçmişi ve gerçek kimliğini bulmaya çalışırken verdiği mücadele, okuru aksiyon dolu bir hikayeye sürüklüyor...");
    localStorage.setItem("fiyat", "85 TL");
    window.location.href = "ürünsayfasi.html";
}

function KaraSovalyeYukseliyor() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/KŞyükseliyor.webp");
    localStorage.setItem("ack", "Batman’in Gotham’ı kurtarma mücadelesi, karanlık ve epik bir hikayeyi okurlarına sunuyor...");
    localStorage.setItem("fiyat", "95 TL");
    window.location.href = "ürünsayfasi.html";
}

function AtesleOynayanKiz() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/AteşleOK.webp");
    localStorage.setItem("ack", "Lisbeth Salander’ın karmaşık geçmişi ve zekası, onu sürükleyici bir maceranın baş kahramanı yapıyor...");
    localStorage.setItem("fiyat", "80 TL");
    window.location.href = "ürünsayfasi.html";
}

function DaVinciSifresi() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/Davinci.webp");
    localStorage.setItem("ack", "Robert Langdon’ın zeka dolu bulmacaları çözerek gerçekleri ortaya çıkarmaya çalıştığı bu hikaye...");
    localStorage.setItem("fiyat", "90 TL");
    window.location.href = "ürünsayfasi.html";
}

function ZindanlarVeEjderhalar() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/ZveE.webp");
    localStorage.setItem("ack", "Orta Çağ'ın büyülü dünyasında geçen bu fantastik macera, cesur kahramanların zindanlara ve tehlikeli ejderhalara karşı verdiği mücadeleyi anlatıyor...");
    localStorage.setItem("fiyat", "70 TL");
    window.location.href = "ürünsayfasi.html";
}

function HizliVeOfkeli() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/HveÖ.webp");
    localStorage.setItem("ack", "Yüksek hızlı araçlar, tehlikeli sokak yarışları ve güçlü arkadaşlık bağları...");
    localStorage.setItem("fiyat", "65 TL");
    window.location.href = "ürünsayfasi.html";
}

function OlumculTuzak() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/ÖTuzak.webp");
    localStorage.setItem("ack", "Hayatta kalma mücadelesi veren bir ajanın hikayesi, sizi nefes kesen aksiyon sahnelerine götürecek...");
    localStorage.setItem("fiyat", "85 TL");
    window.location.href = "ürünsayfasi.html";
}

function EjderhaDovmeliKiz() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/EjderhaDK.webp");
    localStorage.setItem("ack", "Lisbeth Salander’ın zekası ve cesaretiyle şekillenen bu hikaye, okuyucularını karmaşık ve tehlikeli bir dünyaya götürüyor...");
    localStorage.setItem("fiyat", "80 TL");
    window.location.href = "ürünsayfasi.html";
}

function KodAdiAjan() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/kodadıajan.webp");
    localStorage.setItem("ack", "Kimlik karmaşası ve tehlikeli görevler, bu kitabı heyecan dolu bir casusluk hikayesine dönüştürüyor...");
    localStorage.setItem("fiyat", "82 TL");
    window.location.href = "ürünsayfasi.html";
}

function VForVendetta() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/VforVendetta.webp");
    localStorage.setItem("ack", "Adalet için verilen mücadele, okurlara unutulmaz bir kahramanlık hikayesi sunuyor...");
    localStorage.setItem("fiyat", "88 TL");
    window.location.href = "ürünsayfasi.html";
}

function DunyaSavasiZ() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/WWZ.webp");
    localStorage.setItem("ack", "Zombi kıyametinin ortasında geçen bu hikaye, hayatta kalma mücadelesinin en çarpıcı detaylarını anlatıyor...");
    localStorage.setItem("fiyat", "94 TL");
    window.location.href = "ürünsayfasi.html";
}

function JohnWick() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/JohnWick.webp");
    localStorage.setItem("ack", "John Wick’in intikam arayışı, aksiyonun zirvesine ulaştığı sahnelerle dolu...");
    localStorage.setItem("fiyat", "90 TL");
    window.location.href = "ürünsayfasi.html";
}

function KaptanAmerikaKisAskeri() {
    
    localStorage.setItem("backgroundImage", "img/Aksiyon/KaptanAKA.webp");
    localStorage.setItem("ack", "Kaptan Amerika’nın geçmişle yüzleştiği ve yeni düşmanlarla mücadele ettiği bu hikaye...");
    localStorage.setItem("fiyat", "96 TL");
    window.location.href = "ürünsayfasi.html";
}





function UzayYolu() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/UzayYolu.webp");
    localStorage.setItem("ack", "Uzay Yolu, galaksiler arası bir macera sunan ve dostluk temasını derinlemesine işleyen bir bilim kurgu şaheseri...");
    localStorage.setItem("fiyat", "75 TL");
    window.location.href = "ürünsayfasi.html";
}

function YildizlarinTozu() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/YildizlarinTozu.webp");
    localStorage.setItem("ack", "İnsanlığın yıldızlar arası bir geleceği keşfetme çabasını anlatan destansı bir hikaye...");
    localStorage.setItem("fiyat", "85 TL");
    window.location.href = "ürünsayfasi.html";
}

function MarsGunlukleri() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/MarsGunlukleri.webp");
    localStorage.setItem("ack", "Mars Günlükleri, insanlığın Mars’ı kolonileştirme çabalarını ve bu süreçte karşılaştıkları zorlukları gözler önüne seriyor...");
    localStorage.setItem("fiyat", "90 TL");
    window.location.href = "ürünsayfasi.html";
}

function KiyametKitabi() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/KiyametKitabi.webp");
    localStorage.setItem("ack", "Zaman yolculuğunun karanlık ve etkileyici bir yüzünü ortaya koyan unutulmaz bir eser...");
    localStorage.setItem("fiyat", "88 TL");
    window.location.href = "ürünsayfasi.html";
}

function ZamaninCocuklari() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/ZamaninCocuklari.webp");
    localStorage.setItem("ack", "Zamanın Çocukları, insanlığın evrimsel yolculuğuna ve diğer zeki türlerle karşılaşmalarına büyüleyici bir bakış sunuyor...");
    localStorage.setItem("fiyat", "95 TL");
    window.location.href = "ürünsayfasi.html";
}

function CesurYeniDunya() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/CesurYeniDunya.webp");
    localStorage.setItem("ack", "Huxley’in distopik dünyasında insanlığın kontrol altındaki yaşamını sorgulayan bir başyapıt...");
    localStorage.setItem("fiyat", "77 TL");
    window.location.href = "ürünsayfasi.html";
}

function Vakif() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/Vakif.webp");
    localStorage.setItem("ack", "Isaac Asimov’un Vakıf serisi, galaksinin kaderini belirleyen devasa bir imparatorluğun çöküşü ve yeniden inşasını anlatıyor...");
    localStorage.setItem("fiyat", "100 TL");
    window.location.href = "ürünsayfasi.html";
}

function RobotHikayeleri() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/RobotHikayeleri.webp");
    localStorage.setItem("ack", "Yapay zekanın etik ve toplumsal boyutlarını irdeleyen, düşündürücü ve sürükleyici kısa hikayeler...");
    localStorage.setItem("fiyat", "65 TL");
    window.location.href = "ürünsayfasi.html";
}

function KaraDelikYolu() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/KaraDelikYolu.webp");
    localStorage.setItem("ack", "Bir kara deliğin bilinmezliklerine yapılan cesur bir yolculuğun hikayesi...");
    localStorage.setItem("fiyat", "92 TL");
    window.location.href = "ürünsayfasi.html";
}

function Dune() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/Dune.webp");
    localStorage.setItem("ack", "Çöl gezegeninde geçen bu epik hikaye, aile, politika ve din temalarını ustalıkla işliyor...");
    localStorage.setItem("fiyat", "110 TL");
    window.location.href = "ürünsayfasi.html";
}

function KiyametSonrasi() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/KiyametSonrasi.webp");
    localStorage.setItem("ack", "Kıyamet sonrası dünyasında geçen, hayatta kalma mücadelesiyle dolu bir bilim kurgu klasiği...");
    localStorage.setItem("fiyat", "84 TL");
    window.location.href = "ürünsayfasi.html";
}

function Hyperion() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/Hyperion.webp");
    localStorage.setItem("ack", "Farklı hayat hikayelerine sahip yedi yolcunun galaksi boyunca yaptıkları destansı yolculuğu anlatan bir şaheser...");
    localStorage.setItem("fiyat", "89 TL");
    window.location.href = "ürünsayfasi.html";
}

function GalaksiRehberi() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/GalaksiRehberi.webp");
    localStorage.setItem("ack", "Evrenin en komik ve absürt rehberinde zamanda, mekânda ve galakside eğlenceli bir yolculuk...");
    localStorage.setItem("fiyat", "69 TL");
    window.location.href = "ürünsayfasi.html";
}

function UzayIstasyonu() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/UzayIstasyonu.webp");
    localStorage.setItem("ack", "Bir uzay istasyonunda geçen gerilim dolu bir hikaye, insan psikolojisinin derinliklerine iniyor...");
    localStorage.setItem("fiyat", "82 TL");
    window.location.href = "ürünsayfasi.html";
}

function MarsKolonisi() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/MarsKolonisi.webp");
    localStorage.setItem("ack", "Mars’ta yeni bir hayat kurmaya çalışan bir koloninin karşılaştığı zorlukları anlatan bir hikaye...");
    localStorage.setItem("fiyat", "78 TL");
    window.location.href = "ürünsayfasi.html";
}

function SonGezegen() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/SonGezegen.webp");
    localStorage.setItem("ack", "İnsanlığın keşfettiği son gezegenin derin sırlarını keşfetmeye hazır olun...");
    localStorage.setItem("fiyat", "88 TL");
    window.location.href = "ürünsayfasi.html";
}

function GeleceginHalklari() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/GeleceginHalklari.webp");
    localStorage.setItem("ack", "Zamanın ve mekânın ötesine geçen bir hikayede, insanlığın gelecekteki soylarının ilginç dünyaları...");
    localStorage.setItem("fiyat", "90 TL");
    window.location.href = "ürünsayfasi.html";
}

function YapayDunya() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/YapayDunya.webp");
    localStorage.setItem("ack", "İnsanların tamamen yapay bir dünyada hayatta kalma mücadelesini anlatan bir hikaye...");
    localStorage.setItem("fiyat", "87 TL");
    window.location.href = "ürünsayfasi.html";
}

function Andromeda() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/Andromeda.webp");
    localStorage.setItem("ack", "Andromeda galaksisinde geçen, bilinmeyen türlerle ilk temasın hikayesi...");
    localStorage.setItem("fiyat", "93 TL");
    window.location.href = "ürünsayfasi.html";
}

function ParalelEvren() {
    localStorage.setItem("backgroundImage", "img/BilimKurgu/ParalelEvren.webp");
    localStorage.setItem("ack", "Paralel evrenlerin sırlarını ortaya çıkarmaya çalışan bir bilim insanının etkileyici hikayesi...");
    localStorage.setItem("fiyat", "79 TL");
    window.location.href = "ürünsayfasi.html";
}





function MinikKedicik() {
    localStorage.setItem("backgroundImage", "img/Cocuk/MinikKedicik.webp");
    localStorage.setItem("ack", "Minik Kedicik, dostluk ve cesaret dolu bir hikaye sunuyor...");
    localStorage.setItem("fiyat", "45 TL");
    window.location.href = "ürünsayfasi.html";
}

function MaceraciTavsan() {
    localStorage.setItem("backgroundImage", "img/Cocuk/MaceraciTavsan.webp");
    localStorage.setItem("ack", "Maceraçı Tavşan, çocukları eğlenceli bir yolculuğa çıkarıyor...");
    localStorage.setItem("fiyat", "50 TL");
    window.location.href = "ürünsayfasi.html";
}

function BaloncuDunya() {
    localStorage.setItem("backgroundImage", "img/Cocuk/BaloncuDunya.webp");
    localStorage.setItem("ack", "Baloncu ile dünya turuna hazır olun! Macera dolu bir hikaye...");
    localStorage.setItem("fiyat", "55 TL");
    window.location.href = "ürünsayfasi.html";
}

function UcanFil() {
    localStorage.setItem("backgroundImage", "img/Cocuk/UcanFil.webp");
    localStorage.setItem("ack", "Uçan Filin Rüyası, hayal gücünü geliştiren eşsiz bir öykü...");
    localStorage.setItem("fiyat", "47 TL");
    window.location.href = "ürünsayfasi.html";
}

function SaklananAyicik() {
    localStorage.setItem("backgroundImage", "img/Cocuk/SaklananAyicik.webp");
    localStorage.setItem("ack", "Saklanan Ayıcık, dostluk ve keşif dolu bir hikaye...");
    localStorage.setItem("fiyat", "42 TL");
    window.location.href = "ürünsayfasi.html";
}

function KayipAraba() {
    localStorage.setItem("backgroundImage", "img/Cocuk/KayipAraba.webp");
    localStorage.setItem("ack", "Kayıp Arabayı Bul, heyecan dolu bir yolculuk hikayesi...");
    localStorage.setItem("fiyat", "48 TL");
    window.location.href = "ürünsayfasi.html";
}

function OrmandakiMelodi() {
    localStorage.setItem("backgroundImage", "img/Cocuk/OrmandakiMelodi.webp");
    localStorage.setItem("ack", "Ormandaki Melodi, doğanın büyüsünü keşfetmenizi sağlayacak...");
    localStorage.setItem("fiyat", "50 TL");
    window.location.href = "ürünsayfasi.html";
}

function MaviBalik() {
    localStorage.setItem("backgroundImage", "img/Cocuk/MaviBalik.webp");
    localStorage.setItem("ack", "Mavi Balık Hikayesi, su altı dünyasında geçen masalsı bir öykü...");
    localStorage.setItem("fiyat", "46 TL");
    window.location.href = "ürünsayfasi.html";
}

function YildizAvcisi() {
    localStorage.setItem("backgroundImage", "img/Cocuk/YildizAvcisi.webp");
    localStorage.setItem("ack", "Yıldız Avcısı, hayal gücünüzü yıldızlara taşıyacak...");
    localStorage.setItem("fiyat", "53 TL");
    window.location.href = "ürünsayfasi.html";
}

function OrmanMasallari() {
    localStorage.setItem("backgroundImage", "img/Cocuk/OrmanMasallari.webp");
    localStorage.setItem("ack", "Orman Masalları, doğanın büyüsünü ve hayvanların gizemli dünyasını anlatan harika bir hikaye koleksiyonu...");
    localStorage.setItem("fiyat", "60 TL");
    window.location.href = "ürünsayfasi.html";
}

function KucukPrens() {
    localStorage.setItem("backgroundImage", "img/Cocuk/KucukPrens.webp");
    localStorage.setItem("ack", "Küçük Prens, sevgi ve dostluğun anlamını sorgulatan unutulmaz bir hikaye...");
    localStorage.setItem("fiyat", "65 TL");
    window.location.href = "ürünsayfasi.html";
}

function GizemliAda() {
    localStorage.setItem("backgroundImage", "img/Cocuk/GizemliAda.webp");
    localStorage.setItem("ack", "Gizemli Ada, macera ve keşif dolu bir öykü...");
    localStorage.setItem("fiyat", "48 TL");
    window.location.href = "ürünsayfasi.html";
}

function UcanKuzgun() {
    localStorage.setItem("backgroundImage", "img/Cocuk/UcanKuzgun.webp");
    localStorage.setItem("ack", "Uçan Kuzgun, özgürlük dolu bir hikaye sunuyor...");
    localStorage.setItem("fiyat", "49 TL");
    window.location.href = "ürünsayfasi.html";
}

function SihirliAgac() {
    localStorage.setItem("backgroundImage", "img/Cocuk/SihirliAgac.webp");
    localStorage.setItem("ack", "Sihirli Ağaç, hayallerin gerçek olduğu bir masal...");
    localStorage.setItem("fiyat", "55 TL");
    window.location.href = "ürünsayfasi.html";
}

function AyIsigiMasali() {
    localStorage.setItem("backgroundImage", "img/Cocuk/AyIsigiMasali.webp");
    localStorage.setItem("ack", "Ay Işığı Masalı, ışığın peşinden sürükleyici bir öykü...");
    localStorage.setItem("fiyat", "52 TL");
    window.location.href = "ürünsayfasi.html";
}

function YediRenkliGolge() {
    localStorage.setItem("backgroundImage", "img/Cocuk/YediRenkliGolge.webp");
    localStorage.setItem("ack", "Yedi Renkli Gölge, renklerin büyüsüne kapılacağınız eşsiz bir hikaye...");
    localStorage.setItem("fiyat", "51 TL");
    window.location.href = "ürünsayfasi.html";
}

function DenizAltindakiDunya() {
    localStorage.setItem("backgroundImage", "img/Cocuk/DenizAltindakiDunya.webp");
    localStorage.setItem("ack", "Deniz Altındaki Dünya, hayranlık uyandıran bir su altı macerası...");
    localStorage.setItem("fiyat", "54 TL");
    window.location.href = "ürünsayfasi.html";
}

function SakliHazine() {
    localStorage.setItem("backgroundImage", "img/Cocuk/SakliHazine.webp");
    localStorage.setItem("ack", "Saklı Hazine, sırlarla dolu bir keşif hikayesi...");
    localStorage.setItem("fiyat", "50 TL");
    window.location.href = "ürünsayfasi.html";
}

function KuzeyIsiklari() {
    localStorage.setItem("backgroundImage", "img/Cocuk/KuzeyIsiklari.webp");
    localStorage.setItem("ack", "Kuzey Işıkları, büyüleyici bir kuzey masalı...");
    localStorage.setItem("fiyat", "56 TL");
    window.location.href = "ürünsayfasi.html";
}

function SihirliKelime() {
    localStorage.setItem("backgroundImage", "img/Cocuk/SihirliKelime.webp");
    localStorage.setItem("ack", "Sihirli Kelime, çocukları kelimelerin büyüleyici dünyasına davet ediyor...");
    localStorage.setItem("fiyat", "58 TL");
    window.location.href = "ürünsayfasi.html";
}



function sepet(){
    window.location.href = "sepet.html";     
}