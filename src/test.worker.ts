import "@babel/polyfill";

const ctx: Worker = self as any;

ctx.addEventListener("message", async (e: any) => {
  ctx.postMessage("i am worker " + e.data);
});
