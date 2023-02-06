import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import { Footer } from "../../components";
import { Box } from "./MainLayout.style";

export default function MainLayout() {
    return (
        <Box>
            <div>
                <Header />

                <main>
                    <Outlet />
                </main>
            </div>

            
            <Footer />
            
        </Box>
    )
}