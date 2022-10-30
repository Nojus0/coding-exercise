import styles from "./Layout.module.css"
import {PropsWithChildren} from "react";

/**
 * Simple layout
 */
function Layout(p: PropsWithChildren) {

    return (
        <div className={styles.layout}>
            <div className={styles.clampedCenter}>
                {p.children}
            </div>
        </div>
    )
}

export default Layout