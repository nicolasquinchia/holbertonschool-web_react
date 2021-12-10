import React from 'react';
import PropTypes from 'prop-types';

function WithLogging(WrappedComponent) {
    const componentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    class hoc extends React.Component {
        componentDidMount(){
            console.log(`Component ${componentName} is mounted`);
        }
        componentWillUnmount(){
            console.log(`Component ${componentName} is going to unmount`);
        }
        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }
    hoc.displayName = `WithLogging(${componentName})`;
    return hoc;
}

export default WithLogging;