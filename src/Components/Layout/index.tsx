import styles from "./Layout.module.css"
import {PropsWithChildren} from "react";

/**
 * Simple layout
 */
function Layout(p: PropsWithChildren) {

    return (
        <div className={styles.app}>
            <div className={styles.gridContainer}>
                {p.children}
            </div>
        </div>
    )
}

export default Layout