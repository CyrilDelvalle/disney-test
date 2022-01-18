import type { NextPage } from 'next';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShowsList from '../components/Show/ShowsList';
import Hostel from '../interfaces/Hostel';
import { setDescription, setStep } from "../store/stepSlice";

const Shows: NextPage = () => {
    const dispatch = useDispatch();
    const hostelList = useSelector((state: { hostel: {value: Hostel[]}} ) => state.hostel.value)
    const router = useRouter()
    
    useEffect(() => {
      if(!hostelList.length) {
        router.push('/')
      }

      dispatch(setStep(2));
      dispatch(setDescription('Sélection des shows'))
    }, [])


  return (
    <div className='mx-16'>
      <Head>
        <title>Test hotel Disney</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/mickeyLogo.png" />
      </Head>
      {
        hostelList.length ? <ShowsList /> : null 
      }
        
    </div>
  )
}

export default Shows
