// https://nextjs.org/docs/app/building-your-application/routing/route-handlers
import { NextResponse } from 'next/server'

function delay() {
  return new Promise(resolve => setTimeout(resolve, 2000));
}

export async function GET() {
//  return NextResponse.json({name: 'John Doe'})
  console.log('api/route.ts::GET() called');

  return delay()
    .then(() => NextResponse.json({name: 'John Doe'}));
}
