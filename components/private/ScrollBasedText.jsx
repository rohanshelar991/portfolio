import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedText() {
  return (
    <div className="scroll_identity_band py-[2rem] md:py-[6rem]">
      <div className="scroll_identity_intro">
        <span>Identity Band</span>
      </div>
      <VelocityScroll
        text="• Developer • Designer • Freelancer • Automater"
        nText="Developer • Designer • Freelancer • Automater •"
        default_velocity={2}
        className="scroll_identity_text font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
  );
}
