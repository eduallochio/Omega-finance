import { clsx } from 'clsx';
import PropTypes from 'prop-types';

export function Button({ children, className, ...props }) {
  return (
    <button
      className={clsx(
        'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

