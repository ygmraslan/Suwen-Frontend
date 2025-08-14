import React from "react";
import Header from "../../../src/components/layout/Header";
import Footer from "../../../src/components/layout/Footer";
import '../../css/Privacy.css';
import Breadcrumbs from "../../components/common/Breadcrumbs";

function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Breadcrumbs />

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
                    <h1>Kişisel Verilerin Korunması Kanunu Kapsamında Aydınlatma Metni</h1>

                    <p>
                        Suwen Tekstil Sanayi Pazarlama Anonim Şirketi (SUWEN) olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) ve ilgili ikincil mevzuat kapsamında çeşitli kişisel verilerinizi işlemekteyiz. İşbu metin, KVKK m.10 kapsamında aydınlatma yükümlülüğünün yerine getirilmesi amacıyla hazırlanmıştır.
                    </p>

                    <p>
                        SUWEN olarak, siz değerli kullanıcılarımıza/kullanıcı adaylarımıza/ziyaretçilerimize dair işlediğimiz kişisel verileri gizlilik esası kapsamında işliyoruz.
                    </p>

                    <h2>1. Kişisel Verilerinizi Toplamamızın Yöntemi ve Hukuki Sebebi Nedir?</h2>
                    <p>
                        Kişisel verileriniz; web sitemizi ziyaret etmeniz, uygulamamızı indirmeniz, üyelik başvurunuz sırasında ve/veya sonrasında yazılı ve/veya sözlü olarak ve/veya elektronik ortamda tarafımıza iletmiş olduğunuz (ad, soyad, e-mail adresi, mobil hat numarası, doğum tarihi vb.) her türlü bilgi ve belgeyi ifade etmekte olup, bu veriler üyelerimizin rızaları ve ilgili mevzuat hükümleri uyarınca SUWEN tarafından fiziki ve dijital ortamda işlenmekte ve saklanmaktadır.
                    </p>

                    <p>
                        Kişisel verileriniz, KVKK tarafından öngörülen temel ilkelere uygun olarak KVKK’nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları ve amaçları başta olmak üzere ilgili mevzuat kapsamında işbu “Aydınlatma Metni”nde belirtilen gerçek ve tüzel kişiler ile aşağıda yer alan amaçlarla yurt içinde ve yurt dışında işlenebilmekte ve aktarılabilmektedir.
                    </p>

                    <p>
                        SUWEN, verisini işlediği kişilere daha iyi hizmet verebilmek amacıyla ve yasal yükümlülüğü çerçevesinde, işbu Kişisel Verilerin Korunması Hakkında Açıklama metninde belirlenen amaçlar ve kapsam dışında kullanılmamak kaydı ile verilerinizi toplayacak, işleyecek, üçüncü kişilerle paylaşacak ve güvenli olarak saklayacaktır.
                    </p>

                    <h2>2. Kişisel Verilerinizin İşlenme Amaçları Nelerdir?</h2>
                    <table className="privacy-table">
                        <thead>
                            <tr>
                                <th>Başlık</th>
                                <th>Maddeler</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Kimlik (ad, soyad, doğum tarihi vs.)</td>
                                <td>
                                    <ul>
                                        <li>Üyelik süreçlerinin yürütülmesi</li>
                                        <li>Hizmet sunumunun sağlanması</li>
                                        <li>İletişim, tanıtım, reklam, kampanya, mailing, pazarlama süreçlerinin yürütülmesi</li>
                                        <li>Bilgi güvenliği süreçlerinin yerine getirilmesi</li>
                                        <li>Mevzuata uyumla alakalı işlemlerin yapılması</li>
                                        <li>Yetkili kişi, kurum, kuruluşlara bilgi verilmesi</li>
                                        <li>Yönetim süreçlerinin yürütülmesi</li>
                                        <li>Stratejik planlama faaliyetlerinin yürütülmesi</li>
                                        <li>Reklam, kampanya ve promosyon sağlanması süreçlerinin yürütülmesi</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <td>İletişim (telefon numarası, mail adresi vs.)</td>
                                <td>
                                    <ul>
                                        <li>Üyelik süreçlerinin yürütülmesi</li>
                                        <li>Hizmet sunumunun sağlanması</li>
                                        <li>İletişim, tanıtım, reklam, kampanya, mailing, pazarlama süreçlerinin yürütülmesi</li>
                                        <li>Bilgi güvenliği süreçlerinin yerine getirilmesi</li>
                                        <li>Mevzuata uyumla alakalı işlemlerin yapılması</li>
                                        <li>Yetkili kişi, kurum, kuruluşlara bilgi verilmesi</li>
                                        <li>Yönetim süreçlerinin yürütülmesi</li>
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>3. Kişisel Verileriniz Kimlerle Paylaşılmaktadır?</h2>
                    <p>
                        Yukarıda sayılan ve elektronik yöntemlerle toplanan kişisel verileriniz KVKK’nın 5. maddesinde yer alan veri sahibinin açık rızasının bulunması, Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması, İlgili kişinin kendisi tarafından alenileştirilmiş olması, Bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması hukuki sebeplerinden birine dayanılarak toplanmaktadır.
                    </p>
                    <p>
                        İşbu toplama faaliyeti esnasında, ilgili işleme sürecinin KVKK m.4’te yer alan ilkelere ve KVKK m.5’te yer alan şartlara uygun olması için elimizden gelen hassasiyeti gösteriyoruz.
                    </p>
                    <p>
                        Kişisel verileriniz, işbu metnin 2. Maddesinde yer alan veri işleme amaçlarının gerçekleştirilebilmesine istinaden; tedarikçiler, danışmanlar, hukuk müşaviri, mali müşavir, iş ortakları, bilgi teknolojisi hizmeti sağlayan kuruluşlar, yetkili kişi, kamu kurum ve kuruluşları ile paylaşılmaktadır. İşbu aktarma faaliyeti yurtiçinde ve/veya yurtdışında gerçekleşmektedir.
                    </p>

                    <h2>4. KVKK Kapsamında Haklarınız</h2>
                    <table className="privacy-table">
                        <thead>
                            <tr>
                                <th>Haklar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                "a) Kişisel veri işlenip işlenmediğini öğrenme",
                                "b) Kişisel verileri işlenmişse buna ilişkin bilgi talep etme",
                                "c) Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
                                "ç) Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme",
                                "d) Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme",
                                "e) 7 nci maddede öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme",
                                "f) (d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme",
                                "g) İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin kendisi aleyhine bir sonucun ortaya çıkmasına itiraz etme",
                                "ğ) Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme"
                            ].map((hak, index) => (
                                <tr key={index}>
                                    <td>{hak}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p>
                        Sayılan haklarınıza yönelik başvurularınızı  web sitemizde yer alan Veri Sorumlusuna Başvuru Formu’nu doldurarak tarafımıza iletebilirsiniz.
                        Talebiniz mümkün olan en kısa sürede ve en geç otuz gün içinde ücretsiz olarak sonuçlandırılacaktır.
                    </p>

                    <h2>SUWEN CLUB SADAKAT PROGRAMI KULLANIM ŞARTLARI</h2>
                    <p>
                        Suwen Club sadakat programı, müşterilerimizin yaptıkları alışverişlerden kalp puan kazanmalarını ve bu kazanılan puanları sonraki alışverişlerinde kullanmalarını sağlayan bir ek fayda programıdır.
                    </p>
                    <p>
                        Suwen Club Sadakat Programına katılabilmeniz için, mağazalarımızda kasa görevlisine vereceginiz en sık kullandığınız cep telefon bilginiz ile üyeliğinizin oluşturulması gerekmektedir. Kalp Puan programında üyelik numaranız cep telefonu numaranızdır ve puanlarınız bu numaraya tanımlanacaktır.
                    </p>
                    <p>
                        Kalp puan kazanımı ve kullanımı yapabilmek için kayıtlı cep telefonuna gelen SMS onay kodunun kasa görevlisine verilmesi gerekmektedir. SMS kodu verilmemesi durumunda puan kazanımı ve kullanımı yapılamaz.
                    </p>
                    <p>
                        Kalp puan sisteminin ayrıcalıklarından, size özel indirim ve kampanyalardan haberdar olabilmek için cep telefonu bilginizin kayıtlı olması ve iletişim izninin verilmiş olması gerekmektedir.
                    </p>
                    <p>
                        Sadakat programına dahil olan müşterilerimizden kampanya yapmak amacıyla eşlerinin ve çocuklarının doğum günleri de talep edilmektedir. Müşterilerimiz sadakat programından yararlanmak için bu veriyi Suwen ile paylaşmak zorunda değildir. Eş ve çocuklarınızın doğum günü bilgisini Suwen ile paylaşmadan önce eş ve çocuklarınızdan onay almış olmalısınız. Onay almaksızın yapacağınız paylaşımlar tamamıyla siz müşterilerimizin sorumluluğundadır.
                    </p>
                    <p>
                        Kişisel Verilerin Kullanımı ile ilgili verilen iznin iptali durumunda kazanılan puanlar kullanılamaz ve de sonraki alışverişlerde puan kazanılamaz.
                    </p>
                    <p>
                        Türkiye sınırı içindeki Suwen Mağazalarından yapılacak alışveriş tutarının %10'u Puan hesabınızda birikir. Her 10 Puan 1 TL’ye eşittir. İndirimli ve indirimsiz tüm ürünler puan sistemine dahildir. Suwen bu oranda ve puan kazanılacak ve puanın geçerli olduğu ürün gruplarında değişiklik yapma hakkını elinde saklı tutar.
                    </p>

                    <p className="signature bottom-right">
                        SUWEN Tekstil Sanayi Pazarlama Anonim Şirketi
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
