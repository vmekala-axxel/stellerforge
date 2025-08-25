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
  created_at: string;
}

export interface ChatHistoryItem {
  lead_id: number;
  sender: "human" | "bot";
  message: string;
  id: number;
  timestamp: string;
}

export interface InitChatResponse {
  lead: Lead;
  is_new_lead: boolean;
}

const VITE_API_URL = import.meta.env.VITE_API_URL;

// API functions
export const api = {
  async initChat(leadId: number | null): Promise<InitChatResponse> {
    const response = await fetch(`${VITE_API_URL}/api/v1/chats/initchat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead_id: leadId }),
    });

    if (!response.ok) throw new Error('Failed to initialize chat');
    return response.json();
  },

  async sendMessage(message: string, leadId: number): Promise<string> {
    const response = await fetch(`${VITE_API_URL}/api/v1/chats/chatbot`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lead_id: leadId, message }),
    });

    if (!response.ok) throw new Error('Failed to send message');
    const data = await response.json();
    // return data.reply;    
    return data;

  },
};
