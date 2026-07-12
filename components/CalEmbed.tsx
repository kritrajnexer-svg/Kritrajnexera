"use client";

import { useEffect } from "react";

export default function CalEmbed() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (function (C: any, A: any, L: any) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          // eslint-disable-next-line prefer-rest-params
          const ar = Array.from(arguments);
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const api: any = function () {
              p(api, Array.from(arguments));
            };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(w, "https://app.cal.com/embed/embed.js", "init");

    w.Cal("init", "30min", { origin: "https://app.cal.com" });
    w.Cal.config = w.Cal.config || {};
    w.Cal.config.forwardQueryParams = true;
    w.Cal.ns["30min"]("inline", {
      elementOrSelector: "#my-cal-inline-30min",
      config: { layout: "week_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "kritraj-nexera-hs8mlq/30min",
    });
    w.Cal.ns["30min"]("ui", { hideEventTypeDetails: true, layout: "week_view" });
  }, []);

  return <div id="my-cal-inline-30min" className="min-h-[300px] w-full" />;
}
