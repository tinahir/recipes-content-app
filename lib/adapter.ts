export default interface IAdapter<T> {
  convert(item: unknown): T;
}
