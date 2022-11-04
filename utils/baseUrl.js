const baseUrl = process.env.NODE_ENV === "production" 
? 'next-custom-server-sequilizee.vercel.app' 
: 'http://localhost:3000';
export default baseUrl;