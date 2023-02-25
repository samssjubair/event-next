import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import logo from 'public/images/logo.png'
import Link from 'next/link'
import Events from '@/src/components/events/Events'

const inter = Inter({ subsets: ['latin'] })

export default function Home({title,data}) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <Events data={data}/>
    </>
  )
}

export async function getServerSideProps(){
  const {events_categories}= await import('data/data.json')
  // console.log(events_categories)
  return {
    props: {
      title: "Event-next!!",
      data: events_categories
    }
  }
}