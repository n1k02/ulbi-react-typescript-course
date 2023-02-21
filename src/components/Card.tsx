import React, {ReactNode} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children?: ReactNode;
    onClick?: () => void;
}

const Card: React.FC<CardProps> = (props, context) => {
    return (
        <div style={{
            width: props.width,
            height: props.height,
            border: props.variant === CardVariant.outlined ? '1px solid black' : 'none',
            background: props.variant === CardVariant.primary ? 'lightgray' : ''
        }}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    );
};

export default Card;