import {TouchableOpacityProps} from "react-native";
import {IContact} from "../../Interfaces/reduxInterfaces";


export interface SelectedContactsProps {
    onDeletePress?: (value: IContact) => void;
    contacts?: Array<IContact>
}
