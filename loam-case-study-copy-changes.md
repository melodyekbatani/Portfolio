# Loam Case Study — Copy Changes

**For:** Claude Code (terminal)
**Target page:** `melodyekbatani.com/loam`
**Goal:** Reframe from brand-led to product-led, add proof of shipping, add a seniority-signaling "Constraints & Decisions" section, and clean up the writing.

**Formatting notes for the whole job:**
- The change *instructions* below are bulleted for clarity, but the *replacement copy* stays in prose to match the existing case study template (all current sections are header + prose paragraphs, not bullets). Keep it that way.
- **Global edit across the entire Loam page:** remove every em dash. Replace each one with a period or comma, splitting into two sentences where needed.
- **Global edit:** break run-on sentences into shorter, clearer ones. Aim for one idea per sentence.
- Do not change layout, fonts, colors, grid order, or component structure. Copy/content only.

---

## ⚠️ FILL IN BEFORE RUNNING

Most facts are now filled in from the live site. Two optional tokens remain. Replace them or delete the sentence that uses them.

- `{{SHOPIFY_NUMBER}}` — OPTIONAL but high-value. One more real number from your Shopify admin (launch date, total products/SKUs, orders, or GMV). The "300+ vendors" figure is confirmed and used as-is throughout. If you don't have another number yet, delete the bracketed sentence in Change 8.
- `{{CONSTRAINT}}` and `{{REDESIGN}}` — one real limitation you hit (Shopify Collective or otherwise) and one real thing you redesigned or cut because of it. Used in Change 6.

*(Live link, team, and the verifiable scope facts below are already filled in.)*

---

## Change 1 — Hero tagline (under the "Loam" title)

- **Find:** "A mission-driven marketplace curating sustainable, organic products, designed end-to-end from brand identity to a scalable multi-seller system."
- **Replace with:**

> Shipped marketplace for 300+ vendors. Designed end-to-end, brand to system.

---

## Change 2 — Add a live link (near the title)

- Add a prominent text link / button:

> View live: https://shoploam.com/

---

## Change 3 — Overview section (reframe product-led)

- **Find header:** "For Earth, with love"
- **Replace header with:** "A two-sided marketplace, designed end to end"
- **Find body:** the two paragraphs beginning "Loam is a mission-driven marketplace that curates..."
- **Replace body with:**

> Loam is a mission-driven marketplace for sustainable, organic products. I led design across both sides of the marketplace: the shopper experience and the seller tools. The work spanned UX architecture, a scalable design system, and the brand identity that ties it together.
>
> The product brings vetted brands together across Wardrobe, Beauty & Wellness, Living, and Children. It gives shoppers one trusted place to discover better-for-you alternatives. The harder problem sat underneath the storefront. I had to design the systems that let independent vendors join, list, and operate, while keeping the experience consistent and trustworthy as the catalog scales.

---

## Change 4 — Role block + new Team block

- **Find:** "Product & Brand Designer (Freelance) — leading end-to-end product design, design systems, and brand identity"
- **Replace with:** "Product & Brand Designer (Freelance). Led product design, design systems, and brand identity."
- **Add a new Team block** directly after the Role block, matching the existing Timeline / Role / Scope / Tools block style:

> **Team**
> Allison Lomax (Founder)
> Lokendra Panwar, Sakshi Makode (Engineering consultants, Propero)

---

## Change 5 — Solution section (clarify your work vs. the platform, and your ownership)

- **Find header:** "End-to-end workflows for a multi-seller marketplace"
- **Replace header with:** "Designing the seller and shopper journeys"
- **Find body:** the two paragraphs beginning "I defined the core workflows across onboarding..."
- **Replace body with:**

> I designed the core workflows across both sides of the marketplace. This covered vendor onboarding, the seller portal, product listing, shipping and returns, and the shopper journey from discovery to checkout. I also designed the category system, which spans four departments (Wardrobe, Beauty & Wellness, Living, and Children) and roughly 25 subcategories.
>
> Loam runs on Shopify Collective, which provides the underlying multi-seller infrastructure for payments, vendor payouts, and order routing. My work was the experience layer on top. I designed how vendors move through onboarding and manage their storefronts. I also designed how shoppers discover and trust products across 300+ vendors without the experience feeling fragmented. I designed and built most of the marketplace myself, with two senior engineering consultants supporting a few focused tasks. Designing within Collective's constraints, rather than building infrastructure from scratch, kept the marketplace shippable on a small team.

---

## Change 6 — NEW section: "Constraints and decisions"

- Insert a new section **between Solution and Outcomes.** Match the existing section format (header + prose body).
- **Header:** "Constraints and decisions"
- **Body** (replace the bracketed parts with your real example, keep prose style):

> Building on Shopify Collective meant designing within fixed boundaries. {{CONSTRAINT: one real limitation. Example to replace: "Collective's vendor onboarding flow could not be fully customized, so seller setup had to fit a structure I did not control."}}
>
> {{REDESIGN: what you did about it. Example to replace: "I redesigned onboarding into a guided sequence layered on top of Collective's defaults. Vendors got a Loam-branded, lower-friction path to a live storefront without custom backend work."}}
>
> The recurring tradeoff was curation versus scale. The brand depends on everything feeling vetted and editorial. A multi-seller marketplace pulls toward volume and inconsistency. I prioritized a tightly designed system of components, templates, and guardrails. This let the catalog grow without each new vendor diluting the experience.

*(The final paragraph is safe to keep as written if it is true to the project. Replace the first two with your real constraint and response.)*

---

## Change 7 — Add real product screens

- In the Solution and/or new Constraints section, add 2–3 **actual product UI screens** (real seller portal, onboarding flow, or checkout state) alongside the existing brand reels. Use the same figure/caption format as existing images.
- Suggested captions:
  - "Vendor onboarding flow."
  - "Seller portal, product management."
  - "Shopper journey from discovery to checkout."
- *(Action for Melody: export these screens. Claude Code can wire them in once the image files exist in the project.)*

---

## Change 8 — Outcomes section (verifiable facts + optional real number)

- **Find:** "Loam launched as a unified, scalable marketplace supporting 300+ vendors, with a design system and brand identity that keep the experience consistent across product and marketing as the catalog grows."
- **Replace with:**

> Loam is live as a unified marketplace supporting 300+ vendors across four departments and roughly 25 subcategories, selling products from independent brands that ship direct from the maker. A design system and brand identity keep the experience consistent as the catalog grows, and a full supporting system is live: seller onboarding, product management, order tracking, and a returns flow that connects shoppers directly with each brand. {{SHOPIFY_NUMBER: optional, add one more real figure from your Shopify admin, e.g. "Launched [month/year] with [Y] products." Delete this sentence if you do not have one to stand behind.}}

- **Note:** the "300+ vendors" figure is confirmed and matches the hero tagline (Change 1). Keep it consistent across the page.

---

## Do NOT change

- Grid order, layout, fonts, colors, component structure.
- Timeline, Scope, or Tools blocks (Role block updated in Change 4; Team block added).
- Any other case study. These changes apply only to the Loam page.