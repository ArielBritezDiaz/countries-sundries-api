declare namespace Express {
  export interface Request {
      req: any;
      user: any;
  }
  export interface Response {
      user: any;
  }
}