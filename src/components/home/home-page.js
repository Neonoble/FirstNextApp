import Link from "next/link"

export const HomePage = ({ data }) => (
    <div className="home_body">
      {data?.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          <ul className="card">
            <div className="image">
              <img width={600} height={400} alt={ev.title} src={ev.image} />
            </div>
            <div className="content">
              <h2> {ev.title} </h2>
              <p> {ev.description} </p>
            </div>
          </ul>
        </Link>
      ))}
    </div>
  );