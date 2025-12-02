import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '@/i18n/I18nContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { X, PaperPlaneRight, Sparkle } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'
import { findBestMatch, getCategoryKnowledge } from '@/lib/eva-knowledge-base'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export function EVAAskMe() {
  const { language, t } = useI18n()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const getContextualGreeting = () => {
    const path = location.pathname
    const greetings: Record<string, { en: string; fr: string }> = {
      '/': {
        en: 'Welcome to the AI Centre of Enablement! How can I help you today?',
        fr: 'Bienvenue au Centre d\'activation de l\'IA! Comment puis-je vous aider aujourd\'hui?'
      },
      '/program-overview': {
        en: 'I see you\'re viewing the Program Overview. Would you like to know more about our services?',
        fr: 'Je vois que vous consultez l\'aperçu du programme. Souhaitez-vous en savoir plus sur nos services?'
      },
      '/how-it-works': {
        en: 'Looking at our workflow model? I can guide you through each step!',
        fr: 'Vous consultez notre modèle de flux de travail? Je peux vous guider à travers chaque étape!'
      },
      '/services': {
        en: 'Exploring our service tiers? I can help you choose the right level of support.',
        fr: 'Vous explorez nos niveaux de service? Je peux vous aider à choisir le bon niveau de soutien.'
      },
      '/intake-optimization': {
        en: 'Need help understanding the intake optimization process?',
        fr: 'Besoin d\'aide pour comprendre le processus d\'optimisation de l\'admission?'
      },
      '/use-case': {
        en: 'Reviewing the SCORM use case? I can explain each solution option.',
        fr: 'Vous examinez le cas d\'utilisation SCORM? Je peux expliquer chaque option de solution.'
      },
      '/roadmap': {
        en: 'Want to know more about our implementation phases?',
        fr: 'Vous voulez en savoir plus sur nos phases de mise en œuvre?'
      },
      '/contact': {
        en: 'Ready to get started? Let me know if you have any questions!',
        fr: 'Prêt à commencer? Faites-moi savoir si vous avez des questions!'
      }
    }

    const greeting = greetings[path] || greetings['/']
    return language === 'en' ? greeting.en : greeting.fr
  }

  const getContextualHelp = (userQuestion: string): string => {
    const path = location.pathname
    
    const bestMatch = findBestMatch(userQuestion, language, path)
    
    if (bestMatch) {
      return bestMatch
    }
    
    return language === 'en'
      ? 'I can help you with questions about our services, workflow process, support tiers, tools, intake optimization, use cases, roadmap, or how to get started. Could you provide more details about what you\'re looking for? Try asking about specific topics like "What are the service tiers?", "How does the workflow work?", "Tell me about EVA Chat", or "How do I get started?"'
      : 'Je peux vous aider avec des questions sur nos services, notre processus de flux de travail, nos niveaux de support, nos outils, l\'optimisation de l\'admission, les cas d\'utilisation, la feuille de route ou comment commencer. Pourriez-vous fournir plus de détails sur ce que vous recherchez? Essayez de poser des questions sur des sujets spécifiques comme "Quels sont les niveaux de service?", "Comment fonctionne le flux de travail?", "Parlez-moi d\'EVA Chat", ou "Comment puis-je commencer?"'
  }

  const handleOpen = () => {
    setIsOpen(true)
    if (messages.length === 0) {
      const greeting: Message = {
        id: Date.now().toString(),
        role: 'assistant',
        content: getContextualGreeting(),
        timestamp: new Date()
      }
      setMessages([greeting])
    }
  }

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getContextualHelp(input)
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const getQuickActions = () => {
    const path = location.pathname
    
    const baseActions = [
      {
        label: language === 'en' ? 'How do I get started?' : 'Comment puis-je commencer?',
        query: 'how do I get started'
      },
      {
        label: language === 'en' ? 'What are the service tiers?' : 'Quels sont les niveaux de service?',
        query: 'what are the service tiers'
      },
      {
        label: language === 'en' ? 'Explain the workflow' : 'Expliquer le flux de travail',
        query: 'explain the workflow'
      }
    ]
    
    const pathSpecificActions: Record<string, { label: { en: string; fr: string }; query: string }[]> = {
      '/program-overview': [
        {
          label: { en: 'What problem does this solve?', fr: 'Quel problème cela résout-il?' },
          query: 'what problem does this solve'
        },
        {
          label: { en: 'What are the program goals?', fr: 'Quels sont les objectifs du programme?' },
          query: 'what are the program goals'
        }
      ],
      '/how-it-works': [
        {
          label: { en: 'Tell me about Step 1', fr: 'Parlez-moi de l\'étape 1' },
          query: 'tell me about step 1'
        },
        {
          label: { en: 'How do I design prompts?', fr: 'Comment concevoir des invites?' },
          query: 'how do I design prompts'
        }
      ],
      '/services': [
        {
          label: { en: 'Which tier should I choose?', fr: 'Quel niveau dois-je choisir?' },
          query: 'which tier should I choose'
        },
        {
          label: { en: 'What is Tier 2?', fr: 'Qu\'est-ce que le niveau 2?' },
          query: 'what is tier 2'
        }
      ],
      '/intake-optimization': [
        {
          label: { en: 'Benefits of early advisory?', fr: 'Avantages des conseils précoces?' },
          query: 'benefits of early advisory'
        },
        {
          label: { en: 'When should I engage?', fr: 'Quand dois-je m\'engager?' },
          query: 'when should I engage'
        }
      ],
      '/use-case': [
        {
          label: { en: 'Tell me about Option 1', fr: 'Parlez-moi de l\'option 1' },
          query: 'tell me about option 1'
        },
        {
          label: { en: 'Which option is recommended?', fr: 'Quelle option est recommandée?' },
          query: 'which option is recommended'
        }
      ],
      '/roadmap': [
        {
          label: { en: 'What are the expected outcomes?', fr: 'Quels sont les résultats attendus?' },
          query: 'what are the expected outcomes'
        },
        {
          label: { en: 'What is the timeline?', fr: 'Quel est le calendrier?' },
          query: 'what is the timeline'
        }
      ]
    }
    
    const specificActions = pathSpecificActions[path]
    
    if (specificActions) {
      return specificActions.map(action => ({
        label: language === 'en' ? action.label.en : action.label.fr,
        query: action.query
      }))
    }
    
    return baseActions
  }

  const handleQuickAction = (query: string) => {
    setInput(query)
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        role: 'user',
        content: query,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, userMessage])
      setIsTyping(true)

      setTimeout(() => {
        const response = getContextualHelp(query)
        const assistantMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: response,
          timestamp: new Date()
        }
        setMessages(prev => [...prev, assistantMessage])
        setIsTyping(false)
      }, 800)
    }, 100)
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  scale: { duration: 0.2 }
                }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={handleOpen}
                size="lg"
                className="h-20 w-20 rounded-xl shadow-lg hover:shadow-2xl bg-white hover:bg-white px-2 border-2 border-[#2B50A2] transition-shadow duration-200 text-[#2B50A2] hover:text-[#2B50A2] font-semibold text-xs leading-tight"
                aria-label={language === 'en' ? 'Open EVA AskMe assistant' : 'Ouvrir l\'assistant EVA AskMe'}
              >
                EVA AskMe
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96"
          >
            <Card className="shadow-2xl border-accent/20">
              <CardHeader className="bg-accent text-accent-foreground p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-accent-foreground/10 p-2 rounded-full">
                      <Sparkle size={20} weight="fill" />
                    </div>
                    <CardTitle className="text-lg">
                      {language === 'en' ? 'EVA AskMe' : 'EVA AskMe'}
                    </CardTitle>
                  </div>
                  <Button
                    onClick={handleClose}
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 hover:bg-accent-foreground/10 text-accent-foreground"
                    aria-label={language === 'en' ? 'Close' : 'Fermer'}
                  >
                    <X size={20} weight="bold" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[400px] p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          'flex gap-3',
                          message.role === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.role === 'assistant' && (
                          <div className="bg-accent text-accent-foreground p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                            <Sparkle size={16} weight="fill" />
                          </div>
                        )}
                        <div
                          className={cn(
                            'rounded-lg px-4 py-2 max-w-[80%]',
                            message.role === 'user'
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted text-foreground'
                          )}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex gap-3 justify-start">
                        <div className="bg-accent text-accent-foreground p-2 rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0">
                          <Sparkle size={16} weight="fill" />
                        </div>
                        <div className="bg-muted rounded-lg px-4 py-2">
                          <div className="flex gap-1">
                            <motion.div
                              className="w-2 h-2 bg-muted-foreground rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-muted-foreground rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                            />
                            <motion.div
                              className="w-2 h-2 bg-muted-foreground rounded-full"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {messages.length === 1 && (
                  <div className="px-4 pb-3 border-t border-border pt-3">
                    <p className="text-xs text-muted-foreground mb-2">
                      {language === 'en' ? 'Quick actions:' : 'Actions rapides:'}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {getQuickActions().map((action, idx) => (
                        <Button
                          key={idx}
                          onClick={() => handleQuickAction(action.query)}
                          variant="outline"
                          size="sm"
                          className="text-xs"
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={language === 'en' ? 'Ask a question...' : 'Poser une question...'}
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSend}
                      disabled={!input.trim() || isTyping}
                      size="icon"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      aria-label={language === 'en' ? 'Send message' : 'Envoyer le message'}
                    >
                      <PaperPlaneRight size={20} weight="fill" />
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 text-center">
                    {language === 'en'
                      ? 'EVA AskMe provides contextual help and guidance'
                      : 'EVA AskMe fournit une aide contextuelle et des conseils'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
