import list from '../../public/list.json'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Cards from './cards';

export default function Freebooks(){
    const filtterData=list.filter((data)=>data.category==="Free")

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <div>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h3 className='text-xl font-semibold pb-2'>Free Offered Courses</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi rerum, cum, inventore quibusdam qui voluptas harum alias laudantium iure excepturi autem rem </p>
                </div>
            
                <Slider {...settings}>
                    {
                        filtterData.map(item=>
                            <Cards item={item} key={item.id}/>
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}