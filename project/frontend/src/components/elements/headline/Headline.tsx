import React, { ReactNode } from 'react';
import ColoredDot from '../coloredDot/ColoredDot';
import './Headline.css'

interface HeadlineProps {
    size: number,
    children: ReactNode,
    character: string,
}

const Headline: React.FC<HeadlineProps> = ({ size, children, character = '-', ...options }) =>
    React.createElement('h' + size, options, size === 1 || size === 2 ?
        <ColoredDot character={character}>{children}</ColoredDot> : children)


export default Headline