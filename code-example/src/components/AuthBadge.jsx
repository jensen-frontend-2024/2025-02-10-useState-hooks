/* eslint-disable react/prop-types */

/*
interface IAuthBadgeProps {
  authenticated: boolean
}
*/

export function AuthBadge({ authenticated }) {
  const classNames = ['auth-badge'];
  if (authenticated === true) classNames.push('authenticated');

  return <div className={classNames.join(" ")}>Authenticated: {authenticated ? 'true' : 'false'}</div>;
}
