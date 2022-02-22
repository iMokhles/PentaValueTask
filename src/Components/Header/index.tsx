import {Box, Center, Flex, Pressable, Text, useColorMode} from "native-base";
import React, {memo, FC} from "react";
import {ICON_TYPE, IMIcon} from "../IMIcon";
import {HeaderProps} from "./constants";

const Header: FC<HeaderProps> = (props) => {
    const {
        showBackButton,
        showNextButton,
        backOnPress,
        nextOnPress,
        limit,
        selectedCount
    } = props

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Flex flexDirection="row" h={'44px'}>
            <Center
                px={'20px'}
                height={'100%'}
                width={"33%"}
                alignItems="flex-start"
                justifyContent="center"
            >
                {showBackButton ? <Pressable onPress={backOnPress}>
                    <Text fontWeight={500} color={'darkBlue.400'} fontSize={18}>
                        {"Cancel"}
                    </Text>
                </Pressable> : null}
            </Center>
            <Center
                height={'100%'}
                width={"33%"}
                alignItems="center"
                justifyContent="center"
            >
                <Text fontSize={17} textAlign={'center'} fontWeight={500} w={'100%'}>
                    {"Add Participants"}
                </Text>
                <Text textAlign={'center'} w={'100%'}>
                    {selectedCount+"/"+limit}
                </Text>
            </Center>
            <Center
                flexDirection={'row'}
                px={'20px'}
                height={'100%'}
                width={"33%"}
                alignItems="center"
                justifyContent="space-between"
            >
                <Pressable onPress={toggleColorMode}>
                    <IMIcon
                        origin={ICON_TYPE.IONICONS}
                        name={(colorMode === 'light') ? "moon" : "sunny"}
                        size={25}
                        color={(colorMode === 'light') ? '#323841' : '#FFFFFF'}
                    />
                </Pressable>
                {showNextButton ? <Pressable onPress={nextOnPress}>
                    <Text fontWeight={500} color={'darkBlue.400'} fontSize={18}>
                        {"Next"}
                    </Text>
                </Pressable> : null}
            </Center>
        </Flex>
    )
}

Header.defaultProps = {
    showBackButton: true,
    showNextButton: true,
    backOnPress: undefined,
    nextOnPress: undefined,
    limit: 256,
    selectedCount: 0
};
export default memo(Header);
