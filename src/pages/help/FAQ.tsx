import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../../src/components/layout/Header";
import Footer from "../../../src/components/layout/Footer";
import '../../css/Faq.css';
import Breadcrumbs from "../../components/common/Breadcrumbs";

function Faq() {
    const faqItems = [
        { question: "Kargo takip numarasını nasıl öğrenebilirim?", answer: "Kargo takip numarasına Hesabım > Siparişlerim sekmesinde yer alan Sipariş Detay bölümüne girerek ulaşabilirsiniz." },
        { question: "Kargom elime ulaşmadı ne yapmalıyım?", answer: "Hesabım > Siparişlerim sekmesi altında kargo takip numaranız ile kargonuzun nerede olduğu ile ilgili detaylara ulaşabilirsiniz." },
        { question: "İade ve değişim işlemlerini nasıl gerçekleştirebiliriz?", answer: "Ürün değişimi 30 gün içerisinde mağazalarımızdan fiş veya fatura ile birlikte yapılabilir. İade işlemleri ise siparişinizin teslim edildiği tarihten itibaren 30 gün içerisinde yapılabilir." },
        { question: "İade ücreti ne zaman hesabıma yatar?", answer: "İadeniz 10 iş günü içerisinde hesabınıza yatırılmaktadır." },
        { question: "E-Faturama nasıl ulaşabilirim?", answer: "Üyeliği ile sipariş oluşturan müşterilerimiz, Siparişlerim sayfasından faturalarına erişebilir." },
        { question: "İncelemeye Ürün Nasıl Gönderebilirim?", answer: "Fiş/fatura tarihinden itibaren 180 günü aşmayan ürünler incelemeye kabul edilir." },
        { question: "Müşteri hizmetlerine nasıl ulaşabilirim?", answer: "0 850 340 00 50 numaralı telefondan müşteri hizmetlerimizi arayabilir veya destek@suwen.com.tr'den ulaşabilirsiniz." },
        { question: "Şifremi unuttum nasıl öğrenebilirim?", answer: "Şifremi unuttum linkine tıklayarak yeni şifre alabilirsiniz." },
        { question: "Üyelik bilgilerimi nasıl değiştirebilirim?", answer: "Üyelik bilgilerinizi 'Hesabım' sekmesinden değiştirebilirsiniz." },
        { question: "Üyeliğimi nasıl iptal edebilirim?", answer: "Üyeliğinizin iptali için destek@suwen.com.tr’ye e-posta atabilirsiniz." },
        { question: "Havale ile nasıl ödeme yapabilirim?", answer: "Havale/EFT ödemeleri için Ödeme adımında havale seçeneğini işaretleyip IBAN not alınır." },
        { question: "suwen.com.tr’ye nasıl üye olabilirim?", answer: "suwen.com.tr’ye Üye Ol sayfasından üye olabilirsiniz." },
        { question: "Siparişimi nasıl iptal edebilirim?", answer: "Verilen siparişinizi ilk 30 dakika içinde site üzerinden iptal edebilirsiniz." },
        { question: "Siparişim hangi kargo firması ile gönderiliyor?", answer: "Aras Kargo, Yurtiçi Kargo, HepsiJET, Kargoist ve MNG Kargo ile gönderim yapılmaktadır." },
        { question: "Kargo ücreti nedir?", answer: "1000TL altındaki siparişlerde 49,99TL, 1000TL ve üzeri siparişlerde kargo ücretsizdir." }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Breadcrumbs />

            <div className="faq-page">
                {/* Sol Sidebar */}
                <div className="faq-sidebar">
                    <h4>Yardım</h4>
                    <ul>
                        <li><Link to="/help/faq">Sıkça Sorulan Sorular</Link></li>
                        <li><Link to="/help/returns-exchanges">İade, Değişim ve İptal İşlemleri</Link></li>
                        <li><Link to="/help/cargo-tracking">Teslimat Koşulları ve Kargo İşlemleri</Link></li>
                        <li><Link to="/help/contact">Bize Ulaşın</Link></li>
                    </ul>
                </div>

                {/* Sağ İçerik */}
                <div className="faq-content">
                    <h1>SSS - Sıkça Sorulan Sorular</h1>
                    {faqItems.map((item, idx) => (
                        <div key={idx} className="faq-item">
                            <div
                                className="faq-question"
                                onClick={() => toggleFAQ(idx)}
                            >
                                {item.question}
                                <span className={`faq-icon ${openIndex === idx ? 'open' : ''}`}></span>
                            </div>
                            {openIndex === idx && (
                                <p className="faq-answer">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Faq;
