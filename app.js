'use strict';
// İçerik uygulamayla birlikte gelir; ağ bağlantısı ve harici servis gerektirmez.
const WORDS = {
student: [
['Özen','Bir işi iyi yapmak için gösterilen dikkat.','Defne, kitaplarını rafa özenle yerleştirdi.'],
['Dayanışma','İnsanların birbirine yardım ederek birlikte hareket etmesi.','Sınıfımızdaki dayanışma sayesinde bahçeyi kısa sürede temizledik.'],
['Merak','Bir şeyi öğrenmek veya anlamak isteme duygusu.','Tohumun nasıl büyüdüğünü merak ediyorum.'],
['Cesaret','Korkuya rağmen doğru ya da gerekli olanı yapabilme gücü.','Ece, cesaretini toplayıp sahnede şiir okudu.'],
['Sabır','Bir güçlük veya bekleyiş karşısında sakin kalabilme.','Yaptığım resmin kurumasını sabırla bekledim.'],
['Nezaket','Başkalarına karşı saygılı ve ince davranma.','Arkadaşına teşekkür etmesi güzel bir nezaket örneğiydi.'],
['Tasarruf','Para, zaman veya kaynakları gereksiz yere harcamama.','Dişlerimi fırçalarken musluğu kapatarak su tasarrufu yapıyorum.'],
['Sorumluluk','Üstlenilen bir işi yerine getirme görevi.','Sınıf çiçeklerini sulamak bu hafta benim sorumluluğum.'],
['Keşif','Daha önce bilinmeyen bir şeyi bulma veya fark etme.','Bahçedeki küçük karınca yuvasını bulmak bizim için bir keşifti.'],
['Emek','Bir işi yapmak için harcanan güç ve çaba.','Bu güzel bahçede dedemin çok emeği var.'],
['Gayret','Bir şeyi başarmak için gösterilen çaba.','Bisiklet sürmeyi öğrenmek için gayret gösterdim.'],
['Paylaşmak','Bir şeyi başkalarıyla birlikte kullanmak veya bölüşmek.','Boyalarımı arkadaşlarımla paylaşmak beni mutlu ediyor.'],
['Dürüst','Doğruyu söyleyen ve kimseyi aldatmayan.','Dürüst arkadaşım, bulduğu kalemin kendisine ait olmadığını söyledi.'],
['Güven','Birine veya bir şeye inanma ve ondan kuşku duymama duygusu.','Sözünü tutan arkadaşıma güven duyuyorum.'],
['Hoşgörü','İnsanların farklılıklarını anlayışla karşılayabilme.','Farklı oyunlar seçen arkadaşlarımıza hoşgörü gösterdik.'],
['Alçakgönüllü','Başarılarıyla övünmeyen ve kendini başkalarından üstün görmeyen.','Yarışı kazanan alçakgönüllü arkadaşım herkesi kutladı.'],
['Cömert','Elindekileri başkalarıyla paylaşmaktan kaçınmayan.','Cömert komşumuz topladığı elmaları bize de verdi.'],
['Tutumlu','Parasını ve eşyalarını gereksiz yere harcamadan kullanan.','Tutumlu kardeşim harçlığının bir bölümünü biriktiriyor.'],
['Kararlı','Verdiği karardan kolayca vazgeçmeyen.','Yüzmeyi öğrenmeye kararlı olan Deniz, her hafta çalıştı.'],
['Duyarlı','Çevresindeki olayları ve başkalarının duygularını önemseyen.','Duyarlı öğrenciler, üşüyen kediye bir yuva hazırladı.'],
['Serüven','İlgi çekici olayların yaşandığı macera.','Ormandaki yürüyüşümüz küçük bir serüvene dönüştü.'],
['Düş','İnsanın zihninde canlandırdığı hayal veya uykuda gördüğü rüya.','Bir gün uzaya gitmek en büyük düşüm.'],
['Sevinç','Güzel bir olay karşısında duyulan mutluluk.','Arkadaşımı görünce içim sevinçle doldu.'],
['Özlem','Birini veya bir şeyi yeniden görme ya da ona kavuşma isteği.','Uzakta yaşayan kuzenime özlem duyuyorum.'],
['Huzur','İnsanın içinin rahat ve sakin olması.','Kuş seslerini dinlemek bana huzur veriyor.'],
['Şefkat','Birine sevgiyle yaklaşma ve onu koruma isteği.','Ablam yaralı kuşa şefkatle yaklaştı.'],
['Coşku','Güçlü ve canlı bir sevinç veya heyecan.','Bayram şarkısını coşkuyla söyledik.'],
['Hayranlık','Bir şeyi çok beğenme ve ona büyük ilgi duyma.','Rengârenk kelebeği hayranlıkla izledik.'],
['Beceri','Bir işi iyi yapabilme yeteneği.','Kâğıttan gemi yapma becerim her denemede gelişiyor.'],
['Yetenek','Bir işi öğrenmeye veya yapmaya yatkın olma.','Arkadaşımın müziğe yeteneği var.'],
['İş birliği','Bir işi yapmak için birlikte çalışma.','Sınıf panosunu iş birliği yaparak hazırladık.'],
['Çözüm','Bir sorunu ortadan kaldıran yol.','Kırılan oyuncak için birlikte bir çözüm bulduk.'],
['Öneri','Bir işin nasıl yapılabileceği konusunda sunulan düşünce.','Pikniği gölgede yapma önerim kabul edildi.'],
['Amaç','Ulaşılmak istenen sonuç.','Bu etkinlikteki amacımız kuşları tanımak.'],
['Fırsat','Bir işi yapmaya elverişli zaman veya durum.','Yağmur durunca dışarı çıkma fırsatı bulduk.'],
['Önlem','Kötü bir durum yaşanmasın diye önceden yapılan hazırlık.','Bisiklete binerken kask takarak önlem alıyorum.'],
['Düzen','Eşyaların veya işlerin uygun bir sırada ve yerinde olması.','Masamdaki düzen sayesinde kalemimi hemen buldum.'],
['Gözlem','Bir şeyi dikkatle inceleyerek bilgi edinme.','Fasulyenin büyümesiyle ilgili gözlem yaptık.'],
['Doğa','İnsan eliyle yapılmamış canlı ve cansız varlıkların bütünü.','Doğa yürüyüşünde ağaçları ve kuşları inceledik.'],
['Filiz','Tohumdan veya bitkiden çıkan yeni ve küçük sürgün.','Saksıdaki tohumdan yeşil bir filiz çıktı.'],
['Bereket','Bir şeyin bol olması ve ihtiyacı karşılaması.','Bu yıl bahçemize bereket geldi, sepetler dolusu domates topladık.'],
['Ufuk','Gökyüzü ile yerin birleşiyor gibi göründüğü çizgi.','Güneş ufukta yavaşça kayboldu.'],
['Esinti','Hafifçe esen rüzgâr.','Pencereden gelen esinti bizi serinletti.'],
['Çiselemek','Yağmurun çok ince damlalarla yağması.','Yağmur çiselemeye başlayınca şemsiyemi açtım.'],
['Sığınak','Tehlikeden veya kötü havadan korunmak için girilen yer.','Fırtınada küçük kulübe bize sığınak oldu.'],
['Yamaç','Bir tepenin veya dağın eğimli yanı.','Tepenin yamacında koyunlar otluyordu.'],
['Patika','Yürümekle oluşmuş dar yol.','Dar patikayı izleyerek göle ulaştık.'],
['Gelenek','Bir toplumda eskiden beri sürdürülen davranış veya alışkanlık.','Bayramda büyüklerimizi ziyaret etmek bir gelenektir.'],
['Anı','Geçmişte yaşanmış ve hatırlanan olay.','İlk okul günüm benim için güzel bir anı.'],
['Konuk','Bir yere ziyarete gelen kişi, misafir.','Bu akşam evimize iki konuk gelecek.'],
["Adalet", "Herkese hakkını verme ve eşit durumlarda eşit davranma.", "Oyun sırasını herkese vererek adaleti sağladık."],
["Anlayış", "Birinin duygularını veya içinde bulunduğu durumu kavrayıp ona uygun davranma.", "Yorgun arkadaşımıza anlayış gösterip dinlenmesini bekledik."],
["Bağımsız", "Kendi başına davranabilen, başkasına bağlı olmayan.", "Bu etkinlikte her grup diğerlerinden bağımsız çalıştı."],
["Barış", "Kavga ve savaş olmadan, anlaşma içinde yaşama durumu.", "Küsen iki arkadaş sonunda barış içinde oynamaya başladı."],
["Bilge", "Bilgili, deneyimli ve doğru kararlar verebilen.", "Masaldaki bilge kişi herkese yol gösterdi."],
["Canlı", "Yaşayan, büyüyen ve beslenen varlık.", "Bahçedeki her canlı doğanın bir parçasıdır."],
["Çevre", "Bir canlının içinde bulunduğu yer ve onu kuşatan varlıklar.", "Çevre temizliği için parktaki çöpleri topladık."],
["Çevik", "Kolay ve hızlı hareket edebilen.", "Çevik sincap bir daldan diğerine sıçradı."],
["Çırak", "Bir mesleği ustasının yanında çalışarak öğrenen kişi.", "Marangozun çırağı tahtaları dikkatle taşıdı."],
["Çaba", "Bir işi başarmak için harcanan güç.", "Düzgün yazı yazmak için çaba gösteriyorum."],
["Dayanıklı", "Zorluklar karşısında kolayca bozulmayan veya zarar görmeyen.", "Yeni çantam yağmura karşı oldukça dayanıklı."],
["Değer", "Bir şeyin taşıdığı önem veya yarar.", "Arkadaşımın yaptığı resmin benim için büyük bir değeri var."],
["Denge", "Bir şeyin devrilmeden veya düşmeden durabilmesi.", "Tek ayak üzerinde dururken dengemi korudum."],
["Deneyim", "Bir işi yaparak veya bir olayı yaşayarak kazanılan bilgi.", "İlk kampımız bize çadır kurma deneyimi kazandırdı."],
["Emanet", "Korunması veya geri verilmesi için birine bırakılan şey.", "Arkadaşımın bana bıraktığı kitap bir emanet."],
["Engel", "Bir işin yapılmasını veya ilerlemeyi güçleştiren şey.", "Yola düşen dal, bisikletimiz için bir engel oluşturdu."],
["Esnek", "Bükülüp gerildikten sonra eski biçimine dönebilen.", "Esnek lastiği uzatıp bıraktım."],
["Etkinlik", "Bir amaç için yapılan çalışma veya düzenlenen uğraş.", "Okulda kitap okuma etkinliği yaptık."],
["Fedakârlık", "Birinin iyiliği için kendi isteğinden veya rahatından vazgeçme.", "Ablam bana yardım etmek için oyununa ara vererek fedakârlık yaptı."],
["Fidan", "Yeni yetişen küçük ağaç.", "Okul bahçesine bir fidan diktik."],
["Göç", "İnsanların veya hayvanların yaşadıkları yerden başka bir yere gitmesi.", "Leyleklerin göçünü gökyüzüne bakarak izledik."],
["Görgü", "Toplum içinde saygılı ve uygun davranmayı sağlayan kurallar.", "Sofrada ağzımız doluyken konuşmamak bir görgü kuralıdır."],
["İcat", "Daha önce olmayan bir araç veya yöntemi ortaya çıkarma.", "Telefonun icadı uzaktaki insanların konuşmasını kolaylaştırdı."],
["İlham", "İnsanın aklına yeni bir düşünce veya bir şey yapma isteği gelmesini sağlayan etki.", "Gördüğüm gökkuşağı resmime ilham verdi."],
["İlke", "Davranışlara yön veren temel düşünce veya kural.", "Kimseyi incitmeden konuşmak önemli bir ilkemiz."],
["İmkân", "Bir şeyi yapabilmek için uygun koşul veya olanak.", "Kütüphanede birçok farklı kitabı okuma imkânı buldum."],
["İstekli", "Bir işi yapmaya gönüllü ve hevesli olan.", "İstekli öğrenciler sınıf panosunu hazırladı."],
["İz", "Bir şeyin geçtiği veya dokunduğu yerde bıraktığı belirti.", "Karda tavşanın ayak izlerini gördük."],
["Kanıt", "Bir şeyin doğru olduğunu gösteren bilgi veya belirti.", "Islak şemsiyeler dışarıda yağmur yağdığının kanıtıydı."],
["Kaynak", "Bir şeyin çıktığı veya elde edildiği yer.", "Güneş, dünyamız için önemli bir enerji kaynağıdır."],
["Kıymet", "Bir şeye verilen değer, önem.", "Birlikte geçirdiğimiz zamanın kıymetini biliyorum."],
["Mola", "Dinlenmek için bir işe kısa süre ara verme.", "Uzun yürüyüşte bir ağacın altında mola verdik."],
["Müjde", "Sevindirici haber.", "Kuzenimin geleceği müjdesini annem verdi."],
["Özgün", "Başkalarından kopyalanmamış, kendine özgü olan.", "Özgün bir masal yazıp arkadaşlarıma okudum."],
["Özgüven", "İnsanın kendi yeteneklerine ve yapabileceklerine güvenmesi.", "Sık sık çalışmak sahnedeki özgüvenimi artırdı."],
["Özenli", "Bir işi dikkat ve titizlikle yapan veya bu şekilde yapılmış olan.", "Özenli çalışması sayesinde maketi sağlam oldu."],
["Rehber", "Bir yolu veya konuyu gösterip açıklayan kişi.", "Müzedeki rehber bize eski eşyaları tanıttı."],
["Saygı", "Birine veya bir şeye değer vererek özenli davranma.", "Arkadaşım konuşurken dinleyerek ona saygı gösterdim."],
["Seyrek", "Aralarında boşluk bulunan veya az rastlanan.", "Tepenin üzerinde seyrek ağaçlar vardı."],
["Titiz", "Bir işi en küçük ayrıntısına kadar dikkatle yapan.", "Titiz arkadaşım maketin her parçasını kontrol etti."],
["Umut", "Güzel bir şeyin olacağına inanma duygusu.", "Diktiğim fidanın büyümesini umutla bekliyorum."],
["Uyum", "Birlikte iyi ve uygun biçimde hareket etme.", "Korodaki öğrenciler uyum içinde şarkı söyledi."],
["Üretmek", "Emek vererek yeni bir şey ortaya çıkarmak.", "Çiftçiler tarlalarda yiyecek üretmek için çalışır."],
["Verimli", "Harcanan emeğe göre iyi ve bol sonuç veren.", "Verimli bir çalışmanın ardından ödevimi bitirdim."],
["Yardımsever", "Başkalarına yardım etmeyi seven.", "Yardımsever komşumuz ağır çantaları taşımamıza yardım etti."],
["Yöre", "Bir yerin yakın çevresi, bölge.", "Bu yörede elma ağaçları çok yetişir."],
["Yuva", "Hayvanların barındığı, yavrularını büyüttüğü yer.", "Kuş, ağacın dalına bir yuva yaptı."],
["Zanaat", "El becerisi ve ustalık gerektiren meslek.", "Çömlekçilik, çamura biçim verilen bir zanaattır."],
["Ziyaret", "Birini veya bir yeri görmeye gitme.", "Hafta sonu dedeme ziyaret için gittik."],
["Zenginlik", "Bir şeyin çeşit ve miktar bakımından bol olması.", "Ormandaki bitki zenginliği bizi şaşırttı."]
],
expert: [
['Müphem','Açık ve belirgin olmayan; belirsiz.','Mektubun sonundaki müphem ifade, onu uzun süre düşündürdü.'],
['Mütereddit','Karar vermekte güçlük çeken; duraksayan, kararsız.','Mütereddit bir tavırla kapının önünde bekledi.'],
['Müşkülpesent','Güç beğenen, bir şeyi kolayca beğenmeyen.','Müşkülpesent okur, her romanda aynı derinliği arıyordu.'],
['Teessür','Üzüntü, keder.','Dostunun ayrılışı onda derin bir teessür bıraktı.'],
['Sükût','Sessizlik, susma.','Konuşmanın ardından salona uzun bir sükût çöktü.'],
['Mütemadiyen','Sürekli olarak, durmadan.','Yağmur mütemadiyen pencereye vuruyordu.'],
['Tahakküm','Baskı kurarak hükmetme, zorbalıkla egemen olma.','Başkaları üzerinde tahakküm kurmasına kimse izin vermedi.'],
['Müteessir','Üzülmüş, kederlenmiş.','Haberi duyunca müteessir oldu.'],
['Mütemayil','Bir şeye eğilimi olan, yatkın.','Gençliğinden beri şiire mütemayil bir insandı.'],
['Müşahede','Gözlem; bir şeyi görerek inceleme.','Yazarın insanlara ilişkin müşahedeleri romanına canlılık katıyor.'],
['Tefekkür','Bir konu üzerinde derin ve dikkatli düşünme.','Sessiz bahçe, tefekkür için elverişli bir yerdi.'],
['Teveccüh','Birine gösterilen yakınlık, ilgi ve beğeni.','Okurların teveccühü yazara yeni bir çalışma için cesaret verdi.'],
['Teenni','Acele etmeden, düşünerek ve ölçülü davranma.','Bu önemli kararı teenni ile vermek gerekiyordu.'],
['Tahayyül','Zihinde canlandırma, hayal etme.','Henüz görmediği şehri tahayyül etmeye çalıştı.'],
['Tasavvur','Bir şeyi zihinde canlandırma; düşünce, tasarım.','Geleceğe ilişkin tasavvuru zamanla değişti.'],
['Telakki','Bir şeyi anlama veya değerlendirme biçimi; anlayış.','Onun sanat telakkisi, yıllar içinde değişmişti.'],
['Terennüm','Güzel ve alçak bir sesle şarkı söyleme; dile getirme, anlatma.','Şair, dizelerinde bahar sevincini terennüm ediyordu.'],
['Tahassür','Özlemle anma; hasret çekme.','Çocukluk günlerini tahassürle hatırladı.'],
['İstiğna','Elindekini yeterli bulup başkasına ihtiyaç duymama; ilgisiz veya uzak durma.','Övgüleri istiğna ile karşılayıp çalışmasına döndü.'],
['İtidal','Aşırılıktan uzak olma, ölçülülük.','Tartışmanın en hararetli anında bile itidalini korudu.'],
['İhtimam','Özen, dikkatli bakım.','Eski kitaplarını büyük bir ihtimamla saklardı.'],
['İntiba','İzlenim.','İlk karşılaşmaları onda olumlu bir intiba bırakmıştı.'],
['İnziva','Toplumdan uzaklaşıp tek başına yaşama.','Yazar, romanını tamamlamak için inzivaya çekildi.'],
['İnkişaf','Gelişme, ilerleme.','Sanatın inkişafı için özgür bir ortam gerektiğini savundu.'],
['İstikamet','Yön, doğrultu.','Yolcular batı istikametinde ilerliyordu.'],
['İstifham','Soru sorma; soru.','Yüzündeki istifham, açıklamanın yeterli olmadığını gösteriyordu.'],
['İstihza','Alay etme, ince alay.','Sözlerindeki istihza, dinleyenlerin gözünden kaçmadı.'],
['İstikrar','Aynı durumda sürme; dengeli ve düzenli olma.','Çalışmalarındaki istikrar sayesinde kitabını bitirdi.'],
['Müsterih','İçi rahat olan; kaygısız, gönlü rahat.','Dostunun güvende olduğunu öğrenince müsterih oldu.'],
['Müstesna','Benzerlerinden ayrı tutulan; seçkin, ayrıcalıklı.','Bu eser, edebiyatımızda müstesna bir yere sahiptir.'],
['Mütevazı','Alçak gönüllü; gösterişsiz.','Başarılarına rağmen mütevazı bir hayat sürüyordu.'],
['Mütebessim','Gülümseyen.','Bizi kapıda mütebessim bir yüzle karşıladı.'],
['Mütefekkir','Düşünür; düşünce üreten kişi.','Bu mütefekkir, eserlerinde insanın özgürlüğünü sorgular.'],
['Müteyakkız','Uyanık, dikkatli ve tetikte olan.','Nöbetçiler gece boyunca müteyakkız kaldı.'],
['Müstağni','İhtiyaç duymayan; bir şeye karşı ilgisiz kalan.','Övgüden müstağni görünse de güzel sözlere sevindi.'],
['Müktesebat','Edinilmiş bilgi, deneyim ve kazanımların bütünü.','Yılların müktesebatı, yorumlarına derinlik katıyordu.'],
['Müşterek','Ortak, birlikte paylaşılan.','İki yazarın müşterek çalışması sonunda yayımlandı.'],
['Münferit','Tek başına olan; ayrı, tek.','Bu münferit olaydan genel bir sonuç çıkaramayız.'],
['Münzevi','Toplumdan uzak, tek başına yaşayan kişi.','Kasabanın dışındaki evde münzevi bir ressam yaşıyordu.'],
['Mülahaza','Düşünce, değerlendirme.','Öneriyi farklı mülahazalar ışığında yeniden ele aldılar.'],
['Veciz','Az sözle çok anlam anlatan, özlü.','Konuşmasını veciz bir ifadeyle tamamladı.'],
['Vakar','Ağırbaşlılık, ölçülü ve onurlu duruş.','Eleştirileri vakar içinde dinledi.'],
['Zarafet','İncelik, hoşluk ve beğenilen ölçülülük.','Davranışlarındaki zarafet herkesi etkiliyordu.'],
['Feraset','Çabuk kavrama ve sezme yeteneği; anlayışlılık.','Feraseti sayesinde söylenmeyen kaygıyı da fark etti.'],
['Basiret','Bir durumun gerçek niteliğini ve sonuçlarını görebilme yeteneği.','Zor zamanda basiret göstererek acele karar vermedi.'],
['Dirayet','Güçlükleri aşmada gösterilen yetenek ve sağlam irade.','Süreci dirayetle yönetti.'],
['Hicran','Ayrılığın yol açtığı derin acı.','Şiirin her dizesinde hicranın izleri vardı.'],
['Melal','Üzüntü, hüzün, keder.','Akşamın sessizliği içine ince bir melal saldı.'],
['Sükûnet','Sessizlik, durgunluk; ruhsal sakinlik.','Fırtınadan sonra kıyıya sükûnet hâkim oldu.'],
['Hemdem','Yakın arkadaş, can yoldaşı.','Yıllar boyunca kitaplar ona hemdem oldu.'],
["Aheste", "Yavaş, ağır ağır.", "Kıyı boyunca aheste adımlarla yürüdü."],
["Ahenk", "Uyum; seslerin veya parçaların birbirine uygunluğu.", "Dizelerdeki ahenk, şiirin etkisini artırıyordu."],
["Akis", "Yankı; yansıma.", "Dağlarda sesinin aksini duydu."],
["Aşina", "Tanıdık, bilinen; bir şeyi bilen, ona yabancı olmayan.", "Bu sokakların her köşesine aşinaydı."],
["Bedbin", "Kötümser; olayların kötü yanını görmeye eğilimli.", "Bedbin düşüncelerinden kurtulmak için yürüyüşe çıktı."],
["Beyhude", "Boşuna, yararsız, sonuçsuz.", "Geçmişi değiştirmeye çalışmanın beyhude olduğunu anladı."],
["Bîçare", "Çaresiz, zavallı.", "Masaldaki bîçare yolcu kendine bir sığınak aradı."],
["Cevval", "Canlı, hareketli, çabuk davranan.", "Cevval zekâsıyla soruna kısa sürede çözüm buldu."],
["Cüret", "Atılganlık; sınırı aşabilen cesaret.", "Bu zor soruyu sorma cüretini sonunda gösterdi."],
["Dimağ", "Beyin; zihin, akıl.", "Okuduğu her kitap dimağında yeni sorular uyandırıyordu."],
["Efsun", "Büyü.", "Masalda efsun bozulunca sarayın kapıları açıldı."],
["Elem", "Acı, keder, üzüntü.", "Ayrılığın elemini uzun süre içinde taşıdı."],
["Esrar", "Sırlar; bir şeyin bilinmeyen, gizli yönleri.", "Eski evin esrarı bütün kasabanın ilgisini çekiyordu."],
["Fani", "Geçici, kalıcı olmayan; ölümlü.", "Fani hayatın değerini dostlarıyla geçirdiği anlarda hissediyordu."],
["Girift", "Birbirine geçmiş, karmaşık.", "Romanın girift olay örgüsü dikkatli okumayı gerektiriyordu."],
["Güzide", "Seçkin, seçilmiş, üstün nitelikli.", "Kütüphane, edebiyatımızın güzide eserlerini bir araya getiriyordu."],
["Hâlet", "Durum, hâl.", "Yolculuk sırasında içinde bulunduğu hâleti tarif edemedi."],
["Huşu", "Derin bir saygı ve hayranlığın verdiği, insanı kendinden geçiren duygu.", "Dağların görkemini huşu içinde seyretti."],
["İcaz", "Az sözle çok şey anlatma, sözü özlü söyleme.", "Şairin anlatımındaki icaz, her dizeye yoğun bir anlam yüklüyordu."],
["İhtiyat", "Olası tehlikelere karşı tedbirli davranma, sakınma.", "Doğrulanmamış haberi ihtiyatla karşıladı."],
["İkbal", "Talihin iyi gitmesi; yüksek konum ve başarıya ulaşma.", "İkbal peşinde koşarken eski dostlarını ihmal etti."],
["İltifat", "Birine ilgi gösterme veya onu hoş sözlerle övme.", "Samimi iltifatı genç ressama cesaret verdi."],
["İmtina", "Bir şeyi yapmaktan kaçınma, çekinme.", "Bilmediği konuda kesin bir yargı vermekten imtina etti."],
["İntizar", "Bekleme, bekleyiş.", "Yolcuların intizarı, trenin görünmesiyle sona erdi."],
["İnzibat", "Düzen ve disiplin.", "Okuldaki inzibatın sorumluluğu yönetime aitti."],
["İrfan", "Bilme ve anlama yetkinliği; deneyimle olgunlaşmış bilgi ve anlayış.", "Onun irfanı, insanları yargılamadan dinleyişinde belli oluyordu."],
["İstiare", "Bir sözü benzerlik ilişkisiyle başka bir varlık için kullanma sanatı; eğretileme.", "Şairin sevgilisine gül demesi bir istiare örneğidir."],
["İzzet", "Değer, yücelik, saygınlık.", "İnsanın izzetini korumak gerektiğini her fırsatta söylerdi."],
["Kadim", "Çok eski, başlangıcı eskilere dayanan.", "Kadim bir geleneğin izleri törenlerde yaşamaya devam ediyordu."],
["Kanaat", "Kanı, görüş; elindekini yeterli bulma.", "Belgeleri inceledikten sonra bu kanaate vardı."],
["Latif", "Hoş, güzel, ince.", "Bahçeden içeri latif bir çiçek kokusu doldu."],
["Mahzun", "Üzgün, kederli.", "Ayrılık vakti gelince mahzun bir bakışla sustu."],
["Meçhul", "Bilinmeyen.", "Mektubun kimden geldiği hâlâ meçhuldü."],
["Meşakkat", "Güçlük, zahmet, sıkıntı.", "Bu uzun yolculuğun meşakkatine birlikte katlandılar."],
["Metanet", "Güçlükler karşısında dayanma gücü ve sağlam duruş.", "Yaşadığı sıkıntılara metanetle göğüs gerdi."],
["Muvaffak", "Başarılı, başarı kazanmış.", "Uzun çalışmaların ardından amacına ulaşmakta muvaffak oldu."],
["Muvazene", "Denge.", "Düşünce ile duygu arasında bir muvazene kurmaya çalışıyordu."],
["Münasip", "Uygun, elverişli, yerinde.", "Konuyu konuşmak için münasip bir zaman bekledi."],
["Müptezel", "Değerini ve saygınlığını yitirmiş; bayağılaşmış.", "Eleştirmen, romandaki müptezel şakalardan yakınıyordu."],
["Müşfik", "Şefkatli, sevecen.", "Müşfik öğretmeni onu sabırla dinledi."],
["Nazenin", "İnce, nazlı, narin.", "Şiirdeki nazenin çiçek, baharın kırılganlığını simgeliyordu."],
["Nüans", "İnce fark, küçük ayrım.", "İki sözcük arasındaki nüansı örneklerle açıkladı."],
["Perestiş", "Birini veya bir şeyi aşırı ölçüde sevip yüceltme; taparcasına sevme.", "Şaire duyduğu perestiş, eleştirel bakışını zayıflatıyordu."],
["Rikkat", "İncelik, yumuşaklık; duygulanma, acıma.", "Çocuğun anlattıkları dinleyenlere rikkat verdi."],
["Sarih", "Açık, belirgin, yoruma yer bırakmayan.", "Sorumuza sarih bir cevap vermesini bekledik."],
["Tebessüm", "Gülümseme.", "Yüzündeki küçük tebessüm kaygımızı azalttı."],
["Tecessüs", "Bir şeyi öğrenmek için duyulan merak ve araştırma isteği.", "Eski haritalara duyduğu tecessüs onu arşivlere götürdü."],
["Vefa", "Sevgi ve dostluğu sürdürme, bağlılık.", "Yıllar sonra öğretmenini ziyaret ederek vefasını gösterdi."],
["Yeknesak", "Tekdüze, değişmeden aynı biçimde süren.", "Yeknesak günlerine küçük yolculuklarla renk katıyordu."],
["Zımni", "Açıkça söylenmeyip dolaylı olarak anlaşılan, örtük.", "Sessiz kalışını zımni bir kabul olarak yorumladı."]
]
};
const app = document.querySelector('#app');
let mode = null;
let storageFailed = false;
const fresh = () => ({index:0, completed:0, unlocked:false, sessionCount:0, sessionDone:false, sentences:{}});
function readState(name) {
  try {
    const raw = JSON.parse(localStorage.getItem('kelime-kilidi-v1-' + name));
    if (!raw || !Number.isInteger(raw.index) || raw.index < 0 || raw.index >= WORDS[name].length) return fresh();
    const unlocked = raw.unlocked === true;
    return {index:raw.index, completed:raw.index + (unlocked ? 1 : 0), unlocked,
      sessionCount:Math.min(3,Math.max(0,Number(raw.sessionCount) || 0)),
      sessionDone:name === 'student' && unlocked && raw.sessionDone === true,
      sentences:raw.sentences && typeof raw.sentences === 'object' && !Array.isArray(raw.sentences) ? raw.sentences : {}};
  } catch { storageFailed = true; return fresh(); }
}
const states = {student:readState('student'), expert:readState('expert')};
function save() {
  try { localStorage.setItem('kelime-kilidi-v1-' + mode, JSON.stringify(states[mode])); storageFailed = false; }
  catch { storageFailed = true; }
  showStorageStatus();
}
function showStorageStatus() {
  document.querySelector('#save-status').textContent = storageFailed ? 'Kayıt yapılamıyor. İlerlemen yalnızca bu açık sayfada korunuyor.' : 'İlerlemen bu cihazda otomatik saklanır.';
}
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(focus = false, reveal = false) {
  document.body.className = mode ? mode + '-theme' : '';
  document.querySelector('meta[name="theme-color"]').content = mode === 'expert' ? '#182636' : '#f6f5ee';
  if (!mode) {
    app.innerHTML = `<section class="hero"><div class="eyebrow">Küçük bir alışkanlık, kocaman bir dünya</div><h1>Her kelime<br><em>yeni bir kapı.</em></h1><p>Türkçenin güzelliklerini keşfet.<br>Bir yol seç, kelimelerin kilidini aç.</p></section><section class="mode-grid" aria-label="Öğrenme modları">${['student','expert'].map(name => `<button class="mode-card ${name === 'expert' ? 'expert' : ''}" data-mode="${name}"><div class="card-top"><span class="pill">${name === 'student' ? '1–4. SINIF' : 'KELİME MERAKLILARINA'}</span><span aria-hidden="true">${name === 'student' ? '✳' : '✧'}</span></div><div class="card-art" aria-hidden="true">${(name === 'student' ? ['A','B','C'] : ['â','K','î']).map(letter => `<span class="letter-tile">${letter}</span>`).join('')}</div><h2>${name === 'student' ? 'Öğrenci Modu' : 'Uzman Modu'}</h2><p>${name === 'student' ? 'Küçük keşifler, büyük anlamlar.<br>Her oturumda 3 yeni kelime.' : 'Türkçenin derinliklerine bir yolculuk.<br>Nadir kelimeler, zengin anlamlar.'}</p><div class="card-bottom"><span>${states[name].completed ? 'Kaldığın yerden devam et' : 'Keşfetmeye başla'}</span><span class="arrow" aria-hidden="true">↗</span></div></button>`).join('')}</section><div class="home-note"><span>Her modda ${WORDS.student.length} kelime</span><span>Kendi hızında öğren</span><span>Çevrimdışı da yanında</span></div>`;
    app.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => {mode = button.dataset.mode; render(true);}));
  } else {
    const state = states[mode];
    const allDone = state.completed === WORDS[mode].length;
    const sessionDone = mode === 'student' && state.sessionDone;
    app.innerHTML = `<section class="learning"><nav class="mode-nav"><button class="back" id="home">← Ana ekran</button><span class="mode-label">${mode === 'student' ? 'ÖĞRENCİ MODU · BİRLİKTE KEŞFEDELİM' : 'UZMAN MODU · KELİMELERİN İZİNDE'}</span></nav><div class="progress-row"><span>${allDone ? 'Tüm kapılar açıldı' : 'Kelime ' + (state.index + 1) + ' / ' + WORDS[mode].length}</span><span>${state.completed} / ${WORDS[mode].length} kilit açıldı</span></div><div class="progress-track" role="progressbar" aria-label="Tamamlanan kelimeler" aria-valuemin="0" aria-valuemax="${WORDS[mode].length}" aria-valuenow="${state.completed}"><span style="width:${state.completed / WORDS[mode].length * 100}%"></span></div>${(allDone || sessionDone) && !reveal ? completion(allDone) : wordCard()}</section>`;
    document.querySelector('#home').addEventListener('click', goHome);
    const unlockButton = document.querySelector('#unlock');
    if (unlockButton) unlockButton.addEventListener('click', unlock);
    const nextButton = document.querySelector('#next');
    if (nextButton) nextButton.addEventListener('click', next);
    const finishHome = document.querySelector('#finish-home');
    if (finishHome) finishHome.addEventListener('click', goHome);
    const sentence = document.querySelector('#sentence');
    if (sentence && !state.unlocked) sentence.addEventListener('input', () => { state.sentences[state.index] = sentence.value; save(); sentence.removeAttribute('aria-invalid'); document.querySelector('#error').textContent = ''; });
  }
  showStorageStatus();
  if (focus) { const heading = app.querySelector('h1'); heading.tabIndex = -1; heading.focus({preventScroll:true}); window.scrollTo({top:0,behavior:'instant'}); }
}
function goHome() {mode = null; render(true);}
function wordCard() {
  const state = states[mode];
  const [word, meaning, example] = WORDS[mode][state.index];
  return `<article class="word-card ${state.unlocked ? 'unlocked' : ''}"><div class="word-top"><span class="word-tag">${mode === 'student' ? 'BUGÜNÜN KEŞFİ' : 'KELİME DEFTERİ'}</span><span class="lock" aria-hidden="true"></span></div><h1>${word}</h1><p class="definition">${meaning}</p><blockquote class="example">“${example}”</blockquote>${mode === 'student' ? '<p class="prompt">Sıra sizde! Bu kelimeyle bir cümle kurun.<br>Hazır olduğunuzda birlikte kilidi açın.</p>' : `<label for="sentence">Bu kelimeyle kendi cümleni yaz</label><textarea id="sentence" maxlength="1200" placeholder="Kelimene bir cümlede hayat ver…" aria-describedby="sentence-hint error" ${state.unlocked ? 'disabled' : ''}>${escapeHTML(state.sentences[state.index] || '')}</textarea><p class="hint" id="sentence-hint">En az 3 sözcük ve 15 karakter kullan. Bu kontrol anlamı değil, kelimenin cümlede bulunmasını denetler.</p><p class="error" id="error" role="alert"></p>`}${state.unlocked ? '<p class="success" role="status">✓ Kilit açıldı. Bir kelime daha seninle!</p><button class="primary" id="next">Sonraki Kelime <span aria-hidden="true">→</span></button>' : '<button class="primary" id="unlock">Kilidi Aç <span aria-hidden="true">↗</span></button>'}</article>${mode === 'student' ? `<div class="session-dots" aria-label="Bu oturumda ${state.sessionCount} kelime tamamlandı">${[0,1,2].map(i=>`<span class="${i < state.sessionCount ? 'done' : i === state.sessionCount ? 'current' : ''}"></span>`).join('')}</div>` : ''}`;
}
function completion(allDone) {
  const state = states[mode];
  const message = allDone ? `Harika! ${WORDS[mode].length} kelimenin kilidini açtın.` : 'Harika! Bugünün 3 kelimesini öğrendiniz!';
  return `<article class="word-card complete"><span class="complete-icon" aria-hidden="true">✧</span><div class="eyebrow">${allDone ? 'Yolculuk tamamlandı' : 'Küçük adımlar, büyük keşifler'}</div><h1>${message}</h1><p>${allDone ? (mode === 'student' ? 'Bütün kelimeleri tamamladınız. Öğrendiklerinizi cümlelerinizde yaşatın!'  : 'Yazdığın cümleler ve ilerlemen bu cihazda saklanıyor.') : 'Yeni kelimeleri gün içinde kullanmayı unutmayın.<br>Dilerseniz bir sonraki keşfe geçebilirsiniz.'}</p>${allDone ? '<button class="primary" id="finish-home">Ana ekrana dön</button>' : `<button class="primary" id="next">${WORDS[mode].length - state.completed < 3 ? 'Son ' + (WORDS[mode].length - state.completed) + ' kelimeye geç' : 'Sonraki 3 kelimeye geç'} <span aria-hidden="true">→</span></button>`}</article>`;
}
function normalize(text) {return text.normalize('NFC').toLocaleLowerCase('tr-TR').replace(/[âîû]/g, c => ({'â':'a','î':'i','û':'u'}[c]));}
// Yaygın ekleri kabul eder; sadece aynı harflerle başlayan farklı sözcükleri kabul etmez.
const suffixPattern = /^(?:lar|ler)?(?:yı|yi|yu|yü|yası|yesi|ı|i|u|ü|a|e|ya|ye|da|de|ta|te|dan|den|tan|ten|ın|in|un|ün|nın|nin|nun|nün|la|le|yla|yle|ım|im|um|üm|m|ın|in|un|ün|n|sı|si|su|sü|ımız|imiz|umuz|ümüz|mız|miz|muz|müz|ınız|iniz|unuz|ünüz|nız|niz|nuz|nüz|dır|dir|dur|dür|tır|tir|tur|tür|dı|di|du|dü|tı|ti|tu|tü|ydı|ydi|ydu|ydü|ca|ce|ça|çe|ça|çe|lik|lık|luk|lük|ceyim|cayım|yim|yım|yum|yüm|sin|sın|sun|sün|iz|ız|uz|üz|yiz|yız|yuz|yüz|siniz|sınız|sunuz|sünüz|ken|nı|ni|nu|nü|na|ne|nda|nde|ndan|nden|yla|yle){0,3}$/u;
function validateSentence(sentence, target) {
  const normalized = normalize(sentence.trim());
  if (!normalized) return 'Önce kendi cümleni yaz.';
  const tokens = normalized.match(/[a-zçğıöşü]+(?:['’][a-zçğıöşü]+)?/gu) || [];
  if (normalized.length < 15 || tokens.length < 3) return 'Cümleni biraz geliştir: en az 3 sözcük ve 15 karakter kullan.';
  const base = normalize(target);
  const found = tokens.some(token => {
    const plain = token.replace(/['’]/g,'');
    if (plain === base) return true;
    const roots = [base];
    if (base.endsWith('t')) roots.push(base.slice(0,-1) + 'd');
    return roots.some(root => plain.startsWith(root) && suffixPattern.test(plain.slice(root.length)));
  });
  return found ? '' : `Cümlende “${target}” kelimesini kullan. Yaygın ekli biçimleri de deneyebilirsin.`;
}
function unlock() {
  const state = states[mode];
  if (state.unlocked) return;
  if (mode === 'expert') {
    const input = document.querySelector('#sentence');
    const error = validateSentence(input.value, WORDS[mode][state.index][0]);
    if (error) {document.querySelector('#error').textContent = error; input.setAttribute('aria-invalid','true'); input.focus(); return;}
    state.sentences[state.index] = input.value.trim();
  }
  state.unlocked = true; state.completed = state.index + 1;
  if (mode === 'student') {state.sessionCount++; state.sessionDone = state.sessionCount === 3;}
  save();
  // Son kart da açılma animasyonunu gösterir; özet yalnızca devam edilince açılır.
  render(false, true);
  app.querySelector('.word-card').classList.add('unlocking');
  document.querySelector('#next').focus({preventScroll:true});
}
function next() {
  const state = states[mode];
  if (!state.unlocked) return;
  // Açılmış son kartın devam düğmesi önce oturum özetini gösterir.
  if ((state.sessionDone || state.completed === WORDS[mode].length) && app.querySelector('.lock')) {render(true); return;}
  if (state.completed === WORDS[mode].length) return;
  if (state.sessionDone) {state.sessionDone = false; state.sessionCount = 0;}
  state.index++; state.unlocked = false; save(); render(true);
}
document.querySelector('.brand').addEventListener('click', event => {event.preventDefault(); goHome();});
render();
if ('serviceWorker' in navigator && (location.protocol === 'https:' || ['localhost','127.0.0.1'].includes(location.hostname))) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {
    document.querySelector('#save-status').textContent = 'İlerleme cihazda saklanır; çevrimdışı hazırlık tamamlanamadı.';
  }));
}
