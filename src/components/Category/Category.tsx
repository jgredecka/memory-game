import {CategoryImage, Title, StyledCategory} from './styled';

interface CategoryProps {
    title: string;
    src: string;
    alt: string;
    onClick: () => void;
}

export default function Category(props: CategoryProps) {
    const {title, src, alt, onClick} = props;

    return (
        <StyledCategory onClick={onClick}>
            <Title>{title}</Title>
            <CategoryImage src={src} alt={alt} width='70px' height='70px' />
        </StyledCategory>
    );
}
