import {TouchableOpacityProps} from "react-native";
import {IContact} from "../../Interfaces/reduxInterfaces";


export interface SelectedContactItemProps {
    onDeletePress?: TouchableOpacityProps['onPress'];
    contact: IContact
}
