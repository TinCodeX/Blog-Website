import React from 'react'

const BlogHome = () => {
    const data = [
        {
            id:1,
            titleOne:"YOU CAN CHANGE THE WORLD",
            titleTwo:"STRONG STYLE",
            paraOne:"How Women are Redirecting Hollywood",
            paraTwo:"New Ways to Wear Denim Belt Bags make a Comeback",
            name:"By Jasmin Smith",
            subTitle:"How to Shop Mindfully",
            qrCode:"C:\Users\bizra\OneDrive\Desktop\Big Project\blog website\src\components\blog\Embrace Your Style 15 Unique Hairstyles for Afro Hair.jpg",
            cover:"download (2).jpg"
           
        },
    ]
  return (
    <>
    <section className='home'>
        <div className='left-content'>
            {
                data.map((value)=>{
                    return(
                        <div className="content">
                        <div className="logo">
                            <h1>M</h1>
                        </div>
                        <div className="home-img"><img src={value.cover} alt="" />
                        </div>
                        <div className="text">
                            <h1>
                                {value.titleOne}
                            </h1>
                        </div>
                        </div>

            }
        </div>
        <div className='right-content'>
            {

            }
        </div>
    </section>
    </>
  )
}
export default BlogHome
