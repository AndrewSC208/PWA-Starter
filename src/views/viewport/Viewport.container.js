import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ViewportView from './Viewport.view';
import * as actions from "../../store/counter";
import * as navigation from "../../store/navigation";

// bind state in the store to the home view
const mapStateToProps = state => (router) => router;

// bind action methods to component view props
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            newCounter: (counter) => actions.CreateCounter(counter),
            // navigation
            toHome:    () => navigation.toHome(),
            toCounter: () => navigation.toCounter(),
            toMail:    () => navigation.toMail(),
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(ViewportView)