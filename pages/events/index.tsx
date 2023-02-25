import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
    data: {
      id: string;
      title: string;
      image: string;
      description: string;
    }[];
  }
  
const Page: React.FC<Props> = ({ data }) => {    return (
        <div>
            welcome to event next
            
            <main className='my-2 mx-3'>
                {/* {console.log(data)} */}
                {
                data.map(dt=>(
                    <div key={dt.id} className='py-5'>
                    <Link href={`/events/${dt.id}`}>
                    <h2>Events in {dt.title}</h2>
                    <Image width={200} height={200} src={dt.image} alt="" />
                    {/* <div>{dt.description}</div> */}
                    </Link>
                    </div>
                ))
                }
                
                
            </main>
        </div>
    );
};

export default Page;

export async function getServerSideProps(){
    const {events_categories} =await import('data/data.json');
    // console.log(events_categories)
    return {
        props: {
        //   title: "Event-next!!",
          data: events_categories
        }
      }
}