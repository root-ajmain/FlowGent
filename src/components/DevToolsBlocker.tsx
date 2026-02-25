import { useEffect } from 'react';

export default function DevToolsBlocker() {
  useEffect(() => {
    // ── Disable right-click context menu ──
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // ── Block keyboard shortcuts for DevTools ──
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === 'F12') {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+I / J / C (DevTools panels)
      if (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key.toUpperCase())) {
        e.preventDefault();
        return;
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key.toUpperCase() === 'U') {
        e.preventDefault();
        return;
      }
      // Ctrl+S (Save page)
      if (e.ctrlKey && e.key.toUpperCase() === 'S') {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+E (Network panel in some browsers)
      if (e.ctrlKey && e.shiftKey && e.key.toUpperCase() === 'E') {
        e.preventDefault();
        return;
      }
      // Ctrl+P (Print)
      if (e.ctrlKey && e.key.toUpperCase() === 'P') {
        e.preventDefault();
        return;
      }
    };

    // ── Disable text selection and drag ──
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
    };

    // ── Disable copy / cut ──
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
    };

    // ── DevTools open detection via debugger timing ──
    const devToolsCheck = setInterval(() => {
      const start = performance.now();
      // eslint-disable-next-line no-debugger
      debugger;
      const end = performance.now();
      if (end - start > 100) {
        // DevTools likely open — clear the page (optional nuclear option)
        document.body.innerHTML = '';
        window.location.href = '/';
      }
    }, 4000);

    // ── Console clearing loop to deter casual inspection ──
    const consoleClear = setInterval(() => {
      console.clear();
    }, 2000);

    // ── Override console methods ──
    const noop = () => {};
    const originalLog = console.log;
    const originalWarn = console.warn;
    const originalError = console.error;
    const originalInfo = console.info;
    const originalDebug = console.debug;
    console.log = noop;
    console.warn = noop;
    console.error = noop;
    console.info = noop;
    console.debug = noop;

    // ── Attach listeners ──
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCopy);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCopy);
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      clearInterval(devToolsCheck);
      clearInterval(consoleClear);
      console.log = originalLog;
      console.warn = originalWarn;
      console.error = originalError;
      console.info = originalInfo;
      console.debug = originalDebug;
    };
  }, []);

  return null;
}
