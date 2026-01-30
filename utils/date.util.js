export function getCurrentDate() {
  const date = new Date();

  return {
    txnDate: date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).replace(',', '')
  };
}
