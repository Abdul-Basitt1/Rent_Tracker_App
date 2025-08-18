import { Dimensions } from "react-native";

const wp = (widthPercent: number): number => {
    const screenWidth = Dimensions.get("window").width
    return (widthPercent * screenWidth) / 100
}

const hp = (heightPercent: number): number => {
    const screenHeight = Dimensions.get("window").height
    return (heightPercent * screenHeight) / 100
}

export { wp, hp }