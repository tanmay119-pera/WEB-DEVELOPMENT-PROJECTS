// Decoupled Planetary States Model
export interface PlanetState {
  name: string;
  next: string;
  number: string;
  portal: string;
  background: string;
  facts: [string, string][];
}
export const STATE_KEYS = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
