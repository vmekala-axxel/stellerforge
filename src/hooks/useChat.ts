import { useState, useRef } from 'react';
import { api, ChatHistoryItem } from '@/lib/api';

export interface ChatMessage {
  id: number;
  text: string | { reply: string; [key: string]: any };
  isBot: boolean;
  timestamp?: string;
}

export const useChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hello! I'm the GM Freezone AI assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const initRef = useRef(false);

  const initializeChat = async (leadId: number | null) => {
    if (isInitialized || initRef.current) return;
    
    try {
      initRef.current = true;
      setIsLoading(true);
      
      const response = await api.initChat(leadId);
      
      // For new leads, keep the default welcome message
      // For existing leads, we might want to show a continuation message
      if (!response.is_new_lead) {
        const continuationMessage: ChatMessage = {
          id: 2,
          text: "Welcome back! How can I help you today?",
          isBot: true,
        };
        setMessages([continuationMessage]);
      }
      
      setIsInitialized(true);
      return response.lead.id;
    } catch (error) {
      console.error('Error initializing chat:', error);
      // Keep default welcome message on error
      setIsInitialized(true);
      return null;
    } finally {
      setIsLoading(false);
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

  return { messages, isLoading, sendMessage, initializeChat, isInitialized };
};
