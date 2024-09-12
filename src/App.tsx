import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

type AnyFn = (...args: any[]) => any;

/** 返回上一次的值 (面试手写版) */
function usePrevious<T>(value: T): T | undefined {
  const pre = useRef<T | undefined>();

  const [result, setResult] = useState<T | undefined>();

  useEffect(() => {
    setResult(pre.current);
    pre.current = value;
  }, [value]);

  return result;
}

/** 返回上一次的值 （面试完又想到的） */
function usePrevious2<T>(value: T): T | undefined {
  const pre = useRef<T | undefined>();

  return useMemo(() => {
    setTimeout(() => {
      pre.current = value;
    });
    return pre.current;
  }, [value]);
}

/** 面试手写版 */
const useDebounce = (fn: AnyFn, time: number) => {
  const timeout = useRef<number | null>(null);

  const debounce = useCallback(
    (fn: AnyFn, time: number) =>
      (...args: any[]) => {
        console.log(args, "args");
        if (timeout.current) {
          clearTimeout(timeout.current);
        }
        timeout.current = setTimeout(() => {
          fn.call(null, ...args);
        }, time);
      },
    [time]
  );

  return debounce(fn, time);
};

/** bitget  */
const useDebounceValue = <T,>(value: T, duration = 1000): T | null => {
  const newVal = useRef<T | null>(null);
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    // 不需要在这里再次 clear timeout
    // console.log(timeout.current, "timeout useDebounceValue");
    timeout.current = setTimeout(() => {
      newVal.current = value;
    }, duration);

    return () => {
      // console.log("destroy useDebounceValue timeout ");
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = null;
      }
    };
  }, [value, duration]);

  return newVal.current;
};

function App() {
  const [count, setCount] = useState(0);
  const [waitTime, setWaitTime] = useState(1000);
  const preCount = usePrevious(count);
  const preCount2 = usePrevious2(count);

  const debounceVal = useDebounceValue(count);

  return (
    <>
      <h1>
        部分面试手写题 <small>usePrevious/useDebounce</small>
      </h1>
      <h2
        onClick={() => {
          setWaitTime(waitTime === 1000 ? 5000 : 1000);
        }}
      >
        change wait Time {waitTime}
      </h2>
      <button
        onClick={() => {
          setCount(count + 2);
        }}
      >
        update count no debounce {count}, update 2 / time . pre value is{" "}
        {preCount} -- {preCount2}
      </button>
      <div>useDebounceValue is {debounceVal}</div>
      <div className="card">
        <button
          onClick={useDebounce(() => {
            // setCount((count) => count + 1)
            setCount(count + 1);
          }, waitTime)}
        >
          count is {count}
        </button>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          set value without debounce
        </button>
      </div>
    </>
  );
}

export default App;
