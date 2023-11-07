'use client';

import { useParams } from 'next/navigation';
import baseUrl from '@/utils/baseUrl'
export default async function User() {
  const params = useParams();
  const id = params.id;
  const NextResponse = await fetch(`${baseUrl}/api/products/`,{
    cache: "no-store",
  });
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{fontSize: 40, fontWeight: 'bold'}}>User Page</h1>
      <h2 style={{fontSize: 30, fontWeight: 'bold'}}>id: {id}</h2>
    </div>
  );
}









