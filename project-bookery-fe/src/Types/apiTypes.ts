export type apiClientType = {
  url: string;
  mock?: boolean;
};

export type APIResquestArgsType = {
  dispatch: (data: unknown) => void;
  loading: (loadVal: boolean) => void;
  data?: Record<string, unknown>;
};
