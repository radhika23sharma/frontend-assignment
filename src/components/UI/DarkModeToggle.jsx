import { useColorMode, Switch } from '@chakra-ui/react';
import React, { useEffect } from 'react';

const DarkModeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    useEffect(() => {
        const savedMode = localStorage.getItem('chakra-ui-color-mode');
        if (savedMode) {
            savedMode === 'dark' ? toggleColorMode() : null;
        }
    }, [toggleColorMode]);

    useEffect(() => {
        localStorage.setItem('chakra-ui-color-mode', colorMode);
    }, [colorMode]);

    return (
        <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}>
            Dark Mode
        </Switch>
    );
};

export default DarkModeToggle;
