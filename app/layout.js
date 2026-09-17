import "./globals.css";
import Nav from "../components/Nav";

export const metadata = {
  title: "CITP2M Playbook (Working Draft) | SCS",
  description:
    "Working draft of the Singapore Computer Society playbook covering Project Management, Product Management, and Outsourcing & Vendor Management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="draft-banner">
          Working draft &mdash; not yet approved by SCS. Content and section names, including &ldquo;CITP2M,&rdquo; are provisional.
        </div>
        <div className="shell">
          <Nav />
          <main className="content">{children}</main>
        </div>
      </body>
    </html>
  );
}
