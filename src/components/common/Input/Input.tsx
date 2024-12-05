import React, { useId } from 'react';
import { StyledInput, InputLabel } from './Input.styled';

export interface InputProps extends 
        React.InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, ...rest } = props;

  const fieldId = useId();

  return (
    <div>
        { label && <InputLabel htmlFor={ rest.id || fieldId }>{label}</InputLabel> }
        <StyledInput
          id={fieldId}
          ref={ref}
          { ...rest }
        />
    </div>
  );
});

export default Input;
