import { ClipLoader } from 'react-spinners';

const Override = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color='#43338ca'
      loading={loading}
      cssOverride={Override}
      size={150}
    />
  );
};

export default Spinner;
