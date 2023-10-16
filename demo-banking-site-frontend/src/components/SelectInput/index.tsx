import {FormControl, InputLabel, Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {useState} from "react";

interface SelectInputProps {
    labelName: string,
    optionsList: Array<any>,
    onOptionSelect: Function
}

const SelectInput = ({labelName, optionsList, onOptionSelect}: SelectInputProps) => {
    const [selectedInput, setSelectedInput] = useState(optionsList[0].id);

    const onSelect = (selectedId: any) => {
        setSelectedInput(selectedId.value);
        onOptionSelect(selectedId.value);
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">{labelName}</InputLabel>
            <Select
                value={selectedInput}
                label={labelName}
                onChange={(e) => onSelect(e.target)}
            >
                {optionsList.map((option) => (<MenuItem key={option.id} value={option.id}>{option.value}</MenuItem>))}
            </Select>
        </FormControl>
    )
}

export default SelectInput;