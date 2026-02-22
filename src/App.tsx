import { Body1, Card, CardHeader, makeStyles, Title2 } from '@fluentui/react-components'

const useStyles = makeStyles({
    page: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
    },
    card: {
        width: '100%',
        maxWidth: '720px',
    },
})

function App() {
    const styles = useStyles()

    return (
        <main className={styles.page}>
            <Card className={styles.card}>
                <CardHeader
                    header={<Title2>React + Fluent UI Migration Baseline</Title2>}
                    description={<Body1>Legacy shadcn/radix scaffold has been removed from runtime.</Body1>}
                />
            </Card>
        </main>
    )
}

export default App