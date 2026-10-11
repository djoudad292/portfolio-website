"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  lead: string;
  defaultLabel?: string;
};

function normalize(raw: string): string | null {
  const value = raw.trim();
  if (!value) return null;
  const candidate = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  try {
    const url = new URL(candidate);
    if (!/^https?:$/.test(url.protocol)) return null;
    if (!url.hostname.includes(".")) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function hostOf(value: string): string {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value;
  }
}

export function TryYourSite({ lead, defaultLabel = "Build my live demo" }: Props) {
  const router = useRouter();
  const [site, setSite] = useState("");
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const target = normalize(site);
    if (!target) {
      setError("Enter a website address, for example your-clinic.com");
      return;
    }
    setError(null);
    router.push(
      `/talk?l=${encodeURIComponent(lead)}&s=${encodeURIComponent(target)}&c=${encodeURIComponent(hostOf(target))}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-5">
      <label htmlFor={`try-site-${lead}`} className="block text-sm font-medium">
        Run it on your own site
      </label>
      <div className="mt-3 flex flex-wrap gap-3">
        <input
          id={`try-site-${lead}`}
          type="text"
          inputMode="url"
          autoComplete="url"
          placeholder="your-clinic.com"
          value={site}
          onChange={(event) => {
            setSite(event.target.value);
            if (error) setError(null);
          }}
          className="min-w-0 flex-1 rounded-xl border border-border bg-card px-4 py-3 text-sm text-card-foreground outline-none transition-colors focus:border-primary"
        />
        <button
          type="submit"
          className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {defaultLabel}
        </button>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">
        No signup and no call. It reads your public pages first, then answers
        questions the way an agent trained on your business would.
      </p>
      {error ? (
        <p role="alert" className="mt-2 text-sm font-medium text-destructive">
          {error}
        </p>
      ) : null}
    </form>
  );
}
