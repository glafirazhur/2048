// redux
import { connect } from 'react-redux';
import BestScore from '../Components/BestScore';

const mapStateToProps = (state) => ({ score: state.score });

export default connect(mapStateToProps)(BestScore);
