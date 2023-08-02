export default interface IReplacer {
  readonly slot: string | RegExp;
  readonly slotValue: string;
}
