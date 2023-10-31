'use client'
import React, { useEffect } from 'react';


export default function Home() {

  const createAccount = async () => {
    try {
      const response = await fetch('http://localhost:3000/user/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: 'john',
          email: 'john@gmail.com',
        }),
      });
      
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error creating account:', error);
    }
  };

  useEffect(() => {
    createAccount(); // This will run when the component is mounted
  }, []); // The empty array as the second argument ensures it runs only once after the initial render

  return (
    <>
      <h1>gg</h1>
    </>
  );
}
