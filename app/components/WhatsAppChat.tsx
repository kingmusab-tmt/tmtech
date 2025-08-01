// app/components/WhatsAppChat.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Box, IconButton, Tooltip, Typography, Paper } from "@mui/material";
import {
  WhatsApp as WhatsAppIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { keyframes } from "@mui/system";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Replace with your company's WhatsApp number (include country code)
  const phoneNumber = "+2348162552901"; // Example Nigerian number
  const message = "Hello! I would like to inquire about your services.";

  // Hide tooltip after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    // WhatsApp URL format: https://wa.me/phoneNumber?text=urlencodedtext
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
    setIsOpen(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* WhatsApp Chat Button */}
      <Box
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 1000,
        }}
      >
        {isOpen ? (
          // Chat Popup
          <Paper
            sx={{
              width: 300,
              mb: 2,
              p: 2,
              position: "relative",
              animation: `${bounce} 0.5s ease`,
            }}
          >
            <IconButton
              onClick={() => setIsOpen(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "text.secondary",
              }}
            >
              <CloseIcon sx={{ fontSize: 20 }} />
            </IconButton>

            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Chat with us
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Have questions? We're here to help! Click below to start a
              conversation on WhatsApp.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 2 }}>
              <WhatsAppIcon sx={{ color: "#25D366" }} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                +234 8162552901
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
              <IconButton
                onClick={handleClick}
                sx={{
                  backgroundColor: "#25D366",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#128C7E",
                  },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Paper>
        ) : null}

        {/* Main WhatsApp Button */}
        <Tooltip
          title={showTooltip ? "Chat with us on WhatsApp" : ""}
          placement="left"
          open={showTooltip}
        >
          <IconButton
            onClick={toggleChat}
            sx={{
              width: 60,
              height: 60,
              backgroundColor: "#25D366",
              color: "white",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              "&:hover": {
                backgroundColor: "#128C7E",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.2)",
              },
              animation: showTooltip ? `${bounce} 2s infinite` : "none",
              transition: "all 0.3s ease",
            }}
          >
            <WhatsAppIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
};

export default WhatsAppChat;
