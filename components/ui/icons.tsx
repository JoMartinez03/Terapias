import type { ReactNode, SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const strokeProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

type StrokeIconProps = { size?: number } & Omit<SVGProps<SVGSVGElement>, "viewBox">;

function StrokeIcon({
  size = 24,
  children,
  ...rest
}: StrokeIconProps & { children?: ReactNode }) {
  return (
    <svg {...strokeProps} width={size} height={size} {...rest}>
      {children}
    </svg>
  );
}

export function LotusIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <g>
        <path d="M12 8.2c1.7 2.1 2.6 4 2.6 5.9 0 1.8-1.2 3.2-2.6 4.2-1.4-1-2.6-2.4-2.6-4.2 0-1.9.9-3.8 2.6-5.9Z" />
        <path d="M12 8.2c1.7 2.1 2.6 4 2.6 5.9 0 1.8-1.2 3.2-2.6 4.2-1.4-1-2.6-2.4-2.6-4.2 0-1.9.9-3.8 2.6-5.9Z" transform="rotate(48 12 13.2)" />
        <path d="M12 8.2c1.7 2.1 2.6 4 2.6 5.9 0 1.8-1.2 3.2-2.6 4.2-1.4-1-2.6-2.4-2.6-4.2 0-1.9.9-3.8 2.6-5.9Z" transform="rotate(-48 12 13.2)" />
        <path d="M5 19.5h14" />
      </g>
    </StrokeIcon>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20 4c-9.8.2-16 4-16 16 9.8-.2 16-4 16-16Z" />
      <path d="M5.5 18.5C9.5 12 13.5 8 18.5 5.5" />
    </StrokeIcon>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M21 12.9A9 9 0 1 1 11.1 3 7 7 0 0 0 21 12.9Z" />
    </StrokeIcon>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 3.5c.6 3.6 2 5.2 5.5 5.9-3.5.7-4.9 2.3-5.5 5.9-.6-3.6-2-5.2-5.5-5.9 3.5-.7 4.9-2.3 5.5-5.9Z" />
    </StrokeIcon>
  );
}

export function TearIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 3c0 4 6 7.6 6 12a6 6 0 0 1-12 0c0-4.4 6-8 6-12Z" />
    </StrokeIcon>
  );
}

export function LoopIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M20 12a8 8 0 0 1-13.7 5.6" />
      <path d="M4 12a8 8 0 0 1 13.7-5.6" />
      <path d="M20 4v4h-4" />
      <path d="M4 20v-4h4" />
    </StrokeIcon>
  );
}

export function WaveIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M3 9c2.2-1.8 4.4-1.8 6.6 0s4.4 1.8 6.6 0" />
      <path d="M3 14c2.2-1.8 4.4-1.8 6.6 0s4.4 1.8 6.6 0" />
      <path d="M3 19c2.2-1.8 4.4-1.8 6.6 0s4.4 1.8 6.6 0" />
    </StrokeIcon>
  );
}

export function BranchIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M4 21C6.5 13 11 8 20 4" />
      <path d="M10.5 10.8C8.6 9.4 7.6 7.6 7.4 5.2c2.6.4 4.4 1.7 5.3 3.6Z" />
      <path d="M16.5 6.9c-1.2-1-2-2.2-2.3-3.7 2 .5 3.2 1.6 3.8 3.2Z" />
    </StrokeIcon>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M12 20.3S4 15.3 4 9.9a4.6 4.6 0 0 1 4.6-4.6c1.4 0 2.7.7 3.4 1.7.7-1 2-1.7 3.4-1.7A4.6 4.6 0 0 1 20 9.9c0 5.4-8 10.4-8 10.4Z" />
    </StrokeIcon>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="M5.6 5.6l1.4 1.4" />
      <path d="M17 17l1.4 1.4" />
      <path d="M5.6 18.4 7 17" />
      <path d="M18.4 5.6 17 7" />
    </StrokeIcon>
  );
}

export function CircleHeartIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 15.2s-3-2-3-4.4a2 2 0 0 1 2-2c.6 0 1.2.3 1.6.8.4-.5 1-.8 1.6-.8a2 2 0 0 1 2 2c0 2.4-3 4.4-3 4.4Z" />
    </StrokeIcon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </StrokeIcon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M3.5 6h17" />
      <path d="M3.5 12h17" />
      <path d="M3.5 18h17" />
    </StrokeIcon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <path d="M5 5l14 14" />
      <path d="M19 5 5 19" />
    </StrokeIcon>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <StrokeIcon {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </StrokeIcon>
  );
}

export function WhatsAppIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
      {...rest}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}