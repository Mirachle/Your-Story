export class AuthenticationError extends Error {
    public static isAuthenticationError(error: Error): error is AuthenticationError {
        return error instanceof AuthenticationError;
    }
}
