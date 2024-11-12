import React from 'react'

export default function RoomCard({ room, onSelect }) {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">{room.name}</h3>
      <p className="text-gray-600">{room.description}</p>
      <button
        onClick={() => onSelect(room)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Book Now
      </button>
    </div>
  )
}
