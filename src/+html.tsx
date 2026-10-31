import type { ReactNode } from "react";

export default function Root({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        <meta
          name="description"
          content="Dee Kitchen Tasta serves authentic Calabar flavours, freshly prepared with love. Explore our pepper soups, traditional soups and stews, and order conveniently on WhatsApp."
        />

        <meta
          name="keywords"
          content="Dee Kitchen Tasta, Calabar food, Nigerian food, pepper soup, Afang soup, Egusi soup, Banga soup, Fisherman soup, Abuja food delivery, Wuse Zone 3 restaurants"
        />

        <meta name="author" content="Dee Kitchen Tasta" />

        <meta name="theme-color" content="#fcf4e9" />

        <meta name="robots" content="index, follow" />

        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Dee Kitchen Tasta | Authentic Calabar Flavours"
        />

        <meta
          property="og:description"
          content="Authentic Calabar flavours, cooked fresh and served with love. Explore our menu and order your favourites."
        />

        <meta property="og:site_name" content="Dee Kitchen Tasta" />

        <meta
          property="og:url"
          content="https://dee-kitchen-tasta.vercel.app"
        />

        <title>Dee Kitchen Tasta | Authentic Calabar Food in Abuja</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <style>{`
          html,
          body {
            margin: 0;
            padding: 0;
            min-height: 100%;
            background-color: #fcf4e9;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          html::-webkit-scrollbar,
          body::-webkit-scrollbar,
          *::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
          }

          * {
            box-sizing: border-box;
          }

          body {
            font-family: Arial, Helvetica, sans-serif;
            -webkit-font-smoothing: antialiased;
          }

          button,
          input,
          textarea,
          select {
            font: inherit;
          }

          img {
            max-width: 100%;
          }

          a {
            -webkit-tap-highlight-color: transparent;
          }

          ::selection {
            background: #a20106;
            color: #ffffff;
          }
        `}</style>
      </head>

      <body>{children}</body>
    </html>
  );
}
