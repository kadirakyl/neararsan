import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> 0 850 262 44 44</label>
            <i className='fa fa-envelope'></i>
            <label> destek@neararsan.com</label>
          </div>
          <div className='right row RText'>
            <label>Sıkça Sorulan Sorular</label>
            <label>Yardıma mı ihtiyacınız var?</label>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
