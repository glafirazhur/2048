import { connect } from 'react-redux';
import { updateScoreAction } from '../Redux/actions/scoreActions';

import App from '../Components/App';

const mapStateToProps = (state) => ({ score: state.store });

const mapDispatchToProps = (dispatch) => ({
  updateScore:
    (currentScore) => dispatch(updateScoreAction(currentScore)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
