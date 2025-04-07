
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Tradegete() {
  return (
    <main className="min-h-screen bg-black text-white p-4 font-sans">
      <header className="text-center mb-6">
        <h1 className="text-4xl font-bold tracking-wide">Tradegete</h1>
        <p className="text-gray-400 text-sm">Trend Analysis Simplified</p>
      </header>

      <section className="mb-8">
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_01&symbol=BINANCE:BTCUSDT&interval=30&theme=dark&style=1&locale=en&toolbar_bg=black&enable_publishing=false&hide_top_toolbar=false"
            width="100%"
            height="100%"
            allowFullScreen
            frameBorder="0"
          ></iframe>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        <Card className="bg-gray-900 border border-gray-700">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">📈 Trendline Analysis</h2>
            <p className="text-gray-300 text-sm">
              Auto-detecting trendlines will be displayed here. Coming soon...
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-900 border border-gray-700">
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold mb-2">🚀 Entry/Exit Signal</h2>
            <p className="text-gray-300 text-sm">
              Based on price action + volume. Signal logic in development.
            </p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-gray-500 text-xs">
        © 2025 Tradegete. Made by Chaitanya with ❤️
      </footer>
    </main>
  );
}
