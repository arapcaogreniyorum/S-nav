// --- TÜM SORULARIN HAVUZU (Görsel Dosya Adı ve Doğru Cevap) ---
// Cevap anahtarınız burada eşleştirilmiştir.
const TUM_SORULAR = [
    { gorselDosyaAdi: "soru1.png", dogruCevap: "e" }, 
    { gorselDosyaAdi: "soru2.png", dogruCevap: "d" }, 
    { gorselDosyaAdi: "soru3.png", dogruCevap: "c" }, 
    { gorselDosyaAdi: "soru4.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru5.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru6.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru7.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru8.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru9.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru10.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru11.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru12.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru13.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru14.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru15.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru16.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru17.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru18.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru19.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru20.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru21.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru22.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru23.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru24.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru25.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru26.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru27.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru28.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru29.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru30.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru31.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru32.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru33.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru34.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru35.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru36.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru37.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru38.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru39.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru40.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru41.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru42.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru43.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru44.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru45.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru46.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru47.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru48.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru49.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru50.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru51.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru52.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru53.png", dogruCevap: "d" },
    { gorselDosyaAdi: "soru54.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru55.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru56.png", dogruCevap: "c" },
    { gorselDosyaAdi: "soru57.png", dogruCevap: "a" },
    { gorselDosyaAdi: "soru58.png", dogruCevap: "e" },
    { gorselDosyaAdi: "soru59.png", dogruCevap: "b" },
    { gorselDosyaAdi: "soru60.png", dogruCevap: "d" }
];


const SINAV_SORU_SAYISI = 20;
let aktifSınavSorulari = []; 

// --- DURUM DEĞİŞKENLERİ ---
let mevcutSoruIndex = 0; 
let kullaniciCevaplari; 
let kalanSureSaniye = 30 * 60; // 30 Dakika
let intervalId;
let sinavDevamEdiyor = true;

// --- DOM ELEMENTLERİ ---
const aktifSoruContainer = document.getElementById('aktif-soru-container');
const soruSayacElementi = document.getElementById('soru-sayac');
const ileriButonu = document.getElementById('ileri-butonu');
const bitirButonu = document.getElementById('bitir-butonu');
const sonucAlani = document.querySelector('.sonuc-alani');
const soruAlani = document.querySelector('.soru-alani');
const zamanlayiciElement = document.getElementById('zamanlayici');

// --- YARDIMCI FONKSİYON: Dizi Karıştırma (Fisher-Yates) ---
function karistir(dizi) {
    for (let i = dizi.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dizi[i], dizi[j]] = [dizi[j], dizi[i]];
    }
    return dizi;
}

// --- RASTGELE SORU SEÇİMİ ---
function rastgeleSoruSec() {
    // 1. Tüm soruların kopyasını karıştır
    const karistirilmisDizi = karistir([...TUM_SORULAR]); 
    
    // 2. İlk 20 soruyu seç
    aktifSınavSorulari = karistirilmisDizi.slice(0, SINAV_SORU_SAYISI);

    // 3. Kullanıcı cevapları dizisini yeni 20 soruya göre sıfırla
    kullaniciCevaplari = new Array(aktifSınavSorulari.length).fill(null);
}

// --- 1. SORUYU YÜKLEME FONKSİYONU ---
function soruyuGoster(index) {
    if (!sinavDevamEdiyor) return;

    if (index >= 0 && index < aktifSınavSorulari.length) {
        mevcutSoruIndex = index;
        const soruBilgisi = aktifSınavSorulari[index];
        const sinavSoruNumarasi = index + 1; 
        
        // Görselin dosya adını alıp URL'yi oluşturur
        // Örneğin, soruBilgisi.gorselDosyaAdi "soru60.png" ise URL: "gorseller/soru60.png" olur
        const gorselURL = `gorseller/${soruBilgisi.gorselDosyaAdi}`; 
        
        soruSayacElementi.textContent = sinavSoruNumarasi;

        let secenekHTML = '';
        
        // Şıklar A, B, C, D, E (Sadece buton olarak)
        const gecerliSecenekHarfleri = ['a', 'b', 'c', 'd', 'e']; 

        for (const secenekHarfi of gecerliSecenekHarfleri) {
            const isChecked = kullaniciCevaplari[index] === secenekHarfi ? 'checked' : '';
            
            secenekHTML += `
                <input type="radio" id="secenek-${secenekHarfi}" name="aktifSoruCevap" value="${secenekHarfi}" ${isChecked}>
                <label for="secenek-${secenekHarfi}" class="secenek-label">
                    ${secenekHarfi.toUpperCase()} 
                </label>
            `;
        }
        
        aktifSoruContainer.innerHTML = `
            <img id="soru-gorseli" src="${gorselURL}" alt="${sinavSoruNumarasi}. Soru (Kaynak: ${soruBilgisi.gorselDosyaAdi})" style="max-width: 100%; height: auto; margin-bottom: 20px;">
            <form id="soruFormu">${secenekHTML}</form>
        `;
        
        // Buton görünürlüğünü ayarla
        if (mevcutSoruIndex === aktifSınavSorulari.length - 1) {
            ileriButonu.style.display = 'none';
            bitirButonu.style.display = 'block';
        } else {
            ileriButonu.style.display = 'block';
            bitirButonu.style.display = 'none';
        }
    }
}


// --- 2. CEVABI KAYDET VE SONRAKİ SORUYA GEÇ ---
function sonrakiSoru() {
    // 1. Mevcut cevabı kaydet
    const seciliCevapElementi = document.querySelector('input[name="aktifSoruCevap"]:checked');
    kullaniciCevaplari[mevcutSoruIndex] = seciliCevapElementi ? seciliCevapElementi.value : null;

    // 2. Bir sonraki soruya geç
    if (mevcutSoruIndex < aktifSınavSorulari.length - 1) {
        soruyuGoster(mevcutSoruIndex + 1);
    } 
}


// --- 3. PUANLAMA VE BİTİRME FONKSİYONU ---
function testiBitir(süreBitti = false) {
    if (!sinavDevamEdiyor) return; 

    sinavDevamEdiyor = false; 

    // Son sorunun cevabını kaydet
    if (!süreBitti && mevcutSoruIndex === aktifSınavSorulari.length - 1) {
        const sonSeciliCevapElementi = document.querySelector('input[name="aktifSoruCevap"]:checked');
        kullaniciCevaplari[aktifSınavSorulari.length - 1] = sonSeciliCevapElementi ? sonSeciliCevapElementi.value : null;
    }

    clearInterval(intervalId); 

    let dogruSayisi = 0;
    let yanlisSayisi = 0;
    let bosSayisi = 0;
    const yanlisGötürmeKatsayısı = 0.25; 

    // Kaydedilen cevapları kontrol et
    kullaniciCevaplari.forEach((cevap, index) => {
        // Doğru cevabı aktifSınavSorulari dizisinden çeker
        const dogruCevap = aktifSınavSorulari[index].dogruCevap; 
        
        if (cevap === null) {
            bosSayisi++;
        } else if (cevap === dogruCevap) {
            dogruSayisi++;
        } else {
            yanlisSayisi++;
        }
    });

    const netDogru = dogruSayisi - (yanlisSayisi * yanlisGötürmeKatsayısı);
    const hamPuan = Math.max(0, (netDogru / aktifSınavSorulari.length) * 100).toFixed(2); 

    document.getElementById('dogruSayisi').textContent = dogruSayisi;
    document.getElementById('yanlisSayisi').textContent = yanlisSayisi;
    document.getElementById('bosSayisi').textContent = bosSayisi;
    document.getElementById('hamPuan').textContent = hamPuan;

    sonucAlani.style.display = 'block';
    soruAlani.style.display = 'none';

    zamanlayiciElement.textContent = süreBitti ? "SÜRE DOLDU - TEST BİTTİ" : "TEST BİTİRİLDİ";

    alert(`Sınavınız tamamlandı! Ham Puanınız: ${hamPuan}`);
}

// --- 4. ZAMANLAYICI KODU ---
function sureyiGuncelle() {
    if (!sinavDevamEdiyor) return;

    const dakika = Math.floor(kalanSureSaniye / 60);
    const saniye = kalanSureSaniye % 60;

    const formatliDakika = String(dakika).padStart(2, '0');
    const formatliSaniye = String(saniye).padStart(2, '0');

    zamanlayiciElement.textContent = `Kalan Süre: ${formatliDakika}:${formatliSaniye}`;

    kalanSureSaniye--;

    if (kalanSureSaniye < 0) {
        testiBitir(true); 
    }
}

// --- 5. YENİDEN BAŞLATMA FONKSİYONU ---
function testiTekrarBaslat() {
    // 1. Yeni rastgele soruları seç
    rastgeleSoruSec();
    
    // 2. Değişkenleri sıfırla
    mevcutSoruIndex = 0;
    kalanSureSaniye = 30 * 60;
    sinavDevamEdiyor = true;

    // 3. Ekranları değiştir
    soruAlani.style.display = 'block';
    sonucAlani.style.display = 'none';
    
    // 4. İlk soruyu yükle
    soruyuGoster(0);

    // 5. Zamanlayıcıyı yeniden başlat
    intervalId = setInterval(sureyiGuncelle, 1000); 
    sureyiGuncelle();
}

// --- BAŞLATICI KISIM ---
document.addEventListener('DOMContentLoaded', () => {
    // Sayfa yüklendiğinde rastgele 20 soruyu seç
    rastgeleSoruSec();
    // İlk soruyu göster ve zamanlayıcıyı başlat
    soruyuGoster(0);
    intervalId = setInterval(sureyiGuncelle, 1000); 
    sureyiGuncelle();
});
