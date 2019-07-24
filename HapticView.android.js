// @flow
import React, { PureComponent } from 'react'
import ReactNative from 'react-native'

class HapticView extends PureComponent<{}> {
  _NativeHapticView;

  _handle;

  _command;

  render() {
    if (!this._NativeHapticView) {
      this._NativeHapticView = ReactNative.requireNativeComponent('HapticView');
    }

    return <this._NativeHapticView />;
  }

  performHaptic(params: any) {
    const { UIManager } = ReactNative;

    if (!this._handle) {
      this._handle = ReactNative.findNodeHandle(this);
      this._command = UIManager.getViewManagerConfig('HapticView').Commands.performHaptic;
    }

    UIManager.dispatchViewManagerCommand(
      this._handle,
      this._command,
      [params.android, params.flag]
    );
  }
}

export default HapticView