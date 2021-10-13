async function fetchGraphQL(text, variables) {
  const response = await fetch('https://api.graphql.jobs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });
  // Get the response as JSON 
  return await response.json();
}
export default fetchGraphQL;