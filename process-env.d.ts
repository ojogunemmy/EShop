

  declare  namespace NodeJS {
      interface ProcessEnv {
        [key: string]: string | undefined;
        REACT_APP_RECAPTCHA: string
      }
    }