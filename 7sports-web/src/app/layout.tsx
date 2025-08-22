// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers"; // if you created it; otherwise remove this line too

export const metadata: Metadata = {
  title: "7Sports — Activités sportives pour enfants",
  description: "Multisport, Soccer, Dek hockey — Montréal, Montérégie, Estrie, Outaouais",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Remove <ViewTransitions /> for now */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
