"use client";

import { useState, useCallback } from "react";
import DemoForm from "@/components/demo/DemoForm";
import AutomationTimeline from "@/components/demo/AutomationTimeline";

type Status = "idle" | "running" | "completed" | "error";

export default function DemoPageClient() {
  const [status, setStatus] = useState<Status>("idle");
  const [submissionData, setSubmissionData] = useState<Record<string, string> | null>(null);

  const handleSuccess = useCallback((data: Record<string, string>) => {
    setSubmissionData(data);
    setStatus("running");
  }, []);

  const handleStatusChange = useCallback((newStatus: Status) => {
    setStatus(newStatus);
    if (newStatus === "idle") setSubmissionData(null);
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-start">
      <div className="lg:sticky lg:top-24">
        <DemoForm
          onSuccess={handleSuccess}
          disabled={status === "running" || status === "completed"}
          key={status === "idle" ? "fresh" : "submitted"}
        />
      </div>
      <div>
        <AutomationTimeline
          status={status}
          onStatusChange={handleStatusChange}
          leadData={submissionData ?? undefined}
        />
      </div>
    </div>
  );
}
