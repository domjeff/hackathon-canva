# Canva

This repo is made for a hackathon, but decided to drop it due to insufficient
and move the implementation using canva sdk instead. OR I might
simply just drop the hackathon due to insufficient time.

The project is mostly taken from [canva-connect-api-starter-kit](https://github.com/canva-sdks/canva-connect-api-starter-kit)

The current state of the project has several endpoints, the notable ones
are:
1. `/authorize` as a gate for authorize the session. <br>
In the process, the service will redirect the request to canva authorization endpoint
2. `/oauth/redirect` this will be the webhook that receives the the authorization from canva auth service.