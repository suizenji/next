'use client';

import Firewall from '../auth/firewall';
import {useState, useEffect} from "react";

function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

export default function Foo() {
  const [isDone, setDone] = useState(true);

  useEffect(() => {
    console.log('api start');

    setDone(false);
    delay().then(() => {
      console.log('api done');
      setDone(true);
    });
  }, []);

  if (isDone) {
    return (
      <Firewall>
        <div>bar</div>
      </Firewall>
    );

    return <div>done</div>;
  } else {
    return (
      <Firewall>
        <div>calling api...</div>
      </Firewall>
    );
  }
}
