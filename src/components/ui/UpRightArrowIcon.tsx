type UpRightArrowIconProps = {
  className?: string;
};

export default function UpRightArrowIcon({
  className = "",
}: UpRightArrowIconProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M3.5 12.5 12 4"
        stroke="#7c3aed"
        strokeWidth="1.75"
        strokeLinecap="square"
      />
      <path
        d="M6.25 3.5h6.25v6.25"
        stroke="#0f9f91"
        strokeWidth="1.75"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
