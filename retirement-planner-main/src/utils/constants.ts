import type { IncomeStream } from '../types';
import { v4 as uuidv4 } from 'uuid';

// US federal tax brackets, standard deductions, capital gains brackets, and
// RMD table/divisor are defined canonically in src/countries/usa/constants.ts.
// Re-exported here so existing imports throughout the app continue to work.
export {
  TAX_DATA_YEAR,
  TAX_BRACKETS_MFJ,
  TAX_BRACKETS_SINGLE,
  STANDARD_DEDUCTION_MFJ,
  STANDARD_DEDUCTION_SINGLE,
  CAPITAL_GAINS_BRACKETS_MFJ,
  CAPITAL_GAINS_BRACKETS_SINGLE,
  RMD_START_AGE,
  RMD_TABLE,
  getRMDDivisor,
  getRMDStartAge,
} from '../countries/usa/constants';

// Chart colors — muted, qualitative financial palette (kept print-safe: no
// pure saturated hues, each distinguishable at a glance and in grayscale).
export const CHART_COLORS = {
  pretax: '#2c4470', // ink navy
  roth: '#1f8a5f', // emerald
  taxable: '#b8862e', // muted gold
  hsa: '#6e5296', // plum
  tax: '#b23a48', // brick red
  socialSecurity: '#5c6f94', // steel blue
  spending: '#1b7a72', // deep teal
  pension: '#b0577b',          // rose
  otherIncome: '#c1712f',      // burnt orange
  taxFreeIncome: '#2c8c99',    // cyan-teal
  retirementIncome: '#3e7ca6', // slate sky
};

// Default values for new app state
export const DEFAULT_PROFILE = {
  country: 'US' as const,
  currentAge: 35,
  retirementAge: 65,
  lifeExpectancy: 90,
  region: 'CA', // California
  filingStatus: 'married_filing_jointly' as const,
  stateTaxRate: 0.05,
};

export const DEFAULT_ASSUMPTIONS = {
  inflationRate: 0.03,
  safeWithdrawalRate: 0.04,
  retirementReturnRate: 0.05,
};

export const DEFAULT_INCOME_STREAMS: IncomeStream[] = [
  {
    id: uuidv4(),
    name: 'Social Security',
    monthlyAmount: 2500,
    startAge: 67,
    taxTreatment: 'social_security',
  },
];
