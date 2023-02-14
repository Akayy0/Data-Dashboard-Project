import { CardContent, CardHeader, Typography } from "@mui/material";

import { ICard } from "./InfoCard.interface";

import { CardStyled } from "./InfoCard.style";

function InfoCard({cardTitle, cardText}: ICard) {
    return (
        <CardStyled>
            <CardHeader title={cardTitle} />
            <CardContent>
                <Typography>{cardText}</Typography>
            </CardContent>
        </CardStyled>
    )
}

export default InfoCard;