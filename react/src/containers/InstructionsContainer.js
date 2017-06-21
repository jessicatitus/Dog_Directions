import React, { Component } from 'react';
import StepTile from '../components/StepTile';
import ItemTile from '../components/ItemTile';
import FetchButton from '../components/FetchButton';

class InstructionsContainer
 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        supplies: [],
        activity: '',
        directions: []
      },
      selectedStep: null
    }
    this.changeSelectedStep = this.changeSelectedStep.bind(this);
    this.fetchStuff = this.fetchStuff.bind(this);

  }

  changeSelectedStep(id) {
    this.setState({selectedStep: id})
  }
  fetchStuff() {
    fetch('/api/v1/favorite_things.json')
    .then(response => response.json())
    .then(json => this.setState({data: json}))
  }

  render(){
    console.log(this.state)
    let supplies = this.state.data.supplies
    let directions = this.state.data.directions

    let items = supplies.map(supply => {
      return(
        <ItemTile
        item={supply.item}
        key={supply.id}
        id={supply.id}
        />
      )
    })

    let steps = directions.map(direction => {
      let className;
      if (direction.id === this.state.selectedStep) {
        className = "selected";
      }

      return(
        <StepTile
          step={direction.step}
          key={direction.id}
          id={direction.id}
          setSelectedStep={this.changeSelectedStep}
          styleClass={className}
        />
      )
    })

    return(
      <div>
        <h1>How To {this.state.data.activity}</h1>
        <h3>Supplies:</h3>
        <ul>
          {items}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {steps}
        </ol>
        <FetchButton fetchStuff={this.fetchStuff}/>
      </div>
    )
  }
}

export default InstructionsContainer
;
