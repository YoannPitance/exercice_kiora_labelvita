export const metadata = {
  title: "LaBelVita",
  description: "Maison de qualité en ménage et repassage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
