import React from 'react';
import Container from '@material-ui/core/Container';
import { Select, MenuItem, MenuList } from '@material-ui/core'
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const organisationUrl = "https://api.github.com/orgs/adalab"
    const memberFromOrganisation = "https://api.github.com/orgs/Adalab/public_members"
    return (
      <div className="App">
        <p>Ready</p>
        <Container fixed style={{ backgroundColor: '#D6D3D3', backgroundImage: "url()", height: "80vh" }}>
          Adalab
          <Select>
            <MenuItem > User</MenuItem>
          </Select>
        </ Container>
      </div >
    );
  }
}

export default App;
