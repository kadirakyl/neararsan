import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/apple.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/samsung.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/oppo.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/vivo.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/redmi.png",
      cateName: "Redmi",
    },
    {
      cateImg: "./images/category/sony.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Markalar </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>Tüm Markaları Gör</button>
        </div>
      </div>
    </>
  )
}

export default Catg
