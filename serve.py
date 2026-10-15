#!/usr/bin/env python3
"""
Aurelia Palace — Zero-Dependency Local Live Server
Starts an HTTP server to preview all templates and the Master Showcase Hub.
"""

import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

def run_server():
    port = PORT
    for p in [8080, 8000, 3000, 5000, 8888]:
        try:
            with socketserver.TCPServer(("", p), Handler) as httpd:
                url = f"http://localhost:{p}"
                print("=" * 64)
                print("🏰 AURELIA PALACE — MASTER LIVE SHOWCASE SERVER")
                print("=" * 64)
                print(f"\n✨ Serving all templates from: {DIRECTORY}")
                print(f"🌐 Live URL: \033[1;32m{url}\033[0m")
                print("\nOpening your default browser...")
                print("Press Ctrl+C to stop the server.\n")
                print("-" * 64)
                try:
                    webbrowser.open(url)
                except Exception:
                    pass
                httpd.serve_forever()
        except OSError:
            continue
    print(f"Error: Could not bind to any port. Please free port {PORT} and try again.")

if __name__ == "__main__":
    try:
        run_server()
    except KeyboardInterrupt:
        print("\n\nServer stopped. Thank you for visiting Aurelia Palace!")
        sys.exit(0)
