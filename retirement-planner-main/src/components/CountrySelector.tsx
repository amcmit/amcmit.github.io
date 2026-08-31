import { useCountry } from '../contexts/CountryContext';
import type { CountryCode } from '../countries';

export function CountrySelector() {
  const { country, config, setCountry } = useCountry();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = e.target.value as CountryCode;
    if (newCountry !== country) {
      setCountry(newCountry);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="country-select"
        className="text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        Country:
      </label>
      <select
        id="country-select"
        value={country}
        onChange={handleChange}
        className="px-3 py-1.5 text-sm border border-gray-300 dark:border-gray-600 rounded-md
                   bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                   focus:outline-none focus:ring-2 focus:ring-brand-500 dark:focus:ring-brand-400
                   cursor-pointer"
      >
        <option value="US">🇺🇸 United States</option>
        <option value="CA">🇨🇦 Canada</option>
      </select>
      <span className="text-xs text-gray-500 dark:text-gray-400">
        ({config.currency})
      </span>
    </div>
  );
}
