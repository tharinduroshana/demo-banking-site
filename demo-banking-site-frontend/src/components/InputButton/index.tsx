import Button from "@mui/material/Button";

interface InputButtonProps {
    label: string,
    onButtonClick: any
}

const InputButton = ({ label, onButtonClick }: InputButtonProps) => {
  return <Button onClick={onButtonClick} variant="contained">{label}</Button>;
}

export default InputButton;