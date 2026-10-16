"use client";

import { useEffect, useRef, useState } from "react";

export type Tool = {
  name: string;
  slug?: string;
  generic?: "prototype" | "system" | "layout";
};

const svgProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

function GenericIcon({ kind }: { kind: NonNullable<Tool["generic"]> }) {
  if (kind === "prototype") {
    return (
      <svg {...svgProps}>
        <polygon points="6 4 20 12 6 20 6 4" />
      </svg>
    );
  }
  if (kind === "system") {
    return (
      <svg {...svgProps}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    );
  }
  return (
    <svg {...svgProps}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

function BrandIcon({ name, slug }: { name: string; slug: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <span
        className="flex h-4 w-4 items-center justify-center rounded-sm bg-bg/15 text-[9px] font-bold leading-none text-bg/80"
        aria-hidden="true"
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={`https://cdn.simpleicons.org/${slug}/white`}
      alt=""
      width={16}
      height={16}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-4 w-4 opacity-80"
    />
  );
}

export default function ToolIcon({ tool }: { tool: Tool }) {
  if (tool.slug) return <BrandIcon name={tool.name} slug={tool.slug} />;
  if (tool.generic) {
    return (
      <span className="text-bg/80">
        <GenericIcon kind={tool.generic} />
      </span>
    );
  }
  return null;
}