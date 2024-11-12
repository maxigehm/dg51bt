import React, { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function BookingForm({ room, onBookingComplete }) {
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const { data, error } = await supabase
        .from('bookings')
        .insert([
          {
            room_id: room.id,
            date,
            start_time: startTime,
            end_time: endTime,
            user_name: name,
            user_email: email,
          }
        ])

      if (error) throw error
      
      alert('Booking successful!')
      onBookingComplete()
    } catch (error) {
      alert('Error making booking: ' + error.message)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Date:</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>
      
      <div>
        <label className="block">Start Time:</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>

      <div>
        <label className="block">End Time:</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>

      <div>
        <label className="block">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>

      <div>
        <label className="block">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Confirm Booking
      </button>
    </form>
  )
}
