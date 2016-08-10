import React, { PropTypes } from 'react'
import classNames from 'classnames';

const SortButtons = (props) => {
    const buttons = props.options.map((option) => (
        <button
            key={option}
            className={classNames({
                sort: true,
                // 'sort--active': this.state.selectedOption === option,
            })}
            onClick={props.sortList}
        >
        { option }
        </button>
        )
    );
    return (
        <div>
            {buttons}
        </div>
    );
};

export default SortButtons;
