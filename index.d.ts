declare module 'async-until' {
  type Options = {
    failMsg?: string;
    timeout?: number;
    loopDelay?: number;
    minLoops?: number;
  };

  export default function until(
    cb: () => unknown,
    opts?: Options
  ): Promise<void>;
}
