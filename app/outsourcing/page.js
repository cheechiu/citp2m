import Tag from "../../components/Tag";

export default function OutsourcingPage() {
  return (
    <article className="prose">
      <span className="eyebrow">Section 4 &middot; Condensed Reference</span>
      <h1>Outsourcing &amp; Vendor Management</h1>
      <p className="lede">
        Not a full certification pillar &mdash; COMIT is sunsetting. This section retains
        COMIT&rsquo;s genuinely useful structure as a lighter-weight reference and adds the
        AI-vendor content neither legacy document could have anticipated.
      </p>

      <h2>
        Outsourcing Lifecycle <Tag kind="carried" />
      </h2>
      <p>
        Carried forward from COMIT Chapter 1, unchanged. Still the clearest lifecycle model
        available for structuring an outsourcing engagement:
      </p>
      <ul>
        <li><strong>Engagement</strong> &mdash; RFP development, service-level definition, provider selection, contract negotiation.</li>
        <li><strong>Transition &amp; Transformation</strong> &mdash; handover to the provider, then optional improvement toward a future state.</li>
        <li><strong>Ongoing Operations</strong> &mdash; provider management and service-delivery management in steady state.</li>
        <li><strong>Exit</strong> &mdash; contract migration and handover, whether to renewal, a new provider, or back in-house.</li>
      </ul>

      <h2>
        Planning, RFP &amp; Service Provider Selection <Tag kind="carried" />
      </h2>
      <p>Condensed from COMIT Chapters 2&ndash;3.</p>
      <h3>Before you write anything</h3>
      <ul>
        <li>Get clear on <em>why</em>: cost, service quality, access to skills not available in-house, or freeing internal staff for strategic work.</li>
        <li>Weigh the real risks &mdash; high cost of taking an operation back in-house, security/IP leakage, dependence on one provider, contractual ambiguity, loss of internal capability, staff morale.</li>
        <li>
          Pick the sourcing relationship deliberately: single/traditional (one provider, one
          client), co-sourcing (internal + external together), multi-sourcing (client integrates
          multiple providers), alliance (long-term formal collaboration), or joint venture
          (shared business, not just a service contract).
        </li>
      </ul>
      <h3>Building the RFP</h3>
      <ul>
        <li>Form a cross-functional team: business operations, IT, finance &amp; legal, HR.</li>
        <li>Gather information first &mdash; via a Request for Information, an engaged consultant, an open tender, or a risk-sharing development partnership, depending on how mature the requirement is.</li>
        <li>Cover, at minimum: business objectives, scope and requirements (functional and non-functional), provider qualifications, contractual terms, evaluation criteria, security and data protection, transition plan, and pricing.</li>
        <li>Categorise requirements as mandatory, good-to-have, or optional before the RFP goes out, not after proposals come back.</li>
      </ul>

      <h2>
        Service Provider Evaluation &amp; Selection <Tag kind="carried" />
      </h2>
      <p>Condensed from COMIT Chapter 3.</p>
      <ul>
        <li>Assess proposals across four dimensions: managerial (delivery approach, track record), technical (solution fit, architecture maturity), financial (payment model, total lifecycle cost), and legal terms.</li>
        <li>Score presentations, not just documents &mdash; how well a provider answers a hard question live is a genuine signal.</li>
        <li>Weigh provider-specific risk explicitly: do they understand the scope, is their cost estimate credible, can they actually staff it, are they financially stable.</li>
        <li>Document the evaluation and route it through a formal approval authority before signing &mdash; not an informal sign-off.</li>
      </ul>

      <h2>
        Contract Formation &amp; Negotiation <Tag kind="carried" />
      </h2>
      <p>Condensed from COMIT Chapter 4.</p>
      <h3>Contract types</h3>
      <ul>
        <li><strong>Fixed price</strong> &mdash; agreed scope, agreed price, subject to formal change control.</li>
        <li><strong>Time and materials</strong> &mdash; pay for effort or units delivered at agreed rates.</li>
        <li><strong>Cost plus award fee</strong> &mdash; cost recovery plus a performance-linked incentive.</li>
        <li><strong>Consumption-based / hybrid</strong> &mdash; the modern addition; see Cloud-Native Commercial Models below.</li>
      </ul>
      <h3>Clause checklist</h3>
      <p>
        Scope of services, contract period, service levels, price schedule, confidentiality,
        liquidated damages, warranties, liability limits, exclusion clauses, indemnities, IP
        ownership, force majeure, dispute resolution process, governing law and jurisdiction,
        and termination/exit provisions &mdash; every one of these should be explicit, not
        assumed.
      </p>
      <p>
        Negotiate on mutual interests, not price alone: clarify what&rsquo;s driving each side&rsquo;s
        position, allow for price adjustment mechanisms, and discuss productivity or
        benchmarking clauses up front rather than after a dispute.
      </p>

      <h2>
        Transition, Governance &amp; Relationship Management <Tag kind="carried" />
      </h2>
      <p>
        Condensed from COMIT Chapters 5&ndash;6 &mdash; arguably COMIT&rsquo;s strongest
        content, kept largely intact.
      </p>
      <h3>Two-tier governance</h3>
      <table>
        <thead>
          <tr><th>Layer</th><th>Composition</th><th>Focus</th></tr>
        </thead>
        <tbody>
          <tr><td>Outsourcing Management Team</td><td>Business unit managers, both sides&rsquo; outsourcing managers</td><td>Day-to-day delivery, risk and change, SLA review</td></tr>
          <tr><td>Management Review Board / Steering Committee</td><td>Senior executives from both organisations</td><td>Strategic direction, dispute resolution, major approvals</td></tr>
        </tbody>
      </table>
      <h3>Transition</h3>
      <p>
        A transition plan names what transfers, who transfers, how, and when; covers hardware,
        software licensing, services, and documentation; and includes a communications plan for
        internal staff and, where relevant, customers and suppliers. Expect the IT department&rsquo;s
        role to be redefined &mdash; plan the staff-transition communications alongside the
        technical handover, not after it.
      </p>
      <h3>Relationship health</h3>
      <p>
        Revisit regularly: has trust been established, is either side feeling short-changed, and
        are there unresolved disagreements that need escalating rather than absorbing silently?
      </p>

      <h2>
        Service Quality, Cost &amp; Risk Management <Tag kind="carried" />
      </h2>
      <p>Condensed from COMIT Chapters 7 and 9&ndash;10.</p>
      <h3>Service quality</h3>
      <ul>
        <li>Track SLA performance &mdash; typical metrics: service availability, response time, resolution time, and customer satisfaction &mdash; against agreed targets on a regular reporting cycle.</li>
        <li>
          On non-conformance: confirm it&rsquo;s valid (check the client side hasn&rsquo;t
          contributed to it), give written notice, track the provider&rsquo;s corrective plan at
          progress meetings, and escalate to the steering committee &mdash; including penalty
          clauses if needed &mdash; only if the response stays inadequate.
        </li>
        <li>Run service changes through a structured process: identify, assess feasibility and cost, negotiate, approve, implement, verify.</li>
      </ul>
      <h3>Cost</h3>
      <p>
        The same estimating techniques as <a href="/project-management">Section 2</a> apply here
        &mdash; expert judgment, cost-by-analogy, bottom-up, top-down, and model-based &mdash;
        validated against budgetary quotations from prospective providers before the RFP is
        finalised. Control cost through regular variance tracking against the baseline, plus a
        change-management process for anything that would shift the contracted scope.
      </p>
      <h3>Risk</h3>
      <p>
        Apply the same four-phase cycle as <a href="/foundations">Section 1</a> &mdash;
        identify, assess, mitigate, monitor &mdash; specifically for provider dependence,
        contractual ambiguity, and cost overrun risk.
      </p>

      <h2>
        Contract Migration &amp; Exit <Tag kind="carried" />
      </h2>
      <p>Condensed from COMIT Chapter 8.</p>
      <ul>
        <li>Start exit planning well before contract expiry &mdash; not as a reaction to termination.</li>
        <li>Run a completion analysis (a post-implementation review) to decide: renew, re-tender, or bring back in-house.</li>
        <li>Plan explicitly for business continuity during migration, application/data conversion if the platform changes, transfer of assets, and any increase in internal resourcing needed.</li>
        <li>Confirm data and software rights before day one of the transition &mdash; not after the provider has already started deleting copies.</li>
      </ul>

      <h2>
        Cloud-Native Commercial Models <Tag kind="modernized" />
      </h2>
      <p>
        COMIT predates SaaS, IaaS, and PaaS-era commercial models entirely. Its fixed-price and
        time-and-materials framing is replaced here with consumption-based and hybrid commercial
        models more typical of modern cloud and platform engagements &mdash; pay-for-usage
        pricing, tiered service commitments, and multi-year committed-spend discounts alongside
        the traditional models above.
      </p>

      <h2>
        Managing AI Vendors &amp; AI Agents <Tag kind="new" />
      </h2>
      <p>
        Net-new. No legacy content exists for this &mdash; it is the area needing the most
        original research before this section can be considered complete. Topics to develop:
      </p>
      <ul>
        <li>Evaluating AI/ML vendors on model provenance, data handling, and update cadence, not just price and features.</li>
        <li>Data and model risk as a distinct category in vendor due diligence.</li>
        <li>SLAs for outcomes delivered wholly or partly by autonomous AI agents, where traditional uptime/response-time metrics may not apply.</li>
        <li>Oversight mechanisms for AI agents acting as a delivery resource &mdash; who is accountable for an agent&rsquo;s output, and how that&rsquo;s audited.</li>
      </ul>
    </article>
  );
}
