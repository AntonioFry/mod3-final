// import { setError, setAnimals, setDonations } from './actions';

export const fetchAnimals = async(setError, setAnimals) => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/rescue-animals`)
    const result = await response.json();
    setAnimals(result);

  } catch (error) {
    setError(error.message)
  }
}

export const fetchDonations = async(setError, setDonations) => {
  try {
    const response = await fetch(`http://localhost:3001/api/v1/donations`)
    const result = await response.json();
    setDonations(result);

  } catch (error) {
    setError(error.message)
  }
}

export const postDonation = async(setError, donation) => {
  try {
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(donation)
    }
    const response = await fetch(`http://localhost:3001/api/v1/donations/`, option);
    const result = await response.json()
  } catch (error) {
    setError(error.message);
  }
}