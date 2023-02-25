import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface EventData {
    id: number;
    title: string;
    image: string;
    description: string;
}
    
interface Props {
    data: EventData[];
}

const Events: React.FC<Props> = ({ data }) => {
    return (
        <main className='my-2 mx-3'>
        {
          data.map(dt=>(
            <div key={dt.id} className='py-5'>
              <Link href={`/events/${dt.id}`}>
              <h2>Events in {dt.title}</h2>
              <Image width={200} height={200} src={dt.image} alt="" />
              <div>{dt.description}</div>
              </Link>
            </div>
          ))
        }
      </main>
    );
};

export default Events;