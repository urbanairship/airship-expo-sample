import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import styles from '../../Styles';

function ChannelCell({ channelId }) {
  const copyToClipboard = () => {
    Clipboard.setStringAsync(channelId);
  };

  return (
    <View style={{ marginLeft: 0, marginRight: 0}}>
      <TouchableHighlight onPress={copyToClipboard} style={{ borderRadius: 8 }}>
        <View style={styles.channelCellContents}>
          <Text style={{ fontWeight: 'bold' }}>Channel ID</Text>
          <Text style={{ marginTop: 0 }}>{channelId}</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

export default ChannelCell;
