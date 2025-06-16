// Database Configuration
// Change STORAGE_FORMAT to switch between 'txt' and 'json'
export const STORAGE_CONFIG = {
  format: "txt" as "txt" | "json", // Change this to 'json' if you prefer JSON format
  filename: {
    txt: "login-database.txt",
    json: "login-database.json",
  },
}

// Instructions:
// - For TXT format: Set format to 'txt' - creates a readable text file
// - For JSON format: Set format to 'json' - creates a structured JSON database
//
// The file will be created in your project root directory
