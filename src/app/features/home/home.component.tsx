import { useEffect, useState, type MouseEvent } from "react";
import HomeViewComponent from "./home.component.view";

export default function HomeComponent() {
  const email: string = "aditirekhi1999@gmail.com";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 1800);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  const handleEmailCopy = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (error) {
      console.error("Failed to copy text.");
    }
  };

  return (
    <HomeViewComponent handleEmailCopy={handleEmailCopy} copied={copied} />
  );
}
