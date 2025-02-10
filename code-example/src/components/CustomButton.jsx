/* eslint-disable react/prop-types */

/*
interface ICustomButtonProps {
  children: Reactnode;
  disabled: boolean;
  onClick: () => void;
  type: string;
}
*/

export function CustomButton({ children, disabled, onClick, type }) {
  const classNames = ['custom-button'];
  if (disabled === true) classNames.push('disabled');

  return (
    <button
      className={classNames.join(' ')}
      disabled={disabled}
      onClick={onClick}
      type={type ? type : 'button'}
    >
      {children}
    </button>
  );
}
