function getItinerary(event) {

  event.preventDefault()

  console.log(event.target.location.value);
  console.log(event.target.startdate.value);
  console.log(event.target.enddate.value);

  console.log("Hello there")
  fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer OPENAI_API_KEY'
    },

    body: JSON.stringify({
      'model': 'gpt-3.5-turbo',
      'messages': [
        {
          'role': 'user',
          'content': `plan a trip itinerary for someone going to ${event.target.location.value} from ${event.target.startdate.value} to ${event.target.enddate.value}. have about 3 or 4 things to do per day. respond ONLY with an array that has JSON objects with the parameters \`date\` \`eventTitle\` \`startTime\` \`endTime\`
          \`\`\`
          `
        }
      ],
    })
  })
}