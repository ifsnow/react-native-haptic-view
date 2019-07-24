// @flow
import { NativeModules } from 'react-native'
const { HapticViewManager } = NativeModules;

class HapticView {
  performHaptic(params: any) {
    HapticViewManager.performHaptic(params.ios);
  }
}

export default new HapticView();