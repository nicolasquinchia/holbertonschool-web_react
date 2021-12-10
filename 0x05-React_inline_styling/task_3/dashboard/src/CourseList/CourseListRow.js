import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, css } from 'aphrodite';


function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    let toRender;
    const rowStyle = { backgroundColor: '#f5f5f5ab' };
    const headerRowStyle = { backgroundColor: '#deb5b545' };
    const thStyle = css(isHeader && textSecondCell ? styles.thdefault : styles.thColspan);

    if (isHeader === true) {
        if (textSecondCell === null) {
            toRender = <th className={thStyle} colSpan="2">{textFirstCell}</th>
        } else {
            toRender = (
                <React.Fragment>
                    <th className={thStyle}>{textFirstCell}</th>
                    <th className={thStyle}>{textSecondCell}</th>
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
    let styleToRender;
    if(isHeader) {
        styleToRender = headerRowStyle;
    } else {
        styleToRender = rowStyle;
    }
    return (<tr style={styleToRender}>{toRender}</tr>);
}

const styles = StyleSheet.create({
    thColspan: {
        padding: '5px',
        borderBottom: '2px solid lightgray',
        textAlign: 'center',
        margin: '0',
        padding: '5px 0'
    },

    thdefault: {
        padding: '5px',
        borderBottom: '2px solid lightgray',
        textAlign: 'start',
        margin: '0',
        padding: '5px 0'
    }
})

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