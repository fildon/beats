# Beats

Drum tab to synthesizer.

Deployed at [rupertmckay.com](https://rupertmckay.com/beats/)

## Local Development

Audio is driven by local mp3 files.

For local development we must run a webserver to avoid CORS issues. This is resolved by running the provided `startLocal` npm script.

For deployment there is no CORS issue since the files are all served from the same origin.
