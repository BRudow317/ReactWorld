export class ApiError extends Error {
  constructor(message, { status, data, url, method } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
    this.url = url;
    this.method = method;
  }
}
