import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type EventCityProps = {
    city: string,
    data: {
    id: number,
    image: string,
    title: string,
    city: string,
    description: string
    }[]
    }
    
const EventCity: React.FC<EventCityProps> = ({city, data}) => {
    return (
        <div>
            Welcome to {city} Mofos!
            {
                data.map(dt=>{
                    return(
                    <Link href={`/events/${city}/${dt.id}`} key={dt.id}>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <Image height={400} width={400} src={dt.image} alt="Event Image" className="h-2/6 w-6/12 object-cover"/>
                        <div className="p-4">
                            <h2 className="font-bold text-xl mb-2">Event: {dt.title}</h2>
                            <p className="text-gray-600 mb-4">Location: {dt.city}</p>
                            <p className="text-gray-700 leading-relaxed">Description: {dt.description}</p>
                        </div>
                        </div>
                    </Link>)

                })
            }
        </div>
    );
};

export default EventCity;

export async function getStaticPaths(){
    const {events_categories}= await import('data/data.json');
    const allPaths=events_categories.map(ev=> {
        return {
            params: {
                city: ev.id.toString()
            }
        }
        
    });
    // console.log(allPaths)
    return {
        paths: allPaths,
        fallback: false 
    }
}

export async function getStaticProps(context: any){
    // console.log(context);
    const params=context.params.city;
    // console.log(params)
    const {allEvents}= await import('data/data.json')
    const data= allEvents.filter(ev=>ev.city===params)
    return {props: {
        city: params,
        data
    }}
}