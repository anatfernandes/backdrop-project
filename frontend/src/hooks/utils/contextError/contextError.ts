function contextError(name: string) {
  return new Error(`The "${name}" context is not available!`);
}

export { contextError };
