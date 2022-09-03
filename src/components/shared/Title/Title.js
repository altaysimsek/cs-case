import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return (
    <div className="csTitle container">
      <h1>{title}</h1>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
};

export default Title;
