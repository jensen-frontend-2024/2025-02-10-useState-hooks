/* eslint-disable react/prop-types */
import { CustomButton } from './CustomButton';

/*
interface IHeaderProps {
  authenticated: boolean
  updateAuthenticated: () => void
}
*/

export function Header({ authenticated, updateAuthenticated }) {
  const derivedBtntext = authenticated ? 'Logout' : 'Login';

  return (
    <header className="header g-container">
      <h1 className="logo">React Hooks</h1>
      <CustomButton onClick={updateAuthenticated}>{derivedBtntext}</CustomButton>
    </header>
  );
}
