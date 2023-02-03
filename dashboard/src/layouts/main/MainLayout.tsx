import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";

export default function MainLayout() {
    return (
        <Box>
            <div>
                <Header />
                <Typography variant="overline">MAIN LAYOUT</Typography>
                <main>
                    <Outlet />
                </main>
            </div>

            {/* <Footer /> */}
        </Box>
    )
}