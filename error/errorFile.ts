export enum STATUS {
  OK = 200,
  CREATED = 201,
  BAD = 404,
}

interface iError {
  errorName: string;
  errorMessage: string;
  errorStatus: STATUS;
  errorSuccess: boolean;
}

export class errorFile extends Error {
  public readonly errorName: string;
  public readonly errorMessage: string;
  public readonly errorStatus: STATUS;
  public readonly errorSuccess: boolean = false;
  constructor(arggs: iError) {
    super(arggs.errorMessage);
    this.errorName = arggs.errorName;
    this.errorMessage = arggs.errorMessage;
    this.errorStatus = arggs.errorStatus;
    if (this.errorSuccess !== undefined) {
      this.errorSuccess = this.errorSuccess;
    }
    Error.captureStackTrace(this);
  }
}
