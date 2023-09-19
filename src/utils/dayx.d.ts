import dayjs from "dayjs";

declare module 'dayjs' {
  interface Dayjs {
    age: number;
    dte: string;
    tme: string;
    parseKt: (dte: string, tme?: string) => Dayjs;
  }
}

export = dayjs;
export as namespace dayjs;
