'use client';

import React, { FC, ReactNode, useState, useContext } from "react";

import { redirect } from 'next/navigation';

function delay() {
  return new Promise(resolve => setTimeout(resolve, 1000));
}

// https://maku.blog/p/xenv4bh/
type Props = {
  children: ReactNode
}

const Firewall:FC<Props> = ({ children }) => {
  const [isDone, setDone] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    console.log('login start');

    setDone(false);
    delay().then(() => {
      setDone(true);
      setLoggedIn(true);
      console.log('login done');
    });
  }, []);

  if (!isDone) {
    return <p>try login...</p>;
  }

  if (!isLoggedIn) {
    return redirect('/');
  }

  return <>{children}</>;
}

export default Firewall;
