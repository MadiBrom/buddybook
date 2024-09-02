const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export const fetchBooks = async () => {
  try {
    const response = await fetch(`${API_URL}/books`);
    if (!response.ok) {
      throw new Error("Failed to fetch books");
    }
    const data = await response.json();

    // Ensure the data structure is correct
    if (data && Array.isArray(data.books)) {
      console.log("Books fetched: ", data.books); // Log the books array
      return data.books;
    } else {
      throw new Error("Unexpected response structure from the API");
    }
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

export const fetchSingleBook = async (id) => {
  try {
    const response = await fetch(`${API_URL}/books/${id}`);
    if (!response.ok) {
      throw new Error(
        `Failed to fetch book with ID ${id}: ${response.statusText}`
      );
    }
    const data = await response.json();

    // Log the fetched book data
    console.log(`Book with ID ${id} fetched: `, data);

    return data;
  } catch (error) {
    console.error(`Error fetching book with ID ${id}:`, error);
    return { error: "Error fetching book", details: error.message };
  }
};
