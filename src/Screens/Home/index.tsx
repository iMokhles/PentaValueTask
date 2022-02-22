import React, {memo, useEffect, useState} from "react";
import {Box, Image, Text, Pressable, Center} from "native-base";
import Header from "../../Components/Header";
import SearchBar from "../../Components/SearchBar";
import SelectedContacts from "../../Components/SelectedContacts";
import { AlphabetList } from "react-native-section-alphabet-list";
import {IContact, State} from "../../Interfaces/reduxInterfaces";
import {Contact} from "react-native-contacts";
import {PermissionsAndroid, Platform} from "react-native";
import Contacts from 'react-native-contacts';
import _ from "lodash";
import {ICON_TYPE, IMIcon} from "../../Components/IMIcon";
import ContactItem from "../../Components/ContactItem";
import SectionHeader from "../../Components/SectionHeader";
import {useDispatch, useSelector} from "react-redux";
import {contactsActionCreators} from "../../Redux/Reducers/contacts/actions";

export const Home = () => {

    const dispatch = useDispatch();

    // @ts-ignore
    const selectedContacts = useSelector<State, IContact[]>(state => state.contacts.contacts) || null;

    const [contacts, setContacts] = useState(null);

    const getContacts = () => {
        if (Platform.OS == 'ios') {
            Contacts.getAll().then(contacts => {
                // contacts returned
                console.tron.log(contacts);
                let newContacts = _.map(contacts, (contact) => {
                    return {
                        value: contact.givenName,
                        key: contact.recordID,
                        object: contact,
                        contact: {
                            id: contact.recordID,
                            name: contact.givenName,
                            email: (contact.emailAddresses.length > 0) ? contact.emailAddresses[0].email : "",
                            company: contact.company,
                            phoneNumber: (contact.phoneNumbers.length > 0) ? contact.phoneNumbers[0].number : "",
                            picture: contact.thumbnailPath
                        }
                    }
                })
                // @ts-ignore
                setContacts(newContacts);
            });
        } else {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
                title: 'Contacts',
                message: 'This app would like to view your contacts.',
                buttonPositive: 'Please accept',
            })
                .then(Contacts.getAll)
                .then(contacts => {
                    // @ts-ignore
                    return setContacts (contacts);
                });
        }
    }

    useEffect(() => {
        getContacts()
    }, [])

    // @ts-ignore
    return (
        <Box _dark={{
            bg: "warmGray.800"
        }} _light={{
            bg: "white"
        }} bg={"white"} flex={1}>
            <Box _dark={{
                bg: "#3c373d"
            }} _light={{
                bg: "white"
            }}>
                <Box safeAreaTop>
                    <Header limit={256} selectedCount={selectedContacts?.length} />
                    <SearchBar onChangeText={() => {

                    }} />
                </Box>
            </Box>
            {selectedContacts ? <SelectedContacts
                contacts={selectedContacts}
                onDeletePress={(value: IContact) => {
                    dispatch(contactsActionCreators.removeContact(value));
            }}/> : null}
            <AlphabetList
                style={{
                    flex: 1
                }}
                data={contacts ? contacts : []}
                extraData={contacts ? contacts : []}
                renderCustomItem={(item) => {
                    // @ts-ignore
                    return (
                        <ContactItem
                            selected={_.includes(selectedContacts, (item as any).contact)}
                            image={(item as any).contact.picture}
                            name={item.value}
                            status={((item as any).contact.email) ? (item as any).contact.email : (item as any).contact.company}
                            onPress={() => {
                                dispatch(contactsActionCreators.addContact((item as any).contact));
                            }}
                        />
                    )
                }}
                renderCustomSectionHeader={(section) => {
                    return (
                        <SectionHeader title={section.title} />
                    )
                }}
                indexContainerStyle={{
                    width: 20,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                renderCustomIndexLetter={(index) => {
                    return (
                        <Pressable onPress={index.onPress}>
                            <Text textAlign={'center'} alignSelf={'center'} w={'15px'} fontSize={14} fontWeight={600} color={'darkBlue.500'}>
                                {index.item.title}
                            </Text>
                        </Pressable>
                    )
                }}
            />
        </Box>
    )
}

export default memo(Home);
