// src/pages/tabletLogin.js
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Label from '../components/Label';
import { LucideUser, LucideTicket } from 'lucide-react';
import Card from '../components/Card';

const tabletLogin = () => {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [ticket, setTicket] = useState('');
  const [error, setError] = useState('');
  const [validCustomers, setValidCustomers] = useState([]);
  const [validTickets, setValidTickets] = useState([]);

  // Simulated data fetching
  useEffect(() => {
    const fetchValidData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/cart/tasks', {
          method: 'GET', credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
  
        if (Array.isArray(data)) {
          const customers = data.map(task => task.customerName);
          const tickets = data.map(task => task.ticketNumber);
  
          setValidCustomers(customers);
          setValidTickets(tickets);
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error('Error fetching valid data:', error);
      }
    };

    fetchValidData();
  }, []);

  // Perform authentication in the FRONTEND
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidCustomer = validCustomers.includes(name);
    const isValidTicket = validTickets.includes(ticket);

    if (isValidCustomer && isValidTicket) {
      navigate('/awaitingStart');
    } else {
      setError('Invalid name or ticket.');
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100" style={{ height: '100vh' }}>
      <Card className="p-8 space-y-6 shadow-lg">
        <h2 className="text-center text-8xl font-bold text-gray900 mt-1">C.A.M.L.</h2>
        <h1 className="text-center text-5xl font-bold text-gray900 mt-1">CAML Autonomous Mobility Lift.</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div className="mb-4">
              <Label htmlFor="name" className="text-center w-full block text-6xl mt-7 mb-2">Full Name</Label>
              <div className="flex items-center">
                <LucideUser className="w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Full Name on the Ticket"
                  className="ml-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="ticket" className="text-center w-full block text-6xl mt-5 mb-2">Ticket Number</Label>
              <div className="flex items-center">
                <LucideTicket className="w-5 h-5 text-gray-400" />
                <Input
                  id="ticket"
                  name="ticket"
                  type="text"
                  required
                  placeholder="Enter your boarding ticket number"
                  className="ml-2"
                  value={ticket}
                  onChange={(e) => setTicket(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Begin Trip!
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default tabletLogin;