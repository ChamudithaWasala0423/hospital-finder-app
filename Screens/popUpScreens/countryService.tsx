// CountryService.ts
import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v2';

export const getCountryNames = async (): Promise<string[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/all`);
    const countryNames: string[] = response.data.map((country: any) => country.name);
    return countryNames;
  } catch (error) {
    console.error('Error fetching country names:', error);
    throw error;
  }
};
