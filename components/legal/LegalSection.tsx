// components/legal/LegalSection.tsx
// ─────────────────────────────────────────────────────────────────────
// A single numbered section inside a legal page.
// Renders a numbered heading + body text + optional bullet list.
//
// USAGE:
//   <LegalSection number="1" title="Information We Collect">
//     <p>We collect information you provide…</p>
//     <ul>
//       <li>Name and email address…</li>
//     </ul>
//   </LegalSection>
// ─────────────────────────────────────────────────────────────────────

interface LegalSectionProps {
    /** Section number displayed as prefix — e.g. "1", "2" */
    number: string;
    /** Section heading text */
    title: string;
    children: React.ReactNode;
}

export default function LegalSection({ number, title, children }: LegalSectionProps) {
    return (
        <section id={`section-${number}`} className="scroll-mt-28">
            {/* Section heading — number indicator + title */}
            <h2 className="flex items-baseline gap-3 text-xl sm:text-2xl font-semibold text-white mb-4 font-display">
                <span className="text-indigo-400 font-bold">{number}.</span>
                {title}
            </h2>

            {/* Body text — inherits the .legal-content styles from globals.css */}
            <div className="legal-section-body text-zinc-400 leading-relaxed space-y-4 pl-0 sm:pl-8">
                {children}
            </div>
        </section>
    );
}
