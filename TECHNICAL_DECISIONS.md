# Proje Soruları ve Yanıtları

## 1. Neden bu üç UI senaryosunu seçtiniz?

Seçtiğim senaryolar şunlardır:

- Negatif Login
- Sepete Ürün ekleme
- Ürün arama

Bu senaryoları, kullanıcı etkileşimlerini ve arayüzün beklenen şekilde davranıp davranmadığını doğrulamak amacıyla seçtim. Negatif Login senaryosunda geçersiz giriş bilgilerinin doğru şekilde ele alınmasını ve uygun hata mesajının görüntülenmesini kontrol ettim. Sepete Ürün Ekleme senaryosunda seçilen ürünün sepete eklenmesini ve ürün adı, fiyatı ve miktarının doğru görüntülenmesini doğruladım. Ürün Arama senaryosunda ise arama sonucunda ilgili ürünlerin listelendiğini kontrol ettim.

Bu senaryolar, temel kullanıcı akışlarını ve arayüz davranışlarını test ederek uygulamanın beklenen şekilde çalışıp çalışmadığını değerlendirmemi sağlıyor.

## 2. Hangi kontrolleri UI yerine API seviyesinde yapmak daha doğru olurdu ve neden?

Login ve Search senaryolarının bazı kontrollerini API seviyesinde gerçekleştirmeyi tercih ederdim. API testleri genellikle daha hızlı çalışır ve işlevleri kullanıcı arayüzünden bağımsız olarak doğrulamayı sağlar.

UI testlerini ise kullanıcı etkileşimlerini ve sonuçların ekranda doğru görüntülenmesini kontrol etmek için kullanırdım. Böylece test kapsamını API ve UI seviyeleri arasında daha verimli dağıtabilirdim.

## 3. Locator stratejiniz neydi?

Uygulamada `data-testid` gibi testler için özel olarak oluşturulmuş attribute'lar varsa öncelikle bunları kullanmayı tercih ederim. Ardından `getByRole` gibi kullanıcı odaklı locator yöntemlerini kullanırım. Bunlar uygun olmadığında ID veya CSS class tabanlı locator'lara başvururum.

Mümkün olduğunca benzersiz ve kararlı locator'lar seçmeye çalıştım. Bir locator birden fazla elementle eşleştiğinde, doğru elementi hedefleyecek şekilde seçiciyi daha belirgin hale getirmeye çalıştım.

## 4. POM kullandınız mı? Neden?

Evet, Page Object Model (POM) kullandım.

Başlangıçta POM daha fazla dosya oluşturuyormuş gibi görünse de proje büyüdükçe bakım kolaylığı sağlar. Örneğin, arayüzde bir değişiklik olduğunda ilgili locator veya metodu tek bir yerde güncelleyebilirim.

Sayfa etkileşimlerini test senaryolarından ayırmak, test dosyalarının daha okunabilir ve düzenli olmasını sağlar. Ayrıca kod tekrarını azaltmaya ve bakım sürecini kolaylaştırmaya yardımcı olur.

## 5. Test verilerini nasıl yönettiniz?

Test verilerini ayrı bir `test-data` klasöründe tuttum ve gerekli veriler için JSON dosyaları oluşturdum. Negatif login senaryosunda kullandığım geçersiz giriş bilgilerini bu şekilde yönettim.

Gerçek kullanıcı bilgileriyle başarılı login testi yazsaydım, kullanıcı adı ve parola gibi hassas bilgileri `.env` dosyası veya uygun bir gizli bilgi yönetim mekanizması üzerinden sağlamayı tercih ederdim.

Mevcut senaryolarım gerçek kullanıcı bilgileri gerektirmediği için ayrıca bir `.env` dosyasına ihtiyaç duymadım.

## 6. En çok zorlandığınız teknik problem neydi ve nasıl çözdünüz?

En çok zorlandığım konulardan biri, test ettiğim sitedeki reklamların sayfa navigasyonunu etkilemesiydi. Bazı durumlarda reklamlar hedef sayfaya geçişi zorlaştırıyordu. Sorunu aşmak için navigasyon akışını yeniden değerlendirerek farklı bir yöntem uyguladım.

Bir diğer zorluk, bazı locator'ların birden fazla elementle eşleşmesiydi. Bu durumda locator'ları inceleyerek doğru elementi benzzersiz şekilde hedefleyecek biçimde düzenledim.

Bu deneyimler, test otomasyonunda güvenilir locator seçiminin ve test ortamının davranışlarını anlamanın önemini gösterdi.

## 7. Bu projeyi gerçek bir ekipte büyütecek olsanız ilk üç iyileştirmeniz ne olurdu?

1. API testleri eklemek

İş kurallarını arayüzden bağımsız doğrulamak ve UI testlerini kritik kullanıcı etkileşimlerine odaklamak için API testleri eklerdim.

2. Test kapsamını ve assertion kalitesini geliştirmek

Mevcut testlerde temel kullanıcı akışlarını doğruluyorum. Projeyi büyütürken sınır durumlarını ve olası hata senaryolarını da kapsayacak şekilde test kapsamını genişletirdim. Örneğin, sepette ürün miktarının sıfıra düşürülmesi, geçersiz bir miktar girilmesi veya ürün miktarı değiştirildiğinde toplam fiyatın doğru güncellenmesi gibi durumları test ederdim. Böylece yalnızca temel akışların çalıştığını değil, uygulamanın beklenmeyen durumlarda da doğru davranıp davranmadığını kontrol edebilirdim.

3. Mevcut CI sürecini geliştirmek

Projede GitHub Actions ile testleri otomatik çalıştıran bir CI süreci oluşturdum. Gerçek bir ekipte bu yapıyı geliştirerek farklı tarayıcılarda test sonuçlarını daha kapsamlı değerlendirmeye ve başarısız testlerde trace, ekran görüntüsü ve test raporlarını saklamaya odaklanırdım. Böylece hataların nedenini daha kolay analiz edebilir ve ekibe daha hızlı geri bildirim verebilirdim.
