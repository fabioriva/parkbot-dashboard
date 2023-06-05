const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

export function getJwtSecretKey() {
  if (!JWT_SECRET_KEY || JWT_SECRET_KEY.length === 0) {
    throw new Error("The environment variable JWT_SECRET_KEY is not set.");
  }

  return JWT_SECRET_KEY;
}
