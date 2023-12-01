export const categories = [
    { _id: "1", name: "Fiction" },
    { _id: "2", name: "History" },
    { _id: "3", name: "Classic" },
    { _id: "4", name: "Dystopian" },
    { _id: "5", name: "Personal Development" },
    { _id: "6", name: "Philosophy" },
    { _id: "7", name: "Science Fiction" },
  ];
  
  export function getCategories() {
    return categories.filter(g => g);
  }
  