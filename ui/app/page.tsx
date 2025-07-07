import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-xl shadow-lg">
        <CardContent className="flex flex-col gap-6 p-8">
          <h1 className="text-3xl font-bold text-center">Memorable</h1>
          <p className="text-lg text-gray-700 text-center">
            Memorable predicts the memorability and saliency of images and videos, as well as elements within them. Developed at MIT, it increases ROI for marketing and design professionals, especially in the awareness space, where predictive solutions are very scarce.
          </p>
          <Button className="mx-auto w-40" size="lg">
            Try Memorable
          </Button>
        </CardContent>
      </Card>
      <footer className="mt-8 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} Memorable. All rights reserved.
      </footer>
    </main>
  );
}
