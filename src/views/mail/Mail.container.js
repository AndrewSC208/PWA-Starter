import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {MailView} from './Mail.view';

// bind state in the store to the home view
const mapStateToProps = state => () => {};

// bind action methods to component view props
const mapDispatchToProps = dispatch =>
    bindActionCreators({
            // resource
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(MailView)