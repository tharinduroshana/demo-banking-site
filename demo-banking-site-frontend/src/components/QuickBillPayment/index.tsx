import {Box, SelectChangeEvent, Typography} from "@mui/material";
import SelectInput from "../SelectInput";
import TextInput from "../TextInput";
import InputButton from "../InputButton";

interface QuickBillPaymentProps {
    viewType: string
}

const QuickBillPayment = ({ viewType }: QuickBillPaymentProps) => {
    const dummyList = [{id: "first", value: "FirstBill"}, {id: "second", value: "SecondBill"},
        {id: "third", value: "ThirdBill"}];

    const onPayerSelect = (event: SelectChangeEvent) => {
        console.log(event);
    }

    const onAmountInput = (value: string) => {
        console.log(value);
    }

    const onPayClicked = () => {
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
                  Bill Payment
              </Typography>
              <SelectInput labelName="Bill Payer" optionsList={dummyList} onOptionSelect={onPayerSelect}/>
              <TextInput label="Amount" onTextInput={onAmountInput}/>
              <InputButton label="Pay" onButtonClick={onPayClicked}/>
          </Box>
      </div>
  )
}

export default QuickBillPayment;