const fetchCategories = async () => {
  try {
    const res = await fetch("https://api.escuelajs.co/api/v1/categories");
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchCategories;
