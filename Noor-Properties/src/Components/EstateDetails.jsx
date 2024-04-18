

const EstateDetails = ({ estate }) => {
  return (
    <div>
      <h1>{estate.estate_title}</h1>
      <p>ID: {estate.id}</p>
      <p>Segment: {estate.segment_name}</p>
      <p>Description: {estate.description}</p>
      <p>Price: {estate.price}</p>
      <p>Status: {estate.status}</p>
      <p>Area: {estate.area}</p>
      <p>Location: {estate.location}</p>
      <p>Facilities: {estate.facilities.join(', ')}</p>
      <button>View Property</button>
    </div>
  );
};

export default EstateDetails;
