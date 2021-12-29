
import React from 'react'
import { useGlobalState } from '../../hooks/useGlobalState'
import CreateAccount from '../CreateAccount/CreateAccount';
import { BaseDropDown } from '../Styled_components/DropDown'


export default function SaveScoreModal() {

    const { state, dispatch } = useGlobalState();
    const { menu } = state;

    return (
        <BaseDropDown isOpen={ menu?.MENNU_SAVE_SCORE } >
            <CreateAccount/>
        </BaseDropDown>
    )
}
