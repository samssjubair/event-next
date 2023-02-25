import Image from 'next/image';
import React from 'react';


  interface EventData {
    id: string;
    title: string;
    city: string;
    description: string;
    image: string;
  }
  
  interface CityEventsProps {
    data: EventData;
  }  

const CityEvents: React.FC<CityEventsProps>  = ({data}) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <Image width={400} height={400} src={data.image} alt="Event Image" className="h-2/6 w-full object-cover"/>
        <div className="p-4">
            <h2 className="font-bold text-xl mb-2">Event {data.title}</h2>
            <p className="text-gray-600 mb-4">Location: {data.city}</p>
            <p className="text-gray-700 leading-relaxed">{data.description}</p>
        </div>
        </div>
    );
};

export default CityEvents;

export async function getStaticPaths(){
    const {allEvents}= await import('data/data.json');
    console.log(allEvents);

    const allPaths= allEvents.map(ev=>{
        return {
            params: {
                city: ev.city.toString(),
                id: ev.id.toString()
            }
        }
    })
    return {
        paths: allPaths,
        fallback: false
    }

}

export async function getStaticProps(context: any){
    console.log(context);
    const {allEvents}=await import('data/data.json');
    const data= allEvents.find(ev=>ev.id===context.params.id)
    return {
        props:{
            data
        }
    }
}