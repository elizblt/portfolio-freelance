import { ReactNode } from "react";

export interface Feature {
  readonly icon: ReactNode;
  readonly title: string;
  readonly description: string;
}

export interface TiltState {
  readonly rx: number;
  readonly ry: number;
  readonly tz: number;
}

export interface SpotlightPosition {
  readonly x: string;
  readonly y: string;
}

export interface HeroColors {
  readonly accent: string;
  readonly accentSoft: string;
}

export interface AnimationConfig {
  readonly reduce: boolean;
  readonly duration: number;
  readonly delay: number;
}

export type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
  readonly href: string;
  readonly variant: ButtonVariant;
  readonly children: ReactNode;
  readonly ariaLabel?: string;
  readonly onClick?: () => void;
}
