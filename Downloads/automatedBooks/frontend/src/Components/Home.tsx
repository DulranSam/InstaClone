import { useState } from "react";
import Axios from "axios";

const baseURL = "http://localhost:8000/home";

const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string[]>([]);
  const [book, setBook] = useState<string>("");

  async function createBook(e: React.FormEvent) {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios.post(baseURL, { story: book });
      setData(response.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1>Welcome to Books Diary 📚</h1>
      <form onSubmit={createBook}>
        <input
          onChange={(e) => {
            setBook(e.target.value);
          }}
          placeholder="Enter Book..."
        />
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Create your book!"}
        </button>
      </form>
      {data && data.length ? (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <h1>No results found!</h1>
      )}
    </>
  );
};

export default HomePage;
