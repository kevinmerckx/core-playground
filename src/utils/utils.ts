
export const SEPARATOR = '/';

export type PlaygroundSection = {
  name: string
  children: PlaygroundSection[]
  slot: string
};