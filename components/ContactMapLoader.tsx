"use client";

import dynamic from 'next/dynamic';

const DynamicContactMap = dynamic(
  () => import('@/components/ContactMap'),
  { 
    ssr: false, 
    loading: () => <p style={{height: '400px', width: '100%', textAlign: 'center'}}>Loading map...</p> 
  }
);

export default function ContactMapLoader() {
  return <DynamicContactMap />;
}