import React, {Component} from "react";
import {Text} from 'react-native'
import PropTypes from "prop-types";
import { withRouter } from "react-router";

class ShowTheLocation extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;
    let componentName = location.pathname.replace('/', '')
    if (componentName.includes('/')) {
      let i = componentName.indexOf('/')
      let name = componentName.slice(0, i)
      componentName = name
    }
    
    return <Text style={{ fontSize: 20, left: 15, color: "#fef"}}>{componentName}</Text>;
  }
}

export default withRouter(ShowTheLocation)