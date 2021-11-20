import axios from "axios";
let url =
  "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json";

export const fetchCandidates = async () => {
  try {
    const candidateList = await axios.get(url);
    return candidateList.data;
  } catch (error) {
    console.error("Error Fetching Products", error);
    return null;
  }
};
