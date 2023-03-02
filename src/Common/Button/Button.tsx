import React from 'react';
import s from './Button.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useNavigate} from "react-router-dom";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";

type ButtonPropsType = {
    path?: string
    onClick?: () => void
    name: string
    icon: IconDefinition
    outlined?: boolean
}

const Button: React.FC<ButtonPropsType> = ({path, onClick, name, icon, outlined, ...restProps}) => {
    const navigate = useNavigate()

    const onClickHandler = () => {
        path && navigate(path)
        onClick && onClick()
    }
    const buttonClassName = s.btn + ' ' + (outlined
        ? s.btnSecondary
        : '')

    return (<button onClick={onClickHandler} className={buttonClassName}>
                                    <span>
                                        <FontAwesomeIcon icon={icon}/> &nbsp;
                                        {name}
                                    </span>
        </button>
    );
};
export default Button;
