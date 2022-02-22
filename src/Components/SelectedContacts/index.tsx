import {Box, Center, FlatList, Flex, Image, Pressable, Text} from "native-base";
import React, {memo, FC} from "react";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {SelectedContactsProps} from "./constants";
import SelectedContactItem from "../SelectedContactItem";

const SelectedContacts: FC<SelectedContactsProps> = (props) => {
    const {
        contacts,
        onDeletePress
    } = props

    return (
        <Box h={'120px'} w={'100%'} justifyContent={'center'}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                px={'10px'}
                horizontal={true}
                flex={1}
                data={contacts}
                renderItem={({item}) =>{
                    return (
                        <SelectedContactItem contact={item} onDeletePress={() => {
                            if (onDeletePress) {
                                onDeletePress(item)
                            }
                        }} />
                    )
                }}
            />
        </Box>
    )
}

SelectedContacts.defaultProps = {

};
export default memo(SelectedContacts);
