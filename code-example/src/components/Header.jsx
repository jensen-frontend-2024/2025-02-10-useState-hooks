import { CustomButton } from './CustomButton';

export function Header() {
  return (
    <header className="header g-container">
      <h1 className="logo">React Hooks</h1>
      <CustomButton>Login</CustomButton>
    </header>
  );
}
