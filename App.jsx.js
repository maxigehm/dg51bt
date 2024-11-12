import React, { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import RoomCard from './components/RoomCard'
import BookingForm from './components/BookingForm'

function App() {
  const [rooms] = useState([
    { id: 1, name: 'Großer Raum', description: 'Large rehearsal room with full equipment' },
    { id: 2, name: 'Kleiner Raum', description: 'Compact rehearsal room for small ensembles' }
  ])
  const [selectedRoom, setSelectedRoom] = useState(null)

  const handleRoomSelect = (room) => {
    setSelectedRoom(room)
  }

  const handleBookingComplete = () => {
    setSelectedRoom(null)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Rehearsal Room Booking</h1>
      
      {!selectedRoom ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rooms.map(room => (
            <RoomCard
              key={room.id}
              room={room}
              onSelect={handleRoomSelect}
            />
          ))}
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Book {selectedRoom.name}</h2>
          <BookingForm
            room={selectedRoom}
            onBookingComplete={handleBookingComplete}
          />
        </div>
      )}
    </div>
  )
}

export default App