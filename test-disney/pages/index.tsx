import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Booking from '../components/Hostel/Booking';
import { setStep, setDescription } from '../store/stepSlice';

const Home: NextPage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setStep(1));
    dispatch(setDescription('Sélection de votre séjour'))
  }, [])

  return (
    <div className='mx-16'>
       <Head>
           <title>Test hotel Disney</title>
           <meta name="description" content="Generated by create next app" />
           <link rel="icon" href="/mickeyLogo.png" />
        </Head>
        <Booking />
    </div>
  )
}

export default Home
