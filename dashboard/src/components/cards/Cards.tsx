import { CardMedia, CardActionArea, CardContent } from "@mui/material";
import { CardStyled, CardTitle } from "./Cards.style";

interface ICard{
    title: string;
    image: string;
}

function Cards({title, image}:ICard) {
    return (
        <CardStyled>
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