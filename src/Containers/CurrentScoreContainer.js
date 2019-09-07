// redux
import { connect } from 'react-redux';
import CurrentScore from '../Components/CurrentScore';

const mapStateToProps = (state) => ({ score: state.score });

export default connect(mapStateToProps)(CurrentScore);
