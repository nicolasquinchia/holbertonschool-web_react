import PropTypes from 'prop-types';
import React, {useState} from 'react';
import { StyleSheet, css } from 'aphrodite';


function updateRow() {
    const [currentCheckBox, setCheckBox] = useState(false);
    
    const changeStyle = () => {
        setCheckBox(!currentCheckBox)
    }

    return {currentCheckBox, changeStyle}
}

function CourseListRow({isHeader, textFirstCell, textSecondCell}) {
    const {currentCheckBox, changeStyle } = updateRow();
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
                <td>
                    <input type='checkbox' onClick={changeStyle} />
                    {textFirstCell}
                </td>
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
    return (<tr className={css(currentCheckBox ? styles.rowChecked : '')} style={styleToRender}>{toRender}</tr>);
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
    },

    rowChecked: {
        backgroundColor: '#e6e4e4'
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