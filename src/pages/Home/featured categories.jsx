import React, { useState } from 'react';
import '../../styles/styles'
import NavigationArrows from './Navigation Arrows';
const FeaturedCategories = () => {

    const [feturedData, setFeturedData] = useState([
        {
            id: 1,
            src: "/Materials/table/2.png",
            alt: "image",
            name: "side table",
            dic: "discover 120 products"
        },
        {
            id: 2,
            src: "/Materials/chair/the modern chair 6.jpg",
            alt: "image",
            name: "arm chair",
            dic: "discover 45 products"
        },
        {
            id: 3,
            src: "/Materials/table/3.jpg",
            alt: "image",
            name: "dinner table",
            dic: "discover 120 products"
        },
        {
            id: 4,
            src: "/Materials/pilow/5.jpg",
            alt: "image",
            name: "pillow  ",
            dic: "discover 120 products"
        },
        {
            id: 5,
            src: "/Materials/table/2.png",
            alt: "image",
            name: "side table",
            dic: "discover 120 products"
        },
        {
            id: 6,
            src: "/Materials/chair/the modern chair 6.jpg",
            alt: "image",
            name: "arm chair",
            dic: "discover 45 products"
        },
        {
            id: 7,
            src: "/Materials/table/3.jpg",
            alt: "image",
            name: "dinner table",
            dic: "discover 120 products"
        },
        {
            id: 8,
            src: "/Materials/pilow/5.jpg",
            alt: "image",
            name: "pillow  ",
            dic: "discover 120 products"
        },
    ])

    const [feturedPage, setFeturedPage] = useState(feturedData.length % 4);
    const [fetured_Current_Page, setFetured_Current_Page] = useState(1);

    const createDiv=<div className="slice"></div>;


    return (

        <div className="Fetured">
            <div className="F_text">
                <span>featured categories</span>
                <NavigationArrows />
            </div>
            <div className="F_iteams">


                {
                    feturedData.map((item, index) =>

                        <div key={index} className="F_product">
                            <div className="image">
                                <img src={item.src} alt={item.alt} />
                            </div>
                            <div className="detiles">
                                <span>{item.name}</span>
                                <p> {item.dic} </p>
                            </div>
                        </div>
                    )
                }


                {/* 

                <div className="F_product">
                    <div className="image">
                        <img src= alt="" />
                    </div>
                    <div className="detiles">
                        <span></span>
                        <p></p>
                    </div>
                </div>
                <div className="F_product">
                    <div className="image">
                        <img src="" alt="" />
                    </div>
                    <div className="detiles">
                        <span>dinner table</span>
                        <p>discover 120 products</p>
                    </div>
                </div>
                <div className="F_product">
                    <div className="image">
                        <img src="/Materials/pilow/5.jpg" alt="" />
                    </div>
                    <div className="detiles">
                        <span></span>
                        <p>discover 120 products</p>
                    </div>
                </div> */}






            </div>
            <div className="navigationBar">
                <div className="MotionSlices">
                    <div className="slice"></div>





                    {/* <div className="slice"></div>
                    <div className="slice"></div>
                    <div className="slice"></div>
                    <div className="slice"></div> */}
                </div>
            </div>











        </div>

    );
}

export default FeaturedCategories;