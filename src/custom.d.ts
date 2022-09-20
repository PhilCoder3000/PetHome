declare module '*.svg' {
  const content: any;
  export default content;
}

declare global {
  interface Window {
    google?: Google;
  }
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GOOGLE_API_KEY: string;
      REACT_APP_CLIENT_ID: string;
      REACT_APP_CLIENT_SECRET: string;
    }
  }
}


export {};
