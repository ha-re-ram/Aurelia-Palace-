import { useState } from "react";

type Props = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
};

/**
 * Image with two safety nets: a local fallback file, and finally a warm
 * gold-on-ivory CSS surface so a blocked hotlink never leaves a hole.
 */
export default function Img({ src, fallback, alt, className, style, loading = "lazy" }: Props) {
  const [stage, setStage] = useState(0);
  const current = stage === 0 ? src : fallback;

  if (stage > 1) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={className}
        style={{
          ...style,
          background:
            "radial-gradient(120% 90% at 20% 10%, #f7f1e6 0%, #efe6d4 45%, #d9c287 100%)",
        }}
      />
    );
  }

  return (
    <img
      src={current}
      alt={alt}
      className={className}
      style={style}
      loading={loading}
      decoding="async"
      onError={() => setStage((s) => s + 1)}
    />
  );
}
