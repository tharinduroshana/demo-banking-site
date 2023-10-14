import Container from "@mui/material/Container";
import {Box} from "@mui/material";
import KeyValueLabel from "../../components/KeyValueLabel";

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
                <Box
                    sx={{
                        boxShadow: 3,
                        borderRadius: 2,
                        px: 4,
                        py: 4,
                        display: "flex",
                        gap: 1,
                        flexDirection: "column",
                    }}
                >
                    <KeyValueLabel keyText="Account type" valueText="Savings account" keyFontSize={9}
                                   valueFontSize={18}/>
                    <KeyValueLabel keyText="Account number" valueText="1010 5721 0597" keyFontSize={9}
                                   valueFontSize={18}/>
                    <KeyValueLabel keyText="Balance" valueText="$45,678.89" keyFontSize={12}
                                   valueFontSize={28}/>
                </Box>
            </Container>
        </>
    )
}

export default DashBoardScreen;