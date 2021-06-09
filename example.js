const Analytics = require(".");

// we need the batch endpoint of the Rudder server you are running
const client = new Analytics(
  "1tiCe202QkihuA2jVOjr63mQ4fP",
  "https://70df5c9eb4f4.ngrok.io/v1/batch",
  { loglevel: "verbose" }
);

const typewriter = require("./typeWriterClient");

// Pass in your analytics-node instance to Typewriter.
typewriter.setTypewriterOptions({
  analytics: client
});

// SignInFailed Call
typewriter.signInFailed(
  {
    userId: "john",
    properties: {
      dimensions: {
        height: 10,
        length: 10,
        width: 10
      },
      id: "4009",
      numAttempts: 2,
      rememberMe: false
    }
  },
  () => {
    console.log("Signin Failed Callback triggered");
  }
);

// SignInSubmitted Call
typewriter.signInSubmitted(
  {
    userId: "john",
    properties: {
      dimensions: {
        height: 10,
        length: 10,
        width: 10
      },
      id: "4009",
      numAttempts: 2,
      rememberMe: false
    }
  },
  () => {
    console.log("Signin Submitted Callback triggered");
  }
);

// SignInSucceeded Call
typewriter.signInSucceeded(
  {
    userId: 4009,
    properties: {
      id: "4009",
      numAttempts: 2,
      rememberMe: false
    }
  },
  () => {
    console.log("Signin Succeeded Callback triggered");
  }
);

// User SignedOut Call
typewriter.userSignedOut(
  {
    userId: "4009",
    properties: {
      id: "4009",
      numAttempts: 2,
      rememberMe: false
    }
  },
  () => {
    console.log("User Signedout Callback triggered");
  }
);

client.identify({
  userId: "123456",
  traits: {
    name: "Name Username",
    email: "name@website.com",
    plan: "Free",
    friends: 21
  }
});

client.track({
  userId: "123456",
  event: "Item Viewed",
  properties: {
    revenue: 19.95,
    shippingMethod: "Premium"
  }
});

client.page({
  userId: "12345",
  category: "Food",
  name: "Pizza",
  properties: {
    url: "https://dominos.com",
    title: "Pizza",
    referrer: "https://google.com"
  }
});
