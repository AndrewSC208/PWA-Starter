import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CounterView from './Counter.view';

import {
    increment, 
    decrement,
    incrementAsync,
    decrementAsync} from "../../store/counter"

// bind state in the store to the home view
const mapStateToProps = state => {
    const {counter} = state;

    return {
        counter
    }
};

// bind action methods to component view props
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      incrementCounter: () => increment(),
      decrementCounter: () => decrement(),
      incrementCounterAsync: () => incrementAsync(),
      decrementCounterAsync: () => decrementAsync(),
      toSignup: () => push("/signup"),
      toLogin: () => push("/login")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)