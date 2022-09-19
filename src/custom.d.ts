declare module '*.svg' {
  const content: any;
  export default content;
}

declare global {
  const REACT_APP_CLIENT_ID: string;
  const REACT_APP_CLIENT_SECRET: string;
}

export {};
