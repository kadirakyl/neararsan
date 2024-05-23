import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Dünya çapında teslimat",
      decs: "Dünyanın her yerine 100 milyondan fazla ürünümüzle ulaşıyoruz.",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Kişisel Güvenlik",
      decs: "NeArarsan'da tüm bilgileriniz koruma altında.",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Güvenli Alışveriş ",
      decs: "Her zaman ilk önceliğimiz olan alışveriş güvenliğini dünya çapında uzman kadromuzla sağlıyoruz.",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "7/24 Destek ",
      decs: "NeArarsan ne zaman ararsan destek olmak için 7 gün 24 saat çalışıyoruz.",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
