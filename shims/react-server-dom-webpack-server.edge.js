// Minimal shim for react-server-dom-webpack/server.edge
// This file exists to satisfy imports during builds where a full implementation
// is not required. Exports a minimal no-op interface.

module.exports = {
  createFromReadableStream: () => {
    throw new Error('react-server-dom-webpack server.edge shim: not implemented');
  },
  isClientReference: () => false
};
