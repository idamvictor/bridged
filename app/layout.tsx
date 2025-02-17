import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "@/context/QueryProvider";

// Define Poppins font with desired weights and subsets
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"], // Specify the weights you need
  subsets: ["latin"], // Include the language subsets
  display: "swap", // Optimize rendering behavior
});

export const metadata: Metadata = {
  title: "Bridged Conect",
  description: "Social Media for Medical Practioners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* Apply the Poppins font globally via className */}
        <body className={`${poppins.className} antialiased`}>
          <QueryProvider>
            <div>
              <Header />
              {children}
            </div>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
