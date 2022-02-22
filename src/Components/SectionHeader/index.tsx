import {Box, Center, FlatList, Flex, Image, Pressable, Text} from "native-base";
import React, {memo, FC} from "react";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {SectionHeaderProps} from "./constants";

const SectionHeader: FC<SectionHeaderProps> = (props) => {
    const {
        title
    } = props

    return (
        <Box px={'15px'} w={'100%'} h={'30px'} _dark={{
            bg: "#3f3a40"
        }} _light={{
            bg: "gray.300"
        }} justifyContent={'center'}>
            <Text fontSize={17} fontWeight={600} _dark={{
                color: "white"
            }} _light={{
                color: "black"
            }}>
                {title}
            </Text>
        </Box>
    )
}

SectionHeader.defaultProps = {

};
export default memo(SectionHeader);
