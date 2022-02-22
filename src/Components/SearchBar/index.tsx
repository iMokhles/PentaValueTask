import React, {FC, memo, useState} from "react";
import {SearchBarProps} from "./constants";
import {Box, Center, Input, Pressable, useColorMode} from "native-base";
import {ICON_TYPE, IMIcon} from "../IMIcon";


const SearchBar:FC<SearchBarProps> = (props) => {
    const {
        placeholder,
        onChangeText
    } = props

    const [queryText, setQueryText] = useState<string>("")
    const { colorMode } = useColorMode();

    return (
        <Center h={'64px'} w={'100%'}>
            <Box flexDirection="row"
                 px={'15px'} bg={(colorMode === 'light') ? '#eeeff0' : '#4f4a50'}
                 h={'40px'} w={'90%'}
                 rounded={'xl'} alignItems="center"
                 justifyContent="flex-start">
                <Pressable onPress={() => {
                    if (queryText?.length > 0) {
                        setQueryText("")
                        onChangeText("")
                    }
                }}>
                    <IMIcon
                        origin={ICON_TYPE.EVIL_ICONS}
                        name={queryText?.length > 0 ? "close":"search"}
                        size={queryText?.length > 0 ? 20 : 30}
                        color={'#a8a29e'}
                    />
                </Pressable>
                <Input
                    autoCapitalize={'none'}
                    variant={'unstyled'}
                    size="lg"
                    placeholder={placeholder}
                    placeholderTextColor={(colorMode === 'light') ? 'warmGray.400' : 'warmGray.400'}
                    fontWeight={300}
                    value={queryText}
                    onChangeText={(text) => {
                        // TODO: implement ( x ) button
                        setQueryText(text)
                        onChangeText(text)
                    }}
                />
            </Box>
        </Center>
    )
}

SearchBar.defaultProps = {
    placeholder: "Search",
};
export default memo(SearchBar);
