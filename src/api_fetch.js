import React from 'react'

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      moves:"",
      height:0
    };
  }
  componentDidMount() {
    fetch('http://pokeapi.salestock.net/api/v2/pokemon/1').then((response) => response.json())
      .then((responseJson) => {
        this.state.height= responseJson.height;
        console.log(this.state.height);
      })
  }

  render () {
    return(
      <p>height : {this.state.height} </p>
    );
  }
}

export {Pokemon};
