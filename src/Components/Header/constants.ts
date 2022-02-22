import {TouchableOpacityProps} from "react-native";


export interface HeaderProps {
    backOnPress?: TouchableOpacityProps['onPress'];
    nextOnPress?: TouchableOpacityProps['onPress'];
    showBackButton?: boolean;
    showNextButton?: boolean;
    limit: number;
    selectedCount?: number;
}
