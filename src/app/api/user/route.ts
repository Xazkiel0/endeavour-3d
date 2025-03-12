export function GET() {
  return Response.json({ user: "John Doe" }, { status: 200 });
}
