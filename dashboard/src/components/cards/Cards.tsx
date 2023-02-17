import { CardMedia, CardActionArea, CardContent } from "@mui/material";
import { CardStyled, CardTitle } from "./Cards.style";

interface ICard{
    title: string;
    image: string;
    onClick: () => void;
}

function Cards({title, image, onClick}:ICard) {
    return (
        <CardStyled onClick={onClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="imagem-minas"
                />
                <CardContent>
                    <CardTitle variant="h5">
                        {title}
                    </CardTitle>
                </CardContent>
            </CardActionArea>
        </CardStyled>
    );
}

export default Cards;