import { connect } from 'react-redux';
import { clearScoreAction } from '../Redux/actions/scoreActions';

import StartButton from '../Components/StartButton';

const mapStateToProps = (state) => ({ score: state.score });
const mapDispatchToProps = (dispatch) => ({
  clearScore: () => dispatch(clearScoreAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
