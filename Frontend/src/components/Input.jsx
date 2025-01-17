import { clsx } from 'clsx';
import PropTypes from 'prop-types';

export function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        'border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600',
        className
      )}
      {...props}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
};

