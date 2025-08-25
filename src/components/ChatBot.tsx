import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLead } from "@/hooks/useLead";
import { useChat, ChatMessage } from "@/hooks/useChat";

// Components
const LoadingDots = () => (
  <div className="flex items-center gap-2">
    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
  </div>
);

const MessageBubble = ({ message }: { message: ChatMessage }) => {

  const displayText =
    typeof message.text === "string"
      ? message.text
      : message.text.reply;


  return (
    <div className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[80%] p-3 rounded-lg text-sm ${message.isBot
          ? "bg-secondary text-secondary-foreground"
          : "bg-primary text-primary-foreground"
          }`}
      >
        {displayText}
      </div>
    </div>
  )
};

const SuggestionCard = ({ suggestions }) => (
  <>
    {suggestions.map((license, idx) => (

      <Card className="bg-muted/10 border border-muted rounded-lg p-4 shadow-sm w-full max-w-md">
        <div className="text-primary font-semibold text-lg mb-1">🏭 {license.license_type}</div>
        <div className="text-muted-foreground text-sm mb-3">
          {license.duration}
        </div>

        <div className="space-y-2 text-sm text-muted-foreground">
          <div>
            <span className="font-medium text-foreground">Scope:</span>
            <span className="ml-1">{license.scope}</span>
             <span className="ml-1">Please go through this relevant information</span>
          </div>
        </div>
       
      </Card>

    ))}
  </>


);

const ChatInput = ({
  value,
  onChange,
  onSend,
  isLoading
}: {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
}) => (
  <div className="p-4 border-t border-border">
    <div className="flex gap-2">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && !isLoading && onSend()}
        placeholder="Type your message..."
        className="flex-1"
        disabled={isLoading}
      />
      <Button
        onClick={onSend}
        size="sm"
        className="px-3"
        disabled={isLoading || !value.trim()}
      >
        <Send className="h-4 w-4" />
      </Button>
    </div>
  </div>
);

// Main component
const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const hasInitialized = useRef(false);

  const { leadId, setStoredLeadId } = useLead();
  const { messages, isLoading, sendMessage, initializeChat, isInitialized } = useChat();


  const [showSuggestions, setShowSuggestions] = useState(false);

  // Initialize chat when opening for the first time
  useEffect(() => {

    if (isOpen && !hasInitialized.current) {
      hasInitialized.current = true;
      const initChat = async () => {
        const newLeadId = await initializeChat(leadId);
        if (newLeadId) {
          setStoredLeadId(newLeadId);
        }
      };
      initChat();
    }
  }, [isOpen, leadId, initializeChat, setStoredLeadId]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading || !leadId) return;

    await sendMessage(inputValue, leadId);
    setInputValue("");
  };

  const handleToggleChat = async () => {
    const isExistingLocalUser = localStorage.getItem('isExistingUser');
    const isExistingSessionUser = sessionStorage.getItem('sessionUSer');

    if (!isExistingLocalUser) {
      localStorage.setItem('isExistingUser', 'True');
      sessionStorage.setItem('sessionUSer', 'True');
      setIsFirstTime(false);
    } else if (!isExistingSessionUser) {
      sessionStorage.setItem('sessionUSer', 'True');
      // Add continuation message logic here if needed
    }

    setIsOpen(!isOpen);
  };

  const handleSuggestion = (text: string) => {
    setShowSuggestions(false);
  };


  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={handleToggleChat}
        className="fixed bottom-2 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 z-50"
        style={{ boxShadow: "var(--glow-primary)" }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Interface */}
      {isOpen && (
        <Card className="fixed bottom-28 right-6 w-96 h-96 shadow-2xl z-50 border-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-primary" />
                SFC Assistant
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-6 w-6 p-0 hover:bg-secondary"
              >
                <X className="h-4 w-4" />
              </Button>
            </CardTitle>
          </CardHeader>

          <CardContent className="p-0 flex flex-col h-full">
            {/* Messages Area */}
            <ScrollArea className="flex-1 px-4 pb-4">
              <div className="space-y-3">
                {messages.map((message) => {
                  const isBotReplyWithSuggestions =
                    typeof message.text === "object" &&
                    Array.isArray(message.text.relevant_licenses) &&
                    message.text.relevant_licenses.length > 0;
                  return (
                    <>
                      <MessageBubble key={message.id} message={message} />
                      {isBotReplyWithSuggestions && (
                        <SuggestionCard suggestions={(message.text as any).relevant_licenses} />
                      )}

                    </>
                  )
                }
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] p-3 rounded-lg text-sm bg-secondary text-secondary-foreground">
                      <LoadingDots />
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <ChatInput
              value={inputValue}
              onChange={setInputValue}
              onSend={handleSendMessage}
              isLoading={isLoading}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;