function validateImageRegex(text: string) {
  return /\.(?:jpg|gif|png|jpeg|svg)/.test(text);
}

export { validateImageRegex };
