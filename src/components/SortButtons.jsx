
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const SortButtons = (props) => {
    const sorting = props.options.map((option) => (
        <button
            key={option}
            className={classNames({
                sort: true,
                'sort--active': props.selected === option,
            })}
            onClick={props.click(option)}
        >
            { option }
        </button>
        )
    );
    return (
        <div>
            Sort by: {sorting}
        </div>
    );
};

SortButtons.propTypes = {
    options: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired,
};


export default SortButtons;
