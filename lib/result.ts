export type Error = { code: string; message: string } | null;

export interface IResult<T> {
  data: T | null;
  error: Error;
}

export class Result<T> implements IResult<T> {
  constructor(
    public readonly data: T | null,
    public readonly error: Error = null
  ) {}
}
