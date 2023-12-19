export default {
  async fetch(
    request: Request,
    Env: Record<string, unknown>,
    ctx: ExecutionContext
  ) {
    return new Response(
      `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Hello World</title>
        </head>
        <body>
            <h1>${await import("./helloWorld").then(
              ({ helloWorldText }) => helloWorldText
            )}</h1>
            <img alt="Workers logo" width=150 src="/assets/workers-logo.svg">
            </body>
        </html>
        `,
      {
        headers: {
          "content-type": "text/html;charset=UTF-8",
        },
      }
    );
  },
};
