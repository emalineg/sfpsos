// src/POPOSSpace.js
import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  const { name, image, address, hours, id } = props;
  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <div className="POPOSSpace-image">
          <img
            src={`${process.env.PUBLIC_URL}/${image}`}     
            width="300"
            height="300"
            alt="Hello"
          />
        </div>
      </Link>
      <div className="POPOSSpace-info">
        <Link to={`/details/${id}`}>
          <h1>{name}</h1>
        </Link> 
        <div>{address}</div>
        <div className="POPOSSpace-hours">{hours}</div>
      </div>
    </div>
  );
}

export default POPOSSpace;