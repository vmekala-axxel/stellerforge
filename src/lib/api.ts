// Types
export interface Lead {
  id: number;
  name: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  designation: string | null;
  source: string | null;
  region: string | null;
  country: string | null;
  industry: string | null;
  size: string | null;
  intent: string | null;
  preferred_contact: string | null;
  score: number;
}

export interface ChatHistoryItem {
  lead_id: number;
  sender: "human" | "bot";
  message: string;
  id: number;
  timestamp: string;
}

// API functions
export const api = {
  async createLead(): Promise<number> {
    const response = await fetch('http://localhost:8000/api/v1/leads/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });

    if (!response.ok) throw new Error('Failed to create lead');
    const lead: Lead = await response.json();
    return lead.id;
  },

  async loadChatHistory(leadId: number): Promise<ChatHistoryItem[]> {
    const response = await fetch(`http://localhost:8000/api/v1/chats/lead/${leadId}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) throw new Error('Failed to load chat history');
    return response.json();
  },

  async sendMessage(message: string, leadId: number): Promise<string> {
    const response = await fetch('http://localhost:8000/api/v1/chats/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead_id: leadId, message }),
    });

    if (!response.ok) throw new Error('Failed to send message');
    const data = await response.json();
    return data.reply;
  },
};
