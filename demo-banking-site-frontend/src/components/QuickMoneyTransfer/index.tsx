import {Box, SelectChangeEvent, Typography} from "@mui/material";
import "./QuickMoenyTransfer.css";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import InputButton from "../InputButton";

interface QuickMoneyTransferProps {
    viewType: string
}

const QuickMoneyTransfer = ({viewType}: QuickMoneyTransferProps) => {
    const dummyList = [{id: "first", value: "First"}, {id: "second", value: "Second"}, {id: "third", value: "Third"}];

    const onRecipientSelect = (event: SelectChangeEvent) => {
        console.log(event);
    }

    const onAmountInput = (value: string) => {
        console.log(value);
    }

    const onTransferClicked = () => {
        console.log("Clicked");
    }

    return (
        <div className={viewType === "pc" ? "quick-money-transfer" : "quick-money-transfer-mobile"}>
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
                <Typography variant="subtitle1">
                    Transfer
                </Typography>
                <SelectInput labelName="Recipient" optionsList={dummyList} onOptionSelect={onRecipientSelect}/>
                <TextInput label="Amount" onTextInput={onAmountInput}/>
                <InputButton label="Transfer" onButtonClick={onTransferClicked}/>
            </Box>
        </div>
    )
}

export default QuickMoneyTransfer;