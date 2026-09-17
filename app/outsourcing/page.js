import Tag from "../../components/Tag";

export default function OutsourcingPage() {
  return (
    <article className="prose">
      <span className="eyebrow">Section 4 &middot; Standalone Reference</span>
      <h1>Outsourcing &amp; Vendor Management</h1>
      <p className="lede">
        Not a full certification pillar &mdash; COMIT is sunsetting. This section is written to
        stand on its own: an industry practitioner should be able to run an outsourcing
        engagement end to end from what&rsquo;s here, without needing to go back to the original
        COMIT Body of Knowledge.
      </p>

      <h2 id="outsourcing-lifecycle">Outsourcing Lifecycle <Tag kind="carried" /></h2>
      <p>
        Carried forward from COMIT Chapter 1, unchanged. Still the clearest lifecycle model
        available for structuring an outsourcing engagement, and the spine the rest of this
        section is organised around.
      </p>
      <ul>
        <li><strong>Engagement</strong> &mdash; RFP development, service-level definition, provider selection, contract negotiation. Ends when the contract is signed.</li>
        <li><strong>Transition &amp; Transformation</strong> &mdash; handover to the provider (to steady state, &ldquo;business as usual&rdquo;), then an optional phase improving toward a future state.</li>
        <li><strong>Ongoing Operations</strong> &mdash; provider management and service-delivery management once the engagement is in steady state.</li>
        <li><strong>Exit</strong> &mdash; contract migration and handover, whether to renewal, a new provider, or back in-house.</li>
      </ul>
      <p>
        A competency runs across specific phases, not the whole lifecycle: RFP development,
        provider evaluation, and contract negotiation are Engagement-only; relationship
        management and service quality management run from Transition all the way to Exit; cost
        management, risk management, HR, communications, and interpersonal skills run across the
        <em>entire</em> lifecycle without a gap.
      </p>

      <h2 id="planning-rfp-service-provider-selection">Planning, RFP &amp; Service Provider Selection <Tag kind="carried" /></h2>
      <p>Migrated in full from COMIT Chapters 2&ndash;3, not just condensed pointers.</p>
      <h3>Outsourcing concepts</h3>
      <p>
        <strong>Outsourcing</strong> is contracting an external service provider to deliver
        services traditionally done in-house, at a contracted price and terms.{" "}
        <strong>Offshoring</strong> is the specific case where the bulk of the work is performed
        in another country. <strong>Insourcing</strong> is the variant where the market supplies
        resources deployed under the client&rsquo;s own management, not a fully managed service.
      </p>
      <h3>Why organisations outsource</h3>
      <ul>
        <li>Addressing management concern about the cost and quality of IT services.</li>
        <li>Focusing the organisation on its core competencies.</li>
        <li>Staying abreast of technology the organisation can&rsquo;t build or maintain in-house.</li>
        <li>Reducing time-to-market.</li>
        <li>Acting as a catalyst for business change that internal teams can&rsquo;t drive alone.</li>
        <li>Freeing internal capacity to focus on strategy rather than day-to-day operations.</li>
      </ul>
      <h3>Risks to weigh before committing</h3>
      <ul>
        <li>High cost of taking an outsourced operation back in-house later.</li>
        <li>Security breach or leakage of proprietary information.</li>
        <li>Dependence on a single service provider.</li>
        <li>Contractual problems from ambiguous or incomplete terms.</li>
        <li>Loss of control over the outsourced operation, and loss of internal capability to run it.</li>
        <li>Low staff morale among people affected by the change.</li>
      </ul>
      <h3>Critical success factors</h3>
      <p>
        Setting realistic expectations; having clear objectives; understanding the process being
        outsourced well enough to specify it properly; identifying and managing risk across the
        whole lifecycle, not just at signing; well-managed internal <em>and</em> external
        communication; selecting a provider with the right capability who understands the
        requirement and can be a trusted partner; well-defined contracts; an experienced team to
        manage the provider throughout the contract; and a realistic budget for the services
        themselves.
      </p>
      <h3>Types of sourcing relationships</h3>
      <table>
        <thead><tr><th>Model</th><th>Shape</th></tr></thead>
        <tbody>
          <tr><td>Single / traditional</td><td>One provider delivers to one client.</td></tr>
          <tr><td>Co-sourcing</td><td>Two providers work together &mdash; typically one internal, one external.</td></tr>
          <tr><td>Multi-sourcing</td><td>Multiple providers; the client takes responsibility for integrating them.</td></tr>
          <tr><td>Alliance</td><td>One provider, one client, formalised as a long-term collaborative agreement.</td></tr>
          <tr><td>Joint venture</td><td>Provider and client form a shared business venture, selling jointly to a third market &mdash; beyond a service contract.</td></tr>
        </tbody>
      </table>
      <h3>Forming the outsourcing project team</h3>
      <p>
        Draw representation from four core groups: <strong>business operations</strong> (the
        users, providing requirements), <strong>IT</strong> (the technology owners),{" "}
        <strong>finance &amp; legal</strong> (contract and commercial advice), and{" "}
        <strong>HR</strong> (staffing and internal communications). Select members for relevant
        experience, availability to actually contribute, and the ability to work well with
        others &mdash; then agree roles and communication lines before work starts.
      </p>
      <h3>Gathering information before you write the RFP</h3>
      <ul>
        <li><strong>Request for Information (RFI)</strong> &mdash; survey the market and pre-qualify interested providers before the formal tender.</li>
        <li><strong>Engage a consultant</strong> &mdash; where the client lacks the in-house skill to scope the requirement or run the procurement process.</li>
        <li><strong>Open tender</strong> &mdash; the fairest, most transparent route; works well paired with an RFI.</li>
        <li><strong>Risk-sharing development partnership</strong> &mdash; for genuinely new or immature technology, co-develop the solution with a chosen provider rather than tendering a fully-specified requirement.</li>
      </ul>
      <h3>What the RFP needs to cover</h3>
      <p>
        Business objectives and direction; a detailed definition of scope and services;
        functional and non-functional requirements; a human resource plan; provider
        characteristics and minimum qualifications; contractual terms; the evaluation process
        and criteria; a technical overview; service levels and reporting; security and data
        protection; a transition plan for staff, assets, and services; approval rights over key
        personnel; a risk assessment for loss of data or service; asset disposal; pricing; and
        expected transaction volume/load.
      </p>
      <h3>Categorising non-functional requirements</h3>
      <p>
        Performance, operational fit (how the solution integrates into the client&rsquo;s
        environment), maintainability, portability, security, usability, look-and-feel, and
        technology requirements (interoperability, refresh cadence) &mdash; each should be
        labelled mandatory, good-to-have, or optional <em>before</em> the RFP goes out, not
        negotiated after proposals land.
      </p>

      <h2 id="service-provider-evaluation-selection">Service Provider Evaluation &amp; Selection <Tag kind="carried" /></h2>
      <p>Migrated in full from COMIT Chapter 3.</p>
      <h3>Issuing the RFP and running due diligence</h3>
      <p>
        Pre-qualify providers on capability, capacity, experience, track record, financial
        strength, and compliance before the RFP goes out. Require signed non-disclosure
        agreements where confidential material is shared. Run a briefing session covering the
        RFP process, structure, schedule, high-level requirements, evaluation criteria, and
        submission method &mdash; then handle every follow-up question through the same channel,
        with answers visible to all bidders, to keep the process fair. Where site visits are
        offered for due diligence, offer them to every pre-qualified provider under the same
        ground rules (sites, duration, headcount, what records can be viewed).
      </p>
      <h3>Evaluation framework &mdash; four dimensions</h3>
      <ul>
        <li>
          <strong>Managerial</strong> &mdash; how the project plan will be implemented; transition
          management at contract start and end; how daily operations will run; the working
          relationship (communication channels, meeting cadence); office/service locations;
          industry track record; years in similar business and years with local presence;
          standards qualification (ISO 9001, ISO/IEC 20000, CMMI); size, ownership, and financial
          position; staff assigned; and how much client resource/commitment the proposal assumes.
        </li>
        <li>
          <strong>Technical</strong> &mdash; completeness of the solution; compliance with
          requirements; fit of the proposed solution to the actual problem; technical strategy
          (architecture, technology maturity, compatibility with the existing environment); and
          the service delivery approach. Verify claimed technical capability with a facility
          visit, not just the written proposal.
        </li>
        <li>
          <strong>Financial</strong> &mdash; payment method and schedule; how savings or revenue
          are shared, if relevant; total lifecycle cost, not just headline price; financial
          soundness of the provider; cost-adjustment provisions; and cost-effectiveness versus
          keeping the work in-house.
        </li>
        <li>
          <strong>Legal terms</strong> &mdash; ownership of assets including IP; maintenance
          obligations; warranties; exclusion clauses; liability caps; and escrow arrangements.
          Get professional legal input on adequacy, not just presence, of these terms.
        </li>
      </ul>
      <h3>Scoring presentations, not just documents</h3>
      <p>
        Direct questions into the same three buckets (technical, management, financial) during
        proposal presentations, and score the quality of the live answer: did the provider
        answer fully, give an honest answer that wasn&rsquo;t what you expected, dodge the
        question, answer something irrelevant, promise to follow up, or simply not understand
        it? How well a provider&rsquo;s team performs live is a genuine, separate signal from
        the written proposal.
      </p>
      <h3>Risk assessment before selection</h3>
      <p>
        Does the provider understand the real scope and complexity of the work? Is their cost
        estimate credible, or too good to be true? Can they actually staff it at the quality
        proposed? Are they financially stable enough to be a multi-year partner? Weight these
        alongside the four evaluation dimensions, document the full evaluation, and route it
        through a formal approval authority &mdash; not an informal sign-off &mdash; before the
        contract is signed.
      </p>

      <h2 id="contract-formation-negotiation">Contract Formation &amp; Negotiation <Tag kind="carried" /></h2>
      <p>Migrated in full from COMIT Chapter 4.</p>
      <h3>What makes a contract legally valid</h3>
      <table>
        <thead><tr><th>Element</th><th>In practice</th></tr></thead>
        <tbody>
          <tr><td>Offer</td><td>The provider&rsquo;s finalised proposal response is the actual legal &ldquo;offer&rdquo; &mdash; the RFP itself is only an invitation to treat.</td></tr>
          <tr><td>Acceptance</td><td>Must be a &ldquo;mirror image&rdquo; &mdash; every term matched, not a counter-proposal.</td></tr>
          <tr><td>Consideration</td><td>The price &mdash; which can include money, promises, payment in kind, or acts done on request.</td></tr>
          <tr><td>Intention to create legal relations</td><td>Usually presumed between commercial parties negotiating at arm&rsquo;s length.</td></tr>
        </tbody>
      </table>
      <h3>Contract types</h3>
      <ul>
        <li><strong>Fixed price</strong> &mdash; agreed scope, agreed price, subject to formal change control if either moves.</li>
        <li><strong>Time and materials</strong> &mdash; pay for effort or units delivered at agreed rates.</li>
        <li><strong>Cost plus award fee</strong> &mdash; cost recovery plus a performance-linked incentive payment.</li>
        <li><strong>Consumption-based / hybrid</strong> &mdash; the modern addition; see Cloud-Native Commercial Models below.</li>
      </ul>
      <h3>Full clause checklist</h3>
      <p>
        Scope of services, contract period, overall implementation schedule, governance and
        performance management, service levels and measures, price schedule, confidentiality,
        liquidated damages, warranties, liabilities (with a cumulative payment/limitation cap),
        exclusion/exemption clauses, indemnities (including IP infringement), IP ownership,
        injury to persons/damage to property or data, force majeure (specific, not vague), waiver
        provisions, contract assignment rights, dispute resolution process, who pays
        litigation/arbitration costs, governing law and jurisdiction, and termination/exit
        provisions.
      </p>
      <h3>How contracts end</h3>
      <p>
        <strong>Complete performance</strong> (the normal case), <strong>mutual agreement</strong>,{" "}
        <strong>frustration</strong> (an unforeseeable event outside either party&rsquo;s control
        makes performance impossible &mdash; usually covered by a force majeure clause, ends the
        contract without either side being in breach), or <strong>repudiatory breach</strong> (a
        breach fundamental enough that the other party can terminate and sue for damages).
      </p>
      <h3>Preparing for negotiation</h3>
      <p>
        Select the negotiation team for knowledge of the issues, prior negotiation experience,
        communication skill, and conflict-resolution ability &mdash; typically the technical
        team plus HR, legal, finance, and procurement for larger contracts. Run preparatory
        meetings and dry-runs to anticipate what-if scenarios before meeting the provider, and
        for large-dollar contracts, consider an external negotiator.
      </p>
      <h3>Negotiation principles and tactics</h3>
      <p>
        Start from mutual agreement that negotiation is needed; set the agenda and rules of
        conduct up front; understand your own position and the other side&rsquo;s before you
        start; make sure all relevant information is on the table; agree a formula before
        finalising implementation details. Tactically: exchange information openly, incorporate
        elements of the other side&rsquo;s position, reciprocate concessions, and be willing to
        trade something outside the immediate item under negotiation.
      </p>
      <h3>Best practice for pricing negotiations</h3>
      <p>
        Identify the topics to negotiate and what&rsquo;s covered in the first meeting; focus on
        mutual interests rather than price alone; clarify the assumptions behind pricing and
        performance; allow for price adjustment mechanisms; and discuss productivity/benchmarking
        clauses before a dispute forces the conversation.
      </p>
      <h3>Reviewing and finalising</h3>
      <p>
        Three checks before signature: a legal review (in-house or external counsel, assessing
        whether the written terms actually protect the organisation&rsquo;s interests); an
        evaluation-team review (confirming every functional/non-functional requirement and every
        issue raised in negotiation is actually reflected in the contract); and executive sign-off
        by senior management or a steering committee.
      </p>

      <h2 id="transition-governance-relationship-management">Transition, Governance &amp; Relationship Management <Tag kind="carried" /></h2>
      <p>
        Migrated in full from COMIT Chapters 5&ndash;6 &mdash; arguably COMIT&rsquo;s strongest
        content.
      </p>
      <h3>Governance structure</h3>
      <table>
        <thead><tr><th>Layer</th><th>Composition</th><th>Focus</th></tr></thead>
        <tbody>
          <tr><td>Outsourcing Management Team</td><td>Business unit managers, both sides&rsquo; outsourcing managers</td><td>Day-to-day delivery, change and risk, SLA review, escalate upward when needed</td></tr>
          <tr><td>Outsourcing Management Review Board / Steering Committee</td><td>Senior executives from both organisations, plus system/business unit owners</td><td>Strategic direction, dispute resolution, major approvals, review of emerging business needs</td></tr>
        </tbody>
      </table>
      <p>
        The two outsourcing managers (client and provider) sit at the centre of this structure:
        they&rsquo;re the official point of contact for each side and should be empowered to
        decide on contract variations, change requests, and financial issues without escalating
        every minor item.
      </p>
      <h3>Planning the transition</h3>
      <p>
        A transition plan names what transfers, who transfers, how, and when the provider
        assumes responsibility; documents transition activities with owners, start/end dates,
        priority, and dependencies; and includes a communications plan for internal staff and,
        where relevant, customers and suppliers.
      </p>
      <h3>Major transition activities</h3>
      <ul>
        <li>Redefining the IT department&rsquo;s role and re-evaluating the organisation&rsquo;s IT strategy as functions move out.</li>
        <li>Managing and communicating staff impact &mdash; transfer, redeployment, retrenchment, retention &mdash; with enough lead time that people aren&rsquo;t blindsided.</li>
        <li>Resource transfer: hardware and ownership, software licensing, services, and documentation, each itemised.</li>
        <li>Updating internal procedures so the organisation can actually work with the new provider (service requests, change requests, quality management).</li>
      </ul>
      <h3>Transformation (optional, beyond steady-state transition)</h3>
      <p>
        Business transformation outsourcing goes further than keeping the lights on &mdash; it
        aligns outsourced processes with the client&rsquo;s longer-term strategy, and requires
        real trust between the parties since it involves higher-risk, longer-term investment.
      </p>
      <ul>
        <li>Govern it with senior-level special project teams, not the standard operational governance &mdash; transformation needs strategic authority to push through organisational change.</li>
        <li>Identify candidate areas by strategic challenge, not by habit: ability to adapt to market change, process innovation, shorter time-to-market, better real-time data for decisions are typical objectives.</li>
        <li>Structure the contract to share risk and reward, so the provider has a genuine stake in the transformation succeeding, not just in billing hours.</li>
        <li>Measure progress with intermediate indicators (a Balanced Scorecard works well) since transformation is long-range and won&rsquo;t show end-results for a long time.</li>
      </ul>
      <h3>Principles of a successful relationship</h3>
      <p>
        No contract covers every eventuality, so trust and mutual understanding matter beyond the
        paper: design win-win solutions rather than one side dominating because it can; share
        risk and gains fairly so the provider stays committed for the long term; and keep
        communication open enough that problems surface early rather than being absorbed
        silently until they become disputes.
      </p>
      <h3>Assessing relationship health</h3>
      <p>
        Revisit regularly: are both organisations genuinely happy with the relationship? Has
        trust actually been established? Does either side feel it&rsquo;s giving more than it
        receives? What are the real areas of disagreement, and can they be resolved? Is there a
        basis for continuing long-term? Where trust needs rebuilding: name where both sides can
        currently work well together, name what the client can&rsquo;t compromise on, identify
        where the client could compensate the provider on those non-negotiables, and invest in
        joint trust-building (not just contract management) &mdash; a shared team-building
        exercise does more for a relationship than another status meeting.
      </p>

      <h2 id="service-quality-cost-risk-management">Service Quality, Cost &amp; Risk Management <Tag kind="carried" /></h2>
      <p>Migrated in full from COMIT Chapters 7 and 9&ndash;10.</p>
      <h3>Management structure for steady-state operations</h3>
      <p>
        Once transition ends, control passes from the transition team to the Outsourcing
        Management Team for day-to-day running, which reports regularly to the Review
        Board/Steering Committee for approvals and strategic issues &mdash; the same structure as
        during transition, just operating in steady state rather than change mode.
      </p>
      <h3>Performance measurement and reporting</h3>
      <ul>
        <li>Track SLA metrics &mdash; typically service availability, response time, resolution time, and customer satisfaction &mdash; against agreed targets, via regular provider progress reports.</li>
        <li>Hold monthly operational meetings covering progress to date, milestones achieved, status of deliverables, outstanding issues, and planned work.</li>
        <li>The client&rsquo;s own outsourcing manager should report up to senior management with more than just the provider&rsquo;s numbers &mdash; add internal resource cost and an honest read of overall contract health.</li>
        <li>Where the client has compliance obligations, build regular reviews and audits of the provider&rsquo;s work into the contract as a requirement, not an afterthought.</li>
      </ul>
      <h3>Handling non-conformance</h3>
      <p>
        Confirm the non-conformance is valid (rule out the client side having contributed to
        it); give written notice and ask for a corrective plan; track that plan at the regular
        progress meetings; and only escalate to the steering committee &mdash; potentially
        invoking penalty clauses &mdash; if the response stays inadequate. Mediation, arbitration,
        or litigation are the fallback once internal escalation is exhausted.
      </p>
      <h3>Managing service changes</h3>
      <p>
        Common triggers: a change in the client&rsquo;s business, new functionality not in the
        original contract, a change in the technical environment, or a regulatory/external
        change. Run every change through the same process: identify it, have the provider assess
        feasibility and cost, negotiate and agree the scope and cost, get it approved by the
        right authority, implement it, and verify it &mdash; with a communications plan for
        anything that affects the wider organisation.
      </p>
      <h3>Cost management</h3>
      <p>
        The same estimating techniques as{" "}
        <a href="/project-management#scope-time-cost-management">Section 2&rsquo;s Cost section</a>{" "}
        apply &mdash; expert judgment, cost-by-analogy, bottom-up, top-down, and model-based
        &mdash; validated against budgetary quotations from prospective providers before the RFP
        is finalised. Control cost through regular variance tracking against the baseline, and
        route any scope-shifting change through the change-management process above rather than
        letting cost drift informally.
      </p>
      <h3>Risk management</h3>
      <p>
        Apply the same four-phase cycle as{" "}
        <a href="/foundations#risk-management">Section 1&rsquo;s Risk Management</a> &mdash;
        identify, assess, mitigate, monitor &mdash; specifically for provider dependence,
        contractual ambiguity, and cost overrun. Common outsourcing-specific risk sources:
        provider selection quality, contractual ambiguity, HR/staff transition issues, transition
        and transformation execution, technology maturity, and provider performance/quality
        variance.
      </p>

      <h2 id="contract-migration-exit">Contract Migration &amp; Exit <Tag kind="carried" /></h2>
      <p>Migrated in full from COMIT Chapter 8.</p>
      <h3>Preparing for contract completion</h3>
      <p>
        Assess three things before expiry: the outcome of the outsourced services, the
        performance of both the provider and the internal outsourcing management team, and the
        quality of the relationship. Run a post-implementation review to capture lessons learnt
        and process improvements. This determines the next step &mdash; continue with the
        incumbent, re-tender, or bring the service back in-house.
      </p>
      <h3>Why contracts terminate early</h3>
      <p>
        Breach of contract, merger or acquisition of either organisation, or economic failure of
        either party. Before deciding to renew or terminate, weigh the client&rsquo;s current
        business requirements against the performance of the existing arrangement and the
        realistic sourcing alternatives available.
      </p>
      <h3>Risks to manage during any exit</h3>
      <ul>
        <li>Data and software being effectively held hostage by an uncooperative outgoing provider.</li>
        <li>General provider non-cooperation during handover.</li>
        <li>The practical risk of bringing services back in-house without the capability to run them.</li>
        <li>The risk of a bumpy transfer to a new provider on an unfamiliar platform.</li>
      </ul>
      <h3>Renegotiating rather than exiting</h3>
      <p>
        Define an initial set of discussion topics and your organisation&rsquo;s position on
        each before talks start; communicate and seek agreement on that list with the provider;
        build a negotiation plan; and track topic status through to closure &mdash; the same
        discipline as the original contract negotiation.
      </p>
      <h3>What a migration plan must cover</h3>
      <ul>
        <li><strong>Business continuity</strong> &mdash; a fallback (a short-term extension with the incumbent, or a temporary third party) in case migration doesn&rsquo;t go to plan.</li>
        <li><strong>Application/data conversion</strong> &mdash; if the new platform differs from the old, plan explicitly for data accuracy and completeness during the move, including when moving back in-house.</li>
        <li><strong>Transfer of assets</strong> &mdash; an exhaustive, agreed list of what transfers each way, the schedule for transfer, and a final asset valuation for audit and financial compliance.</li>
        <li><strong>In-house resource requirements</strong> &mdash; if bringing services back in-house, plan the physical space, equipment, and staffing (redeployed internal staff, or a negotiated arrangement to retain outgoing provider staff for knowledge continuity).</li>
      </ul>
      <h3>Legal and practical closeout</h3>
      <p>
        Confirm all data the client is legally entitled to is returned, and that the outgoing
        provider destroys its copies. Confirm ownership of application software already paid for
        transfers back, and separately arrange ongoing licences for anything still needed.
        Secure the outgoing provider&rsquo;s cooperation contractually &mdash; technical
        disclosure, documentation, and training &mdash; since negotiating this after the
        relationship has soured is far harder than agreeing it up front as part of the original
        contract&rsquo;s exit provisions.
      </p>

      <h2 id="cloud-native-commercial-models">Cloud-Native Commercial Models <Tag kind="modernized" /></h2>
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

      <h2 id="managing-ai-vendors-ai-agents">Managing AI Vendors &amp; AI Agents <Tag kind="new" /></h2>
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
