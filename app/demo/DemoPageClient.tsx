"use client";

import { useState, useCallback } from "react";
import DemoForm from "@/components/demo/DemoForm";
import AutomationTimeline from "@/components/demo/AutomationTimeline";

export default function DemoPageClient() {
  const [running, setRunning] = useState(false);
  const [submissionData, setSubmissionData] = useState<Record<string, string> | null>(null);

  const handleSuccess = useCallback((data: Record<string, string>) => {
    setSubmissionData(data);
    setRunning(true);
  }, []);

  const handleReset = useCallback(() => {
    setRunning(false);
    setSubmissionData(null);
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <div>
        <DemoForm onSuccess={handleSuccess} />
      </div>
      <div>
        <AutomationTimeline
          running={running}
          submissionData={submissionData}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}
