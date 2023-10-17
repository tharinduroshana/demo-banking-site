import TextField from "@mui/material/TextField";

interface TextInputProps {
    label: string,
    onTextInput: any
}
const TextInput = ({ label, onTextInput }: TextInputProps) => {
  return (
      <TextField type="number" onChange={event => onTextInput(event.target.value)} label={label} variant="outlined" />
  )
}

export default TextInput;