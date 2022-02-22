import {Box, Center, FlatList, Flex, Image, Pressable, Text, useColorMode} from "native-base";
import React, {memo, FC, useEffect, useState} from "react";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {ContactItemProps} from "./constants";
import _ from "lodash";

const ContactItem: FC<ContactItemProps> = (props) => {
    const {
        image,
        name,
        status,
        selected,
        onPress
    } = props

    const { colorMode } = useColorMode();

    const _renderCheckIcon = () => {
        if (selected) {
            return (
                <Image
                    key={'1'}
                    alt={'Checked Circle'}
                    rounded={'full'}
                    h={'25px'}
                    w={'25px'}
                    source={require('../../Assets/images/checked.png')}/>
            )
        } else {
            return (
                <Image
                    _dark={{
                        tintColor: '#afafaf'
                    }}
                    key={'2'}
                    alt={'Empty Circle'}
                    rounded={'full'}
                    h={'25px'}
                    w={'25px'}
                    source={require('../../Assets/images/empty_circle.png') }/>
            )
        }
    }
    return (
        <Pressable onPress={onPress}>
            <Box px={'15px'} flexDirection={'row'} w={'100%'} h={'60px'} alignItems={'center'}>
                {image ? <Image
                    key={'3'}
                    alt={'Contact icon'}
                    rounded={'full'}
                    h={'45px'}
                    w={'45px'}
                    source={{
                        uri: image
                    }}/> : <Image
                    key={'4'}
                    alt={'Contact icon'}
                    rounded={'full'}
                    h={'45px'}
                    w={'45px'}
                    source={require ('../../Assets/images/placeholder.png')}/>}
                <Box mx={'10px'}>
                    <Text fontSize={17} fontWeight={600}>
                        {name}
                    </Text>
                    {status ? <Text fontSize={14} color={'muted.400'}>
                        {status}
                    </Text> : null}
                </Box>
                <Box px={'5px'} flex={1} alignItems={'flex-end'} justifyContent={'center'}>
                    {_renderCheckIcon()}
                </Box>
            </Box>
        </Pressable>
    )
}

ContactItem.defaultProps = {

};
export default memo(ContactItem);
