import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Template from "./Template";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "../../styles/main.scss";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
});

export const metadata: Metadata = {
  title: "Invokers",

  description:
    "Invokers - Crafting innovative digital solutions with cutting-edge technologies. Specializing in web development, mobile apps, and custom software services.",
};
export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={nunito.className}>
        <NextIntlClientProvider messages={messages}>
          {/* {children} */}
          <Template />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
