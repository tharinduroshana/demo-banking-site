import Container from "@mui/material/Container";
import {Box} from "@mui/material";
import KeyValueLabel from "../../components/KeyValueLabel";
import AccountSummaryCard from "../../components/AccountSummaryCard";
import QuickTransactions from "../../components/QuickTransactions";

const DashBoardScreen = () => {
    return (
        <>
            <Container component="main" maxWidth="xl">
                <Box
                    sx={{
                        px: 4,
                        py: 2,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <KeyValueLabel keyText="Name" valueText="Randy Keith Orton"/>
                </Box>
                <AccountSummaryCard />
                <QuickTransactions />
            </Container>
        </>
    )
}

export default DashBoardScreen;