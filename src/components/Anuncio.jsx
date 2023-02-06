import { Card, CardContent, CardMedia, Chip, Stack, Typography, useTheme } from "@mui/material";

export const Anuncio = ({ image, title, id, created, type }) => {
    const theme = useTheme();
    return (
        <Card
            variant="outlined"
            elevation={ 2 }
            sx={ {
                display: "flex",
                margin: theme.spacing(1),
                height: type === "card" ? theme.spacing(9) : theme.spacing(6.75),
                width: type === "card" ? theme.spacing(16) : "100%"
            } }>
            <CardMedia
                component="img"
                image={ image }
                sx={ {
                    height: type === "card" ? theme.spacing(9) : theme.spacing(6.75),
                    width: type === "card" ? theme.spacing(16) : theme.spacing(12)
                } } />
            { title &&
                <CardContent
                    sx={ {
                        "&:last-child": { paddingBottom: 0 },
                        alignItems: "center",
                        display: "flex",
                        padding: 0
                    } }>
                    <Chip
                        color="primary"
                        sx={ { marginX: theme.spacing(1) } }
                        label={ id } />
                    <Stack
                        spacing={ 0 }>
                        <Typography
                            fontWeight="bold"
                            variant="body2">
                            Título: { title }
                        </Typography>
                        <Typography
                            variant="caption">
                            Data Criação: { created }
                        </Typography>
                    </Stack>
                </CardContent>
            }
        </Card>
    );
};