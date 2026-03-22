import React from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

type GardenButtonProps = {
  onOpen: () => void;
  className?: string;
};

type GardenModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export const GardenButton = ({ onOpen, className }: GardenButtonProps) => {
  return (
    <Button
      type="button"
      onClick={onOpen}
      className={className}
      aria-label="Open garden"
    >
      Garden
    </Button>
  );
};

export const GardenModal = ({ isOpen, onOpenChange }: GardenModalProps) => {
  const [processing, setProcessing] = React.useState(false);
  const [keyValue, setKeyValue] = React.useState("");
  const [error, setError] = React.useState("");
  const [spinCount, setSpinCount] = React.useState(0);
  const [shouldRender, setShouldRender] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const gardenKey = import.meta.env.VITE_GARDEN_KEY;
  const gardenUrl = import.meta.env.VITE_GARDEN_URL;

  const reset = () => {
    setSpinCount((prev) => prev + 1);
    setError("");
    setKeyValue("");
  };

  const handleSubmit = () => {
    const submittedKey = keyValue.trim();
    setProcessing(true);
    setError("");

    try {
      if (!gardenKey || !gardenUrl) {
        setError("Garden is not configured");
        setKeyValue("");
      } else if (submittedKey === gardenKey) {
        window.open(gardenUrl, "_blank");
        onOpenChange(false);
      } else {
        setError("Invalid key");
        setKeyValue("");
      }
    } catch (caughtError) {
      console.error(caughtError);
      setError("Something went wrong");
    } finally {
      setProcessing(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
      return;
    }

    if (!shouldRender) return;

    setIsClosing(true);
    const timer = window.setTimeout(() => {
      setShouldRender(false);
      setIsClosing(false);
      reset();
    }, 220);

    return () => window.clearTimeout(timer);
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div
      className={`absolute right-0 top-16 md:right-1/6 w-full max-w-xs mx-auto bg-background border border-border rounded-lg shadow-lg p-6 z-50 transform-gpu will-change-transform ${
        isClosing
          ? "animate-out fade-out-0 zoom-out-95 slide-out-to-top-2 duration-200"
          : "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-primary">Hello, Adnan</p>
          <button
            type="button"
            aria-label="Spin icon"
            onClick={reset}
            className="text-primary hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
          >
            <RefreshCw
              key={spinCount}
              className={spinCount > 0 ? "animate-[spin_700ms_linear_1]" : ""}
            />
          </button>
        </div>
        <p className="text-sm text-muted-foreground">
          {error ? "You are not Adnan" : "Enter your key to access your garden"}
        </p>

        <input
          type="text"
          disabled={!!error}
          value={keyValue}
          onChange={(e) => setKeyValue(e.target.value)}
          placeholder="Enter your key"
          className="w-full px-3 py-2 border border-border rounded-md bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Button
          type="submit"
          disabled={processing || !keyValue.trim() || !!error}
          onClick={handleSubmit}
          className="w-full mt-2"
        >
          {processing ? "processing" : error ? "Will not procces!" : "Enter"}
        </Button>
      </div>
    </div>
  );
};
