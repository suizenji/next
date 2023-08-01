//'use client';

export default async function () {
  console.log('ssr');

  return fetch('http://localhost:3000/api/hoge')
    .then(res => res.json())
    .then(json => <div>i am {json.name}</div>);
}
