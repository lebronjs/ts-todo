import { withStyles } from "arwes";
import cx from "classnames";

const styles = () => ({
    root: {
        margin: "0 auto",
        maxWidth: 800,
    },
});

const Wrap = (props) => {
    console.log(props.abc)
    const { theme, classes, className, children, ...etc } = props;
    const cls = cx(classes.root, className);
    return (
        <div className={cls} {...etc}>
            {children}
        </div>
    );
};

export default withStyles(styles)(Wrap);
