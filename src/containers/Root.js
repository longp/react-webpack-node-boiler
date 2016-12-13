import React, {Component} from 'react'

import RootNavbar from '../components/RootNavbar'
import RootFooter from '../components/RootFooter'

export default class Root extends Component {
    render() {
      return (
        <div>
          <RootNavbar />
          {this.props.children}
          <RootFooter />
        </div>
      );
    }
}
