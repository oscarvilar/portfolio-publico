import "./intro.css"
import ImagenIntro from "../../img/imagen-intro.png"
import Carousel from 'react-elastic-carousel'
import {sliderIntro} from "../../data";
import React from "react";

const Intro = () => {
    //SLIDER 
        const carouselRef = React.useRef(null);    
        const Loop = (currentItem) => {
        //Al ser un slider de objetos multiples currentItem no coincide con el ultimo el numero 6 sale mirandolo en el debug components Carousel>sytledDiv...>Track>Swipeable
        //En Swipable mirar la prop currentItem
        if (currentItem.index == 6) {
            setTimeout(() => {
            carouselRef.current.goTo(0);
            }, 1500);
        }
        };
    //FIN SLIDER
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                   <h2 className="intro-title">Hola, me llamo</h2>
                   <h1 className="intro-name">Óscar Vilar</h1>
                   <p className="intro-desc">
                   Actualmente trabajo como Front-End Developer.
                   </p>
                   <div className="contenedor-slider">
                   <Carousel 
                    onChange={Loop}
                    ref={carouselRef}
                    showArrows={false} 
                    enableAutoPlay autoPlaySpeed={1500}
                    itemsToShow= {4}
                   >
                    {sliderIntro.map(item=>(
                        <img key={item.id} src={item.img} className="img-hab"/>
                        ))}
                    </Carousel>
                   </div>
                </div>
                <svg
                    width="75"
                    height="75"
                    viewBox="0 0 75 75"
                    fill="none"
                    stroke="black"
                    className="intro-scroll"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <g id="scroll">
                        <path
                        id="Vector"
                        d="M40.5 15L34.5 9L28.5 15"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <path
                        id="Vector_2"
                        d="M28.5 24L34.5 30L40.5 24"
                        strokeWidth="3"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <g id="Group">
                        <path
                            id="Vector_3"
                            d="M9 37.5H60"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </g>
                        <path
                        id="Vector_4"
                        d="M34.5 27V9"
                        strokeWidth="2.9895"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                        <g id="Group_2">
                        <path
                            id="Vector_5"
                            d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                            strokeWidth="3"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </g>
                    </g>
        </svg>
            </div>  
            <div className="intro-right">
                <div className="intro-right-bg"></div>
                <img src={ImagenIntro} alt="portatil" className="intro-image" />
            </div>
        </div>
    )
}

export default Intro
