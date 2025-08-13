import React from "react";
import Header from "../../../src/components/layout/Header";
import Footer from "../../../src/components/layout/Footer";
import '../../css/QualityPolicy.css';

function QualityPolicy() {
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
                    <h1>Kalite Politikamız</h1>

                    <p>
                        SUWEN OLARAK; Tüm çalışanlarımızın, müşterilerimizin ve iş birliği içinde olduğumuz paydaşlarımızın erişebilecekleri “Kalite Politikası” temelinde sürekli iyileştirmeyi ve geliştirmeyi esas aldığımızın bir taahhütüdür. Vizyon, Misyon ve Değerlerimizin de temelini oluşturan “Kalite” anlayışı bizim için sadece ürün kalitesinden ibaret değildir. Kaliteli ürünün çizgisi olduğuna inandığımız gibi, çalışan memnuniyeti ve müşteri memnuniyeti de bizim için kalitenin önemli göstergelerindendir. Sürekli geri bildirimler ile ürünlerimiz, iş süreçlerimiz ve müşterilerimizde maksimum seviyede memnuniyeti hedefleriz.
                    </p>

                    <h2>Vizyonumuz</h2>
                    <p>
                        Kadınlara, yaşamlarının her evresinde kullanılabilecekleri rahat ve kaliteli ürünler sunmaya devam etmek. Müşterilerimize yüksek kaliteli, kendilerini iyi hissettiren ve hayat tarzlarına uygun alternatifli ürünler sunarak fark yaratan bir şirket olma konumumuzu güçlendirmek. Bu anlayış çerçevesinde Türkiye’nin en hızlı büyüyen KİEP markası olarak, giderek genişleyen yurt dışı operasyonlarımızla Suwen’i bir dünya markası haline getirmek. Kendine güvenen Türk kadınını temsil eden, sektöründe dünya çapında tanınan bir marka olmak.
                    </p>

                    <h2>Misyonumuz</h2>
                    <p>
                        Müşterilerimizin ihtiyaç ve taleplerine dürüstlük, şeffaflık ve kaliteden ödün vermeden yanıt vermek; beklentilerini karşılamak ve tüm paydaşlarımızla ilişkilerimizde her zaman değer yaratmaya odaklanmak. Halka açık bir şirket olmanın bilinciyle, iş süreçlerimizi sürdürülebilirlik odağında dönüştürmek; bu konudaki gelişme alanlarımızı tüm yatırımcılarımızla şeffaflıkla paylaşmak öncelikli hedeflerimiz arasındadır.
                    </p>

                    <h2>Değerlerimiz</h2>
                    <div className="values-list">
                        <p>
                            <span className="value-title">Önce İnsan:</span> Suwen’de insana verdiğimiz değer, ailemize katılmak isteyen adayımızla yaptığımız iş görüşmeden başlar ve alışverişini tamamlayıp ürünümüzü deneyimleyen müşterimize kadar uzanır. Tüm süreçlerimizi “onlara kendini iyi hissettiren” bir deneyim yaşatmak üzerine kurgularız.
                        </p>
                        <p>
                            <span className="value-title">Güven:</span> Suwen’de dürüstlük ve şeffaflık önceliğimizdir. Etik ilkelerimizden vazgeçmez, doğrularımızı cesaretle savunuruz.
                        </p>
                        <p>
                            <span className="value-title">Kalite:</span> Memnuniyetin temelini kalitenin oluşturduğuna ve kaliteli ürünün çizgisi olduğuna inanırız. Biz ürünlerimizi ve iş süreçlerimizi tasarlarken çalışanlarımızın ve müşterilerimizin mutluluğunu esas alırız.
                        </p>
                        <p>
                            <span className="value-title">Sürdürülebilirlik:</span> Suwen olarak önceliğimiz gücümüzün, kalitemizin ve doğal kaynaklarımızın sürdürülebilirliğini sağlamaktır. Geleceğimizi “bugünden” yönetiyoruz.
                        </p>
                        <p>
                            <span className="value-title">Fırsat Eşitliği:</span> Toplumsal cinsiyet eşitliğine inanıyor, kadınların hak ettikleri fırsatlara ulaşabildikleri bir dünyayı kadınlar ile birlikte inşa ediyoruz. Gücümüzü kadınlardan alıyoruz.
                        </p>
                        <p>
                            <span className="value-title">Tutku:</span> Suwen’de biz birbirimize, markamıza ve müşterilerimize tutkuyla bağlıyız. Hem çalışanlarımız hem de müşterilerimiz için “en iyisi” için çalışmaktan asla vazgeçmiyoruz.
                        </p>
                    </div>


                    <h2>Kalite Anlayışımız</h2>
                    <p>
                        Müşterilerimizin memnuniyetini sağlayabilmek için ihtiyaçlarını doğru anlamayı, değişen ve gelişen pazarı takip ederek ihtiyaçlarına anlık ve doğru cevap vermeyi, insana ve çevreye duyarlı ürünler üretirken bunu müşterilerimiz ile uygun fiyatlandırma politikası ile buluşturmayı,
                        tüm iş süreçlerimizde maksimum performansı yakalayabilmek için çalışan memnuniyetini ön plana koyarak onları desteklemeyi, potansiyellerini açığa çıkarabilmeleri için sürekli gelişime liderlik etmeyi,
                        tüm iş paydaşlarımızın kurumumuzca benimsenmiş kalite standartlarımıza uygun olup olmadığını kontrol etmeyi, karşılıklı olarak fayda sağlamak amacı ile onları da gelişime dahil etmeyi,
                        devlet organları nezdinde Türkiye’de ve ülke dışında tüm satış kanallarımızda kuruluşumuzun finansal yükümlülüklerinin tamamını eksiksiz yerine getirip, sürdürülebilir büyüme ve karlılıkla ülke ekonomisine katkıda bulunmayı,
                        tüm kaynaklarımızı verimli kullanarak sürdürülebilirlik anlayışımızı paralel biçimde israfı önlemeyi,
                        tüm çalışan ve paydaşlarımızla Uluslararası ISO 9001 Kalite Yönetim Sistemi standartlarına uygun hareket etmeyi taahhüt ederiz.
                    </p>

                    <p className="signature bottom-right">
                        SUWEN Tekstil Sanayi Pazarlama Anonim Şirketi <br />
                        Genel Müdür <br />
                        ALİ BOLLUK
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default QualityPolicy;
