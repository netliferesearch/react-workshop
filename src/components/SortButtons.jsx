
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const SortButtons = (props) => {
    const sorting = props.sorting.options.map((option) => (
        <button
            key={option}
            className={classNames({
                sort: true,
                'sort--active': props.sorting.selected === option,
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
    sorting: PropTypes.object.isRequired,
    click: PropTypes.func.isRequired,
};


export default SortButtons;
