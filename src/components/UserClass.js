import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(); //super(props);
    console.log(props); //console.log(this.props);
    this.state = {
      count0: 0,
      count1: 1,
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/akshitanegi29");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location } = this.props;
    const { count0, count1 } = this.state;
    const { login, avatar_url, html_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name(class): {login}</h2>
        <p>Address: {html_url}</p>
        <button
          onClick={() => {
            this.setState({
              count0: count0 + 1, //count0: this.state.count0 + 1 (same thing)
            });
          }}
        >
          Click me!
        </button>
        <span> Count {count0}</span>
      </div>
    );
  }
}

export default UserClass;
