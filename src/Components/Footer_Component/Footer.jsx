import React from "react";
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div >
        <p >
          Released under the MIT License.
        </p>
        <p >
          Copyright © 2015-present Rollup contributors
        </p>
      </div>
    </footer>
  );
}
