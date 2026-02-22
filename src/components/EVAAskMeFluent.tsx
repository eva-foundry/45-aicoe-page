import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '@/i18n/I18nContext'
import { 
  Button, 
  Input, 
  makeStyles,
  tokens
} from '@fluentui/react-components'
import { 
  Dismiss24Regular, 
  Send24Regular, 
  Sparkle24Filled 
} from '@fluentui/react-icons'
import { motion, AnimatePresence } from 'framer-motion'
import { findBestMatch } from '@/lib/eva-knowledge-base'

const useStyles = makeStyles({
  floatingButton: {
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '120px',
    height: '60px',
    backgroundColor: '#AF3C43',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(175, 60, 67, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    fontSize: '13px',
    fontWeight: 600,
    transition: 'all 0.3s ease',
    zIndex: 1000,
    padding: '8px',
    lineHeight: '1.3',
    textAlign: 'center',
    ':hover': {
      backgroundColor: '#8B3035',
      transform: 'scale(1.05)',
      boxShadow: '0 6px 16px rgba(175, 60, 67, 0.4)',
    },
  },
  dialogOverlay: {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1001,
  },
  dialogContainer: {
    position: 'fixed',
    bottom: '100px',
    right: '24px',
    width: '450px',
    maxWidth: '90vw',
    height: '600px',
    maxHeight: '80vh',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1002,
  },
  dialogHeader: {
    backgroundColor: '#8B3035',
    color: '#FFFFFF',
    padding: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  headerTitle: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#FFFFFF',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  message: {
    maxWidth: '80%',
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '1.5',
    wordWrap: 'break-word',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#26374A',
    color: '#FFFFFF',
  },
  assistantMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#F8F9FA',
    color: '#26374A',
    border: '1px solid #E0E0E0',
  },
  typingIndicator: {
    alignSelf: 'flex-start',
    backgroundColor: '#F8F9FA',
    border: '1px solid #E0E0E0',
    padding: '12px 16px',
    borderRadius: '8px',
    display: 'flex',
    gap: '4px',
  },
  typingDot: {
    width: '8px',
    height: '8px',
    backgroundColor: '#535353',
    borderRadius: '50%',
    animation: 'bounce 1.4s infinite ease-in-out',
  },
  quickActions: {
    padding: '0 16px 16px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  inputContainer: {
    padding: '16px',
    borderTop: '1px solid #E0E0E0',
    display: 'flex',
    gap: '8px',
  },
  input: {
    flex: 1,
  },
})

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export function EVAAskMe() {
  const { language } = useI18n()
  const location = useLocation()
  const styles = useStyles()
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
      ? 'I can help you with questions about our services, workflow process, support tiers, tools, intake optimization, use cases, roadmap, or how to get started. Could you provide more details about what you\'re looking for?'
      : 'Je peux vous aider avec des questions sur nos services, notre processus de flux de travail, nos niveaux de support, nos outils, l\'optimisation de l\'admission, les cas d\'utilisation, la feuille de route ou comment commencer.'
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
    const currentInput = input
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getContextualHelp(currentInput)
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
    return [
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
  }

  const handleQuickAction = (query: string) => {
    setInput(query)
    setTimeout(() => handleSend(), 100)
  }

  return (
    <>
      <button
        onClick={handleOpen}
        className={styles.floatingButton}
        aria-label={language === 'en' ? 'Open EVA AskMe assistant' : 'Ouvrir l\'assistant EVA AskMe'}
      >
        <Sparkle24Filled />
        EVA AskMe
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.dialogOverlay}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />
            <motion.div
              className={styles.dialogContainer}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.dialogHeader}>
                <h2 className={styles.headerTitle}>
                  <Sparkle24Filled />
                  EVA AskMe
                </h2>
                <button onClick={handleClose} className={styles.closeButton} aria-label="Close">
                  <Dismiss24Regular />
                </button>
              </div>

              <div className={styles.messagesContainer}>
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`${styles.message} ${
                      message.role === 'user' ? styles.userMessage : styles.assistantMessage
                    }`}
                  >
                    {message.content}
                  </div>
                ))}
                {isTyping && (
                  <div className={styles.typingIndicator}>
                    <div className={styles.typingDot} style={{ animationDelay: '0s' }} />
                    <div className={styles.typingDot} style={{ animationDelay: '0.2s' }} />
                    <div className={styles.typingDot} style={{ animationDelay: '0.4s' }} />
                  </div>
                )}
              </div>

              {messages.length <= 1 && (
                <div className={styles.quickActions}>
                  {getQuickActions().map((action, index) => (
                    <Button
                      key={index}
                      size="small"
                      appearance="outline"
                      onClick={() => handleQuickAction(action.query)}
                    >
                      {action.label}
                    </Button>
                  ))}
                </div>
              )}

              <div className={styles.inputContainer}>
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={language === 'en' ? 'Type your question...' : 'Posez votre question...'}
                  className={styles.input}
                />
                <Button
                  appearance="primary"
                  icon={<Send24Regular />}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  aria-label={language === 'en' ? 'Send message' : 'Envoyer le message'}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% {
            transform: translateY(0);
          }
          30% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </>
  )
}
