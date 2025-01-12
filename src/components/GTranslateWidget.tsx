import { useEffect } from "react";
import "./GTranslateWidget.css";

declare global {
  interface Window {
    gtranslateSettings: {
      [key: string]: {
        languages: string[];
        wrapper_selector: string;
        native_language_names: number;
        flag_style: string;
        flag_size: number;
        horizontal_position: string;
        flags_location: string;
      };
    };
  }
}

const GTranslateWidget = () => {
  useEffect(() => {
    // Check if the widget already exists
    if (!document.querySelector(`script[data-gt-widget-id="43217984"]`)) {
      window.gtranslateSettings = window.gtranslateSettings || {};
      window.gtranslateSettings["43217984"] = {
        languages: ["en", "es", "fr", "zh-CN", "ht", "pt"],
        wrapper_selector: "#gt-mordadam-43217984",
        native_language_names: 1,
        flag_style: "2d",
        flag_size: 24,
        horizontal_position: "inline",
        flags_location: "flags/",
      };

      // Add the script only if it doesn't already exist
      const script = document.createElement("script");
      script.src = "js/gt.min.js";
      script.setAttribute("data-gt-widget-id", "43217984");
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="widget-container">
      <div
        id="gt-mordadam-43217984"
        className="gtranslate-widget-container"
      ></div>
    </div>
  );
};

export default GTranslateWidget;
