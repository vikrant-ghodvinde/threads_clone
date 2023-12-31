import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className='relative w-full max-w-screen-xl mx-auto py-5'>{children}</div>
  )
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Container