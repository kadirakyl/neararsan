import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>NeArarsan</h1>
            <p>Türkiye'nin En Büyük Alışveriş Sitesi</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>Hakkımızda</h2>
            <ul>
              <li>Satıcı Olmak İstiyorum</li>
              <li>İş Ortaklarımız</li>
              <li>Kariyer</li>
              <li>Şartlar ve koşullar</li>
              <li>Gizlilik Politikası</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Müşteri Hizmetleri</h2>
            <ul>
              <li>Yardım Merkezi</li>
              <li>Ödeme Seçenekleri</li>
              <li>Siparişinizi Takip Edin</li>
              <li>Kurumsal</li>
              <li>İade ve Geri Ödeme İşlemleri</li>
            </ul>
          </div>
          <div className='box'>
            <h2>İletişim</h2>
            <ul>
              <li>Email: destek@neararsan.com</li>
              <li>Telefon: 0 850 262 44 44</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
