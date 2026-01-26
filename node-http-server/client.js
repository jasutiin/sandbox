fetch('http://localhost:8080/hey', {
  method: 'POST',
  body: JSON.stringify({
    name: 'justine',
    major: 'computer science',
  }),
  headers: {
    'Content-Type': 'application/json',
  },
});
