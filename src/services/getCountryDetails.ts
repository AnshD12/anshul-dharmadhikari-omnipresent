import { ICountryDetails } from '../interfaces/global';
import axios from 'axios';
import { logger } from '../utilities/logger';

const getCountryDetails = async (countryCode: string): Promise<ICountryDetails> => {
  try {
    const countryDetails = await axios.get(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    return {
      country: countryDetails.data[0].name.common,
      timezones: countryDetails.data[0].timezones,
      currency: countryDetails.data[0].currencies,
      languages: countryDetails.data[0].languages,
      region: countryDetails.data[0].region,
    };
  } catch (error) {
    logger.error(error);
    return {
      errorCode: 'ERR404',
      error: 'error in fetching country details',
    };
  }
};

export default getCountryDetails;
