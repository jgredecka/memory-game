import {LogoLetter, StyledCard} from './styled';

interface CardProps {
    uniqueId: string;
    svg: string;
    visible: boolean;
    onClick: (cardId: string) => void;
}

export default function Card(props: CardProps) {
    const {uniqueId, svg, visible, onClick} = props;

    return (
        <>
            {visible ? (
                <StyledCard visible={visible}>
                    <img
                        src={`data:image/svg+xml;base64,${btoa(svg)}`}
                        alt='icon'
                        width='60'
                        height='60'
                    />
                </StyledCard>
            ) : (
                <StyledCard visible={visible} onClick={() => onClick(uniqueId)}>
                    <LogoLetter>m</LogoLetter>
                </StyledCard>
            )}
        </>
    );
}
