import Tag from "../../components/Tag";

export default function FoundationsPage() {
  return (
    <article className="prose">
      <span className="eyebrow">Section 1</span>
      <h1>Common Foundations</h1>
      <p className="lede">
        Read this regardless of track. Every knowledge area here is drawn on by Project,
        Product, and Outsourcing work alike.
      </p>

      <h2>
        Stakeholder Management <Tag kind="carried" />
      </h2>
      <p>
        Carried forward from CITPM Chapter 12 and COMIT Chapter 6. A stakeholder is anyone who
        has interest in a project or its outcome, rights or ownership affected by it, or the
        ability to contribute to or impact it &mdash; internal (project team, management) or
        external (regulators, suppliers, the public).
      </p>
      <h3>Process</h3>
      <ul>
        <li>
          <strong>Identify &amp; analyse</strong> &mdash; map stakeholders against interest and
          influence (a power/interest or influence/impact grid) so limited engagement time goes
          where it matters most.
        </li>
        <li><strong>Plan for engagement</strong> &mdash; a strategy per stakeholder segment, not a single one-size-fits-all approach.</li>
        <li><strong>Manage engagement</strong> &mdash; communicate and work with stakeholders to meet their needs and expectations.</li>
        <li><strong>Control engagement</strong> &mdash; monitor the relationship and adjust the plan as the project evolves.</li>
      </ul>
      <h3>Principles that hold across every relationship</h3>
      <ul>
        <li>Fairness and confidentiality.</li>
        <li>Honesty and openness &mdash; consistent communication reduces the perception gaps that mask real problems.</li>
        <li>Efficiency and effectiveness.</li>
        <li>Professionalism, including managing cultural differences deliberately, not by accident.</li>
      </ul>
      <p>
        For client&ndash;vendor relationships specifically, assess health regularly against a
        short set of questions: are both sides happy with the relationship, has trust been
        established, does one side feel it is giving more than it receives, and are there
        specific issues that can&rsquo;t be resolved without escalation?
      </p>
      <h3>Typical stakeholder categories</h3>
      <p>
        A useful checklist when building a stakeholder map, so no group gets forgotten: top
        management, functional managers, the project team itself, suppliers/vendors/contractors,
        staff and personnel, service and support functions, other project managers sharing
        resources, regulatory agencies, the public and press, and the economic/financial,
        social/cultural, and environmental/legal context the project sits in.
      </p>

      <h2>
        Communications Management <Tag kind="carried" />
      </h2>
      <p>
        Carried forward from CITPM Chapter 9 and COMIT Chapter 12, merged into one treatment.
      </p>
      <h3>Mechanisms</h3>
      <ul>
        <li>
          <strong>Documentation</strong> &mdash; <em>process documents</em> that control the work
          itself (project management plan, test plans, progress and status reports), and{" "}
          <em>product documents</em> that specify what&rsquo;s being built (requirements and
          design specifications, user and installation guides, technical reports).
        </li>
        <li><strong>Presentations</strong> &mdash; for interactive clarification that a document alone can&rsquo;t provide.</li>
        <li><strong>Meetings</strong> &mdash; the primary forum for coordinating people who work independently.</li>
        <li><strong>Collaborative tools</strong> &mdash; shared, current status rather than status locked in last week&rsquo;s report.</li>
      </ul>
      <h3>Cadence</h3>
      <ul>
        <li>Operational level: a regular (at least monthly) meeting between delivery teams to resolve day-to-day issues.</li>
        <li>Strategic level: an annual or semi-annual meeting between senior stakeholders to reset direction.</li>
        <li>
          Match cadence to audience: daily standups for the team, milestone-based updates for
          sponsors; default to the channel the audience already uses.
        </li>
        <li>Document decisions, not just discussions &mdash; a decision log outlives the meeting that produced it.</li>
        <li>Handle confidential and personal data under applicable data protection law (e.g. Singapore&rsquo;s PDPA) in every channel, not just formal reports.</li>
      </ul>

      <h2>
        Risk Management <Tag kind="modernized" />
      </h2>
      <p>
        Carried forward from CITPM Chapter 10 and COMIT Chapter 10, modernized. A risk is a
        possible future event with a probability of occurrence and a potential for loss;
        exposure is the product of probability and impact, and mitigation is anything that
        reduces that exposure.
      </p>
      <h3>Four risk categories (source-neutral, apply to any engagement)</h3>
      <ul>
        <li><strong>Technical, quality or performance</strong> &mdash; unproven or complex technology, shifting quality expectations.</li>
        <li><strong>Delivery management</strong> &mdash; poor allocation of time, resources, or scheduling.</li>
        <li><strong>Organisational</strong> &mdash; unreasonable cost/time/scope expectations, competing internal priorities.</li>
        <li><strong>External</strong> &mdash; vendor issues, legal or regulatory change, natural disaster &mdash; outside the team&rsquo;s control but still its problem.</li>
      </ul>
      <h3>The four-phase cycle</h3>
      <p>Identify &rarr; Assess &rarr; Mitigate &rarr; Monitor, repeated at every major milestone and whenever scope changes materially.</p>
      <ul>
        <li>
          <strong>Assess</strong> on two axes &mdash; probability and impact, each on a 1&ndash;5
          scale &mdash; multiplied into an exposure score. A common banding: 15&ndash;25 = high
          (red, active mitigation with a named owner), 6&ndash;14 = medium (yellow, documented
          and monitored), 1&ndash;5 = low (green, no active action).
        </li>
        <li>
          <strong>Mitigate</strong> using one of: acceptance, avoidance, protection (redundancy),
          reduction, research (gather more information), reserves (contingency budget/schedule),
          transfer (to a vendor or insurer), or a documented contingency plan.
        </li>
      </ul>
      <h3>AI-era additions</h3>
      <ul>
        <li><strong>Model risk</strong> &mdash; AI-generated outputs that are wrong, biased, or inconsistent in ways hard to catch before they reach users.</li>
        <li><strong>Data leakage to third-party AI tools</strong> &mdash; confidential or regulated data entered into AI assistants without organisational controls.</li>
        <li><strong>Hallucination in AI-assisted deliverables</strong> &mdash; plausible but incorrect content requiring a human verification step before sign-off.</li>
      </ul>

      <h2>
        Change Enablement <Tag kind="carried" />
      </h2>
      <p>
        Carried forward from CITPM Chapter 14, essentially unchanged &mdash; and backed by
        evidence: projects with strong change enablement are reported to be several times more
        likely to meet or exceed objectives.
      </p>
      <ul>
        <li>
          <strong>The commitment curve</strong> &mdash; people move (or resist moving) through
          Awareness &rarr; Understanding &rarr; Buy-in &rarr; Commitment &rarr; Advocacy. The
          resisting path (rumour/confusion &rarr; negative perception &rarr; decision not to
          support &rarr; change bypassed) has real costs: rework, help-desk load, and delayed
          benefit realisation.
        </li>
        <li>
          <strong>A change enablement plan</strong> has three parts: plan for the change
          (impact-assess each stakeholder group), manage the change (communicate vision and
          business case), enable the change (build skills, align outcomes, keep people
          motivated).
        </li>
        <li>
          <strong>Change enablers</strong> &mdash; visible executive sponsorship plus a change
          network of champions embedded across the organisation, not just a top-down memo.
        </li>
        <li><strong>Change readiness</strong> &mdash; assess with a readiness survey, not by assumption.</li>
      </ul>

      <h2>
        HR / Team Management <Tag kind="carried" />
      </h2>
      <p>Carried forward from CITPM Chapter 8 and COMIT Chapter 11.</p>
      <h3>Three skills of an effective manager</h3>
      <p>
        <strong>People skills</strong> (empathy, listening, motivating, coaching) get a team to
        want to deliver. <strong>Process skills</strong> (onboarding, running reviews,
        performance evaluation, reassigning work as people transition in and out) get the team
        organised. <strong>Technical skills</strong> matter, but a manager without deep technical
        knowledge should focus on knowing the limits of their own knowledge &mdash; deciding what
        expertise is needed, and knowing when and how to bring in and evaluate a technical
        advisor.
      </p>
      <ul>
        <li>
          <strong>Team lifecycle</strong> &mdash; forming, storming, norming, performing,
          adjourning (Tuckman). Storming is necessary, not a failure; a team that skips it
          usually hasn&rsquo;t built real trust.
        </li>
        <li>
          <strong>Leadership style matched to team maturity</strong> &mdash; directing for low
          competence/high commitment, coaching for some competence/low commitment, supporting
          for high competence/low commitment, delegating for high competence/high commitment.
        </li>
        <li>
          <strong>Conflict resolution techniques</strong> &mdash; forcing (win-lose), compromising
          (negotiation), confrontation (problem-solving, win-win), withdrawal (avoidance),
          smoothing (accommodation). Problem-solving is the default; forcing and withdrawal are
          for when relationship or outcome genuinely don&rsquo;t matter.
        </li>
        <li>
          <strong>Staff transition in outsourcing</strong> (COMIT&rsquo;s especially reusable
          material) &mdash; plan explicitly for staff being retained, redeployed, transferred, or
          retrenched, with a communications schedule for each group; honest, timely
          communication is consistently the deciding factor in morale outcomes.
        </li>
      </ul>

      <h2>
        Governance &amp; Ethics, incl. Responsible AI <Tag kind="new" />
      </h2>
      <p>
        Net-new. Neither legacy Body of Knowledge addresses data or AI governance. Baseline
        expectations for practitioners:
      </p>
      <ul>
        <li>Disclosure norms &mdash; when and how AI-assisted work should be flagged as such to reviewers and stakeholders.</li>
        <li>Data governance for AI &mdash; what data may be used to prompt or fine-tune AI tools, and what must never leave the organisation&rsquo;s boundary.</li>
        <li>Algorithmic accountability &mdash; who is answerable when an AI-influenced decision causes harm, and how that is documented and traced.</li>
      </ul>

      <h2>
        AI Fluency for Practitioners <Tag kind="new" />
      </h2>
      <p>
        Net-new. A practitioner-level primer, not a technical how-to: using AI tools
        responsibly in delivery work &mdash; drafting requirements, supporting estimation,
        generating test cases &mdash; while keeping a human accountable for every output that
        reaches a stakeholder or a production system.
      </p>
    </article>
  );
}
