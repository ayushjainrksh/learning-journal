import * as React from "react";
import {
  Image,
  Platform,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { ScrollView } from "react-native-gesture-handler";

export default function JournalPost({ post }) {
  const date = dateFormatter(post.date);
  return (
    <View style={styles.container}>

        <View style={styles.containerOut}>
        <ImageBackground source={require("../../assets/images/bg.png")} style={styles.image}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{date}</Text>
          </View>
          <View style={styles.PostContainer}>
            <View style={styles.postMeta}>
              <Text style={styles.postContent}>{post.content}</Text>
            </View>
          </View>
          </ImageBackground>
        </View>
    </View>
  );
}

const dateFormatter = (raw_date) => {
  const mlist = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  const date = new Date(raw_date);
  return `${date.getDate()} ${mlist[date.getMonth()]}, ${date.getFullYear()}`;
    marginBottom: 24,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  containerOut: {
    backgroundColor: "#F9ECFF",

    borderRadius: 16,
  },
  dateContainer: {
    backgroundColor: "white",
    display: "flex",
    alignSelf: 'flex-start',
    paddingTop: 3.2,
    paddingBottom: 3.2,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 14,
    margin: 16
  },
  date: {
    fontSize: 18,
  },
  PostContainer: {
    backgroundColor: "rgba(127, 63, 152, 0.95)",
    padding: 16,
    borderRadius: 18,
  },
  postContent: {
    color: "white",
    fontSize: 18,
    fontWeight: "300",
  },
});
