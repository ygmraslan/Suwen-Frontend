import React from "react";
import Header from "../../../src/components/layout/Header";
import Footer from "../../../src/components/layout/Footer";
import '../../css/About.css';
import Breadcrumbs from "../../components/common/Breadcrumbs";

function About() {
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
                    <h1>Hakkımızda</h1>
                    <p>
                        2003 yılında İstanbul’da iç giyim sektöründe fark yaratmayı amaçlayan dinamik bir ekip tarafından kurulduk. Kadın iç giyiminden ev giyimine, plaj giyiminden kozmetik ve parfümeriye kadar genişleyen ürün yelpazesiyle, her kadının rahat, şık ve kendini güçlü hissetmesini hedefliyoruz. Kaliteyi, estetiği ve fonksiyonelliği bir arada sunarak, müşterilerimizin yaşamlarına değer katmayı amaçlıyor, güçlü mağaza ağı ve e-ticaret platformlarıyla Türkiye'de ve yurtdışında hızla büyümeye devam ediyoruz. Bir dünya markası olma yolunda kararlı adımlarla ilerliyor ve tasarımlarında kadınların farklı beden ve tarz ihtiyaçlarını ön planda tutuyoruz.
                    </p>
                    <p>
                        Günden güne geliştirdiğimiz mağazacılık anlayışımız ve “İçimde Suwen Var” sloganımızla, zamansız ve modern çizgilerdeki tasarımlarımızı dünyanın dört bir yanındaki kadınlara ulaştırmaya devam ediyoruz.
                    </p>

                    <h2>2003: Kuruluş ve İlk Adımlar</h2>
                    <p>
                        Suwen, 2003 yılında İstanbul’da iç giyim sektöründe yenilikçi ürünler sunmayı hedefleyen bir ekip tarafından kuruldu. Kurucularımızın vizyonu doğrultusunda, kadınların yaşamlarına değer katacak tasarımlar yaratma yolunda ilk adımlar atıldı. Başlangıçta, sektöre yeni bir bakış açısı getiren markamız, hızla ilgi gördü.
                    </p>

                    <h2>2005: Mağazacılıkla Büyüme</h2>
                    <p>
                        2005 yılı, bizim için önemli bir dönüm noktasıydı. İlk adımlarını çok bölümlü mağazalarda atan markamız, kadın iç giyiminde fark yaratmaya başladı. Hem yerel hem de küresel pazarda tanınmak için doğru adımlar atıldığında, markanın büyümesi hızlandı.
                    </p>

                    <h2>2007: İlk Kendi Mağazamızın Açılışı</h2>
                    <p>
                        2007 yılında Suwen, kendi adıyla açtığı ilk mağazasıyla sektördeki varlığını güçlendirdi ve hızlı bir yükselişe geçtik. Bu dönemde, tasarımlarımızda şıklık ve rahatlığı birleştirerek, kadınların her evresine hitap eden ürünler sunmaya başladık.
                    </p>

                    <h2>2012-2016: Ürün Yelpazemizin Genişlemesi</h2>
                    <p>
                        2012 yılında ev giyimi, 2014’te plaj giyimi ve 2016’da çorap ve aksesuar kategorilerinde yeni ürünlerimizle koleksiyonumuzu genişlettik. Bu dönemde, müşterilerimizin farklı ihtiyaçlarını karşılamak adına geniş bir ürün yelpazesi sunarak, markamızı daha da tanınır hale getirdik.
                    </p>

                    <h2>2017: Kurumsallaşma ve Ortaklık</h2>
                    <p>
                        2017’de, özel sermaye yatırım fonu Taxim Capital (Intilux S.àr.l) ile yaptığımız ortaklık sayesinde kurumsallaşma yolunda önemli adımlar attık. Bu ortaklık, markamızı daha profesyonel bir yapıya kavuşturdu ve ulusal ve uluslararası pazarlarda güçlü bir varlık yaratma yolunda bize önemli fırsatlar sundu.
                    </p>

                    <h2>2022: Borsa İstanbul’da İşlem Görmeye Başlama ve Genişleme</h2>
                    <p>
                        21 Nisan 2022 tarihinde, Borsa İstanbul’da işlem görmeye başladık. Bu, markamızın küresel bir oyuncu olma yolunda attığı büyük bir adımdı. Aynı yıl, kozmetik ve parfümeri ürünleri de portföyümüze eklenerek, kadınların güzellik dünyasında da varlık gösterilmeye başlandı. Bugün, Türkiye’nin 51 ilinde 181 mağaza ve Romanya, Kıbrıs gibi yurtdışı operasyonlarımızla toplamda 190 mağaza ile hizmet vermekteyiz.
                    </p>

                    <h2>2023 ve Sonrası: Global Marka Olma Yolunda</h2>
                    <p>
                        Suwen, 2023 itibarıyla, sadece Türkiye’de değil, dünya genelinde kadınlara ulaşmayı hedefleyen bir marka olarak büyümeye devam ediyor. İç giyim, ev giyim, plaj giyim ve kozmetik alanlarında sunduğumuz kaliteli ve rahat ürünlerle, her kadının şıklığını ve özgüvenini desteklemeyi sürdürüyoruz. Mağazacılıkla başladığımız bu yolculuk, e-ticaret platformlarıyla hızla gelişiyor ve global bir marka olma yolunda kararlı adımlarla ilerliyoruz.
                    </p>

                    <h2>Vizyonumuz ve Misyonumuz</h2>
                    <p>
                        Suwen olarak, her kadının rahat, şık ve kendini güçlü hissetmesi için tasarımlar yapıyoruz. Kaliteyi, şıklığı ve fonksiyonelliği birleştirerek, kadınların yaşamlarına değer katmayı hedefliyoruz. Türkiye’deki en hızlı büyüyen iç giyim markalarından biri olarak, yurtdışındaki operasyonlarımızla da global bir marka olma yolunda kararlılıkla ilerliyoruz. Kalite, şeffaflık, güven ve sürdürülebilirlik, markamızın temel ilkeleridir. Geleceği bugünden yöneterek, kadınların her yaş ve tarzda ihtiyaçlarına hitap etmeyi sürdüreceğiz.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default About;
