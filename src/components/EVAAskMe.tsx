import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '@/i18n/I18nContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { X, ChatCircleDots, PaperPlaneRight, Sparkle } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

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
    const lowerQ = userQuestion.toLowerCase()
    const path = location.pathname

    if (lowerQ.includes('prompt') || lowerQ.includes('edit') || lowerQ.includes('capability')) {
      return language === 'en'
        ? 'To add a new AI capability: 1) Start by exploring the "How It Works" page to understand our 7-step workflow. 2) Navigate to "Services & Tiers" to choose your support level. 3) Then visit "Contact" to submit your request. Our team will guide you through the prompt development process.'
        : 'Pour ajouter une nouvelle capacité d\'IA: 1) Commencez par explorer la page "Comment ça fonctionne" pour comprendre notre flux de travail en 7 étapes. 2) Accédez à "Services et niveaux" pour choisir votre niveau de support. 3) Ensuite, visitez "Contact" pour soumettre votre demande. Notre équipe vous guidera tout au long du processus de développement de prompts.'
    }

    if (lowerQ.includes('tier') || lowerQ.includes('support') || lowerQ.includes('service')) {
      return language === 'en'
        ? 'We offer three service tiers: 1) Self-Service (guides and templates), 2) Guided Support (collaborative development), and 3) Full Service (end-to-end development). Visit the "Services & Tiers" page to compare options and find the best fit for your needs.'
        : 'Nous offrons trois niveaux de service: 1) Libre-service (guides et modèles), 2) Support guidé (développement collaboratif), et 3) Service complet (développement de bout en bout). Visitez la page "Services et niveaux" pour comparer les options et trouver la meilleure solution pour vos besoins.'
    }

    if (lowerQ.includes('workflow') || lowerQ.includes('process') || lowerQ.includes('steps')) {
      return language === 'en'
        ? 'Our AI workflow follows 7 key steps: Discover → Define Use Case → Select Tools → Design Prompts & Workflow → Test & Refine → Document & Share → Plan Next Steps. Click on "How It Works" in the navigation to see detailed information about each phase.'
        : 'Notre flux de travail IA suit 7 étapes clés: Découvrir → Définir le cas d\'utilisation → Sélectionner les outils → Concevoir les prompts et le flux → Tester et affiner → Documenter et partager → Planifier les prochaines étapes. Cliquez sur "Comment ça fonctionne" dans la navigation pour voir des informations détaillées sur chaque phase.'
    }

    if (lowerQ.includes('start') || lowerQ.includes('begin') || lowerQ.includes('contact')) {
      return language === 'en'
        ? 'To get started: Visit our "Contact" page where you can reach out to our team. We recommend first reviewing the "Program Overview" to understand what we offer, then "How It Works" to see our process. Our team will help you identify the right service tier for your needs.'
        : 'Pour commencer: Visitez notre page "Contact" où vous pouvez contacter notre équipe. Nous recommandons d\'abord de consulter l\'"Aperçu du programme" pour comprendre ce que nous offrons, puis "Comment ça fonctionne" pour voir notre processus. Notre équipe vous aidera à identifier le bon niveau de service pour vos besoins.'
    }

    if (lowerQ.includes('tool') || lowerQ.includes('eva') || lowerQ.includes('copilot')) {
      return language === 'en'
        ? 'We support ESDC-approved enterprise AI tools including EVA Chat (for document analysis and content generation) and Microsoft Copilot 365 (integrated across Microsoft apps). The right tool depends on your use case complexity. Visit "How It Works" to learn about tool selection in Step 3.'
        : 'Nous supportons les outils d\'IA d\'entreprise approuvés par EDSC, notamment EVA Chat (pour l\'analyse de documents et la génération de contenu) et Microsoft Copilot 365 (intégré aux applications Microsoft). Le bon outil dépend de la complexité de votre cas d\'utilisation. Visitez "Comment ça fonctionne" pour en savoir plus sur la sélection d\'outils à l\'étape 3.'
    }

    if (lowerQ.includes('intake') || lowerQ.includes('optimize') || lowerQ.includes('submission')) {
      return language === 'en'
        ? 'Our Intake Optimization service helps improve your project submission before it reaches formal intake. We clarify scope, assess complexity, and ensure you\'re using the right tools. This increases approval rates and reduces rework. Check the "Intake Optimization" page for more details.'
        : 'Notre service d\'optimisation de l\'admission aide à améliorer votre soumission de projet avant qu\'elle n\'atteigne l\'admission formelle. Nous clarifions la portée, évaluons la complexité et nous assurons que vous utilisez les bons outils. Cela augmente les taux d\'approbation et réduit le retravail. Consultez la page "Optimisation de l\'admission" pour plus de détails.'
    }

    if (path === '/program-overview') {
      return language === 'en'
        ? 'The Program Overview page explains our mission, goals, and how we help ESDC employees leverage AI effectively. Key benefits include structured support, improved AI literacy, and access to early advisory services. Would you like to know about specific aspects of the program?'
        : 'La page Aperçu du programme explique notre mission, nos objectifs et comment nous aidons les employés d\'EDSC à exploiter efficacement l\'IA. Les avantages clés incluent un soutien structuré, une amélioration de la littératie en IA et l\'accès à des services consultatifs précoces. Souhaitez-vous en savoir plus sur des aspects spécifiques du programme?'
    }

    if (path === '/use-case') {
      return language === 'en'
        ? 'The SCORM to Storyboard use case demonstrates four solution approaches: Manual Prompts, Low-Code Workflow, Multi-Component Custom, and Integrated Platform. Each has different complexity, cost, and capabilities. I can explain the pros and cons of each option if you\'d like.'
        : 'Le cas d\'utilisation SCORM vers Storyboard démontre quatre approches de solution: Prompts manuels, Flux de travail low-code, Multi-composants personnalisé et Plateforme intégrée. Chacun a une complexité, un coût et des capacités différents. Je peux expliquer les avantages et inconvénients de chaque option si vous le souhaitez.'
    }

    if (path === '/roadmap') {
      return language === 'en'
        ? 'Our roadmap includes three phases: Phase 1 (Pilot & Foundation) with early adopter programs, Phase 2 (Scale & Integration) with expanded service tiers, and Phase 3 (Optimization & Innovation) with advanced automation. Each phase builds on the previous one.'
        : 'Notre feuille de route comprend trois phases: Phase 1 (Pilote et Fondation) avec des programmes d\'adopteurs précoces, Phase 2 (Échelle et Intégration) avec des niveaux de service élargis, et Phase 3 (Optimisation et Innovation) avec une automatisation avancée. Chaque phase s\'appuie sur la précédente.'
    }

    return language === 'en'
      ? 'I can help you with questions about our services, workflow process, support tiers, tools, or how to get started. Could you provide more details about what you\'re looking for?'
      : 'Je peux vous aider avec des questions sur nos services, notre processus de flux de travail, nos niveaux de support, nos outils ou comment commencer. Pourriez-vous fournir plus de détails sur ce que vous recherchez?'
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

  const quickActions = [
    {
      label: language === 'en' ? 'How do I get started?' : 'Comment puis-je commencer?',
      query: 'how do I get started'
    },
    {
      label: language === 'en' ? 'What services do you offer?' : 'Quels services offrez-vous?',
      query: 'what services do you offer'
    },
    {
      label: language === 'en' ? 'Explain the workflow' : 'Expliquer le flux de travail',
      query: 'explain the workflow'
    }
  ]

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
            <Button
              onClick={handleOpen}
              size="lg"
              className="h-14 w-14 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground"
              aria-label={language === 'en' ? 'Open EVA AskMe assistant' : 'Ouvrir l\'assistant EVA AskMe'}
            >
              <ChatCircleDots size={28} weight="fill" />
            </Button>
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
                      {quickActions.map((action, idx) => (
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
