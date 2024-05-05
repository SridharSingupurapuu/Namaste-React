import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Sridhar",
        email: "singupurapusridhar570@gmail.com",
      },
    };
    //console.log(this.props.name + " child constructor called");
  }

  async componentDidMount() {
    //console.log(this.props.name + " Child componentDidMount called");
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    //console.log("component Did Update");
  }

  componentWillUnmount() {
    //console.log("component Will Unmount");
  }

  render() {
    const { name, location } = this.props;
    //console.log(name + " Child rendered called");
    return (
      <div className="user-card">
        <h2>Name : {this.state.userInfo[0]?.name}</h2>
        <h3>Location : {this.state.userInfo[0]?.email}</h3>
      </div>
    );
  }
}

export default UserClass;
