import "./KeyValueLabel.css";

interface KeyValueLabelProps {
    keyText: string,
    valueText: string,
    keyFontSize?: number,
    valueFontSize?: number
}

const KeyValueLabel = ({ keyText, valueText, keyFontSize, valueFontSize }: KeyValueLabelProps) => {
  return (
      <>
        <div className="key-value-label">
            <div style={{fontSize: keyFontSize || '12px'}} className="key">{keyText}</div>
            <div style={{fontSize: valueFontSize || '24px'}} className="value">{valueText}</div>
        </div>
      </>
  )
}

export default KeyValueLabel;