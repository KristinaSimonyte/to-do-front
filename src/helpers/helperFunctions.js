import { createContext } from 'react';

const UserContext = createContext();

export function formatErrorMsg(errorMsg) {
  const removedQuotes = Array.isArray(errorMsg)
    ? errorMsg[0].replaceAll('"', '')
    : errorMsg.replaceAll('"', '');
  return removedQuotes.charAt(0).toUpperCase() + removedQuotes.slice(1);
}

export function normalizeTaskDescr(description) {
  const trimmedDesc = description.trim();
  return trimmedDesc.charAt(0).toUpperCase() + trimmedDesc.slice(1);
}

export default UserContext;
