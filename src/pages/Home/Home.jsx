import React, { useState } from 'react';
import '../../styles/styles';
import Header from './../../component/header/header';
import Advertising from './../../component/Advertising/Advertising';
import EndHome from '../../component/End Home/End Home';
import FeaturedCategories from './featured categories';
import NavigationArrows from './Navigation Arrows';
import TrendingProducts from '../../component/Trending products/TrendingProducts';
import Subscribe from './subscribe';
import ClientSay from './clients say';
import FreeStuff from './free stuff';
import FlashSale from './flash sall';
import Explore from './Explore';
import Questions from './questions';
import ProductDetails from '../product details/ProductDetails';
import ProductInformation from '../product details/Productinformation';
import Review from '../product details/Review';
import ErrorPage from '../Error Page/ErrorPage';
import Ordercompleted from '../order completed/ordercompleted';
import Checkout from '../checkout/checkout';
import Blogdetails from '../blogdetails/blogdetails';
import { useNavigate } from 'react-router';


const Home = () => {
const navigate= useNavigate()



    // data 


    const [roomsData,setRoomsData]=useState([
        {
            id: 1,
            src: "/Materials/room/1.webp",
            name: "Bed Room",
            items: "1200+ item",
            active: true
        },
        {
            id: 2,
            src: "/Materials/Bedroom/2.jpg",
            name: "Bed Room",
            items: "1200+ item",
            active: false
        }, {
            id: 3,
            src: "/Materials/Bedroom/5.jpg",
            name: "Bed Room",
            items: "1200+ item",
            active: false
        }, {
            id: 4,
            src: "/Materials/Bedroom/3.jpg",
            name: "Bed Room",
            items: "1200+ item",
            active: false
        },
    ])


    // function switchView(value) {

    //     for (let i = 0; i <= roomsData.length - 1; i++) {
    //         if (roomsData[i].active) {
    //             if (value === '+') {
    //                 console.log(roomsData[i].active);
    //                 roomsData[i].active = false;
    //                 roomsData[((i+1)%roomsData.length)].active = true;
    //             } else {
    //                 roomsData[i].active = false;
    //                 roomsData[((i-1)%roomsData.length)].active = true;
    //             }
    //         }}

    //     }




    // function switchView(value) {
    //     console.log(roomsData)
    //     for (let i = 0; i < roomsData.length; i++) {
    //         if (roomsData[i].active) {

    //             roomsData[i].active = false;

    //             if (value === '+' && i < roomsData.length - 1) {
    //                 roomsData[i + 1].active = true;
    //             }
    //             else if (value !== '+' && i > 0) {
    //                 roomsData[i - 1].active = true;
    //             }
    //             else {
    //                 // لو وصلت للحدود، أعد تفعيل نفس العنصر
    //                 roomsData[i].active = true;
    //             }

    //             break; // مهم جدًا
    //         }
    //     }
    // }




function switchView(value) {
    setRoomsData(prevRooms => {
        const newRooms = [...prevRooms];
        const currentIndex = newRooms.findIndex(r => r.active);

        if (currentIndex === -1) return prevRooms;

        newRooms[currentIndex].active = false;

        let nextIndex;

        if (value === '+') {
            nextIndex = (currentIndex + 1) % newRooms.length;
        } else {
            nextIndex = (currentIndex - 1 + newRooms.length) % newRooms.length;
        }

        newRooms[nextIndex].active = true;

        return newRooms;
    });
}






    return (



        <div className="HOME">
            <Header />

            {/* <FeaturedCategories /> */}
            {/* <TrendingProducts/> */}
            {/* <Subscribe/> */}
            {/* <ClientSay/> */}
            {/* <FreeStuff/> */}
            {/* <FlashSale/> */}
            {/* <Explore/> */}
            {/* <Questions/> */}
            {/* <ProductDetails/> */}
            {/* <ProductInformation/> */}
            {/* <Review/> */}
            {/* <ErrorPage/> */}
            {/* <Ordercompleted/> */}
            {/* <Checkout/> */}
            {/* <Blogdetails/>  */}




            <div className="StartHome">
                <div className="Firsthalf">
                    <div className="text">
                        <p className="Field">furniture designe ideas</p>
                        <h1>modern interior <br />design studio</h1>
                        <p className="home_paragraph">Choosing the right furniture for your home online will add <br />elegance
                            and functionslity to
                            your interior while also <br />being cost effective and long lasting.</p>
                    </div>
                    <div className="buttons">
                        <button onClick={()=>{navigate("/products")}} className="input tast">
                            {/* onMouseEnter={() => console.log("1")}  */}
                            <span>Shop Now</span> <i className="fa-solid fa-arrow-right-long"></i></button>
                        <a href="https://github.com/WLMEY?tab=overview&from=2025-01-01&to=2025-01-01" target="_blank">Follow github</a>
                    </div>
                    <div className="Statistics">
                        <div className="Statistic">
                            <h3>2500+</h3> 
                            <span>Unique Styles</span>
                        </div>
                        <div className="Statistic">
                            <h3>5000+</h3>
                            <span>Happy Customer</span>
                        </div>
                        <div className="Statistic">
                            <h3>300+</h3>
                            <span>Certified Outlets</span>
                        </div>
                    </div>
                </div>

                <div className="Secondhalf">
                    <div className="rooms">


                        {
                            roomsData.map((item, index) =>
                                <div key={item.id} className={item.active ? "roomActive" : "room2"}>
                                    <img src={item.src} alt="" />
                                    <div className="detils">
                                        <span>{item.name}</span>
                                        <span>{item.items}</span>
                                    </div>
                                </div>
                            )
                        }






                        {/* 
                        <div className="room2">
                            <img src="/Materials/room/1.webp" alt="" />
                            <div className="detils">
                                <span>Bed Room</span>
                                <span>1200+ item</span>
                            </div>
                        </div>
 */}


                        {/* <div className="room2">
                            <img src="/Materials/Bedroom/2.jpg" alt="" />
                            <div className="detils">
                                <span>Bed Room</span>
                            </div>

                        </div>
                        <div className="room2">
                            <img src="/Materials/Bedroom/5.jpg" alt="" />
                            <div className="detils">
                                <span>Bed Room</span>
                            </div>

                        </div>
                        <div className="room2">
                            <img src="/Materials/Bedroom/3.jpg" alt="" />
                            <div className="detils">
                                <span>Bed Room</span>
                            </div>

                        </div> */}

                    </div>
                    {/* <NavigationArrows/> */}
                    {/* <NavigationArrows /> */}
                    <div className="icon">
                        {/* <button onClick={()=>switchView('-') } > <i className="fa-solid fa-arrow-left-long"></i></button>
                        <button onClick={()=>switchView('+') } > <i  className="fa-solid fa-arrow-right-long"></i></button>
                    */}
                   <button onClick={switchView.bind(null, '-')}> <i className="fa-solid fa-arrow-left-long"></i></button>
                   <button onClick={switchView.bind(null, '+')}><i  className="fa-solid fa-arrow-right-long"></i></button>



                    </div>
                    {/* <button> <i className="fa-solid fa-arrow-left-long"></i></button>
                        <button> <i className="fa-solid fa-arrow-right-long"></i></button> */}


                </div>
            </div>

            {/* <div className="component">#Advertising#</div> */}

            <Advertising />



            {/*--------------------------------------------------------------------------------------------- */
/* items_show */}
            <div className="items_show">
                <div className="item_1 Items">
                    <div className="texts">
                        <span className="Field ISh">new collection</span>
                        <ul>
                            <li><span>name</span></li>
                            <li>square table</li>
                            <li>round table</li>
                            <li>woodden table</li>
                            <li>glass table</li>
                        </ul>
                        <a onClick={()=>{navigate("/Categories")}} href="#">View All <i className="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                    <div className="image">
                        <img src="/Materials/table/5.png" width="300" height="300" alt="" />
                    </div>
                </div>
                <div className="item_2 Items">
                    <div className="texts">
                        <span className="Field ISh">new collection</span>
                        <ul>
                            <li><span>name</span></li>
                            <li>square table</li>
                            <li>round table</li>
                            <li>woodden table</li>
                            <li>glass table</li>
                        </ul>
                        <a onClick={()=>{navigate("/Categories")}} href="#">View All <i className="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                    <div className="image">
                        <img src="/Materials/table/2.png" width="300" height="300" alt="" />
                    </div>
                </div>
                <div className="item_3 Items">
                    <span className='look' >get discount</span>
                    <span>20% offer</span>
                </div>
                <div className="item_4 Items">
                    <div className="texts">
                        <span className="Field ISh">new collection</span>
                        <ul>
                            <li><span>name</span></li>
                            <li>square table</li>
                            <li>round table</li>
                            <li>woodden table</li>
                            <li>glass table</li>
                        </ul>
                        <a onClick={()=>{navigate("/Categories")}} href="#">View All <i className="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                    <div className="image">
                        <img src="/Materials/chair/barrel chair 8.png" width="300" height="300" alt="" />
                    </div>
                </div>

            </div>
            {/* ---------------------------------------------------------------------------------------------------------------- */}
            <FeaturedCategories />

            <TrendingProducts />
            <FlashSale />
            <FreeStuff />
            <ClientSay />
            <Explore />
            <Questions />







            <Subscribe />
            <EndHome />

        </div>
    );
}

export default Home;




