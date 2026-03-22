import { navItems } from "./nav-items";

type NavLinksProps = {
  className?: string;
  linkClassName?: string;
  itemClassName?: string;
  onNavigate?: () => void;
};

const defaultLinkClassName =
  "hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded px-1 py-0.5";

const NavLinks = ({
  className,
  linkClassName,
  itemClassName,
  onNavigate,
}: NavLinksProps) => {
  return (
    <ul className={className}>
      {navItems.map((item) => (
        <li className={itemClassName} key={item.href}>
          <a
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            className={linkClassName ?? defaultLinkClassName}
            onClick={onNavigate}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
