import React from 'react';
// before suspense 16.6
const asyncComponent = importComponent => {
  return class extends React.Component {
    state = {
      component: null
    }

    componentDidMount(){
      importComponent().then(cmp => {
        this.setState({component:cmp.default});
      }).catch(err => console.log(err));
    }

    render(){
      const Comp = this.state.component;
      return Comp ? <Comp {...this.props} /> : null;
    }
  }
}

export default asyncComponent;