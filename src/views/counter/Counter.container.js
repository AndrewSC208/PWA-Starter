import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {CounterView} from './Counter.view';

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
  bindActionCreators({
      // resource
      create:  (counter) => actions.CreateCounter(counter),
      read:    (query)   => actions.ReadCounter(query),
      update:  (counter) => actions.UpdateCounter(counter),
      destroy: (id)      => actions.DestroyCounter(id),
      // global nav
      toSignup: () => navigation.toSignup(),
      toLogin:  () => navigation.toLogin(),
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)