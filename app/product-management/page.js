import Link from "next/link";
import Tag from "../../components/Tag";

export default function ProductManagementPage() {
  return (
    <article className="prose">
      <span className="eyebrow">Section 3 &middot; Full Pillar &middot; The CITP2M Differentiator</span>
      <h1>Product Management</h1>
      <p className="lede">
        Net-new domain. Primary sources: GovTech&rsquo;s Software Delivery Playbook (its
        Principles, and its Planning / Design / Development / Delivery / Operation / Reflection
        practices) and PMI Disciplined Agile&rsquo;s Product Management process blade. SVPG and
        Blume VC content is kept only where those sources are silent &mdash; chiefly post-launch
        growth.
      </p>

      <div className="callout">
        <strong>What PMI Disciplined Agile adds</strong>
        Its Product Management process blade frames the discipline as continuous and
        evolutionary: identifying and prioritising offerings against strategy, forming a vision
        for each, understanding customer needs directly, and de-risking delivery through{" "}
        <strong>MVPs</strong> (minimum viable products, for learning what to build) and{" "}
        <strong>MBIs</strong> &mdash; minimum business increments, the smallest slice of an
        offering that delivers measurable business value on its own. Teams choose their own way
        of working (WoW) rather than following one prescribed process.
      </div>

      <h2 id="guiding-principles">Guiding Principles <Tag kind="new" />
      </h2>
      <p>
        Adapted from the Software Delivery Playbook&rsquo;s principles, reframed for product
        decision-making rather than engineering alone.
      </p>
      <ul>
        <li><strong>Feedback loops</strong> &mdash; shorten the distance between a product decision and evidence of whether it worked.</li>
        <li><strong>Shift left</strong> &mdash; validate problems and risks before they&rsquo;re expensive to change, not after launch.</li>
        <li><strong>Pervasive automation</strong> &mdash; automate what can be automated so product judgement is spent on what can&rsquo;t.</li>
        <li><strong>Everything as code</strong> &mdash; specifications, decisions, and configuration live in version control, not in slide decks that drift from reality.</li>
        <li><strong>Continuous improvement</strong> &mdash; the product operating model itself is a product; revisit and improve it deliberately.</li>
      </ul>

      <h2 id="planning-discovery-prioritisation">Planning &mdash; Discovery &amp; Prioritisation <Tag kind="new" />
      </h2>
      <p>GovTech&rsquo;s own terms for what other frameworks (Blume VC among them) call &ldquo;Discovery.&rdquo;</p>
      <ul>
        <li><strong>Inception</strong> &mdash; align on the problem and its business case before committing to build; identify the MBI that proves it.</li>
        <li><strong>User testing</strong> &mdash; primary and secondary research validated with real users, not assumed from a meeting room.</li>
        <li><strong>User stories</strong> &mdash; the shared unit of requirement between product and engineering.</li>
        <li><strong>Prioritisation</strong> &mdash; rank by frequency and intensity of the problem, not by who asked loudest; sequence by MBI, the smallest increment that still proves business value.</li>
      </ul>

      <h2 id="design">Design <Tag kind="new" />
      </h2>
      <p>
        Product&rsquo;s contribution to solutioning, cross-linked to{" "}
        <Link href="/project-management">Section 2</Link> for the engineering-execution side.
      </p>
      <ul>
        <li><strong>Domain-driven design</strong> &mdash; a shared language between product and engineering for the problem space.</li>
        <li><strong>Evolutionary architecture</strong> &mdash; design for change, not for a fixed final state.</li>
        <li><strong>Standardised design artefacts and Architecture Decision Records</strong> &mdash; so decisions survive team turnover.</li>
      </ul>

      <h2 id="delivery-development">Delivery &amp; Development <Tag kind="new" />
      </h2>
      <p>
        Points to <Link href="/project-management">Section 2&rsquo;s Agile Delivery</Link>{" "}
        content for team practice; this is what the Software Delivery Playbook adds specifically
        for engineering rigour.
      </p>
      <ul>
        <li><strong>Automated testing</strong> &mdash; writing tests that actually catch regressions, test-driven development (TDD), behaviour-driven development (BDD).</li>
        <li><strong>Refactoring and code quality</strong> &mdash; kept as ongoing discipline, not a special project.</li>
        <li><strong>Building security in</strong> &mdash; addressed during development, not bolted on before release.</li>
        <li><strong>Source code management and code review</strong> &mdash; every change reviewed before it merges.</li>
        <li><strong>CI/CD and continuous integration</strong> &mdash; the default delivery pipeline.</li>
        <li><strong>Performance testing and user acceptance testing</strong> &mdash; part of the pipeline, not a separate phase at the end.</li>
        <li><strong>Defect management and a clear Definition of Done</strong> &mdash; so &ldquo;done&rdquo; means the same thing to everyone.</li>
        <li><strong>Continuous delivery and automated environment setup</strong> &mdash; releasing is a routine event, not a project.</li>
      </ul>

      <h2 id="operation">Operation <Tag kind="new" />
      </h2>
      <p>Product ownership doesn&rsquo;t end at ship.</p>
      <ul>
        <li><strong>&ldquo;You build it, you run it&rdquo;</strong> &mdash; the team that ships a feature owns its production behaviour.</li>
        <li><strong>Design applications for operations, and for observability</strong> from the start, not retrofitted after an incident.</li>
        <li><strong>Automate operations and monitor continuously</strong>, feeding operational learning back into the roadmap.</li>
        <li><strong>Continuous operation improvement</strong> &mdash; production health is a product metric, not just an engineering one.</li>
      </ul>

      <h2 id="reflection">Reflection <Tag kind="new" />
      </h2>
      <p>
        Retrospectives, applied at the product level &mdash; not just the sprint level. Ask
        whether the product bet paid off, not only whether the sprint delivered its stories.
      </p>

      <h2 id="metrics-growth">Metrics &amp; Growth <Tag kind="new" />
      </h2>
      <p>
        SVPG- and Blume VC-supplemented. This fills the gap GovTech&rsquo;s engineering-first
        playbook leaves for consumer and B2B product contexts beyond government delivery.
      </p>
      <ul>
        <li>A North Star metric that ties product activity to business outcome.</li>
        <li>Retention and funnel analysis to find where users drop off.</li>
        <li>Product-led growth loops &mdash; where usage itself drives further acquisition.</li>
      </ul>

      <h2 id="product-management-in-the-ai-era">Product Management in the AI Era <Tag kind="new" />
      </h2>
      <p>
        Building AI-native products, deciding where to invest in AI-driven features, and
        evaluating AI/ML vendor and model choices as product inputs &mdash; not purely
        engineering or procurement decisions.
      </p>
      <h3>Scoping &ldquo;agentic&rdquo; features honestly</h3>
      <p>
        Adoption pressure is real: industry estimates put a large and growing share of
        business-to-business purchasing as AI-agent-facilitated, and most business leaders surveyed
        in 2025 said they planned to deploy AI agents within 12&ndash;18 months. That pressure makes
        it tempting to label any AI feature &ldquo;agentic&rdquo; in a roadmap deck. Before writing
        the spec, check the feature against{" "}
        <Link href="/foundations#ai-fluency-for-practitioners">
          the five characteristics in Section 1
        </Link>{" "}
        &mdash; goal-directed, context-aware, reasoning/planning, adaptive, autonomous. A feature
        that&rsquo;s genuinely agentic needs materially more eval coverage, a bounded action scope,
        and human-approval gates; a feature that&rsquo;s really a single-shot generative call
        wearing agentic branding doesn&rsquo;t, and over-specifying it wastes engineering effort
        that should go toward real risk.
      </p>
      <h3>AI evals are now a core PM skill</h3>
      <p>
        An <strong>eval</strong> is a structured, repeatable test suite that measures an AI
        feature&rsquo;s output against criteria the PM defines &mdash; not a QA afterthought.
        Teams that run evals before launch report going from idea to validated feature in
        3&ndash;7 days; teams that skip this and iterate through production complaints instead
        report 8&ndash;14 weeks at roughly 10&times; the cost.
      </p>
      <ul>
        <li>
          An AI feature spec needs <strong>negative acceptance criteria</strong> &mdash; what the
          model must <em>not</em> do &mdash; alongside the usual positive requirements.
        </li>
        <li>
          Distinguish <strong>offline evaluation</strong> (testing against a fixed dataset before
          release) from <strong>online evaluation</strong> (monitoring real production output),
          and plan for both.
        </li>
        <li>
          Maintain a risk register specifically for AI-feature failure modes &mdash;
          hallucination and prompt injection are the two that most commonly slip past
          conventional QA &mdash; and cross-reference it against the risk categories in{" "}
          <Link href="/foundations">Section 1</Link>.
        </li>
        <li>
          Where the feature involves an autonomous agent rather than a single AI response, apply{" "}
          <Link href="/outsourcing">Section 4&rsquo;s AI vendor/agent governance content</Link>{" "}
          even for in-house builds &mdash; the accountability questions don&rsquo;t go away just
          because it wasn&rsquo;t outsourced.
        </li>
        <li>
          For agent-based features specifically, size evals and monitoring to autonomy level using{" "}
          <Link href="/foundations#governance-ethics-incl-responsible-ai">
            GovTech&rsquo;s ARC Framework and IMDA&rsquo;s Model AI Governance Framework for
            Agentic AI
          </Link>{" "}
          &mdash; a chat assistant that drafts a reply for review needs far less scrutiny than one
          that sends the reply itself.
        </li>
      </ul>

      <h2 id="bridge-to-project-management">Bridge to Project Management <Tag kind="new" />
      </h2>
      <p>
        Where product and project responsibilities overlap &mdash; roadmap versus delivery plan,
        product metrics versus project status, MBIs versus milestones &mdash; and where they
        diverge. This is the connective tissue that justifies combining both into one
        certification track.
      </p>
    </article>
  );
}
