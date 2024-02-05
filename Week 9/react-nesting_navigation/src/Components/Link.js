export default function Link({ href, className, children }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
