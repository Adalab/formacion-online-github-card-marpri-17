import React from 'react';
import Loader from './Loader';
import ProfileCard from './ProfileCard';
import Container from '@material-ui/core/Container';
import { Select, MenuItem, Typography } from '@material-ui/core'
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      selectMember: ""
    }

    this.handleSelectMember = this.handleSelectMember.bind(this);
  }

  async getUsersFromServer() {
    const memberFromOrganisation = "https://api.github.com/orgs/Adalab/public_members"
    return fetch(memberFromOrganisation)
      .then(resp => resp.json())
      .then(membersData => membersData.map(
        member => fetch(member.url)
          .then(re => re.json())
      ));

  }

  componentDidMount() {
    const organisationUrl = "https://api.github.com/orgs/adalab"
    this.getUsersFromServer()
      .then(promises => Promise.all(promises))
      .then(membersCompleted => this.setState({
        members: membersCompleted
      }))
  }

  handleSelectMember(e) {
    this.setState({
      selectMember: e.target.value
    })
  }
  render() {
    const { members, selectMember } = this.state
    console.log("rendering")
    return (
      <div className="App">
        <Container fixed style={{ backgroundColor: '#D6D3D3', backgroundImage: "url()", height: "80vh" }}>

          <Select value={selectMember} onChange={this.handleSelectMember}>
            {(members == "") ? <Loader /> : members.map(member => {
              return <MenuItem key={member.id} value={member.id}> {member.login}</MenuItem>
            })}
          </Select>
          {(selectMember !== "") ? <ProfileCard user={members.filter(member => member.id === selectMember)[0]} /> : <Typography component="p">Use the select above to choose a member</Typography>}
        </ Container>
      </div >
    );
  }
}

export default App;
