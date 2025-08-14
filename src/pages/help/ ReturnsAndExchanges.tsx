import React from "react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import '../../css/ReturnsAndExchanges.css';
import Breadcrumbs from "../../components/common/Breadcrumbs";

function ReturnsAndExchanges() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header /> <Breadcrumbs />

            <div className="corporate-page">
                {/* Sol Sidebar */}
                <div className="corporate-sidebar">
                    <h4>Yardım</h4>
                    <ul>
                        <li><a href="/help/faq">Sıkça Sorulan Sorular</a></li>
                        <li><a href="/help/returns-exchanges">İade, Değişim ve İptal İşlemleri</a></li>
                        <li><a href="/help/cargo-tracking">Teslimat Koşulları ve Kargo İşlemleri</a></li>
                        <li><a href="/help/contact">Bize Ulaşın</a></li>
                    </ul>
                </div>

                {/* Sağ İçerik */}
                <div className="corporate-content">
                    <h1>İade, Değişim ve İptal İşlemleri</h1>

                    <h2>İade</h2>
                    <p>30 gün içerisinde, Suwen.com.tr veya Suwen mağazalarımızdan ücretsiz olarak iadenizi gerçekleştirebilirsiniz.</p>

                    <h3>İade İşlemi İçin Hızlı ve Kolay Adımlar</h3>
                    <p>“Hesabım &gt; Siparişlerim” sayfasında veya “Misafir Üye Sipariş Takibi” sayfasına giriş yapıp iade etmek istediğiniz ürünün siparişini seçin.</p>
                    <p>İade etmek istediğiniz ürünü/ürünleri işaretleyin, iade sebebinizi seçin ve "İade Et" butonuna tıklayın.</p>
                    <p>Karşınıza çıkan kargo iade kodu ile en yakın DHL eCommerce şubesine iadenizi ücretsiz teslim edebilirsiniz.</p>
                    <p>“Hesabım &gt; İadelerim” sayfasından kargo iade kodunuza tekrar ulaşabilirsiniz.</p>
                    <p>Kargo firmasına teslim ettikten sonra, kargo takip kodu ile iadenizi sitemizden takip edebilirsiniz.</p>

                    <h3>İade Onayı ve Para İadesi</h3>
                    <p>
                        İade edilmek istenen ürün depomuza ulaştığında, uzman ekibimiz tarafından incelenir ve ürünün iade kurallarına uygun olup olmadığı kontrol edilir.
                        İadeniz onaylandığında, "İadelerim" sayfanızdan iadenizin onaylandığına dair bilgiyi görüntüleyebilirsiniz. Ayrıca, bu bilgilendirme SMS ve e-posta ile de size iletilir.
                        İadeniz onaylandığı günden itibaren 1-7 iş günü içinde, ödeme yaptığınız karta para iadeniz yapılacaktır.
                        İadeye engel olan herhangi bir durumda çağrı merkezimiz sizi arayarak bilgilendirecektir.
                    </p>

                    <h2>İptal</h2>
                    <p>Siparişiniz paketlenip faturalandı statüsüne geçene kadar, sipariş ekranından iptal işlemini gerçekleştirebilirsiniz. Faturalanan siparişlerin iptal işlemi yapılamaz; faturası kesilen siparişleriniz size ulaştığında, iade adımlarını takip ederek iade işlemi yapabilirsiniz.</p>

                    <h2>Değişim</h2>
                    <p>30 gün içerisinde yalnızca Suwen mağazalarımızda, faturanız ile ücretsiz değişim yapabilirsiniz.</p>
                    <p>En yakın mağazalarımıza <a href="https://www.suwen.com.tr/magazalar">buradan</a> ulaşabilirsiniz.</p>

                    <h2>Önemli Not</h2>
                    <p>
                        İade ve değişim işlemlerinde firmamız, Tüketiciyi Koruma Kanunu’na uygun hareket etmektedir. Ürün, kullanılmamış, orijinal ambalajı zarar görmemiş ve aksesuarları eksiksiz olmalıdır. Ürünün orijinal faturası ile birlikte iade işlemi yapılabilir.
                        Hijyen kuralları gereği, külotlar, silikon ürünler, aksesuarlar, kozmetik ürünler ve korseler için iade ve değişim yapılmaz. Ayrıca, bikini alt ve mayonun ağ kısmındaki hijyen bantları çıkarıldığında da iade ve değişim yapılamaz.
                        Trendyol, Hepsiburada, N11, Pazarama gibi diğer satış kanallarından alınan ürünler için iade talepleriniz, yalnızca ilgili satış kanalı üzerinden yapılmalıdır.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default ReturnsAndExchanges;
