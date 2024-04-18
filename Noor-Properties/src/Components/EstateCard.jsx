
import { useHistory } from 'react-router-dom';

const EstateCard = ({ estate }) => {
const history = useHistory();  

  const viewProperty = () => {
    // Redirect to EstateDetails component with estate data
    history.push(`/estate/${estate.id}`);
  };

  return (
    <div>
      <img src={estate.image} alt={estate.estate_title} />
      <h2>{estate.estate_title}</h2>
      <p>{estate.description}</p>
      <button onClick={viewProperty}>View Property</button>
    </div>
  );
};

export default EstateCard;
