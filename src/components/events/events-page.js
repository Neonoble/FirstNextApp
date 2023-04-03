// import React from 'react';

import Link from 'next/link';

const AllEvents = ({ data }) => {
  return (
    <div className="events_page">
      {data?.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <ul className="card">
            <img src={ev.image} alt={ev.title} width={350} height={500} /> <h2>{ev.title} </h2>
          </ul>
        </Link>
      ))}
    </div>
  );
};

export default AllEvents;