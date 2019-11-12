import React, {Component} from 'react';
import {Counter} from '../../common/counter';

export default class CounterView extends Component {

  renderCounterList = (collection) => 
    collection.map((counter) => 
      <Counter
          counter={counter}
          key={counter.id}
          increment={this.props.incrementCounter}
          decrement={this.props.decrementCounter} />
      );

  render() {
      console.log(this.props);
    return (
      <div>{this.renderCounterList(this.props.counter.collection)}</div>
    );
  }
}
