import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Icon = ({ name }) => (
  <Ionicons style={{ paddingHorizontal: 165 }} name={name} size={60} color="black" />
);

export default class Footer extends React.Component {
  onPress = () => {
    this.props.onPress && this.props.onPress();
  };
  render() {
    const { onPress, style, ...props } = this.props;
    return (
      <TouchableHighlight
        underlayColor={'#eeeeee'}
        {...props}
        onPress={this.onPress}
        style={[styles.touchable, style]}
      >
       <Icon name="ios-arrow-dropdown-circle" />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchable: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0,0,0,0.3)',
  },
  text: { fontWeight: 'bold', fontSize: 16 },
});
