"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    group: "Front Matter",
    items: [{ href: "/", label: "Purpose & How to Use" }],
  },
  {
    group: "Playbook",
    items: [
      { href: "/foundations", label: "1. Common Foundations" },
      { href: "/project-management", label: "2. Project Management" },
      { href: "/product-management", label: "3. Product Management" },
      { href: "/outsourcing", label: "4. Outsourcing & Vendor Management" },
    ],
  },
  {
    group: "Certification",
    items: [{ href: "/progression", label: "Progression Notes" }],
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sidebar">
      <Link href="/" className="brand">
        CITP2M Playbook
      </Link>
      <span className="brand-sub">Working draft &middot; Singapore Computer Society</span>

      {links.map((group) => (
        <div key={group.group}>
          <div className="nav-group-label">{group.group}</div>
          <ul className="nav-list">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={pathname === item.href ? "active" : ""}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
