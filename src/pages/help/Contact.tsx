import React, { useEffect, useState } from "react";
import Header from "../../../src/components/layout/Header";
import Footer from "../../../src/components/layout/Footer";
import '../../css/Contact.css';
import Breadcrumbs from "../../components/common/Breadcrumbs";

function Contact() {
    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [kvkk, setKvkk] = useState(false);

    useEffect(() => {
        setSubject("");
        setName("");
        setSurname("");
        setEmail("");
        setPhone("");
        setMessage("");
        setKvkk(false);
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log({ subject, name, surname, email, phone, message, kvkk });
        setSubject("");
        setName("");
        setSurname("");
        setEmail("");
        setPhone("");
        setMessage("");
        setKvkk(false);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <Breadcrumbs />
            <div className="corporate-page">
                <div className="corporate-sidebar">
                    <h4>Yardım</h4>
                    <ul>
                        <li><a href="/help/faq">Sıkça Sorulan Sorular</a></li>
                        <li><a href="/help/returns-exchanges">İade, Değişim ve İptal İşlemleri</a></li>
                        <li><a href="/help/cargo-tracking">Teslimat Koşulları ve Kargo İşlemleri</a></li>
                        <li><a href="/help/contact" className="active">Bize Ulaşın</a></li>
                    </ul>
                </div>
                <div className="corporate-content">
                    <h1>Bize Ulaşın</h1>
                    <form className="contact-form" autoComplete="off" onSubmit={handleSubmit}>
                        <div className="form-group-full">
                            <div className="form-item">
                                <label className="form-label" htmlFor="subject">
                                    Mesaj konusu<span className="required">*</span>
                                </label>
                                <select
                                    className="form-input"
                                    id="subject"
                                    name="subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                >
                                    <option value="">Lütfen bir konu seçiniz...</option>
                                    <option value="1">Siparişim Hakkında</option>
                                    <option value="2">İstek, Öneri</option>
                                    <option value="3">Şikayet</option>
                                    <option value="4">Teslimat</option>
                                    <option value="5">Üyelik</option>
                                    <option value="6">Şifre</option>
                                    <option value="7">Yurtdışı Franchise Başvurusu</option>
                                    <option value="8">Toptan Başvuru</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-item">
                                <label className="form-label" htmlFor="name">Ad<span className="required">*</span></label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="form-item">
                                <label className="form-label" htmlFor="surname">Soyad<span className="required">*</span></label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="surname"
                                    name="surname"
                                    value={surname}
                                    onChange={(e) => setSurname(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="form-item">
                                <label className="form-label" htmlFor="email">E-posta<span className="required">*</span></label>
                                <input
                                    className="form-input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-item">
                                <label className="form-label" htmlFor="phone">Telefon<span className="required">*</span></label>
                                <input
                                    className="form-input"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group-full">
                            <div className="form-item">
                                <label className="form-label" htmlFor="message">Mesaj<span className="required">*</span></label>
                                <textarea
                                    className="form-input"
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group-full form-checkbox">
                            <input
                                type="checkbox"
                                id="kvkk"
                                name="kvkk"
                                checked={kvkk}
                                onChange={(e) => setKvkk(e.target.checked)}
                            />
                            <label htmlFor="kvkk" className="checkbox-label">
                                <span className="required">* Aydınlatma metni</span>'nde belirtilen kapsam, amaç ve süre dâhilinde kişisel verilerimin işlenmesini, yurt içi ve yurt dışındaki gerçek ve tüzel kişilere aktarılmasını kabul ediyorum.
                            </label>
                        </div>
                        <div className="form-group-full">
                            <button type="submit" className="submit-button">Gönder</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
