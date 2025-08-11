import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(true);

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm the Stellar Forge Corporation AI assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        isBot: false,
      };

      setMessages([...messages, newMessage]);
      setInputValue("");

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Thank you for your message. Our team will get back to you soon regarding your aerospace needs.",
          isBot: true,
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const isFirstTimeFn = async () => {
    var isExistingLocalUser = await localStorage.getItem('isExistingUser')
    var isExistingSessionUser = await sessionStorage.getItem('sessionUSer')

    if (isExistingLocalUser == null) {
      localStorage.setItem('isExistingUser', 'True')
      sessionStorage.setItem('sessionUSer','True')
      setIsFirstTime(false)
    }
    else if(isExistingSessionUser  == null){
      sessionStorage.setItem('sessionUSer','True')
      const newMessage = {
        id: messages.length + 1,
        text: "You’re still in the same conversation — feel free to continue where you left off or ask something new.",
        isBot: true,
      };
      setMessages([...messages, newMessage]);
    }
      setIsOpen(!isOpen)


  }

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => {
          isFirstTimeFn()
        }
        }
        className="fixed bottom-2 right-6 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90 z-50"
        style={{ boxShadow: "var(--glow-primary)" }}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
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
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${message.isBot
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-primary text-primary-foreground"
                        }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;