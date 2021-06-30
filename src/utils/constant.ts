import type { AutoSizeType } from "rc-textarea";

export const defaultFormLayout = {
  normal: {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  },
  tail: {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  },
};

export const textareaAutoSize: AutoSizeType = {
  minRows: 3,
  maxRows: 6,
};

export const empty = {
  array: [],
  object: {},
  func() {},
  map: new Map(),
  set: new Set(),
};

export const INITAL = {
  total: 0,
  pageSize: 20,
  current: 1,
};
