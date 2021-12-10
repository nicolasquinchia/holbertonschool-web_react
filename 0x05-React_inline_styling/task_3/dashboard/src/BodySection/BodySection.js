import React from "react";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class BodySection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { title, children } = this.props;
        return (
            <div className={css(styles.bodySection)}>
                <h2>{title}</h2>
                {children}
            </div>
        )
    }
}

const styles = StyleSheet.create({
    bodySection: {
        fontFamily: 'Arial, Helvetica, sans-serif',
        paddingLeft: '40px'
    }
})

BodySection.propTypes = {
    title: PropTypes.string
};

BodySection.defaultProps = {
    title: ""
};

export default BodySection;

