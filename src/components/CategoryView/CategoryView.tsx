import {CardsImage, Container, Header, CategoriesContainer} from './styled';
import Category from '../Category/Category';

interface CategoryViewProps {
    onClick: (category: string) => void;
}

export default function CategoryView({onClick}: CategoryViewProps) {
    return (
        <Container>
            <CardsImage src='/assets/cards.svg' alt='Cards image' width='600px' height='400px' />
            <Header>Pick a category</Header>
            <CategoriesContainer>
                <Category
                    title='Animals'
                    src='/assets/parrot.svg'
                    alt='parrot'
                    onClick={() => onClick('animals')}
                />
                <Category
                    title='Characters'
                    src='/assets/peter-pan.svg'
                    alt='peter pan'
                    onClick={() => onClick('characters')}
                />
                <Category
                    title='Food'
                    src='/assets/hamburger.svg'
                    alt='hamburger'
                    onClick={() => onClick('food')}
                />
            </CategoriesContainer>
        </Container>
    );
}
