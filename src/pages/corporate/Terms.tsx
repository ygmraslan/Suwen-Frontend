import React from "react";
import Header from "../../../src/components/layout/Header";
import Footer from "../../../src/components/layout/Footer";
import '../../css/Terms.css';

function Terms() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <div className="corporate-page">
                {/* Sol Sidebar */}
                <div className="corporate-sidebar">
                    <h4>Kurumsal</h4>
                    <ul>
                        <li><a href="/corporate/about">Hakkımızda</a></li>
                        <li><a href="/corporate/qualitypolicy">Kalite Politikamız</a></li>
                        <li><a href="/corporate/privacy">Gizlilik Politikası</a></li>
                        <li><a href="/corporate/terms">Kullanım Koşulları</a></li>
                    </ul>
                </div>

                {/* Sağ İçerik */}
                <div className="corporate-content">
                    <h1>Kullanım Koşulları</h1>

                    <p>
                        İnternet sitemizdeki Kullanım Koşulları bölümünü dikkatle incelemenizi rica ederiz.
                        Bu siteyi ziyaret ederek bu dokümanda bulunan koşulları kabul etmektesiniz. Site kullanım koşulları düzenli aralıklarla değiştirilebilir; bu yüzden lütfen bu şartları zaman zaman kontrol ediniz.
                        Siteyi kullanmaya devam etmeniz değiştirilen şartları da kabul ettiğiniz anlamına gelmektedir. Site hakkında doğru ve zamanında bilgi vermek için gereken her türlü çaba tarafımızca gösterilmektedir.
                        Yine de burada verilen bilgilerin her zaman güncel olduğu veya sitenin her türlü bilgiyi içerdiği düşünülmemelidir.
                    </p>

                    <h2>Marka ve Telif Hakkı</h2>
                    <p>
                        Aksi belirtilmediği sürece, bu İnternet sitesindeki içeriklerin tamamı en geniş ve sınırlandırılmamış biçimde başka şahıslara ait telif hakkı, marka, patent ve / veya diğer fikri ve sınaî mülkiyetler şeklinde korunmaktadır.
                    </p>

                    <h2>Güvenlik Koşulları</h2>
                    <p>
                        Bu internet sitesi herkese açıktır. Bireysel üyeler için verilen hizmetler, ilgili bölümde aksi belirtilmediği sürece, kesinlikle ücretsizdir.
                        Sitenin güvenliğini tehdit edecek faaliyetlerin yapılması, üye bilgilerinin 3. kişi ve kuruluşlarla paylaşılması gibi genel ahlak kurallarını ihlal eden kişi veya kişiler hakkında kanuni haklarını saklı tutar.
                    </p>

                    <p>
                        Aşağıdaki durumlarda, internet sitesi yönetimi kullanımı engelleyebilir ve bu girişimlere karışan kişi veya kişiler hakkında kanuni haklarını saklı tutar:
                        <ul>
                            <li>Yanlış, düzensiz, eksik, yanıltıcı ve genel ahlak kurallarına uygun olmayan ifadeleri içeren bilgilerin siteye kaydedilmesi durumunda, özel veya genel duyuruların, reklam amaçlı bilgilerin ve satış taleplerinin kaydedilmesi durumunda,</li>
                            <li>Üçüncü kişiler tarafından ilan edilen bilgilerin silinmesi veya değiştirilmesi durumunda, diğer üyelerin bilgilerine ve Site içeriğine müdahale edilmeye çalışılması durumunda, sitede yer alan bilgilerin izin alınmaksızın kısmen veya tümüyle kopyalanması ve her ne şekilde olursa olsun kullanılması durumunda,</li>
                            <li>Üyelere verilen kullanıcı adı, şifre, üye numarası gibi bilgilerin, üçüncü kişi ve kuruluşlarla paylaşılması durumunda,</li>
                            <li>Sitenin genel güvenliğini tehdit edecek, sitenin ve kullanılan yazılımların çalışmasını engelleyecek yazılımların kullanılması, faaliyetlerin yapılması veya yapılmaya çalışılması durumunda,</li>
                            <li>Bu internet sitesinde belirlenen amaçlar dışında kullanıcı tarafından üyelik hesabının gerek internet sitesine, gerekse 3. kişileri zarara uğratacak şekilde kullanılması ve / veya internet sitesinin ticari itibarının kullanıcının eylemlerinden dolayı zarar görmesi halinde, internet sitesi yöneticileri kullanıcının üyeliğini derhal iptal etme, kullanıcıya karşı gerek adli gerekse idari her türlü mercie başvurma hakkına sahiptir.</li>
                        </ul>
                    </p>

                    <p>
                        Suwen, bu internet sitesinin genel görünüm ve dizaynı ile internet sitesindeki tüm bilgi, resim, www.suwen.com.tr alan adı, logo, ikon, demonstratif, yazılı, elektronik, grafik veya makinede okunabilir şekilde sunulan teknik veriler, bilgisayar yazılımları, uygulanan satış sistemi, iş metodu ve iş modeli de dahil tüm materyallerin ve bunlara ilişkin fikri ve sınai mülkiyet haklarının sahibi veya lisans sahibidir ve yasal koruma altındadır.
                        İnternet sitesinde bulunan hiçbir materyal; önceden izin alınmadan ve kaynak gösterilmeden, kod ve yazılım da dahil olmak üzere değiştirilemez, kopyalanamaz, çoğaltılamaz, başka bir lisana çevrilemez, yeniden yayımlanamaz, başka bir bilgisayara yüklenemez, postalanamaz, iletilemez, sunulamaz ya da dağıtılamaz. İnternet sitesinin bütünü veya bir kısmı başka bir internet sitesinde izinsiz olarak kullanılamaz. Aksine hareketler hukuki ve cezai sorumluluğu gerektirir. Suwen’in burada açıkça belirtilmeyen diğer tüm hakları saklıdır.
                    </p>

                    <h2>Üyelik</h2>
                    <p>
                        Üyelik formu doldurarak sitemize üye olabilirsiniz. Site Yönetimi herhangi bir sebep göstermeksizin üyeliği onaylamayabilir ve / veya üyeyi, üyelikten çıkartabilir.
                    </p>

                    <h2>Kişisel Kullanım</h2>
                    <p>
                        Bu sitedeki malzemelerin kullanımı yalnızca bilgi amaçlıdır. Bu internet sitesinin içindekileri internet sitesi yöneticisinden izin almadan, hiçbir şekilde dağıtmamayı, yayınlamamayı, aktarmamayı, değiştirmemeyi, sergilememeyi veya bunlara dayanan eserler yapmamayı ve / veya kullanmamayı kabul etmektesiniz.
                        Bu internet sitesindeki malzemelerin tarafınızca izinsiz kullanımından dolayı internet sitesinin uğramış olduğu ve / veya uğrayacağı her tür zarar ve ziyanı tazmin etmeyi itirazsız kabul etmektesiniz.
                    </p>

                    <h2>Bildirim ve Sunumlar</h2>
                    <p>
                        Yaptığınız sunumların içeriğinden tek başınıza sorumlu olduğunuzu ve kanunlara aykırı, küçük düşürücü, taciz edici veya müstehcen olan malzemeler sunmayacağınızı kabul etmektesiniz.
                        Üçüncü şahısların haklarını ihlal eden herhangi bir şey sunmamayı kabul etmektesiniz. Sunulan malzemelerin tüm hak ve lisansını Suwen’e gayri münhasır ve ücretsiz olarak verdiğinizi kabul etmektesiniz.
                    </p>

                    <h2>Fiyat Hataları</h2>
                    <p>
                        Yazılımsal veya sistemsel hatalardan kaynaklanan fiyat yanlışlıklarından Firmamız hiçbir şekilde sorumlu olmayıp, Firma Tüketiciye e-mail yolu ile haber vererek siparişi iptal edip Tüketiciye bedel iadesi yapma hakkına sahiptir.
                    </p>

                    <h2>Bağlantılı Siteler</h2>
                    <p>
                        Bu sitede yer alan linkler aracılığı ile gidilen sayfalar ve içeriği ile ilgili olarak Site Yönetimi herhangi bir sorumluluğu bulunmamaktadır.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Terms;
