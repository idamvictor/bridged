export default function page() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="http://test.bridgedimpact.com/members"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Wikipedia Embed"
        allowFullScreen
      />
    </div>
  );
}
