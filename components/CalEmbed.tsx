"use client";

export default function CalEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-bg">
      <iframe
        src="https://cal.com/kritraj-nexera-xutd9n/15min?embed&slot"
        width="100%"
        height="700"
        className="min-h-[500px] w-full border-0 sm:min-h-[700px]"
        title="Book a strategy call"
        loading="lazy"
      />
    </div>
  );
}
