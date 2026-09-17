import Link from "next/link";
import Tag from "../../components/Tag";

export default function ProjectManagementPage() {
  return (
    <article className="prose">
      <span className="eyebrow">Section 2 &middot; Full Pillar</span>
      <h1>Project Management</h1>
      <p className="lede">
        Carries CITPM forward. Together with Section 1, this section fully serves CITPM
        candidates and holders on its own &mdash; no other section is required.
      </p>

      <h2 id="ecosystem-of-projects">Ecosystem of Projects <Tag kind="carried" />
      </h2>
      <p>
        Carried forward from CITPM Chapter 2. A <strong>project</strong> is the basic unit of
        organising IT work. A <strong>programme</strong> coordinates two or more related
        projects to obtain benefits no single project could deliver alone. A{" "}
        <strong>portfolio</strong> groups projects and programmes &mdash; not necessarily related
        &mdash; to realise strategic objectives. The distinction that matters day to day:
        projects and programmes chase tactical goals, portfolios chase strategic ones.
      </p>
      <h3>Project governance</h3>
      <ul>
        <li>Governing processes &mdash; approval, escalation, and regular status review.</li>
        <li>Governing bodies &mdash; project manager, project director, steering committee, senior management.</li>
        <li>A project/programme/portfolio management office where scale warrants one.</li>
        <li>A project management information system for automated tracking and reporting.</li>
      </ul>
      <div className="callout">
        <strong>Practical tips, carried verbatim in spirit</strong>
        The ecosystem around a project makes or breaks it &mdash; influencing the factors within
        your control matters as much as managing the work itself. Project, programme, and
        portfolio management call for different skill sets and experience; don&rsquo;t assume
        someone who is good at one is automatically good at another. Build the business case
        jointly with the sponsor and stakeholders, not in isolation &mdash; it&rsquo;s what
        secures real buy-in, not just a signature.
      </div>

      <h2 id="delivery-lifecycle-management">Delivery Lifecycle Management <Tag kind="modernized" />
      </h2>
      <p>
        Modernized from CITPM Chapter 3. The 2015 edition treated waterfall as the default
        lifecycle and agile as an appendix. This playbook inverts that: agile and hybrid
        delivery are the default, with plan-driven (waterfall) delivery retained as one option
        among several, chosen deliberately rather than assumed.
      </p>
      <h3>Choosing a lifecycle &mdash; the factors that still matter</h3>
      <table>
        <thead>
          <tr>
            <th>Factor</th>
            <th>Favours agile</th>
            <th>Favours plan-driven</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>System type</td><td>High user interaction</td><td>Backend, data-driven</td></tr>
          <tr><td>Team size</td><td>Small (&lt;10), co-located or tight-knit</td><td>Large or mega-scale</td></tr>
          <tr><td>Requirements stability</td><td>Dynamic, expected to change</td><td>Well understood, stable</td></tr>
          <tr><td>Customer involvement</td><td>High and continuous</td><td>Intense at defined stages only</td></tr>
          <tr><td>Culture</td><td>Comfortable with empowerment</td><td>Comfortable with defined roles and procedures</td></tr>
        </tbody>
      </table>

      <h2 id="scope-time-cost-management">Scope, Time &amp; Cost Management <Tag kind="carried" />
      </h2>
      <p>Migrated in full from CITPM Chapters 4&ndash;6, not just condensed pointers.</p>
      <h3>Scope &mdash; planning</h3>
      <ul>
        <li>Specify functional <em>and</em> non-functional requirements &mdash; performance, availability, capacity, scalability, reliability, security, integrity, interfaces/dependencies, and usability.</li>
        <li>
          <strong>MoSCoW</strong> to keep requirements honest: Must have (objective fails
          without it), Should have (objective weakens without it), Could have (nice to have,
          only if budget/time allow), Won&rsquo;t have (out of scope this round, or not within
          the team&rsquo;s authority).
        </li>
        <li>Define project objectives in terms of concrete deliverables: the end-product itself, requirements/analysis/design specifications, test planning and results, management planning and control documentation, and user/system documentation.</li>
        <li>Build a Work Breakdown Structure to decompose those deliverables into activities, and assign roles and responsibilities against it &mdash; the WBS is the foundation every schedule and cost estimate is built on.</li>
        <li>Establish a project organisation structure covering in-house teams, external suppliers/subcontractors, and interfaces to customer and senior management, with a Change Control Board or Project Steering Committee as the change-management backbone.</li>
        <li>Where using a packaged/COTS solution: &ldquo;vanilla is best&rdquo; &mdash; minimise customisation, and if the gap analysis shows major customisation is needed, reconsider the fit before committing.</li>
      </ul>
      <h3>Scope &mdash; execution and control</h3>
      <ul>
        <li>Task staff against the WBS with clear deliverables, standards, acceptance criteria, effort/cost budget, and timescale for each activity.</li>
        <li>Monitor progress with written reports, effort-to-complete calculations, and earned value analysis; take schedule, quality, cost, and technical control action as trends emerge, not after they&rsquo;ve compounded.</li>
        <li>Scope creep is one of the most common causes of delay &mdash; every change request gets a formal impact assessment and a re-baselined plan, not a quiet yes.</li>
      </ul>
      <h3>Time</h3>
      <ul>
        <li>Sequence activities from the WBS, noting dependencies (finish-to-start, start-to-start, finish-to-finish, start-to-finish) and any lead (successor starts before predecessor finishes) or lag (successor waits after predecessor finishes) between them.</li>
        <li>Critical Path Method / PERT to find earliest/latest start and finish times, total float per activity, and the critical path &mdash; the sequence with zero float that sets the project&rsquo;s minimum duration.</li>
        <li>Build the schedule as a Gantt chart, adjusted for holidays, leave, and resource availability &mdash; using resource levelling (cap usage at a defined level) or resource smoothing (minimise fluctuations) as needed.</li>
        <li>
          To compress a schedule: crashing (add resources), fast-tracking (run activities in
          parallel), de-scoping, phasing into releases, or deliberately downgrading process rigour
          &mdash; each trades cost, risk, or quality for time, so weigh the trade explicitly
          rather than defaulting to crashing.
        </li>
        <li>Watch for Parkinson&rsquo;s Law (work expands to fill the time available) when setting activity durations &mdash; over-padding every task is its own source of schedule risk.</li>
      </ul>
      <h3>Cost</h3>
      <ul>
        <li>Typical cost sources: software licensing (including maintenance fees during development), hardware/infrastructure, professional services (labour and subcontracts), training, expenses, contingency, and recurring maintenance/hosting costs.</li>
        <li>
          <strong>Estimating techniques</strong> &mdash; expert judgment (Delphi-style panels),
          cost-by-analogy (scale from a similar past project), bottom-up (sum estimated effort
          per WBS task), top-down (decompose an agreed total budget), and model-based estimation
          (a parametric model driven by a sizing metric). Function-point/COCOMO-era model-based
          estimation specifically is retired as a primary method here; kept as historical
          reference only. Whichever technique, a proper WBS underneath it is what makes the
          estimate credible &mdash; estimating without one is guesswork.
        </li>
        <li>Earned Value Management remains a useful single view combining scope, schedule, and cost performance; revisit early estimates as the project progresses and better information becomes available, rather than anchoring on the original number.</li>
        <li>
          <strong>Cash flow, not just budget</strong> &mdash; weigh outsourced vs. in-house,
          buy vs. lease, and COTS vs. bespoke against total cost of ownership, not just upfront
          capital cost; balance the cost of quality assurance against the project&rsquo;s actual
          quality requirements (over-specified QA is its own cost problem); structure payment
          milestones to be commensurate with delivery risk &mdash; over-deferring payment just
          gets priced into the vendor&rsquo;s rate; and factor in withholding tax when procuring
          overseas professional services.
        </li>
      </ul>

      <h2 id="quality-management">Quality Management <Tag kind="modernized" />
      </h2>
      <p>
        Modernized from CITPM Chapter 7. Product quality is a function of process quality: a
        good product needs a good process behind it, built from contract review, requirements
        control, design control, development control, verification &amp; validation, and
        management control. Replace the 2015 edition&rsquo;s ISO 9001:2008/CMMI-only framing
        with current QMS references; the underlying discipline is unchanged.
      </p>
      <h3>Quality control techniques</h3>
      <ul>
        <li><strong>Reviews</strong> &mdash; inspections (formal, rigorous), walkthroughs (find defects and alternatives), desk checks (informal, individual).</li>
        <li>
          <strong>Testing</strong> &mdash; unit, integration, system (functional and
          non-functional: recovery, security, load/performance, usability), independent testing
          for mission-critical work, user acceptance testing, operational readiness testing, and
          regression testing whenever something changes.
        </li>
        <li>Testing process discipline: plan &rarr; design &rarr; execute &rarr; follow up defects &rarr; monitor &amp; control &rarr; analyse results &rarr; close, with test cases banked in a reuse repository.</li>
      </ul>
      <h3>System configuration management</h3>
      <p>
        Configuration identification (unique IDs and traceability), change control (a change
        control board for baselined items), status accounting (what&rsquo;s changed, what
        remains), and configuration auditing &mdash; poor discipline here is the classic cause
        of &ldquo;which version is actually in production?&rdquo;
      </p>

      <h2 id="risk-procurement">Risk &amp; Procurement <Tag kind="modernized" />
      </h2>
      <p>
        Risk mechanics live in <Link href="/foundations">Section 1</Link>. Procurement spans
        outsourcing and subcontracting, software licensing, packaged solutions, turnkey
        solutions, and infrastructure (increasingly cloud SaaS/IaaS/PaaS) &mdash; full treatment
        in <Link href="/outsourcing">Section 4</Link> rather than duplicated here.
      </p>

      <h2 id="stakeholder-programme-change-management">Stakeholder, Programme &amp; Change Management <Tag kind="carried" />
      </h2>
      <p>
        Stakeholder and change enablement mechanics are in{" "}
        <Link href="/foundations">Section 1</Link>. For managing multiple related projects as a
        programme (CITPM Chapter 13):
      </p>
      <ul>
        <li>Success depends on a single accountable director, active stakeholder management, a clear vision of the change, and enough skilled people to run it.</li>
        <li>Governance needs three layers: programme sponsorship (senior executive commitment), programme management (director + manager), and programme support (tracking, documentation).</li>
        <li>Planning covers benefits management, stakeholder management, issue/risk management, quality management, configuration management, and audit.</li>
        <li>
          For programmes needing external co-investment, consider cost sharing, revenue sharing,
          joint ventures, or government innovation grants alongside straightforward client
          funding.
        </li>
      </ul>

      <h2 id="agile-delivery">Agile Delivery <Tag kind="modernized" />
      </h2>
      <p>
        Modernized and promoted from CITPM&rsquo;s Appendix A into the main body, reflecting its
        status as the default delivery approach rather than a supplement.
      </p>
      <h3>Foundations</h3>
      <ul>
        <li>
          Four values: individuals and interactions over processes and tools; working software
          over comprehensive documentation; customer collaboration over contract negotiation;
          responding to change over following a plan.
        </li>
        <li>Twelve principles, grouped: customer value (early, continuous delivery), teamwork (co-location, empowerment, face-to-face communication), execution (sustainable pace, technical excellence, simplicity), and team improvement (self-organisation, regular retrospection).</li>
      </ul>
      <h3>How it differs operationally from waterfall</h3>
      <ul>
        <li>Payment tied to working software releases, not phase-completion documents.</li>
        <li>A series of releases, each a few short iterations, rather than one big-bang release.</li>
        <li>Scope managed through a prioritised, evolving backlog rather than a baselined requirements document behind a change-control gate.</li>
      </ul>
      <h3>Requirements formats</h3>
      <p>User stories (&ldquo;As a &lt;role&gt;, I want &lt;goal&gt; so that &lt;benefit&gt;&rdquo;), user scenarios, use cases, and user flow diagrams &mdash; pick the lightest format that keeps the team and the customer aligned.</p>
      <h3>Prioritisation</h3>
      <p>Top-down ranking by value/effort/risk, MoSCoW, participatory techniques like &ldquo;buy a feature,&rdquo; Kano analysis (basic needs vs. delighters), and straight financial prioritisation (NPV, payback period).</p>
      <h3>Tracking progress</h3>
      <p>
        Burn-down charts (product-level and iteration-level) show what&rsquo;s <em>left</em>,
        not effort already spent &mdash; a deliberate contrast to earned value&rsquo;s
        backward-looking view. Velocity tracks a team&rsquo;s sustainable throughput, but reading
        it as a performance score rather than a planning input is a common and costly mistake.
      </p>
      <h3>What changes for the project manager</h3>
      <p>
        Active customer participation is non-negotiable; test/integration environments need to
        exist from day one, not late in the schedule; leadership shifts from directive to
        servant/adaptive; team stability matters more than in phase-gated delivery because tacit
        knowledge isn&rsquo;t captured in handover documents; and investment in test automation
        pays for itself quickly once releases are frequent.
      </p>

      <h2 id="ai-in-project-delivery">AI in Project Delivery <Tag kind="new" />
      </h2>
      <p>
        Net-new. AI now assists requirements analysis, estimation, and test generation directly
        &mdash; and changes what traditional PM metrics mean.
      </p>
      <div className="callout">
        <strong>The evidence is more mixed than the hype</strong>
        A 2026 controlled study by METR had experienced open-source developers complete real
        repository issues with and without AI assistance allowed. Developers took roughly 19%
        <em>longer</em> with AI tools &mdash; and even after living through the slowdown, they
        still believed AI had sped them up by about 20%. That gap between perceived and actual
        productivity is the reason AI-inflated metrics need independent verification, not just
        practitioner self-report. Separately, industry benchmarking in 2026 found AI-assisted
        teams improving complexity-adjusted throughput (roughly 12 vs. 8 points/engineer/week),
        but with the gains concentrated in lower-performing teams (up to ~50% faster) and much
        smaller for already-strong teams (~10&ndash;15%) &mdash; and only about 1 in 5 teams
        actually track AI impact with real engineering metrics rather than raw output volume.
      </div>
      <ul>
        <li>Velocity inflated by AI-assisted output isn&rsquo;t the same signal it used to be &mdash; track value delivered, not lines or story points produced.</li>
        <li>Earned-value calculations need a human-verification checkpoint before AI-assisted deliverables count as &ldquo;done.&rdquo;</li>
        <li>Where a team is already strong, expect AI to help less than vendors claim; where a team is struggling, the gains are real and worth measuring properly.</li>
      </ul>

      <h2 id="sample-templates">Sample Templates <Tag kind="carried" />
      </h2>
      <p>Carried forward from CITPM Appendix B, directly reusable.</p>
      <ul>
        <li>
          <strong>Project management plan</strong> &mdash; overview and charter; integration
          approach; scope statement and work breakdown structure; time, cost, quality, human
          resource, communications, and risk management plans; procurement management; and an
          annex for the detailed schedule, costing, quality checklists, and registers.
        </li>
        <li><strong>Change register</strong> &mdash; change, priority, impact and proposed resolution, effort, responsible owner, due date, status.</li>
        <li><strong>Issue register</strong> &mdash; issue, severity, proposed resolution, owner, due date, status.</li>
        <li><strong>Defect register</strong> &mdash; defect, severity, impact and proposed resolution, effort, owner, due date, status.</li>
        <li><strong>Risk register</strong> &mdash; risk area/context/consequences, category, impact, probability, exposure score, mitigation action, trigger for contingency, contingency action, owner, closure date.</li>
      </ul>
    </article>
  );
}
