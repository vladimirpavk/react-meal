import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { HeaderButton } from 'react-navigation-header-buttons';

export const MaterialIconHeaderButton = (props)=>{
    return(
        <HeaderButton
            {...props}
            IconComponent={MaterialIcons}
            iconSize={23}
            color="white"/>
    )
}