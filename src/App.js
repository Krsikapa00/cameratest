import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';

import Camera from 'react-native-camera';

class BarcodeScan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            qrcode: ''
        }
    }

    onBarCodeRead = (e) => this.setState({qrcode: e.data});

    render () {
        return (
            <View >
                <Camera
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    aspect={Camera.constants.Aspect.fill}
                    >
                        <Text style={{
                            backgroundColor: 'white'
                        }}>{this.state.qrcode}</Text>
                    </Camera>
            </View>
        )
    }

}

export default BarcodeScan

