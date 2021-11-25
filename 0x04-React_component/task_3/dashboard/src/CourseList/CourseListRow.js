import PropTypes from 'prop-types';
import React from 'react';

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    let toRender;
    if (isHeader === true) {
        if (textSecondCell === null) {
            toRender = <th colSpan="2">{textFirstCell}</th>
        } else {
            toRender = (
                <React.Fragment>
                    <th>{textFirstCell}</th>
                    <th>{textSecondCell}</th>
                </React.Fragment>
            )
        }
    } else {
        toRender = (
            <React.Fragment>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
            </React.Fragment>
        )
    }
    return (<tr>{toRender}</tr>);
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ])
}

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null
}

export default CourseListRow;