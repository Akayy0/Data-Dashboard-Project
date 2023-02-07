import { Box as BoxsMUI, styled } from "@mui/material";

export const Box = styled(BoxsMUI)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100vh',
    width: '100%'
}));