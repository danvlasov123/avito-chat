import { FC, useRef } from 'react';
import { InputProps } from './types';

import cn from 'classnames';

import './Input.scss';

const Input: FC<InputProps> = (props) => {
  const { className, endAdornment, wrapperClassName, startAdornment, ...rest } =
    props;

  const inputClassName = cn('input__field', className);
  const inputWrapperClassName = cn('input', wrapperClassName);

  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleFocus = () => {
    if (wrapperRef.current) {
      wrapperRef.current.style.borderColor = 'var(--light-violet)';
    }
  };

  const handleBlur = () => {
    if (wrapperRef.current) {
      wrapperRef.current.style.borderColor = 'var(--light-grey)';
    }
  };

  return (
    <div className={inputWrapperClassName} ref={wrapperRef}>
      {startAdornment && (
        <div className='input__adornment input__adornment--start'>
          {startAdornment}
        </div>
      )}
      <input
        className={inputClassName}
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {endAdornment && (
        <div className='input__adornment input__adornment--end'>
          {endAdornment}
        </div>
      )}
    </div>
  );
};

export { Input };
