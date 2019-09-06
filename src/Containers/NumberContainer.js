import { connect } from 'react-redux';
import Number from '../Components/Number';
import { updatePosition } from '../Redux/actions/numberActions';

const mapStateToProps = (state) => ({ numbers: state.numbers });
const mapDispatchToProps = dispatch => ({
  updatePosition: (xPos, yPos) => dispatch()
});

export default connect(mapStateToProps)(Number);
