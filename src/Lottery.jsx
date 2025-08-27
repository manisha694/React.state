import { useState } from 'react';
import './Lottery.css';
import { genTicket, sum } from './helper';

export default function Lottery() {
  const [ticket, setTicket] = useState(genTicket(3));
  const isWinning = sum(ticket) === 15;

  const buyTicket = () => {
    setTicket(genTicket(3));
  }

  return (
    <div>
      <h1>Lottery</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <button onClick={buyTicket}>Buy new Ticket</button>
      {isWinning && <h3>Congratulations, you won!</h3>}
    </div>
  );
}
