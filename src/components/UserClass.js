import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(); //super(props);
    console.log(props); //console.log(this.props);
    this.state = {
      count0: 0,
      count1: 1,
    };
  }
  render() {
    const { name, location } = this.props;
    const { count0, count1 } = this.state;

    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count0: count0 + 1, //count0: this.state.count0 + 1 (same thing)
            });
          }}
        >
          Click me! 
        </button><span> Count {count0}</span>
        <h2>Name(class): {name}</h2>
        <p>Address: {location}</p>
      </div>
    );
  }
}

export default UserClass;
