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

      <h2 id="outsourcing-lifecycle">Outsourcing Lifecycle <Tag kind="carried" />
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

      <h2 id="planning-rfp-service-provider-selection">Planning, RFP &amp; Service Provider Selection <Tag kind="carried" />
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

      <h2 id="service-provider-evaluation-selection">Service Provider Evaluation &amp; Selection <Tag kind="carried" />
      </h2>
      <p>Condensed from COMIT Chapter 3.</p>
      <ul>
        <li>Assess proposals across four dimensions: managerial (delivery approach, track record), technical (solution fit, architecture maturity), financial (payment model, total lifecycle cost), and legal terms.</li>
        <li>Score presentations, not just documents &mdash; how well a provider answers a hard question live is a genuine signal.</li>
        <li>Weigh provider-specific risk explicitly: do they understand the scope, is their cost estimate credible, can they actually staff it, are they financially stable.</li>
        <li>Document the evaluation and route it through a formal approval authority before signing &mdash; not an informal sign-off.</li>
      </ul>

      <h2 id="contract-formation-negotiation">Contract Formation &amp; Negotiation <Tag kind="carried" />
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

      <h2 id="transition-governance-relationship-management">Transition, Governance &amp; Relationship Management <Tag kind="carried" />
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

      <h2 id="service-quality-cost-risk-management">Service Quality, Cost &amp; Risk Management <Tag kind="carried" />
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

      <h2 id="contract-migration-exit">Contract Migration &amp; Exit <Tag kind="carried" />
      </h2>
      <p>Condensed from COMIT Chapter 8.</p>
      <ul>
        <li>Start exit planning well before contract expiry &mdash; not as a reaction to termination.</li>
        <li>Run a completion analysis (a post-implementation review) to decide: renew, re-tender, or bring back in-house.</li>
        <li>Plan explicitly for business continuity during migration, application/data conversion if the platform changes, transfer of assets, and any increase in internal resourcing needed.</li>
        <li>Confirm data and software rights before day one of the transition &mdash; not after the provider has already started deleting copies.</li>
      </ul>

      <h2 id="cloud-native-commercial-models">Cloud-Native Commercial Models <Tag kind="modernized" />
      </h2>
      <p>
        COMIT predates SaaS, IaaS, and PaaS-era commercial models entirely. Its fixed-price and
        time-and-materials framing is replaced here with consumption-based and hybrid commercial
        models, anchored on the <strong>FinOps Foundation</strong> framework &mdash; the
        recognised standard for managing variable cloud spend.
      </p>
      <ul>
        <li>Pay-for-usage pricing, tiered service commitments, and multi-year committed-spend discounts, alongside the traditional models above.</li>
        <li>FinOps&rsquo; core principle for outsourcing purposes: finance, engineering, product, and the vendor should have shared, near-real-time visibility into spend &mdash; not a monthly invoice surprise.</li>
        <li>The FinOps lifecycle &mdash; Inform (visibility), Optimize (efficiency), Operate (automate governance) &mdash; maps directly onto ongoing vendor cost management from <a href="#service-quality-cost-risk-management">Service Quality, Cost &amp; Risk Management</a> above.</li>
        <li>As of 2026, FinOps practice is expanding beyond pure cost-cutting to cover governance, forecasting, and executive alignment &mdash; and applies as much to AI/API consumption spend as to infrastructure.</li>
      </ul>

      <h2 id="managing-ai-vendors-ai-agents">Managing AI Vendors &amp; AI Agents <Tag kind="new" />
      </h2>
      <p>
        Net-new. No legacy content exists for this. Singapore now has a directly relevant
        anchor, though: IMDA&rsquo;s <strong>Model AI Governance Framework for Agentic AI</strong>{" "}
        (launched January 2026, updated May 2026) &mdash; see the full framework in{" "}
        <a href="/foundations">Section 1</a>. Its May 2026 update specifically addressed
        third-party and multi-agent systems, which is the part most relevant to vendor
        management:
      </p>
      <ul>
        <li>
          <strong>Clarify roles across the value chain</strong> &mdash; the framework
          distinguishes platform providers from system developers; know which one your vendor is
          before assigning accountability for an agent&rsquo;s behaviour.
        </li>
        <li>
          <strong>Treat multi-agent complexity as a risk factor in itself</strong> &mdash; the
          more agents (yours and third-party) interacting in a workflow, the higher the
          likelihood that something goes wrong, independent of any single agent&rsquo;s quality.
        </li>
        <li>
          <strong>Watch for automation bias</strong> &mdash; monitor human override rates and
          response times on agent output; a rubber-stamping reviewer defeats the point of human
          accountability.
        </li>
        <li>
          <strong>Require the framework&rsquo;s technical controls as contract terms</strong>{" "}
          &mdash; access controls, guardrails, human-approval gates, and logging/monitoring are
          now treated as core agent components, not optional extras; ask vendors to demonstrate
          them, not just claim them.
        </li>
      </ul>
      <h3>Vendor due diligence and SLAs</h3>
      <ul>
        <li>Evaluate AI/ML vendors on model provenance, data handling, and update cadence, not just price and features.</li>
        <li>Treat data and model risk as a distinct due-diligence category, alongside the standard financial and technical checks in <a href="#service-provider-evaluation-selection">Service Provider Evaluation</a> above.</li>
        <li>
          For SLAs covering outcomes delivered wholly or partly by autonomous agents, traditional
          uptime/response-time metrics are necessary but not sufficient &mdash; add metrics for
          override rate, escalation rate, and action-scope compliance (did the agent stay within
          its granted permissions).
        </li>
        <li>
          Bound the agent&rsquo;s access and action scope in the contract itself, not just in
          configuration &mdash; the framework treats this as the primary risk-reduction lever,
          ahead of monitoring after the fact.
        </li>
      </ul>
    </article>
  );
}
