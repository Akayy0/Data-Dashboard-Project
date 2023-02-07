import { CardMedia, Card, CardActionArea, CardContent } from "@mui/material";
import { CardTitle } from "./Cards.style";

interface ICard{
    title: string;
    image: string;
}

function Cards({title, image}:ICard) {
    return (
        <Card sx={{ maxWidth: 345 }}>
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
        </Card>
    );
}

export default Cards;