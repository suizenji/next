'use client';

export default async function () {
  if (process.browser) {
    console.log('csr');
  } else {
    console.log('ssr');
  }

  return fetch('http://localhost:3000/api/hoge')
    .then(res => res.json())
    .then(json => <div>CSR: i am {json.name}</div>);
}
