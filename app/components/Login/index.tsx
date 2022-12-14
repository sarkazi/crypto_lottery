import Layout from "../Layout";
import styles from "./login.module.scss";
import { PropagateLoader } from "react-spinners";
import { useTWImports } from "../../hooks/useTWImports";
import { FC } from "react";

const Login: FC = () => {
  const { connectMyMetamask, isLoading } = useTWImports();

  return (
    <div className={styles.main}>
      <Layout className="">
        <div className={styles.content}>
          <img src="./logo.png" alt="" />
          <h1>the nikogortio</h1>
          <h2>Get starting by loggining with your MetaMask</h2>

          {isLoading ? (
            <PropagateLoader color="#ffffff" size={20} />
          ) : (
            <button onClick={connectMyMetamask} className={styles.loginBtn}>
              Login with MetaMask
            </button>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Login;
