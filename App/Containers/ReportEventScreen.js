
import React from 'react';
import { connect } from 'react-redux';
import { Container, Text, Content, InputGroup, Button, Input } from 'native-base';
// import Styles from './Styles/ReportEventFormsStyle';
import ReportEventForms from '../Components/ReportEventForms';
import { reportEvent } from '../Actions'
import { Actions as NavigationActions } from 'react-native-router-flux'

const mapStateToProps = (state) => {
  return {
    newEvent: state.newNotification,
    eventLocation: state.region,
  };
};


const mapDispatchToProps = dispatch => ({
  handleSubmit: (newEvent, description, location) => {
    const updatedEvent = { ...newEvent, description, location };
    dispatch(reportEvent(updatedEvent));
    NavigationActions.mapScreen();
  },
  redirectToMapview: () => {
    NavigationActions.mapScreen();
  },
});


const ReportEventScreen = connect(mapStateToProps, mapDispatchToProps)(ReportEventForms);
export default ReportEventScreen;

// export default connect(mapStateToProps, null)(ReportEventForms);
