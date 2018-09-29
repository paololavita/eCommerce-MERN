import React, { Component } from 'react';
import './Carousel.css';
import clothing1 from './imgs/Deakin_Clothing_Category.jpg';
import clothing2 from './imgs/1383711-clothesforwebsite-1492163824.jpg';
import clothing3 from './imgs/18_H2_Levis_US_Sept_HP_D_Ref_A_Fleece.jpg';
import clothing4 from './imgs/o-CLOTHING0205-facebook.jpg';

export default class Carousel extends Component {
    render() {
        let sliderImages = document.querySelectorAll('.slide'), 
        arrowLeft = document.querySelector('#arrow-left'),
        arrowRight= document.querySelector('#arrow-right'),
        current = 0;

        // Clear all images
        function reset() {
            for(let i = 0; i < sliderImages.length; i++){
                sliderImages[i].style.display = 'none';
            }
        }

        // Initialize slider
        function startSlide() {
            reset();
            sliderImages[0].style.display = 'block'
        }

        // Show previous
        function slideLeft() {
            reset();
            sliderImages[current - 1].style.display = 'block'
            current--;
        }

        // Show next
        function slideRight() {
            reset();
            sliderImages[current + 1].style.display = 'block';
            current++;
        }

        // Left arrow click
        arrowLeft.addEventListener('click', function(){
            if (current === 0){
                current = sliderImages.length;
            }
            slideLeft();
        });
        
        // Right arrow click
        arrowRight.addEventListener('click', function(){
            if (current === sliderImages.length - 1){
                current = -1;
            }
            slideRight();
        });

        startSlide();

        return (
            <div>
                <div className="container">
                    <div className="wrapper">
                        <div id="arrow-left" className="arrow"></div>
                        <div id="arrow-right" className="arrow"></div>
                        <div id="slider">
                            <div className="slide slide1">
                                <div className="slide-content">
                                    <span>Image One</span>
                                </div>
                            </div>
                            <div className="slide slide2">
                                <div className="slide-content">
                                    <span>Image Two</span>
                                </div>
                            </div>
                            <div className="slide slide3">
                                <div className="slide-content">
                                    <span>Image Three</span>
                                </div>
                            </div>
                            <div className="slide slide4">
                                <div className="slide-content">
                                    <span>Image Four</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

