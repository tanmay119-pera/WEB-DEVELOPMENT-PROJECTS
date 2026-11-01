// Staggered Facts Reveal Animation
export function animateFactsIn(facts: NodeListOf<HTMLElement>) {
  facts.forEach((f, i) => {
    setTimeout(() => { f.style.opacity = '1'; f.style.transform = 'none'; }, 70 * i + 80);
  });
}
