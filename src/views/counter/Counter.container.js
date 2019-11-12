import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CounterView from './Counter.view';

import * as actions from "../../store/counter"
import * as navigation from "../../store/navigation";

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
      incrementCounter: (counter) => actions.incrementAsync(counter),
      decrementCounter: (counter) => actions.decrementAsync(counter),
      toSignup: () => navigation.toSignup(),
      toLogin: () => navigation.toLogin(),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)