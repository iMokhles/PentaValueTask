import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Center, Spinner} from "native-base";
import {primaryYellow} from "../../Constants/colors";

export const Loading = () => (
    <Center flex={1} bg={'white'}>
        <Spinner size="lg" color={primaryYellow} />
    </Center>
);

const LoaderWrapper = (shouldLoad: (props: any) => boolean) => (
    WrappedComponent: React.ComponentType<any>
) => {
    return (props: any) => (shouldLoad(props) ? <Loading/> : <WrappedComponent {...props} />);
};

export default LoaderWrapper;
