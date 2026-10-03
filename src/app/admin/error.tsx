"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function AdminError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Admin page error:", error);
  }, [error]);

  return (
    <div className="admin-info-card" style={{ maxWidth: "32rem", margin: "3rem auto", textAlign: "center" }}>
      <h3>Something went wrong</h3>
      <p style={{ fontSize: "0.875rem", color: "var(--admin-text-secondary)", marginBottom: "1.25rem" }}>
        This page failed to render. The rest of the admin panel is still usable.
      </p>
      {error.digest && (
        <p style={{ fontSize: "0.75rem", color: "var(--admin-text-muted)", marginBottom: "1.25rem" }}>
          Error ID: {error.digest}
        </p>
      )}
      <Button size="sm" color="primary" onPress={() => unstable_retry()}>
        Try again
      </Button>
    </div>
  );
}
