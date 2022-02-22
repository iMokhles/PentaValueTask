import {TouchableOpacityProps} from "react-native";


export interface ContactItemProps {
    onPress?: TouchableOpacityProps['onPress'];
    image: string;
    name: string;
    status: string;
    selected?: boolean;
}
