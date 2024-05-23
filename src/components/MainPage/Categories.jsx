import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Moda",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Elektronik",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Araba&Aksesuar",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Ev&Bahçe",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Hediyeler",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Müzik",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Sağlık&Yaşam",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Petshop",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Oyuncaklar",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Organik Sebze",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Kitaplar",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
