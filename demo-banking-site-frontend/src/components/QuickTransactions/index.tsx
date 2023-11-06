import {Box} from "@mui/material";
import QuickMoneyTransfer from "../QuickMoneyTransfer";
import {useState, useLayoutEffect} from "react";
import QuickBillPayment from "../QuickBillPayment";

const QuickTransactions = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    });

    return (
        <>
            <Box
                sx={{
                    marginTop: 1,
                    py: 1,
                    display: "flex",
                    gap: 2,
                    flexDirection: width > 768 ? "row" : "column",
                }}
            >
                <QuickMoneyTransfer viewType={width > 768 ? "pc" : "mobile"} />
                <QuickBillPayment viewType={width > 768 ? "pc" : "mobile"} />
            </Box>
        </>
    )
}

export default QuickTransactions;