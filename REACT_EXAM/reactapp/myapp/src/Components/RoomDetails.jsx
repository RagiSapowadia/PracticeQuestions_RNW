// RoomDetails Component
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const RoomDetails = () => {
  const { id } = useParams();
  const room = useSelector(state => state.rooms.find(r => r.id === id));


  if (!room) return <div>Room not found</div>;

  return (
    <div className='card mx-auto w-50 p-4'> 
      <h2 className='text-danger'>Room Details</h2>
      <p>Type: {room.type}</p>
      <p>Features: {room.features}</p>
      <p className='text-success fw-bold'>Status: {room.available ? 'Available' : 'Booked'}</p>
    </div>
  );
};

export default RoomDetails;