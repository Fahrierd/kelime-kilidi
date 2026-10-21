# Kelime Kilidi

**Her kelime yeni bir kapı.**

İlkokul öğrencileri ve kelime meraklıları için ücretsiz, mobil uyumlu Türkçe kelime uygulaması. HTML, CSS ve saf JavaScript kullanır; kurulum paketi, harici API veya üyelik gerektirmez.

- **Öğrenci Modu:** 100 kelime, üç kelimelik oturumlar, sözlü cümle etkinliği. Son oturumda kalan kelimeler gösterilir.
- **Uzman Modu:** 100 kelime, anlam ve örnekler, kendi cümleni yazma. Kontrol sözcüğün varlığı ve uzunluk içindir; anlamı doğrulamaz.
- İlerleme ve cümleler yalnızca kullanılan cihazın tarayıcısında saklanır. Cihazlar arasında eşitlenmez. Tarayıcı site verilerini temizlemek kayıtları siler.
- İlk başarılı yükleme ve önbelleklemeden sonra çevrimdışı kullanılabilir.

## Aç ve paylaş

Uygulama: https://fahrierd.github.io/kelime-kilidi/

Bu bağlantıyı mesaj, e-posta veya sınıf grubunda paylaşabilirsiniz. Kullanıcıların GitHub hesabına ihtiyacı yoktur. GitHub depo adresi kaynak kodunu, yukarıdaki Pages adresi uygulamayı açar.

## Ubuntu ve akıllı tahta

1. Firefox veya Chromium'da uygulama bağlantısını açın.
2. Öğrenci Modu'nu seçin. Firefox'ta **F11** tam ekranı açar/kapatır; gerekirse **Ctrl + +** ile yazıları büyütün (**Ctrl + 0** sıfırlar).
3. İlk açılışta internet bağlantısı olsun. Sayfa yüklendikten sonra yenileyin; ardından ağı kapatıp tekrar yenileyerek çevrimdışı kullanımı deneyin.
4. Aynı tarayıcı profilini kullanın ve sayfayı yer imlerine ekleyin. Özel/gizli pencere kullanmayın; kayıtlar kalıcı olmayabilir.

Ubuntu sanal makinesinde de aynı adımları uygulayın. Tarayıcıda açmak yeterlidir; uygulama olarak yüklemek zorunlu değildir. Sanal makine ve sınıf tahtasının ilerlemeleri ayrıdır.

## Yerel çalıştırma

Python 3 bulunan bir sistemde proje klasöründe:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Tarayıcıdan http://localhost:8080 adresini açın. Bitirince terminalde **Ctrl+C** kullanın. Sanal makinede yerel deneme için klasörü sanal makineye kopyalayın ve komutu Ubuntu içinde çalıştırın; Mac üzerindeki localhost, sanal makinenin localhost adresi değildir.

PWA için HTTPS veya localhost gerekir; index.html dosyasına çift tıklamak PWA desteğini etkinleştirmez.

## GitHub Pages ve güncelleme

Pages kaynağı: **Settings → Pages → Deploy from a branch → main → /(root)**.

- Kelimeler `app.js` içindedir. Mevcut kayıtları korumak için yeni kelimeleri listelerin sonuna ekleyin; eski kelimelerin sırasını değiştirmeyin.
- Statik dosyaları değiştirirken `service-worker.js` içindeki önbellek sürümünü artırın.
- Değişiklikleri `main` dalına gönderin. Yayın tamamlandıktan sonra uygulamayı internete bağlıyken açın; yeni sürüm indirildikten sonra uygulamanın bütün sekme/pencerelerini kapatıp yeniden açın. Yeni sürüm mevcut ilerlemeyi silmez.

Kaynaklar: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [Firefox tam ekran](https://support.mozilla.org/en-US/kb/how-make-firefox-and-websites-go-full-screen).
