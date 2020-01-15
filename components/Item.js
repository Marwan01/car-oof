import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const profileImageSize = 36;
const padding = 12;

export default class Item extends React.Component {
  state = {};

  componentDidMount() {
    if (!this.props.imageWidth) {
      Image.getSize(this.props.image, (width, height) => {
        this.setState({ width, height });
      });
    }
  }

  render() {
    const { text, name, imageWidth, imageHeight, uid, image } = this.props;

    const imgW = imageWidth || this.state.width;
    const imgH = imageHeight || this.state.height;
    const aspect = imgW / imgH || 1;

    return (
      <View>
        
        <Image
          resizeMode="contain"
          style={{
            backgroundColor: "#D8D8D8",
            width: "100%",
            aspectRatio: aspect
          }}
          source={{ uri: image }}
        />
        <Metadata name={name} description={text} />
      </View>
    );
  }
}

const Metadata = ({ name, description }) => (
  <View style={styles.padding}>
    <Text style={styles.text}>{description}</Text>
    <Text style={styles.subtitle}>{ "added from: " + name}</Text>
  </View>
);

const styles = StyleSheet.create({
  text: { fontWeight: "600" },
  subtitle: {
    opacity: 0.8
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  padding: {
    padding
  },
  avatar: {
    aspectRatio: 1,
    backgroundColor: "#D8D8D8",
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#979797",
    borderRadius: profileImageSize / 2,
    width: profileImageSize,
    height: profileImageSize,
    resizeMode: "cover",
    marginRight: padding
  }
});
