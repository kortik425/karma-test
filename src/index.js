import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Root from './root';
import { fetchLocations, getLocations, getActionState, getError } from './redux/modules/locations';

const mapStateToProps = state => ({
  locations: getLocations(state),
  actionState: getActionState(state),
  error: getError(state)
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchLocations,
  }, dispatch);

export default RootScreen = connect(mapStateToProps, mapDispatchToProps)(Root);