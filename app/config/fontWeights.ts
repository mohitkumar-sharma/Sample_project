type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

interface FontWeights {
  [key: string]: FontWeight;
}

const FONT_WEIGHT_THIN = '100'; // Thin
const FONT_WEIGHT_ULTRALIGHT = '200'; // Ultra Light
const FONT_WEIGHT_LIGHT = '300'; // Light
const FONT_WEIGHT_REGULAR = '400'; // Regular
const FONT_WEIGHT_MEDIUM = '500'; // Medium
const FONT_WEIGHT_SEMIBOLD = '600'; // Semibold
const FONT_WEIGHT_BOLD = '700'; // Bold
const FONT_WEIGHT_HEAVY = '800'; // Heavy
const FONT_WEIGHT_BLACK = '900'; // Black

const FONT_WEIGHTS: FontWeights = {
  FONT_WEIGHT_THIN,
  FONT_WEIGHT_ULTRALIGHT,
  FONT_WEIGHT_LIGHT,
  FONT_WEIGHT_REGULAR,
  FONT_WEIGHT_MEDIUM,
  FONT_WEIGHT_SEMIBOLD,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_HEAVY,
  FONT_WEIGHT_BLACK,
};

export default FONT_WEIGHTS;
