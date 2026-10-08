import Image from "next/image";

const tones = {
  blue: { bg: "bg-primary-100", fg: "text-primary-300" },
  sand: { bg: "bg-paper-deep", fg: "text-paper-line" },
  orange: { bg: "bg-accent-100", fg: "text-accent-300" },
} as const;

type PersonTileProps = {
  name: string;
  photo: string | null;
  tone?: keyof typeof tones;
  /** Shown as a large monogram when there is no photo. */
  initials?: string;
};

// Portrait tile. Shows the photo when one is supplied, otherwise a monogram or
// a neutral silhouette so the layout holds up until real photos arrive.
export default function PersonTile({
  name,
  photo,
  tone = "blue",
  initials,
}: PersonTileProps) {
  if (photo) {
    return (
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 1024px) 24rem, 90vw"
          className="object-cover"
        />
      </div>
    );
  }

  const t = tones[tone];

  return (
    <div
      role="img"
      aria-label={`Photo of ${name} to be added`}
      className={`relative aspect-[4/5] overflow-hidden ${t.bg}`}
    >
      {initials ? (
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center font-heading text-8xl text-primary-700"
        >
          {initials}
        </span>
      ) : (
        <svg
          viewBox="0 0 100 125"
          fill="currentColor"
          aria-hidden="true"
          className={`absolute inset-x-0 bottom-0 h-[88%] w-full ${t.fg}`}
        >
          <circle cx="50" cy="44" r="19" />
          <path d="M10 125c0-30 18-47 40-47s40 17 40 47Z" />
        </svg>
      )}
    </div>
  );
}
