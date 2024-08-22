import { ChangeEvent, createElement, FC, useRef } from 'react';
import { InputProps } from './types';

import cn from 'classnames';

import './Input.scss';
import useAutosizeTextArea from 'src/hooks/useAutosizeTextArea';

const Input: FC<InputProps> = (props) => {
  const {
    className,
    endAdornment,
    wrapperClassName,
    variant = 'primary',
    startAdornment,
    as = 'input',
    onChange,
    ...rest
  } = props;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, props.value || '');

  const inputWrapperClassName = cn(
    'input',
    `input--${variant}`,
    {
      'input--adornment--start': startAdornment,
      'input--adornment--end': endAdornment,
    },
    wrapperClassName
  );
  const inputClassName = cn('input__field', className, {
    textarea__field: as === 'textarea',
  });

  const Component = createElement(as, {
    className: inputClassName,
    ...(as === 'textarea' && {
      rows: 1,
      ref: textAreaRef,
    }),
    onChange: (e: ChangeEvent<HTMLInputElement>) =>
      onChange && onChange(e.target.value),
    ...rest,
  });

  return (
    <div className={inputWrapperClassName}>
      {startAdornment && (
        <div
          className={cn('input__adornment', 'input__adornment--start', {
            textarea__adornment: as === 'textarea',
          })}
        >
          {startAdornment}
        </div>
      )}
      {Component}
      {endAdornment && (
        <div
          className={cn('input__adornment', 'input__adornment--end', {
            textarea__adornment: as === 'textarea',
          })}
        >
          {endAdornment}
        </div>
      )}
    </div>
  );
};

export { Input };
