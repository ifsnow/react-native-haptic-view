// @flow
import React, { PureComponent } from 'react'
import ReactNative from 'react-native'

const NativeHapticView = ReactNative.requireNativeComponent('HapticView');

class HapticView extends PureComponent<{}> {
  _handle;

  _command;

  componentWillUnmount() {
    this._handle = null;
  }

  render() {
    return <NativeHapticView />;
  }

  performHaptic(params: any) {
    const { UIManager } = ReactNative;

    if (!this._handle) {
      this._handle = ReactNative.findNodeHandle(this);
      this._command = UIManager.getViewManagerConfig('HapticView').Commands.performHaptic;
    }

    if (!this._handle || !this._command) {
      return;
    }

    UIManager.dispatchViewManagerCommand(
      this._handle,
      this._command,
      [params.android, params.flag]
    );
  }
}

export default HapticView