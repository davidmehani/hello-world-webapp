const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(API_BASE_URL);
export async function fetchMessage(): Promise<string> {

  const res = await fetch(`${API_BASE_URL}/hello`);
  
  const data = await res.json().catch((e) => console.error(e));

  return data.message;
}