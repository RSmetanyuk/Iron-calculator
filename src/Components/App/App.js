import React, { Component } from 'react';
import TargetSection from '../TargetSection/TargetSection';
import SourceSection from '../SourceSection/SourceSection';


const AppHeader = () => {
  return <h1>Iron ball calc</h1>;
}

class App extends Component {
  state = {
    targetItems: [
      {
        image: 'ball.png',
        selected: true,
        volume(diametr) { return 4 / 3 * Math.PI * Math.pow(diametr / 2, 3) }
      },
      {
        image: 'halfBall.png',
        selected: false,
        volume(diametr) { return 2 / 3 * Math.PI * Math.pow(diametr / 2, 3) },
      }
    ],
    targetElementDiametr: 0,
    sourceMaterialDiametr: 0,
    sourceMaterialLength: 55,
  }

  onSelectItem = (id) => {
    this.setState(({ targetItems }) => {
      return [...targetItems].map((item, index) => item.selected = id === index ? true : false)
    });
  }

  onChangeTargetElementDiametr = (e) => {
    this.setState({
      targetElementDiametr: e.target.value > 0 ? e.target.value : 0
    })
  }

  onChangeSourceElementDiametr = (e) => {
    this.setState({
      sourceMaterialDiametr: e.target.value > 0 ? e.target.value : 0
    })
  }

  render() {
    const { targetItems, targetElementDiametr, sourceMaterialDiametr, sourceMaterialLength } = this.state;

    return (
      <div>
        <AppHeader />
        <TargetSection
          targetItems={targetItems}
          targetElementDiametr={targetElementDiametr}
          onChangeTargetElementDiametr={this.onChangeTargetElementDiametr}
          onSelectItem={this.onSelectItem}
        />
        <SourceSection
          sourceMaterialDiametr={sourceMaterialDiametr}
          sourceMaterialLength={sourceMaterialLength}
          onChangeSourceElementDiametr={this.onChangeSourceElementDiametr} />
      </div>
    )
  }
};

export default App
