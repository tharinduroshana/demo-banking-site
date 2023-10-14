import KeyValueLabel from "../KeyValueLabel";
import {Box} from "@mui/material";

const AccountSummaryCard = () => {
  return (
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
  )
}

export default AccountSummaryCard;