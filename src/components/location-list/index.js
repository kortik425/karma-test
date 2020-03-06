import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LocationList from './location-list';
import { updateFollowedLocation } from '../../redux/modules/locations';

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    updateFollowedLocation,
  }, dispatch);

export default LocationListComponent = connect(null, mapDispatchToProps)(LocationList);