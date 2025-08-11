import { useState, useEffect } from 'react';
import { api } from '@/lib/api';

export const useLead = () => {
  const [leadId, setLeadId] = useState<number | null>(null);

  useEffect(() => {
    const storedLeadId = localStorage.getItem('lead_id');
    if (storedLeadId) {
      setLeadId(parseInt(storedLeadId));
    }
  }, []);

  const createNewLead = async () => {
    const newLeadId = await api.createLead();
    setLeadId(newLeadId);
    localStorage.setItem('lead_id', newLeadId.toString());
    return newLeadId;
  };

  return { leadId, createNewLead };
};
