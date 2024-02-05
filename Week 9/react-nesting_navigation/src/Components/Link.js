export default function Link({ href, className, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}
