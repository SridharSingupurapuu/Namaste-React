// import User from "./User";
import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("Parent constructor called");
  }

  componentDidMount() {
    //console.log("Parent componentDidMount called");
  }

  render() {
    //console.log("Parent render called");
    return (
      <div>
        <h1>About Us</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h3 className="font-bold text-lg">{loggedInUser}</h3>
            )}
          </UserContext.Consumer>
        </div>
        <p>Food delivery app</p>
        <UserClass name={"Mamitha"} location={"Kerala"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
// <div>
//   <h1>About Us</h1>
//   <p>Food delivery app</p>
//   <User name={"Sridhar"} location={"Kerala"} />
//   <UserClass name={"Mamitha"} location={"Kerala"} />
// </div>
//   );
// };

export default About;
