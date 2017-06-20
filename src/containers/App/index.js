import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';
import Counter from '../../components/Counter';

const mapStateToProps = state => ({ count: state });
const mapDispatchToProps = dispatch => ({ ...bindActionCreators(actions, dispatch) });

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
