import {Container, ThumbsUpImage, Header, Button} from './styled';

interface GameFinishedViewProps {
    onClick: () => void;
}

function GameFinishedView(props: GameFinishedViewProps) {
    return (
        <Container>
            <ThumbsUpImage src='/assets/good-job.svg' alt='good job' width='500px' height='300px' />
            <Button onClick={props.onClick}>
                <Header>Try another category</Header>
            </Button>
        </Container>
    );
}

export {GameFinishedView};
