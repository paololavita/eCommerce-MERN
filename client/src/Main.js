import React, { Component } from 'react';
import './Main.css';
import clothing1 from '../src/imgs/Deakin_Clothing_Category_2048x2048.jpg';
import clothing2 from '../src/imgs/1383711-clothesforwebsite-1492163824 800x480.jpg';
import clothing3 from '../src/imgs/18_H2_Levis_US_Sept_HP_D_Ref_A_Fleece 800x480.jpg';
import clothing4 from '../src/imgs/o-CLOTHING0205-facebook 800x480.jpg';
import discount from '../src/imgs/forty_percent_off.png';
// import Image from 'react-image-resizer';

export default class Main extends Component {
    render() {
        
        return (
            <div>
                <div className="container">
                        <div className="wrapper">
                            <img src={clothing1} alt="Clothing" width="100%" heigt="300px" />
                            <img src={discount} alt="Discount" className="discount" width="25%" heigt="40px"/>
                        </div>
                        <div className="row align-items-end">
                            <div className="image">
                                <div className="col-6 col-sm-4">
                                    <div className="box">
                                        <img src={clothing2} alt="Clothing2" width="100%" />
                                        <p className="text"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <h3>$44.99</h3>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <div className="box">
                                        <img src={clothing3} alt="Clothing2" width="100%" />
                                        <p className="text"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book..</p>
                                        <h3>$33.99</h3>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-4">
                                    <div className="box">
                                        <img src={clothing4} alt="Clothing2" width="100%" />
                                        <p className="text"><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <h3>$45.99</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>

        )
    }
}

