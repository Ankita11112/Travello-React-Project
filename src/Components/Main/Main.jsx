import React, {useEffect} from 'react'
import './Main.css'
import img1 from '../../assets/img(1).jpg'
import img2 from '../../assets/img(2).jpg'
import img3 from '../../assets/img(3).jpg'
import img4 from '../../assets/img(4).jpg'
import img5 from '../../assets/img(5).jpg'
import img6 from '../../assets/img(6).jpg'
import img7 from '../../assets/img(7).jpg'
import img8 from '../../assets/img(8).jpg'
import img9 from '../../assets/img(9).jpg'
import img10 from '../../assets/img(10).jpg'
import img11 from '../../assets/img(11).jpg'
import img12 from '../../assets/img(12).jpg'
import img13 from '../../assets/img(13).jpg'
import img14 from '../../assets/img(14).jpg'
import img15 from '../../assets/img(15).jpg'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuClipboardCheck } from "react-icons/lu";

import Aos from 'aos';
import 'aos/dist/aos.css';

const Data = [
    {
        "id": 1,
        "name": "Paris",
        "location": "France",
        "image": img1,
        "fees": '$800',
        "description": "Paris, the capital of France, is known for its romantic ambiance, iconic landmarks such as the Eiffel Tower, and world-class museums like the Louvre. Stroll along the Seine River, enjoy French cuisine at charming cafes, and explore historic neighborhoods like Montmartre.",
      },
      {
        "id": 2,
        "name": "Tokyo",
        "location": "Japan",
        "image": img2,
        "fees": '$1000',
        "description": "Tokyo is a bustling metropolis known for its modern technology, historic temples, vibrant neighborhoods, and unique blend of tradition and innovation. Experience the neon lights of Shibuya, explore ancient shrines like Meiji Shrine, and indulge in authentic Japanese cuisine.",
        
      },
      {
        "id": 3,
        "name": "New York City",
        "location": "United States",
        "image": img3,
        "fees": '$1100',
        "description": "New York City is a global cultural hub, known for its iconic skyline, Broadway theaters, and diverse neighborhoods. Experience the energy of Times Square, visit world-famous museums, and enjoy Central Park's green oasis.",
      },
      {
        "id": 4,
        "name": "London",
        "location": "United Kingdom",
        "image": img4,
        "fees": '$1500',
        "description": "London, the capital of the United Kingdom, is a historic city with a mix of modern and traditional attractions. Explore the Tower of London, take a ride on the London Eye, and enjoy West End theater productions.",
      },
      {
        "id": 5,
        "name": "Rome",
        "location": "Italy",
        "image": img5,
        "fees": '$800',
        "description": "Rome, the capital of Italy, is a city steeped in history and ancient architecture. Visit iconic landmarks like the Colosseum and Roman Forum, enjoy delicious Italian cuisine, and experience the charm of quaint neighborhoods.",
   
      },
      {
        "id": 6,
        "name": "Bangkok",
        "location": "Thailand",
        "image": img6,
        "fees": '$5000',
        "description": "Bangkok, the capital of Thailand, is a vibrant city known for its bustling markets, ornate temples, and energetic nightlife. Explore the Grand Palace, take a boat ride along the Chao Phraya River, and savor Thai street food.",
      
      },
      {
        "id": 7,
        "name": "Sydney",
        "location": "Australia",
        "image": img7,
        "fees": '$1000',
        "description": "Sydney is a vibrant city known for its stunning harbor, iconic Opera House, and beautiful beaches. Climb the Sydney Harbour Bridge, relax at Bondi Beach, and explore the historic Rocks district.",
       
      },
      {
        "id": 8,
        "name": "Dubai",
        "location": "United Arab Emirates",
        "image": img8,
        "fees": '$1100',
        "description": "Dubai is a city known for its modern architecture, luxury shopping, and impressive skyscrapers. Visit the Burj Khalifa, explore the Dubai Mall, and experience the vibrant culture of the city.",
      
      },
      {
        "id": 9,
        "name": "Cape Town",
        "image": img9,
        "fees": '$800',
        "location": "South Africa",
        "description": "Cape Town is a coastal city known for its stunning landscapes, diverse culture, and historic sites. Visit Table Mountain, explore the Cape Peninsula, and enjoy the vibrant waterfront.",
        
      },
      {
        "id": 10,
        "name": "Rio de Janeiro",
        "location": "Brazil",
        "image": img10,
        "fees": '$600',
        "description": "Rio de Janeiro is a vibrant city known for its lively Carnival, stunning beaches, and iconic Christ the Redeemer statue. Enjoy the vibrant Copacabana and Ipanema beaches, explore the historic Santa Teresa neighborhood, and hike up to Sugarloaf Mountain.",
       
      },
      {
        "id": 11,
        "name": "Buenos Aires",
        "location": "Argentina",
        "image": img11,
        "fees": '$500',
        "description": "Buenos Aires is a city known for its vibrant culture, tango music and dance, and historic neighborhoods. Explore the colorful streets of La Boca, visit the iconic Teatro Colon, and enjoy the city's lively nightlife.",
       
      },
      {
        "id": 12,
        "name": "Prague",
        "location": "Czech Republic",
        "image": img12,
        "fees": '$1100',
        "description": "Prague, the capital of the Czech Republic, is known for its stunning architecture, historic Old Town, and charming atmosphere. Explore Prague Castle, stroll across Charles Bridge, and enjoy traditional Czech beer.",
        
      },
      {
        "id": 13,
        "name": "Singapore",
        "location": "Singapore",
        "image": img13,
        "fees": '$800',
        "description": "Singapore is a modern city-state known for its clean streets, diverse cuisine, and futuristic architecture. Explore the iconic Marina Bay Sands, visit Gardens by the Bay, and enjoy shopping on Orchard Road.",
       
      },
      {
        "id": 14,
        "name": "Barcelona",
        "location": "Spain",
        "image": img14,
        "fees": '$800',
        "description": "Barcelona is a lively city known for its unique architecture, sandy beaches, and rich cultural scene. Explore the works of Antoni Gaudí, relax on Barceloneta Beach, and experience the vibrant atmosphere of La Rambla.",
      },
      {
        "id": 15,
        "name": "Seoul",
        "location": "South Korea",
        "image": img15,
        "fees": '$700',
        "description": "Seoul is a dynamic city known for its modern skyscrapers, historic palaces, and K-pop culture. Visit Gyeongbokgung Palace, explore vibrant neighborhoods like Myeongdong, and enjoy the bustling street food scene.",
      }
]

const Main = () => {
  //lets create a react hook to scroll animation

useEffect(() =>{
  Aos.init({duration : 2000})
})
  return (
    <>
    <section className="main container section">
    <div className="secTitle">
        <h3 data-aos='fade-right' className="title">
            Most visited destinations
        </h3>
    </div>

    <div className="secContent grid">
        {/* here we using Higher order function array.map */}
        {
            Data.map(({id, name, location, image, fees, description }) =>{
                return (
                    <div key={id} data-aos='fade-up' className="singleDestination pb-3">
                        <div className="imageDiv">
                            <img src={image} alt={name} />
                        </div>

                        <div className="cardInfo ">
                            <h4 className="destTitle">
                                {name}
                            </h4>
                            <div className="continent d-flex justify-content-between" style={{borderTop: "1.5px solid gray", borderBottom: '1.5px solid gray' , padding: "1.5rem 0 1.2rem 0" }}>
                                <div className=''>
                                   <HiOutlineLocationMarker className='icon fs-4' />
                            <span className="name fs-6">{location}</span> 
                                </div>
                            
                            <div className="feess pe-3">
                                    <h3><strong>{fees}</strong></h3>
                            </div>
                            </div>
                            <div className="desc">
                                <p className='fs-8!important text-secondary pt-2'>{description}</p>
                            </div>

                            <button className="btn tex-light flex py-1">
                             DETAILS <LuClipboardCheck className='icon px-1' />
                            </button>

                        </div>
                    </div>
                )
            })
        }
    </div>

    </section>
    </>
  )
}

export default Main