import {Box, Center, FlatList, Flex, Image, Pressable, Text} from "native-base";
import React, {memo, FC} from "react";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {SelectedContactItemProps} from "./constants";

const SelectedContactItem: FC<SelectedContactItemProps> = (props) => {
    const {
        contact,
        onDeletePress
    } = props

    // @ts-ignore
    return (
        <Box
            // bg={'red.400'}
            alignSelf={'center'}
            alignItems={'center'}
            justifyContent={'center'}
            rounded={'md'} w={'100px'} h={'100px'}>
            <Image
                alt={'Contact icon'}
                rounded={'full'}
                h={'75%'}
                w={'75%'}
                source={require('../../Assets/images/placeholder.png')} />
            <Box alignItems={'center'}
                 justifyContent={'center'} px={'2px'} mt={'5px'} h={'20%'} w={'80%'}>
                <Text isTruncated>
                    {contact.name}
                </Text>
            </Box>
            <Pressable top={'-5px'}
                       right={'11px'}
                       position={'absolute'} onPress={onDeletePress}>
                <Center
                    w={'27px'}
                    h={'27px'}
                    rounded={'full'}>
                    <Image
                        alt={'Contact icon'}
                        rounded={'full'}
                        h={'100%'}
                        w={'100%'}
                        source={require('../../Assets/images/delete_icon.png')} />
                </Center>
            </Pressable>
        </Box>
    )
}

SelectedContactItem.defaultProps = {

};
export default memo(SelectedContactItem);
