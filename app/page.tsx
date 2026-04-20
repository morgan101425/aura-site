import { Hero } from '@/components/sections/hero';
import { ProblemSolution } from '@/components/sections/problem-solution';
import { Features } from '@/components/sections/features';
import { Proof } from '@/components/sections/proof';
import { Roadmap } from '@/components/sections/roadmap';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Features />
      <Proof />
      <Roadmap />
      <CTA />
    </>
  );
}
