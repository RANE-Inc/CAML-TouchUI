// src/pages/Login.js
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import React from 'react';
import Input from '../components/Input';  // Custom Input component
import Button from '../components/Button';  // Custom Button component
import Label from '../components/Label';  // Custom Label component
import { LucideUser, LucideTicket } from 'lucide-react';  // Icons for User and Ticket
import Card from '../components/Card';  // Custom Card component

const Login = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // ADD Authentication logic here Later!!!!!
    
    navigate('/inMotion'); // Redirect to InMotion page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md p-8 space-y-6 shadow-lg">
        <h2 className="text-center text-3xl font-bold text-gray-900">CarryMyLuggage</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}> {/* Add onSubmit handler here */}
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <Label htmlFor="name" className="text-center w-full block">Name</Label> {/* Centered Label */}
              <div className="flex items-center">
                <LucideUser className="w-5 h-5 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"  // Use text input for Name
                  required
                  placeholder="Your Full Name on the Ticket"
                />
              </div>
            </div>
            <div className="mb-4">
              <Label htmlFor="ticket" className="text-center w-full block">Ticket Number</Label> {/* Centered Label */}
              <div className="flex items-center">
                <LucideTicket className="w-5 h-5 text-gray-400" />
                <Input
                  id="ticket"
                  name="ticket"
                  type="text"  // Use text input for Ticket Number
                  required
                  placeholder="Enter your boarding ticket number"
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

export default Login;
