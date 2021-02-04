import React from 'react';

import UserCard from './UserCard'

class App extends React.Component {
  state = {
    user: {
      name: 'Chris on Code',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'chrisoncode',
      avatar:
        'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    }
  };

  render() {
    const {user} = this.state
    return (
      <div className="App">
        <UserCard user={user} />
      </div>
    );
  }
}
export default App
