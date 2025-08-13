import React from "react";
import "../../css/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Sol Kısım - Logo */}
                <div className="footer-left">
                    <img src="/assets/logo.svg" alt="Logo" className="footer-logo" />
                </div>

                {/* Orta Kısım - Menü Linkleri ve Sosyal Medya */}
                <div className="footer-middle">
                    <div>
                        <h4>Popüler Kategoriler</h4>
                        <ul>
                            <li><a href="#">Çorap</a></li>
                            <li><a href="#">Külot</a></li>
                            <li><a href="#">Sütyen</a></li>
                            <li><a href="#">Pijama</a></li>
                            <li><a href="#">Plaj</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Yardım</h4>
                        <ul>
                            <li><a href="#">Sık Sorulan Sorular</a></li>
                            <li><a href="#">İade ve Değişim</a></li>
                            <li><a href="#">Kargo Takip</a></li>
                            <li><a href="#">İletişim</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Kurumsal</h4>
                        <ul>
                            <li><Link to="/corporate/about">Hakkımızda</Link></li>
                            <li><Link to="/corporate/qualitypolicy">Kalite Politikamız</Link></li>
                            <li><Link to="/corporate/privacy">Gizlilik Politikası</Link></li>
                            <li><Link to="/corporate/terms">Kullanım Koşulları</Link></li>

                        </ul>
                    </div>
                    <div>
                        <h4>Sosyal Medya</h4>
                        <ul className="footer-social-links">
                            <li><a href="https://www.facebook.com/suwenint/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.instagram.com/suwen_lingerie/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.youtube.com/channel/UCLPlnjeu_kJfM5wWrLr_huA" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                            <li><a href="https://tr.pinterest.com/suwencomtr/" target="_blank" rel="noopener noreferrer">Pinterest</a></li>
                        </ul>
                    </div>
                </div>

                {/* Sağ Kısım - QR ve İndirme Linkleri */}
                <div className="footer-right">
                    <h4>SUWEN APP</h4>
                    <img src="/assets/qrcode.svg" alt="QR Kod" className="footer-qr" />
                </div>
            </div>

            {/* Alt Çizgi */}
            <div className="footer-bottom">
                <p>© 2025 Tüm Hakları Saklıdır.</p>
            </div>
        </footer>
    );
}

export default Footer;
