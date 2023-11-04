import supabase from "./supabase";

async function getFacts() {
    try {
      // Replace "facts" with the name of your Supabase table
      const { data, error } = await supabase.from("facts").select("*");
     
      if (error) {
        throw error;
      }
     console.log(data)
      // Return the fetched data
      return data;
    } catch (error) {
      console.error("Error fetching facts:", error);
      throw error;
    }
  }
  
  export default getFacts;