import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const Loder = ({ visible, setVisible }) => {



        const hideModal = () => setVisible(false);
        const containerStyle = { backgroundColor: 'white', padding: 20 };

        return (
                <Provider>
                        <Portal>
                                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                                        <Text>Example Modal.  Click outside this area to dismiss.</Text>
                                </Modal>
                        </Portal>

                </Provider>
        );
};

export default Loder;