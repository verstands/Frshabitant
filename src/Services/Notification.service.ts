

import io from 'socket.io-client';

const socket = io('http://localhost:4000', {
  transports: ['websocket', 'polling'],
  withCredentials: true, 
});

socket.on('connect', () => {
  console.log('Connected to servereeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
});

socket.on('connect_error', (err) => {
  console.error('Connection errorwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww:', err);
});

export default socket;

