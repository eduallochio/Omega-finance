

import PropTypes from 'prop-types';

export function Card({ children }) {
    return (
        <div className="bg-white p-4 shadow rounded">
            {children}
        </div>
    );
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
};
