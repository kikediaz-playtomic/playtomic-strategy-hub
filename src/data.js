export const NOTION_DATABASE_ID = "a38406641ef1440891af2f8eda4a436e";
export const STATIC_DIMS = [
    {
        dimension: "1 — Skill representation ↔ Progress representation",
        leftPole: "Skill anchor",
        rightPole: "Progress signal",
        current: 35,
        target: 15,
        gap: "Overloaded",
        gapDir: "← Left",
        keyQuestion: "What does the level primarily represent?",
        coreTension: "A level that moves a lot may feel like progress, but loses match-picking credibility. A stable level helps matchmaking but may not satisfy the desire to feel improvement.",
        uncertainties: ["Progress", "Skill"],
        workstreams: ["Post-match progress surfaces", "Milestone & recognition layer", "Level stability logic"],
        implication: "Use level primarily as a skill anchor, and express progress in parallel systems.",
    },
    {
        dimension: "2 — Fully system-driven ↔ User-guided calibration",
        leftPole: "Automatic",
        rightPole: "User-guided",
        current: 20,
        target: 55,
        gap: "Black box",
        gapDir: "→ Right",
        keyQuestion: "Who controls and influences the level?",
        coreTension: "Purely algorithmic systems feel opaque and unfair. Purely user-declared ones feel unreliable and easy to manipulate.",
        uncertainties: ["System trust"],
        workstreams: ["Onboarding calibration flow", "Recalibration / reset flow", "Reassessment moments"],
        implication: "System-driven underneath, with clear and guided moments of user participation.",
    },
    {
        dimension: "3 — Single score ↔ Multi-dimensional representation",
        leftPole: "One number",
        rightPole: "Richer context",
        current: 25,
        target: 50,
        gap: "Limited signal",
        gapDir: "→ Right",
        keyQuestion: "How is skill represented to players?",
        coreTension: "A single number is powerful but hides a lot. Adding too much data creates overload. Relevance matters more than completeness.",
        uncertainties: ["Skill", "Behavioral"],
        workstreams: ["Player stats before match", "Match history signals", "Activity & evidence indicators"],
        implication: "Keep a simple level as the entry point, and surround it with relevant decision-support signals.",
    },
    {
        dimension: "4 — Highly dynamic ↔ Stability-oriented",
        leftPole: "Reacts quickly",
        rightPole: "Stable anchor",
        current: 20,
        target: 60,
        gap: "Too volatile",
        gapDir: "→ Right",
        keyQuestion: "How much should the level move over time?",
        coreTension: "Too much movement makes the level feel fragile. Too little makes the system feel stale. Perceived stability matters as much as objective variation.",
        uncertainties: ["Skill", "System trust"],
        workstreams: ["Stabilization & confidence logic", "Edge case handling", "Controlled recalibration"],
        implication: "Enough movement to stay credible, but enough stability to remain a useful decision anchor.",
    },
    {
        dimension: "5 — Opaque ↔ Explainable and transparent",
        leftPole: "Black box",
        rightPole: "Legible",
        current: 20,
        target: 65,
        gap: "Low trust",
        gapDir: "→ Right",
        keyQuestion: "Do players understand how their level works?",
        coreTension: "Trust is built by understanding, not only correctness. The goal is legibility, not full openness.",
        uncertainties: ["System trust"],
        workstreams: ["Post-match explanations", "Level change breakdowns", "Educational surfaces"],
        implication: "Enough explanation for players to trust and use the system confidently.",
    },
];

export const PRINCIPLES = [
    { n: 1, title: "Optimize for confidence at decision time", body: "The system must help players decide before playing — not just be mathematically correct over time." },
    { n: 2, title: "Do not overload the level", body: "Skill representation and progress expression should not be forced into one signal if that creates confusion." },
    { n: 3, title: "Trust beats hidden precision", body: "A slightly imperfect system that players trust creates more value than a precise one they don't." },
    { n: 4, title: "Keep simplicity on the surface", body: "Complexity should live underneath or in optional supporting layers." },
    { n: 5, title: "Use supporting signals to reduce uncertainty", body: "When the level isn't enough, add the right context around it — don't just make the level smarter." },
    { n: 6, title: "Legibility matters", body: "If players don't understand what a signal means, they won't use it confidently." },
    { n: 7, title: "Separate stable identity from short-term movement", body: "Stable anchors and meaningful progress are related but not identical needs." },
];

export const TRAPS = [
    { title: "Treating algorithm improvement as the full solution", body: "Better math matters, but it doesn't automatically create trust or better decisions." },
    { title: "Assuming level alone should solve match picking", body: "Leveling is a core piece, but match picking needs more signals." },
    { title: "Mixing too many jobs into the level", body: "When level tries to represent skill, progress, recognition, and status all at once, it becomes muddy." },
    { title: "Overcomplicating the experience", body: "Adding more data is not always better. What matters is relevance and usability." },
    { title: "Ignoring perception", body: "A technically reasonable system can still fail because it doesn't feel fair or understandable." },
];

export const UNCERTAINTIES = [
    { name: "Skill", q: "Will this be a balanced match?", cap: "Leveling", color: "#3B82F6" },
    { name: "Progress", q: "Am I improving or declining?", cap: "Post-match surfaces, milestones", color: "#22C55E" },
    { name: "Behavioral", q: "What kind of player is this?", cap: "Player stats, match history", color: "#F97316" },
    { name: "Social", q: "Will I enjoy playing with them?", cap: "Future contextual signals", color: "#EC4899" },
    { name: "System trust", q: "Can I trust what I'm seeing?", cap: "Explainability, recalibration", color: "#8B5CF6" },
];

export const GAP_COLORS = {
    "Overloaded": "#F59E0B",
    "Black box": "#EF4444",
    "Limited signal": "#EAB308",
    "Too volatile": "#EF4444",
    "Low trust": "#F97316",
};

export const UNCERTAINTY_COLORS = {
    Skill: "#3B82F6",
    Progress: "#22C55E",
    Behavioral: "#F97316",
    Social: "#EC4899",
    "System trust": "#8B5CF6",
};

export const FILTER_BTNS = [
    { key: "all", label: "All" },
    { key: "trust", label: "Trust & stability" },
    { key: "transparency", label: "Transparency" },
    { key: "user", label: "User agency" },
    { key: "context", label: "Context & stats" },
];