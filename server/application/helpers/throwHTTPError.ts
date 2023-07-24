class HTTPError extends Error {
  code: number;
  constructor(code: number, message: string) {
    super();
    this.code = code;
    this.message = message;
  }
}

const throwHTTPError = (code: number, message: string) => {
  throw new HTTPError(code, message);
};

export default throwHTTPError;
