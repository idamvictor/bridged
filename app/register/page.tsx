// import { RegisterForm } from "@/components/register-form";

export default function RegisterPage() {
  return (
    // <div className="flex items-center justify-center min-h-screen bg-background">
    //   <RegisterForm />
    // </div>

    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="https://connect.bridgedimpact.com/register/"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Groups Page"
        allowFullScreen
      />
    </div>
  );
}
