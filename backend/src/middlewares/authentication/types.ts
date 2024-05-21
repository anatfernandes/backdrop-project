type JwtPayloadType = { user: string };

type ContextType = { token: string; user?: string };

export type { JwtPayloadType, ContextType };
