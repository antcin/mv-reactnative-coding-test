import React from 'react';
import CardsList from '../CardsList';

class MainScreen extends React.PureComponent {
  render() {
    return <CardsList navigation={this.props.navigation} />;
  }
}

export default MainScreen;
