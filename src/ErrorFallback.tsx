import { Button, makeStyles, tokens, MessageBar, MessageBarBody, MessageBarTitle } from "@fluentui/react-components";
import { ErrorCircle24Regular, ArrowClockwise24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  container: {
    minHeight: '100vh',
    backgroundColor: tokens.colorNeutralBackground1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  },
  content: {
    width: '100%',
    maxWidth: '500px',
  },
  messageBar: {
    marginBottom: '24px',
  },
  errorDetails: {
    backgroundColor: tokens.colorNeutralBackground2,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    borderRadius: tokens.borderRadiusMedium,
    padding: '16px',
    marginBottom: '24px',
  },
  errorTitle: {
    fontWeight: tokens.fontWeightSemibold,
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
    marginBottom: '8px',
  },
  errorPre: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorPaletteRedForeground1,
    backgroundColor: tokens.colorNeutralBackground3,
    padding: '12px',
    borderRadius: tokens.borderRadiusSmall,
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    overflow: 'auto',
    maxHeight: '128px',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
  },
  button: {
    width: '100%',
  },
});

export const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  if (import.meta.env.DEV) throw error;

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <MessageBar 
          intent="error" 
          className={styles.messageBar}
          icon={<ErrorCircle24Regular />}
        >
          <MessageBarBody>
            <MessageBarTitle>This spark has encountered a runtime error</MessageBarTitle>
            Something unexpected happened while running the application. The error details are shown below. Contact the spark author and let them know about this issue.
          </MessageBarBody>
        </MessageBar>
        
        <div className={styles.errorDetails}>
          <div className={styles.errorTitle}>Error Details:</div>
          <pre className={styles.errorPre}>
            {error.message}
          </pre>
        </div>
        
        <Button 
          onClick={resetErrorBoundary} 
          appearance="outline"
          icon={<ArrowClockwise24Regular />}
          className={styles.button}
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}
