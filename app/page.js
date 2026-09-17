import Link from "next/link";

export default function HomePage() {
  return (
    <article className="prose">
      <span className="eyebrow">Front Matter</span>
      <h1>Purpose &amp; How to Use This Playbook</h1>
      <p className="lede">
        A single living reference for Project, Product, and Outsourcing Management &mdash;
        replacing the CITPM (2015) and COMIT (2008) Bodies of Knowledge for the AI era.
      </p>

      <h2>Why now</h2>
      <p>
        The CITPM Body of Knowledge (4th edition, 2015) and the COMIT Body of Knowledge
        (1st edition, 2008) predate cloud-native delivery, agile-as-default practice, and
        AI-assisted or AI-agent work entirely. Both were written for a world of waterfall-first
        delivery, on-premise infrastructure, and human-only service providers.
      </p>
      <p>
        Product management demand is rising as organisations pivot toward product operating
        models in an AI-prevalent world &mdash; a domain neither legacy Body of Knowledge
        addresses. CITP2M (a provisional working title) is proposed as the first certification
        to combine project and product management, positioned as an optional next step for
        qualifying CITPM holders rather than a replacement for CITPM itself.
      </p>

      <h2>Certification landscape</h2>
      <table>
        <thead>
          <tr>
            <th>Certification</th>
            <th>Status</th>
            <th>Playbook coverage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CITPM</td>
            <td>Continues to exist</td>
            <td>Sections 1&ndash;2 (Common Foundations + Project Management) fully serve it</td>
          </tr>
          <tr>
            <td>CITP2M <em>(provisional name)</em></td>
            <td>New; optional next step for some CITPM holders</td>
            <td>Sections 1&ndash;3 (adds Product Management)</td>
          </tr>
          <tr>
            <td>COMIT / Outsourcing Management</td>
            <td>Sunsetting</td>
            <td>Section 4 kept as a lighter reference, not a certification pillar</td>
          </tr>
        </tbody>
      </table>

      <h2>How to use this, by audience</h2>
      <ul>
        <li>
          <strong>CITPM candidates and holders</strong> &mdash; Sections 1&ndash;2.
        </li>
        <li>
          <strong>CITP2M-track readers</strong> &mdash; Sections 1&ndash;3.
        </li>
        <li>
          <strong>Industry practitioners generally</strong>, including solution providers such
          as AWS/Azure resellers and not only system integrators &mdash; all sections, entry
          point flexible.
        </li>
        <li>
          <strong>Anyone assessing AI&rsquo;s impact on delivery roles</strong> &mdash; the AI
          fluency material in Section 1, plus the AI-vendor and AI-agent content in Section 4.
        </li>
      </ul>

      <div className="callout">
        <strong>Progression note</strong>
        The CITPM &rarr; CITP2M bridge mechanism (module, exam, or grandfathering) has not been
        decided. See <Link href="/progression">Progression Notes</Link> for what is and isn&rsquo;t
        settled.
      </div>

      <h2>Sources this draft is built on</h2>
      <ul>
        <li>CITPM Body of Knowledge, 4th Edition (SCS, 2015) &mdash; rights held by SCS.</li>
        <li>COMIT Body of Knowledge, 1st Edition (SCS, 2008) &mdash; rights held by SCS.</li>
        <li>GovTech Singapore, Agile Playbook and Software Delivery Playbook.</li>
        <li>PMI Disciplined Agile, product management process.</li>
        <li>SVPG and Blume VC product management writing, used selectively for growth-stage content.</li>
      </ul>

      <h2>Jump in</h2>
      <div className="card-grid">
        <Link href="/foundations" className="card">
          <span className="card-title">1. Common Foundations</span>
          <span className="card-desc">
            Stakeholder, communications, risk, change, HR, governance, and AI fluency &mdash;
            shared across every track.
          </span>
        </Link>
        <Link href="/project-management" className="card">
          <span className="card-title">2. Project Management</span>
          <span className="card-desc">Modernized from CITPM, agile-first, AI-aware.</span>
        </Link>
        <Link href="/product-management" className="card">
          <span className="card-title">3. Product Management</span>
          <span className="card-desc">Net-new: Discovery to Growth, built for CITP2M.</span>
        </Link>
        <Link href="/outsourcing" className="card">
          <span className="card-title">4. Outsourcing &amp; Vendor Management</span>
          <span className="card-desc">
            Condensed from COMIT, extended to cloud and AI vendors/agents.
          </span>
        </Link>
      </div>
    </article>
  );
}
