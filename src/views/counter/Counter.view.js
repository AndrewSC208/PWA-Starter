import React, {Component} from 'react';
import {Counter} from '../../common/counter';

export default class CounterView extends Component {
  constructor(props) {
    super(props);
    // todo 1 -> find a better way to bind class methods this
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
    this.handleDecrementClick = this.handleDecrementClick.bind(this);
    this.handleDecrementClickAsync = this.handleDecrementClickAsync.bind(this);
    this.handleIncrementClickAsync = this.handleIncrementClickAsync.bind(this);
  }

  handleIncrementClick(e) {
      e.preventDefault();
      this.props.incrementCounter();
  }

  handleDecrementClick(e) {
      e.preventDefault();
      this.props.decrementCounter();
  }

  handleIncrementClickAsync(e) {
      e.preventDefault();
      this.props.incrementCounterAsync();
  }

  handleDecrementClickAsync(e) {
      e.preventDefault();
      this.props.decrementCounterAsync();
  }

  renderCounterList = (collection) => 
    collection.map((counter) => 
      <Counter counter={counter} key={counter.id} />)

  render() {
    return (
      // todo -> add a grid system blueprint does not come with one so it would be a good idea
      // to create one or import one to use
      <div>{this.renderCounterList(this.props.counter.collection)}</div>
    );
  }
}
