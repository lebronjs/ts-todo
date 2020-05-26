import { withStyles, ThemeProvider, createTheme, Arwes, Col, Row, Image } from "arwes";
import Wrap from "./components/Wrap";
import globalStyle from "./index.module.scss";


const styles = (theme) => ({
    root: {
        padding: [theme.padding, 0]
    },
    title: {
        textDecoration: "underline",
    },
});

const MyHeader = withStyles(styles)(({ classes, children }) => (
    <header className={classes.root}>
        <h1 className={classes.title}>{children}</h1>
    </header>
));


const myTheme = {
    color: {
        primary: {
            base: "#be26fc",
            dark: "#8e1bbd",
            light: "#c95bf6",
        },
        header: {
            base: "#fc26fa",
            dark: "#a818a7",
            light: "#f458f2",
        }
    },
};

export default function Cyberpunk() {
    return (
        <ThemeProvider theme={createTheme(myTheme)}>
            <Arwes animate background="/cyberpunk/img/background-xlarge.jpg" pattern="/cyberpunk/img/glow.png">
                <div className={globalStyle["absolute-center"]}>
                    <Wrap abc="123" className={globalStyle["flex-column-center"]}>
                        <Row>
                            <MyHeader>Hello Cyberpunk</MyHeader>
                        </Row>
                        <Row>
                            <Image animate resources="/cyberpunk/img/James.jpeg">
                                <p>The King of NBA</p>
                                <p>Lebron James</p>
                            </Image>
                        </Row>
                        <Row nested noMargin>
                            <Col s={12} m={6}>
                                1111
                            </Col>
                            <Col s={12} m={6}>
                                2222
                            </Col>
                        </Row>
                    </Wrap>
                </div>
            </Arwes>
        </ThemeProvider>
    );
}


