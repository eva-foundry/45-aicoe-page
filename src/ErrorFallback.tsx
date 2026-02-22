import {
  Body1,
  Button,
  Card,
  CardHeader,
  MessageBar,
  MessageBarBody,
  MessageBarTitle,
  makeStyles,
} from '@fluentui/react-components'

type ErrorFallbackProps = {
  error: Error
  resetErrorBoundary: () => void
}

const useStyles = makeStyles({
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
  },
  wrapper: {
    width: '100%',
    maxWidth: '640px',
    display: 'grid',
    rowGap: '16px',
  },
  pre: {
    margin: 0,
    whiteSpace: 'pre-wrap',
    overflowWrap: 'anywhere',
  },
})

export const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  // When encountering an error in the development mode, rethrow it and don't display the boundary.
  // The parent UI will take care of showing a more helpful dialog.
  if (import.meta.env.DEV) throw error;

  const styles = useStyles()

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <MessageBar intent="error">
          <MessageBarBody>
            <MessageBarTitle>This spark has encountered a runtime error</MessageBarTitle>
            Something unexpected happened while running the application. The error details are shown below. Contact the spark author and let them know about this issue.
          </MessageBarBody>
        </MessageBar>

        <Card>
          <CardHeader header={<Body1>Error details</Body1>} />
          <pre className={styles.pre}>{error.message}</pre>
        </Card>

        <Button appearance="primary" onClick={resetErrorBoundary}>
          Try Again
        </Button>
      </div>
    </div>
  )
}
