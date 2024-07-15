function getItinerary(event) {

  event.preventDefault()

  console.log(event.target.location.value);
  console.log(event.target.startdate.value);
  console.log(event.target.enddate.value);

  console.log("Hello there")
  fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      //optional, meant for security checks (authentication)
      headers: {
        ...
      },
      //NOT needed with GET request
      body: JSON.stringify({
       ...
      })
  })
}
