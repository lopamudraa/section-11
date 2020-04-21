import React, { Component } from 'react';

const asyncComponent = (importComponentLopa) => {
    return class extends Component {
        state = {
            ComponentLopa: null
        }

        componentDidMount() {
            importComponentLopa().then(cmp => {
                this.setState({ ComponentLopa: cmp.default });
            });
        }
        render() {
            const C = this.state.ComponentLopa;

            return C ? <C {...this.props} /> : null;
        }
    }
}

export default asyncComponent;