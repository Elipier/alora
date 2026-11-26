export type AppError = {
  code: "network" | "permission" | "unexpected";
  kind: "recoverable" | "blocking";
  message: string;
  log?: string;
};

export type AsyncState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: AppError };

export type AppResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: AppError };
