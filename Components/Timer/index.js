import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators as honuActions } from '../../reducer'
import Timer from "./presenter";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timeDuration} = state;

  return {
    isPlaying,
    elapsedTime,
    timeDuration
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // key name can change freely
    startTimer: bindActionCreators(honuActions.startTimer, dispatch),
    restartTimer: bindActionCreators(honuActions.restartTimer, dispatch),
    addSecond: bindActionCreators(honuActions.addSecond, dispatch)    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)