import React from 'react'

export default function TopRating() {
  return (
    <section className='w-full h-full lg:py-16 py-10 '>
      <div className='max-w-330 mx-auto lg:px-6 px-4'>
        <h1 className='text-4xl font-black  text-cyan-700 mb-5 uppercase tracking-wider'>Top Rated Apartments</h1>
        <p style={{ fontFamily: 'Poppins' }} className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque doloremque iste voluptatem praesentium cupiditate </p>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 my-10'>
          {rooms.map((room, index) => {
            return (
              <Rooms key={index} room={room} index={index} />
            )
          })}
        </div>
      </div>
    </section>
  )
}


const rooms = [
  {
    id: 1,
    image: "/a.jpg",
    title: "Luxury 2BHK Apartment",
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    area: "1200 sq.ft.",
    price: "₹2,500 / Night",
  },
  {
    id: 2,
    image: "/b.jpg",
    title: "Executive Studio Suite",
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    area: "750 sq.ft.",
    price: "₹1,800 / Night",
  },
  {
    id: 3,
    image: "/c.jpg",
    title: "Premium Family Villa",
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    area: "1800 sq.ft.",
    price: "₹4,200 / Night",
  },
];

export function Rooms({ room, index }) {
  return (
    <div
      key={room.id}
      className="border border-gray-200 rounded-md overflow-hidden bg-white"
    >
      <img
        src={room.image}
        alt={room.title}
        className="h-[210] w-full object-cover"
      />

      <div className="p-5">
        <h2
          style={{ fontFamily: "Poppins" }}
          className="font-semibold text-xl"
        >
          {room.title}
        </h2>

        <div className="grid grid-cols-2 gap-3 my-4 ">
          <p className='Poppins'>👥 {room.guests} Guests</p>
          <p className='Poppins'>🛏️ {room.bedrooms} Bedrooms</p>
          <p className='Poppins'>🚿 {room.bathrooms} Bathrooms</p>
          <p className='Poppins'>📐 {room.area}</p>
        </div>

        <p className="text-lg font-medium Poppins">
          Price - {room.price}
        </p>

        <button className="font-semibold w-full bg-cyan-900 text-white rounded mt-4 py-3 cursor-pointer hover:bg-cyan-800 duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}