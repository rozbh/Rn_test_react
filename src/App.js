import React from 'react';

import axios from 'axios';

export default class UserData extends React.Component {
  state = {
    Users: []
  }
  async GetUserData() {
    const { data } = await axios.get(`http://localhost:3000/GetUserData/0/5`)
    console.log(data);
    this.setState({ Users: data.UserData })
  }

  componentDidMount() {
    this.GetUserData()


  }

  render() {

    if (this.state.Users?.UserData) {

    }
    return (
      <ul>
        {this.state.Users.map(person => <li>{`Name: ${person.name}----UserName: ${person.username}`}</li>)}
      </ul>
    )
  }
}

