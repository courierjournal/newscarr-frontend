/**
 * Used to define the base path used to access the backend
 */
export const baseUrl =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:8000";
