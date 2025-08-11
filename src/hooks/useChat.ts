import { useState } from 'react';
import { api } from '@/lib/api';

export interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  timestamp?: string;
}

export const useChat = (leadId: number | null) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! I'm the Stellar Forge Corporation AI assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const loadHistory = async () => {
    if (!leadId) return;
    
    try {
      const chatHistory = await api.loadChatHistory(leadId);
      const historyMessages: ChatMessage[] = chatHistory.map((item, index) => ({
        id: index + 1,
        text: item.message,
        isBot: item.sender === 'bot',
        timestamp: item.timestamp,
      }));
      setMessages(historyMessages);
    } catch (error) {
      console.error('Error loading chat history:', error);
    }
  };

  const sendMessage = async (text: string, currentLeadId: number) => {
    setIsLoading(true);
    
    try {
      // Add user message
      const userMessage: ChatMessage = {
        id: messages.length + 1,
        text,
        isBot: false,
      };
      setMessages(prev => [...prev, userMessage]);

      // Get bot response
      const botReply = await api.sendMessage(text, currentLeadId);
      
      // Add bot message
      const botMessage: ChatMessage = {
        id: messages.length + 2,
        text: botReply,
        isBot: true,
      };
      setMessages(prev => [...prev, botMessage]);

      // Reload history for consistency
      await loadHistory();
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: messages.length + 2,
        text: "Sorry, I'm having trouble connecting right now. Please try again later.",
        isBot: true,
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return { messages, isLoading, sendMessage, loadHistory };
};
