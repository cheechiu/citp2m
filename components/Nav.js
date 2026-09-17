"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sectionsByPath = {
  "/foundations": [
    { id: "stakeholder-management", label: "Stakeholder Management" },
    { id: "communications-management", label: "Communications Management" },
    { id: "risk-management", label: "Risk Management" },
    { id: "change-enablement", label: "Change Enablement" },
    { id: "hr-team-management", label: "HR / Team Management" },
    { id: "governance-ethics-incl-responsible-ai", label: "Governance & Ethics, incl. Responsible AI" },
    { id: "ai-fluency-for-practitioners", label: "AI Fluency for Practitioners" },
  ],
  "/project-management": [
    { id: "ecosystem-of-projects", label: "Ecosystem of Projects" },
    { id: "delivery-lifecycle-management", label: "Delivery Lifecycle Management" },
    { id: "scope-time-cost-management", label: "Scope, Time & Cost Management" },
    { id: "quality-management", label: "Quality Management" },
    { id: "risk-procurement", label: "Risk & Procurement" },
    { id: "stakeholder-programme-change-management", label: "Stakeholder, Programme & Change Management" },
    { id: "agile-delivery", label: "Agile Delivery" },
    { id: "ai-in-project-delivery", label: "AI in Project Delivery" },
    { id: "sample-templates", label: "Sample Templates" },
  ],
  "/product-management": [
    { id: "guiding-principles", label: "Guiding Principles" },
    { id: "planning-discovery-prioritisation", label: "Planning — Discovery & Prioritisation" },
    { id: "design", label: "Design" },
    { id: "delivery-development", label: "Delivery & Development" },
    { id: "operation", label: "Operation" },
    { id: "reflection", label: "Reflection" },
    { id: "metrics-growth", label: "Metrics & Growth" },
    { id: "product-management-in-the-ai-era", label: "Product Management in the AI Era" },
    { id: "bridge-to-project-management", label: "Bridge to Project Management" },
  ],
  "/outsourcing": [
    { id: "outsourcing-lifecycle", label: "Outsourcing Lifecycle" },
    { id: "planning-rfp-service-provider-selection", label: "Planning, RFP & Provider Selection" },
    { id: "service-provider-evaluation-selection", label: "Service Provider Evaluation & Selection" },
    { id: "contract-formation-negotiation", label: "Contract Formation & Negotiation" },
    { id: "transition-governance-relationship-management", label: "Transition, Governance & Relationship Mgmt" },
    { id: "service-quality-cost-risk-management", label: "Service Quality, Cost & Risk Management" },
    { id: "contract-migration-exit", label: "Contract Migration & Exit" },
    { id: "cloud-native-commercial-models", label: "Cloud-Native Commercial Models" },
    { id: "managing-ai-vendors-ai-agents", label: "Managing AI Vendors & AI Agents" },
  ],
};

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
            {group.items.map((item) => {
              const isActive = pathname === item.href;
              const sections = sectionsByPath[item.href];
              return (
                <li key={item.href}>
                  <Link href={item.href} className={isActive ? "active" : ""}>
                    {item.label}
                  </Link>
                  {isActive && sections && (
                    <ul className="nav-sublist">
                      {sections.map((section) => (
                        <li key={section.id}>
                          <a href={`#${section.id}`}>{section.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
