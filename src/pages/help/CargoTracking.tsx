import React from "react";
import Header from "../../../src/components/layout/Header";
import Footer from "../../../src/components/layout/Footer";
import '../../css/CargoTracking.css';
import Breadcrumbs from "../../components/common/Breadcrumbs";

function CargoTracking() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Breadcrumbs />

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
                    <h1>Teslimat Koşulları ve Kargo İşlemleri</h1>

                    <h2>Kargo ücreti nedir?</h2>
                    <p>Aras Kargo, DHL eCommerce ve Yurtiçi Kargo ile Türkiye’nin tüm şehirleri için kargo bedeli 1500 TL altındaki siparişlerde 49,99 TL'dir. 1500 TL ve üzeri siparişlerde kargo ücreti alınmamaktadır.</p>

                    <h2>Teslimat süresi nedir?</h2>
                    <p>suwen.com.tr üzerinden verilen siparişlerinizde banka onayı alındıktan sonra 1-3 iş günü içinde ürünleriniz kargoya teslim edilir. Özel kampanya dönemlerinde ise bu süre değişiklik gösterebilir.</p>
                    <p>Bayram ve tatil günlerinde ise teslimat yapılamamaktadır.</p>

                    <h2>Sipariş sonrası kargo durumu nasıl takip edilir?</h2>
                    <p>Sipariş kargoya teslim edildiğinde e-posta & SMS ile size bilgilendirme yapılır. Bunun dışında sitemiz üzerinden ‘Siparişlerim’ sayfasından kargonuzun durumunu takip edebilirsiniz.</p>

                    <h2>Sipariş verilen ürün stokta tükendiyse ne olur?</h2>
                    <p>suwen.com.tr üzerinden yapılan alışverişlerde aynı tüketiciler tarafından satın alınan ürünlerin stokları tükenebilir. Satın alınan ürünlerin satış sonrası stoklarının tükenmesi gibi nadir de olsa yaşanan durumlarda ödemesi internet üzerinden yapılan ürün eğer stoklarımızda kalmamış ise en az 4 (dört) en fazla 30 (otuz) iş günü bekleme süresi vardır. Ürün bu zaman dilimi içinde teslim edilemezse yapılan ödeme iade edilir.</p>

                    <h2>Anlaşmalı bir kargo şirketi var mı?</h2>
                    <p>Online sitemiz üzerinden seçtiğiniz ürünlerin tamamı anlaşmalı olduğumuz DHL eCommerce, Aras Kargo veya Yurtiçi Kargo tarafından size teslim edilir.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default CargoTracking;
