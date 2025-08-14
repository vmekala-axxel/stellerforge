import { useState, useEffect } from 'react';

export const useLead = () => {
  const [leadId, setLeadId] = useState<number | null>(null);

  useEffect(() => {
    const storedLeadId = localStorage.getItem('lead_id');
    if (storedLeadId) {
      setLeadId(parseInt(storedLeadId));
    }
  }, []);

  const setStoredLeadId = (newLeadId: number) => {
    setLeadId(newLeadId);
    localStorage.setItem('lead_id', newLeadId.toString());
  };

  return { leadId, setStoredLeadId };
};
