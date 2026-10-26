# Kirana Price Finder

A simple installable web app prototype for an Indian kirana shop. It supports typed item entry, browser speech recognition, product pricing, quantity-based calculations, a bill preview, print/save as PDF, and local backup/restore.

## Run locally
Open `index.html` in a browser for typing and calculation. Voice recognition and PWA install/offline features usually require a secure context (HTTPS or localhost).

## Install on Android
1. Upload the contents of this folder to a static HTTPS host (for example GitHub Pages, Netlify, or another static host).
2. Open the hosted site in Chrome on Android.
3. Open Chrome's menu and choose **Install app** or **Add to Home screen**.
4. Allow microphone access when prompted to use voice input.

## Important notes
- **Make Bill** opens the bill screen. To add a saved item, open **Products & Prices** and tap **Add** beside that item; it will be added to the current bill.
- When publishing an update, replace the site files at the same GitHub Pages address. The updated service worker refreshes cached app files while leaving the catalogue in place. Do not clear browser storage or uninstall the app.
- All catalogue and bill data is stored in this browser on this device; it is not synchronized across phones.
- Voice recognition depends on browser/device support and may require internet. Hinglish mode uses Hindi recognition as a best effort; Hindi/English mixed speech may need correction.
- Check the recognized text and the bill before charging a customer.
- Demo prices are examples only. Use **Add sample products** and edit the prices, or add your actual catalogue.
- The parser is a starter implementation and should be tested with your shop's product names, regional pronunciations, and common quantities before daily use.

