import React from "react";


const checkLoaded = componentA => ({ life }) => {
  console.log("life ", life);
  console.log("componentA ", componentA);
  if (life === "") {
    return <div>Loading ...</div>;
  }
  return <Header life={life} />;
};

const Header = props => {
  return <div>The meaning of life is {props.life}</div>;
};

const WrappedHeader = checkLoaded(Header);

class ApplicationT extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
  }
  render() {
    setTimeout(() => this.setState({ searchTerm: "Anwar HOC Test" }), 3000);
    console.log("searchTerm ", this.state.searchTerm);
    return (
      <div className="App">
        <h1>I am showing the header component below 3000ms</h1>
        <WrappedHeader life={this.state.searchTerm} />
      </div>
    );
  }
}

export default ApplicationT
