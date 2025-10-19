import React, { useEffect, useState } from "react";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstall, setShowInstall] = useState(false);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    // Detect iOS devices
    const userAgent = window.navigator.userAgent.toLowerCase();
    setIsIos(/iphone|ipad|ipod/.test(userAgent));

    // Detect if already in standalone mode
    const inStandaloneMode = ('standalone' in window.navigator) && window.navigator.standalone;

    // Show iOS banner if not standalone
    if (/iphone|ipad|ipod/.test(userAgent) && !inStandaloneMode) {
      setShowInstall(true);
    }

    // Android / Chrome: beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      alert("📱 Install Texterio on your iPhone: tap the Share button → Add to Home Screen.");
      return;
    }

    if (!deferredPrompt) return;

    deferredPrompt.prompt(); // Show browser install dialog

    const { outcome } = await deferredPrompt.userChoice;
    console.log("User response:", outcome);

    setDeferredPrompt(null);
    setShowInstall(false);
  };

  if (!showInstall) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "12px 20px",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        zIndex: 1000,
        textAlign: "center"
      }}
    >
      <p className="mb-2">
        {isIos
          ? "📱 Install Texterio on your iPhone: tap the Share button → Add to Home Screen."
          : "📲 Install this app on your device?"}
      </p>
      {!isIos && (
        <button className="btn btn-primary me-2" onClick={handleInstallClick}>
          Install
        </button>
      )}
      <button className="btn btn-secondary" onClick={() => setShowInstall(false)}>
        Later
      </button>
    </div>
  );
}
