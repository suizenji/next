function monitor(arg: any, msg: string) {
  if (msg) {
    console.log(msg);
  }

  return arg;
}

export default async function ssr() {
  if (process.browser) {
    monitor(null, 'CSR func called');
  } else {
    monitor(null, 'SSR func called');
  }

  return fetch('http://localhost:3000/api/hoge')
    .then(res => monitor(res, 'api called'))
    .then(res => res.json())
    .then(json => <div>i am {json.name}</div>);
}
