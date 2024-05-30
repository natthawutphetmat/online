import "@/styles/globals.css";
import "@/styles/styles.css";
import "@/styles/app.css";
import "@/styles/home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [count, setCount] = useState(0);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === 'update') {
        setCount(data.count);
        setClients(data.clients);
      }
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <Component {...pageProps} userCount={count} clients={clients} />
  );
}

export default MyApp;
