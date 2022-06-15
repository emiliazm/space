import { useSelector } from 'react-redux/es/exports';
import './Reserved.css';

export default function ReservedRockets() {
  const rockets = useSelector((state) => state.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);
  if (bookedRockets.length !== 0) {
    return (
      <div className="reserved-container">
        {bookedRockets.map((rocket) => (
          <ul className="ul-container" key={rocket.id}>
            <li className="rocket-li">{rocket.rocketName}</li>
          </ul>
        ))}
      </div>
    );
  }
  return (
    <div>
      <p>Your booked Rockets will appear here</p>
    </div>
  );
}
