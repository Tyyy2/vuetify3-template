import dayjs from "dayjs";

declare module 'dayjs' {
  interface Dayjs {
    age: number;
    dte: string;
    tme: string;
  }
}

export = dayjs;
export as namespace dayjs;
